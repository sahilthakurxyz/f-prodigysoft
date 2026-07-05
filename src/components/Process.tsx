import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const STEPS = [
  { icon: Search, k: 'Discover', b: 'We understand your problem before proposing a solution.' },
  { icon: PenTool, k: 'Design', b: 'Architecture and UX planned around real usage, not assumptions.' },
  { icon: Code2, k: 'Develop', b: 'Agile builds with visible progress at every stage.' },
  { icon: Rocket, k: 'Deploy & Support', b: 'We stay with you post-launch — not just until invoice.' },
];

export const Process: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="process" ref={ref} className="relative z-10 py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl mb-16">
          <span className="font-mono text-xs text-teal-400 tracking-[0.2em] uppercase">How We Work</span>
          <h2 className="font-display font-800 text-white text-3xl sm:text-5xl tracking-tight mt-4">
            A process you can <span className="font-serif-display italic font-400 text-slate-300">actually see.</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-6">
          {/* connecting line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {STEPS.map((s, i) => (
            <div key={s.k} className="reveal relative group">
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#0a1020] border border-white/10 flex items-center justify-center mb-6 group-hover:border-teal-400/40 group-hover:-translate-y-1 transition-all duration-400">
                <s.icon className="w-6 h-6 text-teal-300" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-teal-400 text-[#070b16] text-[11px] font-mono font-700 flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h4 className="font-display font-700 text-white text-lg">{s.k}</h4>
              <p className="text-slate-400 font-alt text-sm mt-2 leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
