import React from 'react';
import { Brain, Boxes, Layers, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props {
  onOpenConsultation: (topic?: string) => void;
}

const PILLARS = [
  {
    n: '01',
    icon: Brain,
    title: 'AI Integration & Intelligent Apps',
    body: 'We embed AI capabilities — chatbots, automation, recommendation engines, document intelligence — directly into your workflows. Not as a gimmick, but as a genuine productivity multiplier.',
    accent: 'from-teal-400/20 to-teal-400/0',
    ring: 'group-hover:border-teal-400/40',
    ic: 'text-teal-300',
  },
  {
    n: '02',
    icon: Boxes,
    title: 'Custom Software Development',
    body: 'Off-the-shelf tools force you to change how you work. We build software around how your business actually operates — internal tools, ERPs, CRMs, and workflow systems for your exact process.',
    accent: 'from-sky-400/20 to-sky-400/0',
    ring: 'group-hover:border-sky-400/40',
    ic: 'text-sky-300',
  },
  {
    n: '03',
    icon: Layers,
    title: 'Full-Stack Web & Mobile Apps',
    body: 'From customer-facing platforms to internal dashboards, we design and build complete applications — frontend, backend, database, and deployment — as one accountable team.',
    accent: 'from-indigo-400/20 to-indigo-400/0',
    ring: 'group-hover:border-indigo-400/40',
    ic: 'text-indigo-300',
  },
];

export const WhatWeDo: React.FC<Props> = ({ onOpenConsultation }) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" ref={ref} className="relative z-10 py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <span className="font-mono text-xs text-teal-400 tracking-[0.2em] uppercase">What We Build</span>
          <h2 className="font-display font-800 text-white text-3xl sm:text-5xl tracking-tight mt-4 leading-[1.1]">
            Three disciplines,
            <span className="font-serif-display italic font-400 text-slate-300"> one accountable team.</span>
          </h2>
          <p className="text-slate-400 font-alt mt-5 text-base leading-relaxed">
            Every project is engineered around your actual goals — not a template. Here's where we focus.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <article
              key={p.n}
              className={`reveal conic-border group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 ${p.ring} hover:bg-white/[0.04]`}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    <p.icon className={`w-6 h-6 ${p.ic}`} />
                  </div>
                  <span className="font-mono text-4xl text-white/[0.08] font-700 group-hover:text-white/[0.15] transition-colors">{p.n}</span>
                </div>
                <h3 className="font-display font-700 text-white text-xl leading-snug mb-4">{p.title}</h3>
                <p className="text-slate-400 font-alt text-sm leading-relaxed">{p.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Detailed services link row */}
        <div className="reveal mt-6 rounded-3xl border border-white/[0.08] bg-gradient-to-r from-white/[0.03] to-transparent p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h4 className="font-display font-700 text-white text-lg">Also: Government &amp; Public Sector Solutions</h4>
            <p className="text-slate-400 font-alt text-sm mt-1">
              E-governance portals, secure data systems, and compliance-aware architecture for institutions that can't afford to fail.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Government / Public Sector Project')}
            className="shrink-0 group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/12 text-white font-alt font-500 text-sm hover:bg-white/[0.1] transition-colors"
          >
            Explore public sector work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
