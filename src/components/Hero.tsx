import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  Terminal,
  Play,
  Cpu,
  Activity,
  Layers,
  Server,
  Sparkles,
  Code2,
  Copy,
  Check,
} from "lucide-react";
import { TiltCard, FloatingCube } from "./ThreeEffects";
interface HeroProps {
  onOpenConsultation: (topic?: string) => void;
}

const THINKING_WORDS = ["Thinks", "Scales", "Delivers", "Adapts", "Endures"];

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);

  // Animated terminal output steps
  const terminalLogs = [
    {
      text: "$ prodigysoft-cli deploy --env production --pod enterprise-alpha",
      color: "text-cyan-400",
    },
    {
      text: "[SYSTEM] Initializing SOC2 & ISO27001 zero-trust security environment...",
      color: "text-slate-400",
    },
    {
      text: "[SUCCESS] Direct Slack & Jira workspace integrations connected.",
      color: "text-emerald-400",
    },
    {
      text: "[AI-AGENT] Fine-tuned RAG pipeline initialized across vector DB cluster.",
      color: "text-violet-400",
    },
    {
      text: "[KUBERNETES] Auto-scaling pod deployed across 3 AWS Availability Zones.",
      color: "text-amber-400",
    },
    {
      text: "[MONITORING] P99 Latency: 6.4ms | Throughput: 85,000 req/sec | Uptime: 100%",
      color: "text-emerald-400 font-bold",
    },
    {
      text: "✔ Deployment successful! Systems operational in 0.42 seconds.",
      color: "text-cyan-300 font-bold",
    },
  ];
  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % THINKING_WORDS.length),
      2400,
    );
    return () => clearInterval(id);
  }, []);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  const [activeTab, setActiveTab] = useState<
    "terminal" | "architecture" | "metrics"
  >("terminal");

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalStep((prev) =>
        prev < terminalLogs.length - 1 ? prev + 1 : 0,
      );
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(
      "npx @prodigysoft/cli init --template enterprise-stack",
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
              <span className="text-xs text-slate-400 font-alt">
                Software engineering, from Jammu to the world
              </span>
            </div>

            {/* Headline with rotating verb + serif accent for contrast */}
            <h1 className="font-display font-800 text-white tracking-tight leading-[1.05] text-[2.6rem] sm:text-6xl lg:text-[4.4rem]">
              Building Software <br className="hidden sm:block" />
              That{" "}
              <span className="relative inline-block align-baseline">
                <span
                  key={wordIndex}
                  className="text-gradient-teal inline-block"
                  style={{
                    animation: "revealUp 0.5s cubic-bezier(0.16,1,0.3,1)",
                  }}
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
              ProdigySoft crafts AI-integrated applications, custom software,
              and full-stack digital products — for businesses that need to move
              fast, and government institutions that need to move right.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation("Start Your Project")}
                className="group px-7 py-4 rounded-full bg-white text-[#070b16] font-alt font-600 text-sm flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
              >
                Start Your Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => handleScroll("#services")}
                className="px-7 py-4 rounded-full bg-white/[0.03] border border-white/12 text-white font-alt font-500 text-sm hover:bg-white/[0.07] transition-colors"
              >
                View Our Work
              </button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/[0.06]">
              {[
                { icon: Cpu, label: "AI & LLM Integration" },
                { icon: Boxes, label: "Full-Stack Development" },
                { icon: Building2, label: "Enterprise & Government Ready" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-xs font-alt text-slate-400"
                >
                  <item.icon className="w-4 h-4 text-teal-400/80" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — a floating "intelligence" panel that echoes the cube field */}
          <div className="lg:col-span-5 relative">
            {/* Background floating 3D elements */}
            <div className="absolute -top-10 -right-10 z-0">
              <FloatingCube color="cyan" delay={0} />
            </div>
            <div className="absolute -bottom-10 -left-20 z-0">
              <FloatingCube color="indigo" delay={2} />
            </div>

            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse-glow"></div>

            <TiltCard className="z-10">
              <div
                className="relative glass-card rounded-2xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-950/90"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Terminal Header Bar */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      prodigysoft-runtime v4.2
                    </span>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="text-slate-400 hover:text-white text-xs flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded border border-slate-700/60 cursor-pointer"
                    title="Copy CLI command"
                  >
                    {copied ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    <span>{copied ? "Copied" : "CLI"}</span>
                  </button>
                </div>

                {/* Tab Switcher */}
                <div className="flex border-b border-slate-800 bg-slate-900/40 p-1 text-xs font-medium">
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`flex-1 py-2 text-center rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === "terminal"
                        ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Live Console</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`flex-1 py-2 text-center rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === "architecture"
                        ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Architecture</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`flex-1 py-2 text-center rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeTab === "metrics"
                        ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>Performance</span>
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="p-5 font-mono text-xs min-h-[320px] flex flex-col justify-between bg-slate-950">
                  {activeTab === "terminal" && (
                    <div className="space-y-3">
                      <p className="text-slate-500 text-[11px]">
                        // Live Pod Deployment & Execution Logs
                      </p>
                      <div className="space-y-2">
                        {terminalLogs
                          .slice(0, terminalStep + 1)
                          .map((log, i) => (
                            <div
                              key={i}
                              className={`flex items-start gap-2 ${log.color} animate-in fade-in duration-300`}
                            >
                              <span className="text-slate-600 shrink-0">
                                &gt;
                              </span>
                              <span className="break-all">{log.text}</span>
                            </div>
                          ))}
                      </div>
                      {terminalStep === terminalLogs.length - 1 && (
                        <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-800/50 mt-4 flex items-center justify-between">
                          <span className="text-indigo-300 text-[11px]">
                            Ready to build your custom software stack?
                          </span>
                          <button
                            onClick={() =>
                              onOpenConsultation("Terminal Prompt")
                            }
                            className="px-2.5 py-1 text-[11px] bg-indigo-600 hover:bg-indigo-500 text-white rounded font-sans font-bold cursor-pointer"
                          >
                            Deploy Pod
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "architecture" && (
                    <div className="space-y-4 py-2 font-sans">
                      <div className="text-slate-400 text-xs flex justify-between items-center">
                        <span>ProdigySoft Cloud Mesh Blueprint</span>
                        <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 text-[10px] font-mono">
                          Active Mesh
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-3 rounded-xl bg-slate-900 border border-indigo-500/30 flex items-center gap-2">
                          <Server className="w-4 h-4 text-cyan-400" />
                          <div>
                            <p className="font-bold text-white text-[12px]">
                              API Gateway
                            </p>
                            <p className="text-[10px] text-slate-400">
                              Rate limited & SOC2 IAM
                            </p>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-violet-500/30 flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-violet-400" />
                          <div>
                            <p className="font-bold text-white text-[12px]">
                              AI Agent Orchestrator
                            </p>
                            <p className="text-[10px] text-slate-400">
                              RAG Vector Pipelines
                            </p>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center gap-2">
                          <Activity className="w-4 h-4 text-emerald-400" />
                          <div>
                            <p className="font-bold text-white text-[12px]">
                              Event Bus (Kafka)
                            </p>
                            <p className="text-[10px] text-slate-400">
                              85,000 tx/sec stream
                            </p>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                          <div>
                            <p className="font-bold text-white text-[12px]">
                              Cockroach DB
                            </p>
                            <p className="text-[10px] text-slate-400">
                              Multi-region distributed
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-400">
                            Fault Tolerance
                          </span>
                          <span className="text-emerald-400 font-semibold">
                            99.999% SLA
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Security Audit</span>
                          <span className="text-cyan-400 font-semibold">
                            Zero Critical Vulnerabilities
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "metrics" && (
                    <div className="space-y-4 py-2 font-sans">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                            API Latency (P99)
                          </span>
                          <div className="text-2xl font-extrabold text-cyan-400 font-mono mt-1">
                            6.4 ms
                          </div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-cyan-400 h-full w-[20%]"></div>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                            Test Coverage
                          </span>
                          <div className="text-2xl font-extrabold text-emerald-400 font-mono mt-1">
                            96.8%
                          </div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[96.8%]"></div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400">
                            Real-Time Kubernetes Pod Health
                          </span>
                          <span className="text-emerald-400 font-mono">
                            100% Healthy
                          </span>
                        </div>
                        <div className="grid grid-cols-12 gap-1 h-8 items-end">
                          {[
                            40, 65, 80, 50, 90, 75, 60, 85, 95, 70, 80, 100,
                          ].map((h, idx) => (
                            <div
                              key={idx}
                              className="bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t transition-all duration-500"
                              style={{ height: `${h}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-400 text-center">
                        ⚡ Monitored 24/7 by ProdigySoft SRE Team
                      </p>
                    </div>
                  )}

                  {/* Footer Command Hint */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>status: 200 OK</span>
                    <span className="flex items-center gap-1 text-indigo-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping"></span>
                      Interactive Sandbox
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Floating Trust Pill Badge */}
            <div className="absolute -bottom-5 -left-5 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Play className="w-4 h-4 fill-cyan-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  Dedicated Engineering Pods
                </p>
                <p className="text-[10px] text-slate-400">Ready in 48 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-[10px] font-alt tracking-[0.25em] uppercase">
          Scroll
        </span>
        <span className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
};
