import React, { useState } from "react";
import { X, CheckCircle2, Sparkles, Send } from "lucide-react";
import confetti from "canvas-confetti";

interface Props {
  isOpen: boolean;
  topic?: string;
  onClose: () => void;
}
const WHATSAPP_NUMBER = "6006642782";
export const ConsultationModal: React.FC<Props> = ({
  isOpen,
  topic,
  onClose,
}) => {
  if (!isOpen) return null;

  const [form, setForm] = useState({ name: "", email: "", org: "", note: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const buildWhatsAppMessage = () => {
    const lines = [
      "*New Consultation Request*",
      topic ? `Topic: ${topic}` : null,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.org ? `Organization: ${form.org}` : null,
      form.note ? `Note: ${form.note}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);

      const message = encodeURIComponent(buildWhatsAppMessage());
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");

      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.5 },
        colors: ["#5eead4", "#38bdf8", "#818cf8"],
      });
    }, 3500);
  };

  const field =
    "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 font-alt focus:border-teal-400/50 focus:outline-none transition-colors";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#050813]/85 backdrop-blur-md"
      style={{ animation: "revealUp 0.25s ease" }}
    >
      <div className="relative w-full max-w-lg rounded-3xl border border-white/12 bg-[#0a1020]/95 p-7 sm:p-9 shadow-2xl max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="py-10 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-teal-400/15 border-2 border-teal-400/40 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-teal-300" />
            </div>
            <h3 className="font-display font-700 text-white text-2xl">
              You're all set.
            </h3>
            <p className="text-slate-400 font-alt text-sm max-w-xs mx-auto">
              Thanks {form.name || "there"} — we'll reach out within 24 hours to
              talk about {topic || "your project"}.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-white text-[#070b16] font-alt font-600 text-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-400/10 text-teal-300 text-[11px] font-alt font-600">
                <Sparkles className="w-3 h-3" /> {topic || "Free Consultation"}
              </span>
              <h3 className="font-display font-800 text-white text-2xl mt-3">
                Let's start a conversation
              </h3>
              <p className="text-slate-500 font-alt text-sm mt-1">
                No sales pressure — a real discussion about what's possible.
              </p>
            </div>

            <input
              required
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={field}
            />
            <input
              required
              type="email"
              placeholder="Work Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={field}
            />
            <input
              placeholder="Organization / Company"
              value={form.org}
              onChange={(e) => setForm({ ...form, org: e.target.value })}
              className={field}
            />
            <textarea
              rows={3}
              placeholder="A little about what you're building…"
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              className={`${field} resize-none`}
            />

            <button
              type="submit"
              disabled={loading}
              className="group w-full py-4 rounded-full bg-white text-[#070b16] font-alt font-600 text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform disabled:opacity-60"
            >
              {loading ? (
                "Sending…"
              ) : (
                <>
                  Send &amp; Book a Call{" "}
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
            <p className="text-[10px] text-slate-600 text-center font-alt">
              We usually respond within 24 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
