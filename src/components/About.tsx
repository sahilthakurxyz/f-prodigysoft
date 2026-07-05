import React from 'react';
import { useReveal } from '../hooks/useReveal';

const VALUES = [
  { t: 'Honesty Over Hype', b: "We tell clients what's actually possible, not what sounds good in a pitch." },
  { t: 'Quality as a Default', b: 'Clean code, proper documentation, tested systems — not corners cut for speed.' },
  { t: 'Long-Term Thinking', b: 'We build software meant to last years, not just survive a demo.' },
  { t: 'Accountability', b: 'If something breaks, we own it and fix it — no disappearing contractors.' },
];

export const About: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="relative z-10 py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-14">
          {/* Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="reveal">
              <span className="font-mono text-xs text-teal-400 tracking-[0.2em] uppercase">Our Story</span>
              <h2 className="font-display font-800 text-white text-3xl sm:text-5xl tracking-tight mt-4 leading-[1.1]">
                Engineering software from Jammu,
                <span className="font-serif-display italic font-400 text-slate-300"> for everyone.</span>
              </h2>
            </div>

            <div className="reveal space-y-5 text-slate-400 font-alt leading-relaxed">
              <p>
                ProdigySoft started with a straightforward observation: businesses and government
                institutions across Jammu and beyond were either underserved by local technology
                providers, or overpaying for generic software from far-away vendors who never understood
                their actual context.
              </p>
              <p>
                We set out to change that — combining the technical depth of top-tier software
                engineering with the accountability and relationship-first approach of a local,
                invested team.
              </p>
              <p className="text-slate-300">
                Today, ProdigySoft works across AI integration, custom software, and full-stack
                application development — serving private businesses that need to move fast, and
                government bodies that need to move right.
              </p>
            </div>

            {/* Mission / Vision */}
            <div className="reveal grid sm:grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="font-mono text-[11px] text-teal-400 uppercase tracking-widest mb-3">Mission</p>
                <p className="text-slate-300 font-alt text-sm leading-relaxed">
                  To build reliable, intelligent, and genuinely useful software — for businesses that
                  want to grow, and institutions that serve the public.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <p className="font-mono text-[11px] text-indigo-400 uppercase tracking-widest mb-3">Vision</p>
                <p className="text-slate-300 font-alt text-sm leading-relaxed">
                  To become the most trusted software engineering partner in the region — known for
                  technical excellence, transparency, and long-term accountability.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="lg:col-span-5">
            <div className="reveal lg:sticky lg:top-28 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent p-8">
              <h3 className="font-display font-700 text-white text-xl mb-2">Our Values</h3>
              <p className="text-slate-500 font-alt text-sm mb-6">What sets us apart, in practice.</p>
              <div className="space-y-1">
                {VALUES.map((v, i) => (
                  <div key={v.t} className="py-4 border-b border-white/[0.06] last:border-0 group">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif-display italic text-teal-400/80 text-lg">{i + 1}</span>
                      <div>
                        <h4 className="font-display font-600 text-white text-sm group-hover:text-teal-200 transition-colors">{v.t}</h4>
                        <p className="text-slate-400 font-alt text-xs mt-1 leading-relaxed">{v.b}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
