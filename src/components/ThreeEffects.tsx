import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export const FloatingCube: React.FC<{ color?: string; delay?: number }> = ({
  color = "indigo",
  delay = 0,
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotateX: [0, 360],
        rotateY: [0, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      className="perspective-1000 w-16 h-16 opacity-20 pointer-events-none"
    >
      <div className="relative w-full h-full preserve-3d">
        <div
          className={`absolute inset-0 border border-${color}-500 bg-${color}-500/10`}
          style={{ transform: "translateZ(32px)" }}
        ></div>
        <div
          className={`absolute inset-0 border border-${color}-500 bg-${color}-500/10`}
          style={{ transform: "rotateY(90deg) translateZ(32px)" }}
        ></div>
        <div
          className={`absolute inset-0 border border-${color}-500 bg-${color}-500/10`}
          style={{ transform: "rotateY(180deg) translateZ(32px)" }}
        ></div>
        <div
          className={`absolute inset-0 border border-${color}-500 bg-${color}-500/10`}
          style={{ transform: "rotateY(-90deg) translateZ(32px)" }}
        ></div>
        <div
          className={`absolute inset-0 border border-${color}-500 bg-${color}-500/10`}
          style={{ transform: "rotateX(90deg) translateZ(32px)" }}
        ></div>
        <div
          className={`absolute inset-0 border border-${color}-500 bg-${color}-500/10`}
          style={{ transform: "rotateX(-90deg) translateZ(32px)" }}
        ></div>
      </div>
    </motion.div>
  );
};
