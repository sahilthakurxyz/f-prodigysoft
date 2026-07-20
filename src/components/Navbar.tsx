import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, MapPin } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "What We Do", href: "#services" },
    { name: "Who We Serve", href: "#clients" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="ProdigySoft Home"
          >
            <div className="relative w-10 h-10 shrink-0">
              <div className="absolute inset-0 rounded-[13px] bg-gradient-to-br from-teal-400 via-sky-500 to-indigo-500 rotate-6 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-[2px] rounded-[11px] bg-[#070b16] flex items-center justify-center">
                <img src="/src/images/logo.png" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-display font-700 tracking-tight text-white">
                Prodigy<span className="text-teal-300">Soft</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-slate-500 font-alt uppercase mt-1 flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-teal-400" /> Built for Scale
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm font-alt text-slate-300 hover:text-white transition-colors group py-1"
              >
                {link.name}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gradient-to-r from-teal-400 to-indigo-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation("Start Your Project")}
              className="group relative px-5 py-2.5 rounded-full bg-white text-[#070b16] text-sm font-alt font-600 flex items-center gap-1.5 overflow-hidden transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowUpRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate-200 bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mt-3 mx-3 rounded-2xl border border-white/10 p-4 space-y-1 animate-in fade-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-4 py-3 text-sm font-alt text-slate-200 hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between"
            >
              {link.name}
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation("Mobile Start");
            }}
            className="w-full mt-2 py-3 rounded-xl bg-white text-[#070b16] font-alt font-600 text-sm"
          >
            Start Your Project →
          </button>
        </div>
      )}
    </header>
  );
};
