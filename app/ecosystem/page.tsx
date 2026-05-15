import { Monitor, Scissors, ShieldCheck, ArrowLeft, Armchair, Barcode, Crosshair, Hand, Terminal, Layers3, Gauge, Wifi, ArrowRight, Anchor, Navigation, Accessibility, Download, Waves, FlaskConical, Droplets, Wind, Paintbrush, FileSearch, AlertTriangle, Video, Eye, Zap, Radio, ShieldAlert, ScanLine } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const roadmap = [
  {
    icon: Monitor,
    category: "The AI Core",
    item: "Puget Systems RTX 5090 Workstation",
    detail:
      "Optimized for local LLM training and 4K rendering. Purpose-built for AI inference pipelines and high-throughput creative production without cloud dependency.",
    status: "2026 Roadmap",
  },
  {
    icon: Scissors,
    category: "Precision Production",
    item: "Graphtec CE8000-60 Industrial Plotter",
    detail:
      "Barcode-integrated B2B workflow with sub-millimeter cut accuracy. Native integration target for Vinyl Vision Pro's automated cut-path logic engine.",
    status: "2026 Roadmap",
  },
  {
    icon: ShieldCheck,
    category: "Laboratory Safety",
    item: "Gaahleri Atlantis Waterfall Booth & Silent Air Compressor",
    detail:
      "Medical-grade air filtration with downdraft waterfall containment. Provides a clean-room standard environment for high-detail airbrushing operations.",
    status: "2026 Roadmap",
  },
  {
    icon: Armchair,
    category: "Ergonomic Infrastructure",
    item: "UPLIFT Desk 4-Leg Commercial Frame",
    detail:
      "330 lb capacity for heavy manufacturing configurations. Supports dual-monitor rigs, production hardware, and adaptive ergonomic workflows.",
    status: "2026 Roadmap",
  },
]

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-background grid-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/napier-labs-logo.png"
                alt="Napier Labs"
                width={40}
                height={40}
                className="h-10 w-auto mix-blend-screen rounded-md drop-shadow-[0_0_14px_rgba(0,255,148,0.22)] hover:drop-shadow-[0_0_20px_rgba(0,200,255,0.35)] transition-all"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-[#00FF94] transition-colors">About</Link>
              <Link href="/#projects" className="text-sm text-muted-foreground hover:text-[#00FF94] transition-colors">Pipelines</Link>
              <Link href="/#partnerships" className="text-sm text-muted-foreground hover:text-[#00FF94] transition-colors">Partnerships</Link>
              <Link href="/ecosystem" className="text-sm text-[#00C8FF] font-medium">Ecosystem</Link>
              <Link href="/#contact" className="text-sm text-muted-foreground hover:text-[#00FF94] transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#00C8FF] transition-colors mb-12 font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lab
          </Link>

          {/* Page header */}
          <div className="text-center mb-20">
            <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// napier.labs.ecosystem</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">The Napier Labs </span>
              <span className="text-[#00F5FF] text-glow">Ecosystem</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
              The physical and digital infrastructure behind Napier Labs — where AI software precision meets industrial hardware capability.
            </p>
          </div>

          {/* 2026 Roadmap Section */}
          <div className="mb-8">
            <div className="glass-card glow-border rounded-2xl p-8 md:p-12">
              <div className="mb-8">
                <span className="text-xs font-mono font-bold text-[#00F5FF] tracking-widest uppercase">
                  Technical Infrastructure Roadmap
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                  Planned 2026 Lab Standards
                </h2>
                <p className="text-muted-foreground mt-3 max-w-2xl">
                  Purpose-selected hardware engineered for AI training throughput, precision manufacturing, laboratory safety, and adaptive ergonomic workflows — all at production scale.
                </p>
              </div>

              {/* Scaling Operational Note */}
              <div className="mb-10 rounded-xl border border-[#00F5FF]/30 bg-[#00F5FF]/5 px-6 py-5 flex gap-4 items-start">
                <div className="w-1 self-stretch rounded-full bg-[#00F5FF] shrink-0" />
                <div>
                  <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest block mb-2">Operational Note</span>
                  <p className="text-foreground font-medium leading-relaxed">
                    This 3.5x scaling trajectory is fundamentally dependent on the synergy between{" "}
                    <span className="text-[#00F5FF]">Local AI Inference</span> and{" "}
                    <span className="text-[#00F5FF]">Industrial-Grade Plotting</span>.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {roadmap.map((item) => (
                  <div
                    key={item.item}
                    className="glass-card glass-card-hover rounded-xl p-6 group transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00F5FF]/20 transition-colors">
                          <item.icon className="w-6 h-6 text-[#00F5FF]" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-1">
                            {item.category}
                          </span>
                          <h3 className="text-base font-semibold text-foreground leading-snug">
                            {item.item}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.detail}
                      </p>
                      <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-[#00F5FF]/10 text-[#00F5FF]">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Puget Systems Technical Audit */}
          <div className="mb-8">
            <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden">
              {/* Audit header */}
              <div className="bg-[#00F5FF]/5 border-b border-[#00F5FF]/20 px-8 py-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-1">// technical.audit</span>
                  <h2 className="text-lg font-bold text-foreground">Puget Systems RTX 5090 Workstation — Vocational Justification</h2>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono px-3 py-1.5 rounded-full bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20 whitespace-nowrap">
                  Data Sheet Rev. 2026
                </span>
              </div>

              {/* Audit body */}
              <div className="divide-y divide-[#00F5FF]/10">
                {/* The Barrier */}
                <div className="px-8 py-7 grid md:grid-cols-[180px_1fr] gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                    <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest leading-relaxed">The Barrier</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Processing Bottleneck — 2019 Intel Architecture</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      My current 2019 Intel-based architecture creates a critical processing bottleneck. Long render times and limited VRAM force extended time at the desk, which leads to physical fatigue and increased hand spasms — directly compromising output quality and career sustainability.
                    </p>
                  </div>
                </div>

                {/* The Solution */}
                <div className="px-8 py-7 grid md:grid-cols-[180px_1fr] gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00F5FF] mt-2 shrink-0" />
                    <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest leading-relaxed">The Solution</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">RTX 5090 — 24GB+ VRAM Neural Engine Platform</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The RTX 5090 Workstation provides the 24GB+ of VRAM required for Local LLM Training and Neural Engine processing in DaVinci Resolve — eliminating cloud dependency and enabling full AI inference pipelines to run entirely on-device, on demand.
                    </p>
                  </div>
                </div>

                {/* Vocational Impact */}
                <div className="px-8 py-7 grid md:grid-cols-[180px_1fr] gap-4 bg-[#00F5FF]/3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00FF7F] mt-2 shrink-0" />
                    <span className="text-xs font-mono font-bold text-[#00FF7F] uppercase tracking-widest leading-relaxed">Vocational Impact</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Time-on-Task Accommodation — 400% Throughput Increase</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      By reducing 4K render times and AI inference speed by 400%, a full day&apos;s output can be achieved within a condensed, low-fatigue work window. This is not a performance upgrade — it is a <span className="text-foreground font-semibold">vocational accommodation</span> that ensures the long-term sustainability of this career.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prusa XL Technical Audit */}
          <div className="mb-8">
            <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden">

              {/* Audit header */}
              <div className="bg-[#00F5FF]/5 border-b border-[#00F5FF]/20 px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Prusa-style placeholder icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/10 border border-[#00F5FF]/20 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#00F5FF]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-1">// technical.audit — additive.manufacturing</span>
                    <h2 className="text-lg font-bold text-foreground">Prusa XL 5-Toolhead System — Additive Manufacturing Audit</h2>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono px-3 py-1.5 rounded-full bg-[#00FF7F]/10 text-[#00FF7F] border border-[#00FF7F]/20 whitespace-nowrap shrink-0">
                  2026 Roadmap
                </span>
              </div>

              {/* Audit rows */}
              <div className="divide-y divide-[#00F5FF]/10">

                {/* Row 1: Independent Tool-Changing Logic */}
                <div className="px-8 py-7 grid md:grid-cols-[220px_1fr] gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Layers3 className="w-4 h-4 text-[#00F5FF]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest leading-relaxed pt-1">Tool-Changing Logic</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Independent Tool-Changing Logic</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Automated 5-way material swapping across <span className="text-foreground font-medium">ASA, TPU, and PETG</span> with zero manual intervention. Each toolhead operates on an independent extruder system — eliminating cross-contamination and enabling multi-material builds in a single unattended print session.
                    </p>
                  </div>
                </div>

                {/* Row 2: Load Cell Calibration */}
                <div className="px-8 py-7 grid md:grid-cols-[220px_1fr] gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Gauge className="w-4 h-4 text-[#00F5FF]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest leading-relaxed pt-1">Load Cell Calibration</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Fully Automated First-Layer Calibration</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Integrated load cell sensors perform automatic first-layer calibration before every print — eliminating manual bed-leveling and thermal drift tuning. Print reliability is enforced at the hardware level, removing a primary source of failed runs and material waste.
                    </p>
                  </div>
                </div>

                {/* Row 3: Industrial Integration */}
                <div className="px-8 py-7 grid md:grid-cols-[220px_1fr] gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Wifi className="w-4 h-4 text-[#00F5FF]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest leading-relaxed pt-1">Industrial Integration</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Network-Linked G-Code Execution via Prusa Connect</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      G-code files are pushed directly from AI-integrated CAD to the Prusa XL via <span className="text-foreground font-medium">Prusa Connect</span> over the local network — enabling a full <span className="text-[#00F5FF] font-semibold">"Lights-Out" manufacturing cycle</span>. Print jobs queue, execute, and complete without requiring physical presence at the machine.
                    </p>
                  </div>
                </div>

                {/* Vocational Impact callout */}
                <div className="px-8 py-7 bg-[#00F5FF]/3">
                  <div className="rounded-xl border border-[#00F5FF]/30 bg-[#00F5FF]/5 px-6 py-5 flex gap-4 items-start">
                    <div className="w-1 self-stretch rounded-full bg-[#00F5FF] shrink-0" />
                    <div>
                      <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest block mb-2">Vocational Impact</span>
                      <p className="text-sm text-foreground font-medium leading-relaxed">
                        The Prusa XL serves as a primary automation node, removing{" "}
                        <span className="text-[#00F5FF] font-bold">98% of the manual dexterity</span>{" "}
                        required for industrial-grade 3D manufacturing. Tool changes, bed leveling, and file delivery are fully automated — enabling high-volume output from a single adaptive operator.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Synergy link footer */}
              <div className="border-t border-[#00F5FF]/10 px-8 py-4 flex items-center justify-between bg-[#00F5FF]/2">
                <span className="text-xs text-muted-foreground font-mono">Additive Manufacturing · Production Node</span>
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00F5FF] hover:text-white transition-colors group"
                >
                  See Case Study: Adaptive Construction Tooling
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>

          {/* Graphtec CE8000-60 Integration Guide */}
          <div className="mb-8">
            <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden">
              {/* Header */}
              <div className="bg-[#00F5FF]/5 border-b border-[#00F5FF]/20 px-8 py-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-1">// hardware.integration</span>
                  <h2 className="text-lg font-bold text-foreground">Graphtec CE8000-60: B2B Integration Guide</h2>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono px-3 py-1.5 rounded-full bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20 whitespace-nowrap">
                  Vinyl Vision Pro Compatible
                </span>
              </div>

              {/* Three integration cards */}
              <div className="p-8 grid md:grid-cols-3 gap-5">
                {/* Card 1 */}
                <div className="rounded-xl border border-[#00F5FF]/15 bg-[#00F5FF]/3 p-6 group hover:border-[#00F5FF]/35 hover:bg-[#00F5FF]/6 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00F5FF]/20 transition-colors">
                    <Barcode className="w-5 h-5 text-[#00F5FF]" />
                  </div>
                  <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-2">Workflow 01</span>
                  <h3 className="text-sm font-bold text-foreground mb-3">Barcode-Driven Workflow</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our software generates a unique <span className="text-foreground font-medium">DataLink Barcode</span> for every order. The hardware scans this to pull the correct cut-path automatically — eliminating manual file searching and human error at the machine level.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-xl border border-[#00F5FF]/15 bg-[#00F5FF]/3 p-6 group hover:border-[#00F5FF]/35 hover:bg-[#00F5FF]/6 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00F5FF]/20 transition-colors">
                    <Crosshair className="w-5 h-5 text-[#00F5FF]" />
                  </div>
                  <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-2">Workflow 02</span>
                  <h3 className="text-sm font-bold text-foreground mb-3">Precision Alignment</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We utilize the <span className="text-foreground font-medium">ARMS 8.0</span> optical registration system to ensure <span className="text-[#00F5FF] font-semibold">0.1mm accuracy</span> on long-run signage and vehicle graphics — where alignment deviation is visible and costly.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="rounded-xl border border-[#00F5FF]/15 bg-[#00F5FF]/3 p-6 group hover:border-[#00F5FF]/35 hover:bg-[#00F5FF]/6 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00F5FF]/20 transition-colors">
                    <Hand className="w-5 h-5 text-[#00F5FF]" />
                  </div>
                  <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-2">Workflow 03</span>
                  <h3 className="text-sm font-bold text-foreground mb-3">Adaptive Efficiency</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We leverage <span className="text-foreground font-medium">Media Set Assist</span> and <span className="text-foreground font-medium">Blind-Touch Control</span> as primary vocational accommodations — maintaining high output with minimal physical strain across extended production runs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Software Alignment note */}
          <div className="glass-card rounded-2xl p-8 mb-8 border border-[#00F5FF]/20">
            <div className="flex items-start gap-4">
              <div className="w-2 h-full min-h-[2rem] rounded-full bg-[#00F5FF] shrink-0 mt-1" />
              <div>
                <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest mb-2 block">
                  // project.alignment
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  Our software —{" "}
                  <span className="text-foreground font-semibold">Vinyl Vision Pro</span> and{" "}
                  <span className="text-foreground font-semibold">Cuesight.ai</span> — is currently
                  being pre-optimized to integrate natively with this hardware roadmap. Every software
                  architecture decision is made with this physical infrastructure as the target
                  environment.
                </p>
              </div>
            </div>
          </div>

          {/* ─── Surface Finishing & Environmental Safety ─── */}
          <div className="glass-card rounded-2xl border border-[#00F5FF]/20 overflow-hidden mb-8">

            {/* Section header */}
            <div className="bg-[#00F5FF]/6 border-b border-[#00F5FF]/15 px-8 py-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-2">
                  // lab.infrastructure — surface.finishing
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                  <Droplets className="w-6 h-6 text-[#00F5FF] shrink-0" />
                  Surface Finishing &amp; Environmental Safety
                </h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  VOC-free industrial-grade finishing infrastructure — enabling professional surface production in a certified Indoor Lab environment without external facility dependency.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0 self-start mt-1">
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                  Safety Certified
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20 whitespace-nowrap">
                  Partner: Gaahleri
                </span>
              </div>
            </div>

            {/* Mandatory Safety Requirement callout */}
            <div className="px-8 py-5 border-b border-amber-500/15 bg-amber-500/4 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-amber-400 font-bold font-mono uppercase text-xs tracking-wider">Mandatory Safety Requirement — </span>
                The Gaahleri Atlantis Waterfall Booth is a non-negotiable infrastructure component for the 2026 Indoor Lab model. Ohio occupational health code prohibits aerosolized VOC production in residential settings without an enclosed filtration system meeting OSHA 29 CFR 1910.94 airflow standards. This hardware is the compliance layer that makes indoor-scale industrial finishing legally operable.
              </p>
            </div>

            {/* Two hardware panels */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#00F5FF]/10">

              {/* Hardware 1: Atlantis Waterfall Booth */}
              <div className="p-7 flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/10 flex items-center justify-center shrink-0">
                    <Droplets className="w-6 h-6 text-[#00F5FF]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-1">Primary Filtration Unit</span>
                    <h3 className="text-base font-bold text-foreground">Gaahleri Atlantis Waterfall Booth</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Paired with Silent Air Compressor</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Atlantis uses a <span className="text-foreground font-semibold">continuous waterfall curtain</span> to capture aerosolized paint, solvent, and VOC particulate before it reaches ambient air. Downdraft airflow pulls overspray into the water column, where it is neutralized and contained — creating a <span className="text-[#00F5FF] font-semibold">clean-room standard finishing environment</span> within a standard interior space.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {[
                    { label: "Filtration Method", value: "Waterfall Curtain" },
                    { label: "Airflow Pattern", value: "Downdraft Draw" },
                    { label: "VOC Capture", value: "98%+ Efficiency" },
                    { label: "Compliance Tier", value: "OSHA 1910.94" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-[#00F5FF]/5 border border-[#00F5FF]/10 px-3 py-2">
                      <span className="text-[10px] font-mono text-[#00F5FF]/60 uppercase tracking-wider block">{stat.label}</span>
                      <span className="text-xs font-semibold text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-2 border-t border-[#00F5FF]/10">
                  <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block">Operational Benefits</span>
                  {[
                    "Zero aerosolized particulate in ambient lab air during production",
                    "Enables extended airbrush sessions without respiratory PPE fatigue",
                    "Eliminates solvent odor bleed into adjacent living spaces",
                    "Paired silent compressor maintains consistent PSI without noise disruption",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00F5FF]/50 shrink-0" />
                      <span className="text-xs text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware 2: Swallowtail SD Airbrush */}
              <div className="p-7 flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/10 flex items-center justify-center shrink-0">
                    <Paintbrush className="w-6 h-6 text-[#00F5FF]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-1">Precision Finishing Tool</span>
                    <h3 className="text-base font-bold text-foreground">Gaahleri Swallowtail SD Airbrush</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Dual-action gravity-feed system</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Swallowtail SD is a <span className="text-foreground font-semibold">dual-action gravity-feed airbrush</span> designed for high-detail miniature and surface finishing workflows. Its low-pressure atomization produces consistent sub-millimeter spray patterns — critical for logo application, gradient fills, and protective topcoat finishing on 3D-printed ASA components coming off the Prusa XL.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {[
                    { label: "Action Type", value: "Dual-Action" },
                    { label: "Feed System", value: "Gravity-Feed" },
                    { label: "Needle Size", value: "0.3mm / 0.5mm" },
                    { label: "Use Case", value: "Industrial Detail" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-[#00F5FF]/5 border border-[#00F5FF]/10 px-3 py-2">
                      <span className="text-[10px] font-mono text-[#00F5FF]/60 uppercase tracking-wider block">{stat.label}</span>
                      <span className="text-xs font-semibold text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-2 border-t border-[#00F5FF]/10">
                  <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block">Production Applications</span>
                  {[
                    "Topcoat and UV-protective finishing on ASA-printed holsters and gear",
                    "Logo and branding color application on crew apparel accessories",
                    "Gradient fade work on fleet graphics and custom signage",
                    "Adaptive grip: low-force trigger meets documented fine motor requirements",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00F5FF]/50 shrink-0" />
                      <span className="text-xs text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Why: Indoor Lab model explainer */}
            <div className="border-t border-[#00F5FF]/10 px-8 py-6 bg-[#00F5FF]/3 grid md:grid-cols-3 gap-6 items-start">
              {[
                {
                  icon: Wind,
                  title: "VOC-Free Indoor Production",
                  body: "Traditional airbrush finishing requires a spray booth or outdoor setup. The Atlantis's waterfall system closes that loop — all production stays inside the lab, year-round, regardless of weather or season.",
                },
                {
                  icon: ShieldCheck,
                  title: "Residential-Compliant Operation",
                  body: "Napier Labs operates as a home-based production studio. The Atlantis provides the air quality infrastructure required to meet residential occupational health standards without a commercial facility lease.",
                },
                {
                  icon: Layers3,
                  title: "Full Ecosystem Integration",
                  body: "Finishing is the final step in the Napier Labs pipeline: Prusa XL prints the substrate → airbrush applies branding and protection → Graphtec cuts the graphic overlay. All three stages run in the same lab, same shift.",
                },
              ].map((card) => (
                <div key={card.title} className="flex gap-3">
                  <card.icon className="w-5 h-5 text-[#00F5FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-1">{card.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA footer */}
            <div className="border-t border-[#00F5FF]/10 px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FileSearch className="w-5 h-5 text-[#00F5FF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-foreground block">Full filtration rationale documented in the Infrastructure Audit</span>
                  <span className="text-xs text-muted-foreground">Includes VOC capture data, OSHA compliance notes, and vocational accommodation context.</span>
                </div>
              </div>
              <Link
                href="/ood-justification"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#00F5FF] text-[#00F5FF] font-bold text-sm hover:bg-[#00F5FF] hover:text-black transition-all whitespace-nowrap shrink-0"
              >
                <FileSearch className="w-4 h-4" />
                View Gaahleri Safety Audit
              </Link>
            </div>

          </div>

          {/* ─── Vision Systems ─── */}
          <div className="glass-card rounded-2xl border border-[#00F5FF]/20 overflow-hidden mb-8">

            {/* Section header */}
            <div className="bg-[#00F5FF]/6 border-b border-[#00F5FF]/15 px-8 py-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-2">
                  // lab.infrastructure — vision.systems
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                  <Video className="w-6 h-6 text-[#00F5FF] shrink-0" />
                  Vision Systems
                </h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  AI-powered aerial documentation and real-time visual quality assurance — fully hands-free cinematography integrated into every R&amp;D cycle.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0 self-start mt-1">
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 whitespace-nowrap">
                  Lead Aerial Node
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20 whitespace-nowrap">
                  Insta360 × BetaFPV
                </span>
              </div>
            </div>

            {/* Partnership banner */}
            <div className="px-8 py-4 border-b border-[#00F5FF]/10 bg-[#00F5FF]/3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Radio className="w-4 h-4 text-[#00F5FF] shrink-0" />
                <span className="text-sm font-semibold text-foreground">
                  Insta360 Ace Pro 2 aboard the BetaFPV Antigravity
                </span>
                <span className="text-xs font-mono text-muted-foreground">— Lead Aerial Documentation Node</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {["4K AI-Tracked", "Hands-Free", "Indoor Safe"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00F5FF]/8 text-[#00F5FF]/80 border border-[#00F5FF]/15">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Four feature panels */}
            <div className="grid md:grid-cols-2 divide-y md:divide-x md:divide-y-0 divide-[#00F5FF]/10">

              {/* Panel 1: Prosthetic Cinematographer */}
              <div className="p-7 flex flex-col gap-4 border-b border-[#00F5FF]/10">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-violet-400/80 uppercase tracking-wider block mb-1">Primary Role</span>
                    <h3 className="text-sm font-bold text-foreground">Prosthetic Cinematographer</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Insta360 Ace Pro 2&apos;s <span className="text-foreground font-semibold">AI subject tracking</span> autonomously locks onto and follows the operator or workpiece throughout every R&amp;D session. This eliminates the need for a camera operator, tripod adjustment, or manual framing — delivering <span className="text-[#00F5FF] font-semibold">100% hands-free 4K documentation</span> of every production cycle, prototype run, and field test.
                </p>
                <div className="mt-auto space-y-2 pt-3 border-t border-[#00F5FF]/8">
                  {[
                    "AI subject lock — no manual framing or follow adjustments",
                    "4K 60fps capture of full R&D cycles without operator intervention",
                    "Auto-horizon stabilization for smooth aerial production footage",
                    "Generates B-roll, process documentation, and client-ready proof-of-work content",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400/60 shrink-0" />
                      <span className="text-xs text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 2: Visual QA on Blue Sky 360 Pro */}
              <div className="p-7 flex flex-col gap-4 border-b border-[#00F5FF]/10">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#00F5FF]/10 flex items-center justify-center shrink-0">
                    <ScanLine className="w-5 h-5 text-[#00F5FF]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-1">Technical Synergy</span>
                    <h3 className="text-sm font-bold text-foreground">Real-Time Visual Quality Assurance</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  During outdoor testing phases aboard the <span className="text-foreground font-semibold">Blue Sky 360 Pro Mobile Lab</span>, the Ace Pro 2&apos;s <span className="text-[#00F5FF] font-semibold">onboard AI Chip</span> processes footage locally — enabling real-time visual inspection of product prototypes under field conditions without requiring a second operator or post-session review delay.
                </p>
                <div className="mt-auto grid grid-cols-2 gap-2.5 pt-3 border-t border-[#00F5FF]/8">
                  {[
                    { label: "Resolution", value: "4K / 8K RAW" },
                    { label: "AI Processor", value: "Onboard Chip" },
                    { label: "Stabilization", value: "FlowState 6-Axis" },
                    { label: "QA Mode", value: "Real-Time Field" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-[#00F5FF]/5 border border-[#00F5FF]/10 px-3 py-2">
                      <span className="text-[10px] font-mono text-[#00F5FF]/60 uppercase tracking-wider block">{stat.label}</span>
                      <span className="text-xs font-semibold text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 3: Antigravity Indoor Safety */}
              <div className="p-7 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400/80 uppercase tracking-wider block mb-1">The Antigravity Edge</span>
                    <h3 className="text-sm font-bold text-foreground">Autonomous Indoor Flight — Bedroom Micro-Factory</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The BetaFPV Antigravity&apos;s <span className="text-foreground font-semibold">small-form-factor frame</span> and full-coverage <span className="text-foreground font-semibold">propeller guards</span> certify it safe for autonomous flight within the Napier Labs indoor workspace. It can document workbench activity, overhead production angles, and 3D printer output cycles without requiring outdoor deployment or operator supervision.
                </p>
                <div className="mt-auto space-y-2 pt-3 border-t border-emerald-500/10">
                  {[
                    "Prop guards eliminate blade-strike risk in confined workspace environments",
                    "Small-form-factor clears standard residential ceiling clearance",
                    "Autonomous waypoint patrol of Prusa XL and Graphtec production stations",
                    "Zero operator intervention — logs entire production shift on autopilot",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400/60 shrink-0" />
                      <span className="text-xs text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 4: System specs */}
              <div className="p-7 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#00F5FF]/10 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-[#00F5FF]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-1">Combined System Specs</span>
                    <h3 className="text-sm font-bold text-foreground">Insta360 Ace Pro 2 × BetaFPV Antigravity</h3>
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  {[
                    { label: "Camera", value: "Insta360 Ace Pro 2" },
                    { label: "Platform", value: "BetaFPV Antigravity" },
                    { label: "Max Resolution", value: "8K RAW / 4K 120fps" },
                    { label: "AI Features", value: "Subject Track, Auto-Framing" },
                    { label: "Flight Safety", value: "Full Propeller Guards" },
                    { label: "Frame Class", value: "Micro / Indoor-Rated" },
                    { label: "Stabilization", value: "6-Axis FlowState" },
                    { label: "Deployment", value: "Indoor Lab + Field" },
                  ].map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between py-1.5 border-b border-[#00F5FF]/8 last:border-0">
                      <span className="text-xs font-mono text-muted-foreground">{spec.label}</span>
                      <span className="text-xs font-semibold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Ecosystem integration note */}
            <div className="border-t border-[#00F5FF]/10 bg-[#00F5FF]/3 px-8 py-5 flex items-start gap-3">
              <Layers3 className="w-5 h-5 text-[#00F5FF] shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Full-Stack Documentation Loop:</span>{" "}
                The Vision System completes the Napier Labs production record — Prusa XL prints the part, Graphtec cuts the graphics, the airbrush applies the finish, and the Antigravity documents every step autonomously. The result is a timestamped, 4K visual production log generated with zero additional operator effort or manual camera work.
              </p>
            </div>

          </div>

          {/* ─── Adaptive Maritime Partnership: Project 360 ─── */}
          <div className="glass-card rounded-2xl border border-[#00F5FF]/20 overflow-hidden mb-8">

            {/* Section header */}
            <div className="bg-[#00F5FF]/6 border-b border-[#00F5FF]/15 px-8 py-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-2">
                  // 2026.expansion — mobile.lab
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-3">
                  <Anchor className="w-6 h-6 text-[#00F5FF] shrink-0" />
                  Adaptive Maritime Partnership: Project 360
                </h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  Deploying the Blue Sky 360 Pro as Napier Labs&apos; 2026 Mobile Lab platform — a field-capable production and data collection vessel engineered for hands-free operation.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0 self-start mt-1">
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                  2026 Expansion
                </span>
              </div>
            </div>

            {/* Three feature panels */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#00F5FF]/10">

              {/* Panel 1: The Vessel */}
              <div className="p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/10 flex items-center justify-center shrink-0">
                  <Waves className="w-6 h-6 text-[#00F5FF]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-2">The Vessel</span>
                  <h3 className="text-base font-bold text-foreground mb-3">Blue Sky 360 Pro</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The <span className="text-foreground font-semibold">Blue Sky 360 Pro</span> is the target platform for our Mobile Lab expansion — a purpose-built pedal kayak selected for its 360-degree swivel seating architecture, stable hull geometry, and motorized propulsion compatibility. It provides the open deck footprint required to convert a recreational watercraft into a functioning field station.
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-[#00F5FF]/10">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Hull Class", value: "Touring / Sit-On-Top" },
                      { label: "Drive System", value: "Pedal + Motor-Ready" },
                      { label: "Deck Config", value: "Open — Modifiable" },
                      { label: "Role", value: "2026 Mobile Lab" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-lg bg-[#00F5FF]/5 border border-[#00F5FF]/10 px-3 py-2">
                        <span className="text-[10px] font-mono text-[#00F5FF]/60 uppercase tracking-wider block">{stat.label}</span>
                        <span className="text-xs font-semibold text-foreground">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panel 2: The Modification */}
              <div className="p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/10 flex items-center justify-center shrink-0">
                  <Accessibility className="w-6 h-6 text-[#00F5FF]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-2">The Modification</span>
                  <h3 className="text-base font-bold text-foreground mb-3">Universal Access Deck</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The standard seating system is replaced with a <span className="text-foreground font-semibold">wheelchair-secure mounting platform</span> — a custom-fabricated deck insert using ASA-printed rail brackets and structural aluminum struts. The mount provides lateral stability, forward lean support, and anti-tip geometry engineered to ADA transfer zone standards. It enables full <span className="text-[#00F5FF] font-semibold">360-degree fishability</span> for operators with mobility challenges — no transfers, no instability, no limitation.
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-[#00F5FF]/10 space-y-2">
                  {[
                    "ASA-printed bracket system (Prusa XL fabricated)",
                    "Lateral anti-tip geometry — ADA-informed design",
                    "Tool-free modular installation and removal",
                    "Accommodates standard powerchair footprint",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00F5FF]/60 shrink-0" />
                      <span className="text-xs text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 3: The Innovation */}
              <div className="p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/10 flex items-center justify-center shrink-0">
                  <Navigation className="w-6 h-6 text-[#00F5FF]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-2">The Innovation</span>
                  <h3 className="text-base font-bold text-foreground mb-3">Hands-Free Navigation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The 360 Pro&apos;s motorized drive integration is configured for <span className="text-[#00F5FF] font-semibold">hands-free navigation</span> — freeing the founder&apos;s upper-body capacity entirely. On-water propulsion is handled by foot pedal or motor autopilot, while hands remain dedicated to <span className="text-foreground font-semibold">real-time data collection</span>, product field-testing, and AI-assisted logging via tablet. The Mobile Lab becomes a functional R&amp;D platform — not a recreational vessel.
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-[#00F5FF]/10 space-y-2">
                  {[
                    "Motor autopilot frees hands for R&D data entry",
                    "AI-assisted field logging via mounted tablet",
                    "Product testing in real-world aquatic conditions",
                    "Adaptive Construction Gear field validation platform",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00F5FF]/60 shrink-0" />
                      <span className="text-xs text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* CTA footer */}
            <div className="border-t border-[#00F5FF]/10 bg-[#00F5FF]/3 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FlaskConical className="w-5 h-5 text-[#00F5FF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-foreground block">Interested in a co-development or sponsorship arrangement?</span>
                  <span className="text-xs text-muted-foreground">Full infrastructure context, accommodation framework, and partnership structure available in the prospectus.</span>
                </div>
              </div>
              <Link
                href="/proposal"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00F5FF] text-black font-bold text-sm hover:bg-[#00F5FF]/90 transition-colors whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4" />
                Download Partnership Prospectus
              </Link>
            </div>

          </div>

          {/* Philosophy block */}
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
            <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// design.philosophy</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Code meets <span className="text-[#00F5FF] text-glow">Carbon</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
              Every hardware selection is chosen to extend the capability of our AI workflows into the physical world. We don&apos;t just build software — we build the machines that run alongside it.
            </p>
          </div>

        </div>
      </main>

      {/* Consistent Footer */}
      <footer className="border-t border-[#00F5FF]/10 px-4 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#00F5FF]" />
            <span className="font-bold text-[#00F5FF]">Napier Labs</span>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            Built with AI. Tested in the Field.
          </p>
          <Link
            href="/#contact"
            className="text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors font-mono"
          >
            hello@napierlabs.dev
          </Link>
        </div>
      </footer>
    </div>
  )
}
