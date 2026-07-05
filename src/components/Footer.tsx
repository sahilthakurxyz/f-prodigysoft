import React from 'react';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const cols = [
    { h: 'What We Build', links: ['AI Integration', 'Custom Software', 'Web & Mobile', 'Government Solutions'] },
    { h: 'Company', links: ['About', 'Our Process', 'Values', 'Contact'] },
    { h: 'Engagement', links: ['Fixed-Scope Projects', 'Dedicated Team', 'MVP & Startup Package'] },
  ];

  const scrollTo = (id: string) => {
    const map: Record<string, string> = {
      'AI Integration': '#services', 'Custom Software': '#services', 'Web & Mobile': '#services',
      'Government Solutions': '#services', About: '#about', 'Our Process': '#process',
      Values: '#about', Contact: '#contact',
    };
    document.querySelector(map[id] || '#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.06] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-[13px] bg-gradient-to-br from-teal-400 via-sky-500 to-indigo-500 rotate-6" />
                <div className="absolute inset-[2px] rounded-[11px] bg-[#070b16] flex items-center justify-center">
                  <span className="font-display font-800 text-lg text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-indigo-300">P</span>
                </div>
              </div>
              <span className="text-lg font-display font-700 text-white">Prodigy<span className="text-teal-300">Soft</span></span>
            </div>
            <p className="font-serif-display italic text-slate-400 text-lg max-w-sm leading-snug">
              Engineering intelligent software for businesses and government — from Jammu to the world.
            </p>
            <p className="flex items-center gap-2 text-sm text-slate-500 font-alt">
              <MapPin className="w-4 h-4 text-teal-400" /> Jammu, Jammu &amp; Kashmir, India
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.h} className="lg:col-span-2 sm:col-span-1">
              <h4 className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-4">{col.h}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <button onClick={() => scrollTo(l)} className="text-sm text-slate-400 hover:text-teal-300 font-alt transition-colors text-left">
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1" />
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 font-alt">
            © {new Date().getFullYear()} ProdigySoft. Built with rigor, from Jammu.
          </p>
          <p className="text-xs text-slate-600 font-alt flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            hello@prodigysoft.in
          </p>
        </div>
      </div>
    </footer>
  );
};
