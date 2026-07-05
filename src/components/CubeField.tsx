import React, { useRef, useEffect, useState } from 'react';

/**
 * CubeField — ambient 3D wireframe cube field that reacts to the cursor.
 * Cubes near the pointer expand across all three dimensions and rotate,
 * then breathe back to rest — like a living, exhaling grid of glass boxes.
 */

interface CubeData {
  id: number;
  x: number; // % position
  y: number; // % position
  baseSize: number;
  hue: string;
  depth: number; // parallax factor 0..1
  phase: number;
}

const HUES = ['#38bdf8', '#818cf8', '#22d3ee', '#a78bfa', '#2dd4bf'];

const Cube: React.FC<{
  cube: CubeData;
  pointer: { x: number; y: number };
  scroll: number;
}> = ({ cube, pointer, scroll }) => {
  const ref = useRef<HTMLDivElement>(null);
  const state = useRef({ size: cube.baseSize, rot: 0, opacity: 0.12 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      const el = ref.current;
      if (!el) {
        raf.current = requestAnimationFrame(animate);
        return;
      }

      // distance from pointer in viewport space
      const cx = (cube.x / 100) * window.innerWidth;
      const cy = (cube.y / 100) * window.innerHeight + scroll * cube.depth * 0.15;
      const dx = pointer.x - cx;
      const dy = pointer.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const radius = 340;
      const influence = Math.max(0, 1 - dist / radius); // 0..1

      // breathing baseline + pointer expansion
      const t = performance.now() * 0.001;
      const breathe = Math.sin(t * 0.8 + cube.phase) * 0.12 + 1;

      const targetSize = cube.baseSize * breathe * (1 + influence * 2.4);
      const targetRot = influence * 220 + Math.sin(t * 0.4 + cube.phase) * 25;
      const targetOpacity = 0.08 + influence * 0.5;

      // easing
      state.current.size += (targetSize - state.current.size) * 0.12;
      state.current.rot += (targetRot - state.current.rot) * 0.09;
      state.current.opacity += (targetOpacity - state.current.opacity) * 0.1;

      const s = state.current.size;
      const half = s / 2;
      const py = -scroll * cube.depth * 0.15;

      el.style.transform = `translate3d(0, ${py}px, 0) rotateX(${state.current.rot}deg) rotateY(${state.current.rot * 1.3}deg)`;
      el.style.width = `${s}px`;
      el.style.height = `${s}px`;
      el.style.opacity = `${state.current.opacity}`;

      // update face translate distances
      const faces = el.querySelectorAll<HTMLElement>('[data-face]');
      faces.forEach((f) => {
        const type = f.dataset.face;
        switch (type) {
          case 'front': f.style.transform = `translateZ(${half}px)`; break;
          case 'back': f.style.transform = `rotateY(180deg) translateZ(${half}px)`; break;
          case 'right': f.style.transform = `rotateY(90deg) translateZ(${half}px)`; break;
          case 'left': f.style.transform = `rotateY(-90deg) translateZ(${half}px)`; break;
          case 'top': f.style.transform = `rotateX(90deg) translateZ(${half}px)`; break;
          case 'bottom': f.style.transform = `rotateX(-90deg) translateZ(${half}px)`; break;
        }
      });

      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [cube, pointer, scroll]);

  const faceStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    border: `1px solid ${cube.hue}`,
    background: `${cube.hue}0d`,
    boxShadow: `inset 0 0 18px ${cube.hue}22`,
  };

  return (
    <div
      className="absolute"
      style={{
        left: `${cube.x}%`,
        top: `${cube.y}%`,
        perspective: '900px',
      }}
    >
      <div
        ref={ref}
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {(['front', 'back', 'right', 'left', 'top', 'bottom'] as const).map((f) => (
          <div key={f} data-face={f} style={faceStyle} />
        ))}
      </div>
    </div>
  );
};

export const CubeField: React.FC<{ density?: number }> = ({ density = 14 }) => {
  const [pointer, setPointer] = useState({ x: -1000, y: -1000 });
  const [scroll, setScroll] = useState(0);
  const [cubes] = useState<CubeData[]>(() =>
    Array.from({ length: density }, (_, i) => ({
      id: i,
      x: Math.random() * 96 + 2,
      y: Math.random() * 92 + 4,
      baseSize: 26 + Math.random() * 46,
      hue: HUES[i % HUES.length],
      depth: 0.3 + Math.random() * 0.7,
      phase: Math.random() * Math.PI * 2,
    }))
  );

  useEffect(() => {
    const move = (e: PointerEvent) => setPointer({ x: e.clientX, y: e.clientY });
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener('pointermove', move);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {cubes.map((c) => (
        <Cube key={c.id} cube={c} pointer={pointer} scroll={scroll} />
      ))}
    </div>
  );
};
