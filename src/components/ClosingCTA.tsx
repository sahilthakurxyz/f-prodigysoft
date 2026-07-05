import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props {
  onOpenConsultation: (topic?: string) => void;
}

export const ClosingCTA: React.FC<Props> = ({ onOpenConsultation }) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative z-10 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-gradient-to-br from-teal-500/[0.08] via-[#0a1020]/60 to-indigo-500/[0.08] p-10 sm:p-16 text-center">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-teal-500/10 blur-[100px] pointer-events-none" />
          <div className="relative">
            <p className="font-serif-display italic text-teal-300 text-lg mb-4">no jargon, no pressure</p>
            <h2 className="font-display font-800 text-white text-3xl sm:text-5xl tracking-tight leading-[1.1]">
              Have a problem worth solving
              <br className="hidden sm:block" /> with software?
            </h2>
            <p className="text-slate-400 font-alt mt-6 max-w-lg mx-auto leading-relaxed">
              Let's talk about what you're building — just a real conversation about what's possible.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenConsultation('Free Consultation')}
                className="group px-8 py-4 rounded-full bg-white text-[#070b16] font-alt font-600 text-sm flex items-center gap-2 hover:-translate-y-1 transition-transform"
              >
                Get a Free Consultation
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
