import React from 'react';
import { Rocket, Landmark } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const WHY = [
  { t: 'One Team, Full Ownership', b: "Design, development, deployment, and support — so you're never coordinating between five vendors." },
  { t: 'AI-Native, Not Bolted-On', b: 'We think about where intelligence genuinely helps your product, and where it\'s just noise.' },
  { t: 'Built to Scale', b: 'Architecture decisions made for where your business is going, not just where it is today.' },
  { t: 'Transparent Process', b: 'Clear timelines, honest estimates, and regular check-ins. No black-box development.' },
  { t: 'Compliant & Government-Ready', b: 'Development practices built to meet public-sector documentation, security & procurement standards.' },
];

export const WhoWeServe: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="clients" ref={ref} className="relative z-10 py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who we work with */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          <div className="reveal group relative overflow-hidden rounded-3xl border border-white/[0.08] p-9 bg-gradient-to-br from-teal-500/[0.07] to-transparent hover:-translate-y-1 transition-transform duration-500">
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-teal-500/10 blur-2xl group-hover:bg-teal-500/20 transition-colors" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-teal-300" />
              </div>
              <h3 className="font-display font-700 text-white text-2xl mb-3">Private Sector</h3>
              <p className="text-slate-400 font-alt leading-relaxed">
                Startups, SMEs, and enterprises across retail, healthcare, fintech, education, and logistics
                looking to modernize operations or launch new digital products.
              </p>
            </div>
          </div>

          <div className="reveal group relative overflow-hidden rounded-3xl border border-white/[0.08] p-9 bg-gradient-to-br from-indigo-500/[0.07] to-transparent hover:-translate-y-1 transition-transform duration-500">
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl group-hover:bg-indigo-500/20 transition-colors" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6">
                <Landmark className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-display font-700 text-white text-2xl mb-3">Government &amp; Public Sector</h3>
              <p className="text-slate-400 font-alt leading-relaxed">
                Departments and public institutions seeking secure, scalable, well-documented digital
                infrastructure — from citizen-facing portals to internal e-governance systems.
              </p>
            </div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="reveal max-w-2xl mb-12">
          <span className="font-mono text-xs text-teal-400 tracking-[0.2em] uppercase">Why ProdigySoft</span>
          <h2 className="font-display font-800 text-white text-3xl sm:text-5xl tracking-tight mt-4">
            The difference is <span className="font-serif-display italic font-400 text-slate-300">accountability.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6">
          {WHY.map((w, i) => (
            <div
              key={w.t}
              className="reveal flex gap-5 py-6 border-b border-white/[0.06] group"
            >
              <span className="font-mono text-sm text-teal-400/70 pt-1 shrink-0 w-8">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4 className="font-display font-600 text-white text-base group-hover:text-teal-200 transition-colors">{w.t}</h4>
                <p className="text-slate-400 font-alt text-sm mt-1.5 leading-relaxed">{w.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
