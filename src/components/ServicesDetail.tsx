import React, { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface Props {
  onOpenConsultation: (topic?: string) => void;
}

const SERVICES = [
  {
    id: 'ai',
    label: 'AI Integration & Applications',
    tagline: 'Make your software smarter, not just faster.',
    points: [
      'Custom chatbots & virtual assistants trained on your business data',
      'Workflow automation using LLMs — document processing, summarization, classification',
      'AI-powered recommendation and personalization engines',
      'Integration of AI models (OpenAI, Anthropic, open-source LLMs) into existing products',
      'Intelligent dashboards and predictive analytics',
    ],
    ideal: 'Businesses drowning in repetitive manual work, or products that need to feel modern and responsive.',
  },
  {
    id: 'custom',
    label: 'Custom Software Development',
    tagline: 'Software built around your business, not the other way around.',
    points: [
      'Internal tools, ERPs, and workflow management systems',
      'CRM and business process automation platforms',
      'Legacy system modernization and migration',
      'API development and third-party system integration',
      'Database architecture and backend engineering',
    ],
    ideal: 'Organizations whose current tools no longer fit how they actually operate.',
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Web & Mobile',
    tagline: 'From idea to a product people actually use.',
    points: [
      'Web application development (React, Next.js, Node.js & modern frameworks)',
      'Mobile app development — cross-platform and native',
      'E-commerce and business platforms',
      'Cloud deployment, DevOps, and infrastructure setup',
      'UI/UX design grounded in usability, not just aesthetics',
    ],
    ideal: 'Startups launching a new product, or businesses building a digital presence that converts.',
  },
  {
    id: 'gov',
    label: 'Government & Public Sector',
    tagline: "Reliable technology for institutions that can't afford to fail.",
    points: [
      'E-governance portals and citizen service platforms',
      'Secure data management systems',
      'Departmental workflow and record-management systems',
      'Compliance-aware architecture and documentation',
      'Long-term maintenance and support contracts',
    ],
    ideal: 'Government departments modernizing service delivery with security as a non-negotiable.',
  },
];

export const ServicesDetail: React.FC<Props> = ({ onOpenConsultation }) => {
  const [active, setActive] = useState(0);
  const ref = useReveal<HTMLDivElement>();
  const svc = SERVICES[active];

  return (
    <section ref={ref} className="relative z-10 py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl mb-14">
          <span className="font-mono text-xs text-teal-400 tracking-[0.2em] uppercase">The Detail</span>
          <h2 className="font-display font-800 text-white text-3xl sm:text-5xl tracking-tight mt-4">
            Engineered around <span className="font-serif-display italic font-400 text-slate-300">your goals.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Vertical tabs */}
          <div className="lg:col-span-4 space-y-2">
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`reveal w-full text-left px-5 py-5 rounded-2xl border transition-all duration-300 group ${
                  active === i
                    ? 'border-teal-400/40 bg-gradient-to-r from-teal-400/10 to-transparent'
                    : 'border-white/[0.06] bg-white/[0.01] hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-display font-600 text-sm ${active === i ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {s.label}
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-all ${active === i ? 'text-teal-300 translate-x-0' : 'text-slate-600 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Active panel */}
          <div className="lg:col-span-8 reveal">
            <div key={svc.id} className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10" style={{ animation: 'revealUp 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
              <p className="font-serif-display italic text-2xl sm:text-3xl text-white leading-snug">{svc.tagline}</p>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-8">
                {svc.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-300 font-alt leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 rounded-md bg-teal-400/15 border border-teal-400/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-teal-300" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-slate-500 font-alt max-w-md">
                  <span className="text-teal-400 font-600">Ideal for: </span>{svc.ideal}
                </p>
                <button
                  onClick={() => onOpenConsultation(svc.label)}
                  className="shrink-0 px-6 py-3 rounded-full bg-white text-[#070b16] font-alt font-600 text-sm hover:-translate-y-0.5 transition-transform"
                >
                  Discuss this →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement models */}
        <div className="reveal mt-16">
          <h3 className="font-display font-700 text-white text-xl mb-6">Our Engagement Models</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { m: 'Fixed-Scope Projects', b: 'Clearly defined products with a set timeline and budget.' },
              { m: 'Dedicated Team / Retainer', b: 'Ongoing development, long-term products, government contracts.' },
              { m: 'MVP & Startup Package', b: 'Early-stage founders needing a lean, fast build to validate an idea.' },
            ].map((e) => (
              <div key={e.m} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 hover:border-teal-400/30 transition-colors">
                <p className="font-display font-600 text-white text-sm">{e.m}</p>
                <p className="text-slate-400 font-alt text-sm mt-2 leading-relaxed">{e.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
