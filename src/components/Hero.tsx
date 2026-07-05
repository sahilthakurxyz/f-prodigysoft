import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Cpu, Boxes, Building2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (topic?: string) => void;
}

const THINKING_WORDS = ['Thinks', 'Scales', 'Delivers', 'Adapts', 'Endures'];

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % THINKING_WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Ambient radial light — deliberately off-center, not a generic centered glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-teal-500/15 via-sky-600/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/15 to-transparent blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Location eyebrow */}
            <div className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-400/15 text-teal-300 text-[11px] font-alt font-600">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                Jammu, J&amp;K
              </span>
              <span className="text-xs text-slate-400 font-alt">Software engineering, from Jammu to the world</span>
            </div>

            {/* Headline with rotating verb + serif accent for contrast */}
            <h1 className="font-display font-800 text-white tracking-tight leading-[1.05] text-[2.6rem] sm:text-6xl lg:text-[4.4rem]">
              Building Software <br className="hidden sm:block" />
              That{' '}
              <span className="relative inline-block align-baseline">
                <span
                  key={wordIndex}
                  className="text-gradient-teal inline-block"
                  style={{ animation: 'revealUp 0.5s cubic-bezier(0.16,1,0.3,1)' }}
                >
                  {THINKING_WORDS[wordIndex]}
                </span>
              </span>
              ,<br className="hidden sm:block" />
              <span className="font-serif-display italic font-400 text-slate-200/90 text-[2.4rem] sm:text-5xl lg:text-[3.8rem]">
                and actually delivers.
              </span>
            </h1>

            <p className="text-slate-300/90 text-base sm:text-lg max-w-xl leading-relaxed font-alt">
              ProdigySoft crafts AI-integrated applications, custom software, and full-stack digital
              products — for businesses that need to move fast, and government institutions that need
              to move right.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation('Start Your Project')}
                className="group px-7 py-4 rounded-full bg-white text-[#070b16] font-alt font-600 text-sm flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
              >
                Start Your Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => handleScroll('#services')}
                className="px-7 py-4 rounded-full bg-white/[0.03] border border-white/12 text-white font-alt font-500 text-sm hover:bg-white/[0.07] transition-colors"
              >
                View Our Work
              </button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/[0.06]">
              {[
                { icon: Cpu, label: 'AI & LLM Integration' },
                { icon: Boxes, label: 'Full-Stack Development' },
                { icon: Building2, label: 'Enterprise & Government Ready' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs font-alt text-slate-400">
                  <item.icon className="w-4 h-4 text-teal-400/80" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — a floating "intelligence" panel that echoes the cube field */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] p-[1px] bg-gradient-to-br from-teal-400/40 via-white/5 to-indigo-500/40">
              <div className="rounded-[27px] bg-[#0a1020]/80 backdrop-blur-xl p-6 space-y-5 overflow-hidden">
                {/* header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    prodigy.intelligence
                  </div>
                  <Sparkles className="w-4 h-4 text-teal-300" />
                </div>

                {/* pseudo AI workflow lines */}
                <div className="space-y-2.5 font-mono text-[11px]">
                  {[
                    { t: 'Ingesting business workflow…', c: 'text-slate-400' },
                    { t: '✓ Mapped 12 manual processes → automation', c: 'text-teal-300' },
                    { t: '✓ Document intelligence layer attached', c: 'text-sky-300' },
                    { t: '✓ Deployed on compliant infrastructure', c: 'text-indigo-300' },
                  ].map((line, i) => (
                    <div
                      key={i}
                      className="reveal is-visible flex items-start gap-2"
                      style={{ animationDelay: `${i * 140 + 200}ms` }}
                    >
                      <span className="text-slate-600">›</span>
                      <span className={line.c}>{line.t}</span>
                    </div>
                  ))}
                </div>

                {/* stat row */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/[0.06]">
                  {[
                    { k: 'One Team', v: 'Full Ownership' },
                    { k: 'AI-Native', v: 'Not Bolted-On' },
                    { k: '24 hrs', v: 'Response Time' },
                  ].map((s) => (
                    <div key={s.k}>
                      <p className="font-display font-700 text-white text-sm">{s.k}</p>
                      <p className="text-[10px] text-slate-500 font-alt mt-0.5">{s.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* floating chip */}
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl bg-[#0a1020]/90 border border-white/10 backdrop-blur-md px-4 py-3 shadow-2xl">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400/20 to-indigo-500/20 border border-teal-400/30 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-teal-300" />
              </div>
              <div>
                <p className="text-xs font-alt font-600 text-white">Business &amp; Government</p>
                <p className="text-[10px] text-slate-500 font-alt">Two disciplines, one team</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-[10px] font-alt tracking-[0.25em] uppercase">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
};
