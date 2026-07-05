import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useReveal } from '../hooks/useReveal';

export const Contact: React.FC = () => {
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({
    name: '', org: '', email: '', phone: '', interest: 'Not Sure Yet', project: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      confetti({ particleCount: 90, spread: 65, origin: { y: 0.6 }, colors: ['#5eead4', '#38bdf8', '#818cf8'] });
    }, 900);
  };

  const field = 'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 font-alt focus:border-teal-400/50 focus:outline-none focus:bg-white/[0.05] transition-colors';

  return (
    <section id="contact" ref={ref} className="relative z-10 py-28 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left */}
          <div className="lg:col-span-5 space-y-8">
            <div className="reveal">
              <span className="font-mono text-xs text-teal-400 tracking-[0.2em] uppercase">Contact</span>
              <h2 className="font-display font-800 text-white text-3xl sm:text-5xl tracking-tight mt-4 leading-[1.1]">
                Let's build something
                <span className="font-serif-display italic font-400 text-slate-300"> that matters.</span>
              </h2>
              <p className="text-slate-400 font-alt mt-5 leading-relaxed">
                Whether you're a business ready to modernize or a government team exploring a new
                system — we'd like to hear what you're working on.
              </p>
            </div>

            <div className="reveal space-y-4">
              {[
                { icon: MapPin, k: 'Location', v: 'Jammu, Jammu & Kashmir, India' },
                { icon: Mail, k: 'Email', v: 'hello@prodigysoft.in' },
                { icon: Phone, k: 'Phone', v: '+91 · available on request' },
              ].map((c) => (
                <div key={c.k} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/25 flex items-center justify-center shrink-0">
                    <c.icon className="w-4 h-4 text-teal-300" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-alt uppercase tracking-wide">{c.k}</p>
                    <p className="text-sm text-white font-alt">{c.v}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal flex items-center gap-2 text-xs text-slate-500 font-alt">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              We usually respond within 24 hours. No sales pressure — just a real conversation.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 reveal">
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent p-7 sm:p-10">
              {sent ? (
                <div className="py-12 text-center space-y-5" style={{ animation: 'revealUp 0.5s ease' }}>
                  <div className="w-16 h-16 mx-auto rounded-full bg-teal-400/15 border-2 border-teal-400/40 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-teal-300" />
                  </div>
                  <h3 className="font-display font-700 text-white text-2xl">Message received.</h3>
                  <p className="text-slate-400 font-alt text-sm max-w-sm mx-auto">
                    Thanks {form.name || 'there'} — we'll get back to you within 24 hours. Talk soon.
                  </p>
                  <button onClick={() => setSent(false)} className="px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/12 text-slate-300 text-sm font-alt hover:bg-white/10 transition-colors">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
                    <input placeholder="Organization / Company" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} className={field} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
                    <input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-500 font-alt uppercase tracking-wide">I'm interested in</label>
                    <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={`${field} mt-1.5`}>
                      <option>AI Integration</option>
                      <option>Custom Software Development</option>
                      <option>Web / Mobile Application</option>
                      <option>Government / Public Sector Project</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                  <textarea rows={4} required placeholder="Tell us about your project…" value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} className={`${field} resize-none`} />
                  <button type="submit" disabled={loading} className="group w-full py-4 rounded-full bg-white text-[#070b16] font-alt font-600 text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform disabled:opacity-60">
                    {loading ? 'Sending…' : <>Send Message <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
