"use client"

import Link from "next/link"
import { ExternalLink, Zap, FlaskConical, CheckCircle, Clock, Wrench, AlertTriangle, Lightbulb, SlidersHorizontal, Layers, Thermometer, Cpu, ArrowRight } from "lucide-react"

const flagship = [
  {
    id: "garage-door",
    title: "Garage Door Sales Pro",
    headline: "Custom Enterprise Sales Solution",
    description:
      "A fully deployed, active sales application built for the garage door industry. Streamlines client quoting, order management, and field sales logic.",
    status: "LIVE / PRODUCTION",
    statusVariant: "live",
    achievement: "Developed and deployed using AI-first 'Vibe Coding' methodology.",
    tags: ["Enterprise Sales", "Field Operations", "Quoting Engine", "Order Management"],
  },
  {
    id: "vinyl-vision",
    title: "Vinyl Vision Pro",
    headline: "B2B Manufacturing & Scaling Suite",
    description:
      "An AI-powered management platform designed to scale vinyl operations by 3.5x. Features include automated B2B quoting and Graphtec-integrated cut-path logic.",
    status: "INTERNAL BETA — Q2 2026",
    statusVariant: "beta",
    achievement: null,
    tags: ["AI Manufacturing", "Graphtec Integration", "B2B Quoting", "Cut-Path Logic"],
  },
  {
    id: "napier-lab-customz",
    title: "Napier Lab Customz",
    headline: "Hybrid Manufacturing & Design Hub",
    description:
      "The production center for 'Signature Series' lures and custom cues. Merges AI-generated aesthetics with high-fidelity physical airbrushing.",
    status: "ACTIVE PRODUCTION",
    statusVariant: "active",
    achievement: null,
    tags: ["Signature Series", "AI Aesthetics", "Airbrushing", "Custom Manufacturing"],
  },
]

const powerPair = [
  {
    id: "cyberboss",
    title: "Cyberboss Studios",
    subtitle: "The Powerhouse",
    role: "Co-Owner & Creative Lead",
    description: "High-impact vinyl, merch, and branding solutions for the modern creator.",
    buttonText: "Visit Studio",
    buttonLink: "#",
    icon: Zap,
    glowColor: "#FF3B3B",
    bgGlow: "from-[#FF3B3B]/20",
  },
  {
    id: "pixelshrimp",
    title: "Pixel Shrimp",
    subtitle: "The Innovation",
    role: "Founder & Lead Dev",
    description:
      "A tech-driven aquarium ecosystem merging SaaS analytics with premium biological conditioners.",
    buttonText: "Enter the Lab",
    buttonLink: "https://pixelshrimp.tech",
    icon: FlaskConical,
    glowColor: "#00FF7F",
    bgGlow: "from-[#00FF7F]/20",
  },
]

const statusConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  live: {
    icon: CheckCircle,
    color: "#00F5FF",
    bg: "bg-[#00F5FF]/10 text-[#00F5FF]",
  },
  beta: {
    icon: Clock,
    color: "#FF9500",
    bg: "bg-[#FF9500]/10 text-[#FF9500]",
  },
  active: {
    icon: Wrench,
    color: "#00FF7F",
    bg: "bg-[#00FF7F]/10 text-[#00FF7F]",
  },
}

export function ProjectVault() {
  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// project.vault</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-glow text-[#00F5FF]">{"{"}</span>
            <span className="text-foreground"> Projects </span>
            <span className="text-glow text-[#00F5FF]">{"}"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            High-impact builds spanning enterprise software, AI manufacturing, and physical production.
          </p>
        </div>

        {/* Flagship 3 — Primary Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {flagship.map((project) => {
            const status = statusConfig[project.statusVariant]
            const StatusIcon = status.icon
            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-7 flex flex-col group transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                style={{
                  boxShadow: `0 0 30px ${status.color}15`,
                  borderColor: `${status.color}25`,
                }}
              >
                {/* Subtle glow overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${status.color}08 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Status badge */}
                  <div className="mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-full ${status.bg}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3
                    className="text-xl font-bold mb-1 transition-colors group-hover:text-[#00F5FF]"
                    style={{ color: "var(--foreground)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-widest mb-4">
                    {project.headline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Achievement callout */}
                  {project.achievement && (
                    <div className="mb-5 px-4 py-3 rounded-lg border border-[#00F5FF]/20 bg-[#00F5FF]/5">
                      <p className="text-xs font-mono text-[#00F5FF] leading-relaxed">
                        ✦ {project.achievement}
                      </p>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ─── Technical Case Study ─── */}
        <div className="mt-10 mb-4">
          {/* Report header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-[#00F5FF]/10" />
            <span className="text-xs font-mono text-[#00F5FF]/60 uppercase tracking-widest whitespace-nowrap">Technical Case Study</span>
            <div className="flex-1 h-px bg-[#00F5FF]/10" />
          </div>

          <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden">

            {/* Case study title bar */}
            <div className="bg-[#00F5FF]/6 border-b border-[#00F5FF]/15 px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#00F5FF]/60 uppercase tracking-widest block mb-1">// case.study — additive.manufacturing</span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Case Study: Universal Impact Driver Holster
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-[#00FF7F]/10 text-[#00FF7F]">
                  <CheckCircle className="w-3 h-3" />
                  PROTOTYPE COMPLETE
                </span>
              </div>
            </div>

            <div className="p-8 grid lg:grid-cols-2 gap-10">

              {/* Left: Report sections */}
              <div className="space-y-8">

                {/* The Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">The Problem</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-9">
                    Construction professionals routinely lose seconds per reach retrieving impact drivers from generic belt clips — clips designed without consideration for tool balance, site debris ingress, or single-hand draw mechanics. At scale across a crew, this compounds into measurable productivity loss and increased tool drop risk on elevated surfaces.
                  </p>
                </div>

                {/* The AI-Driven Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-4 h-4 text-[#00F5FF]" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">The AI-Driven Solution</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-9 mb-4">
                    Using generative AI-integrated CAD, we modeled a universal holster geometry optimized for the most common impact driver form factors. The AI iterated across 40+ draft geometries in minutes — testing retention angle, draw clearance, and stress distribution at mounting points — before outputting a final production-ready STL. The entire design cycle ran in under 3 hours.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-9">
                    The holster prints in a single-session run on a FDM platform with zero post-processing required. No molds, no tooling setup, no minimum order quantity.
                  </p>
                </div>

                {/* Vocational Impact Callout */}
                <div className="rounded-xl border border-[#00F5FF]/30 bg-[#00F5FF]/5 px-5 py-5 flex gap-4 items-start">
                  <div className="w-1 self-stretch rounded-full bg-[#00F5FF] shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest block mb-2">Vocational Impact</span>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      This project demonstrates the shift from manual assembly to automated AI-driven manufacturing. By utilizing 3D printing, we eliminate{" "}
                      <span className="text-[#00F5FF] font-bold">95% of the physical labor</span>{" "}
                      required to produce high-durability construction hardware.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right: Specs + Diagram placeholder */}
              <div className="space-y-6">

                {/* Technical Diagram placeholder */}
                <div className="rounded-xl border border-[#00F5FF]/15 bg-white/[0.02] aspect-[4/3] flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><path d=%22M0 20h40M20 0v40%22 stroke=%22%2300F5FF%22 stroke-width=%220.25%22 opacity=%220.15%22/></svg>')] bg-repeat" />
                  <div className="relative z-10 flex flex-col items-center gap-2 text-center px-6">
                    <div className="w-14 h-14 rounded-2xl border border-[#00F5FF]/20 bg-[#00F5FF]/5 flex items-center justify-center">
                      <SlidersHorizontal className="w-7 h-7 text-[#00F5FF]/50" />
                    </div>
                    <p className="text-xs font-mono text-[#00F5FF]/50 uppercase tracking-widest">Technical Diagram</p>
                    <p className="text-xs text-muted-foreground/50">Product photo / CAD render</p>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="rounded-xl border border-[#00F5FF]/15 overflow-hidden">
                  <div className="bg-[#00F5FF]/5 border-b border-[#00F5FF]/10 px-5 py-3">
                    <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest font-bold">Technical Specifications</span>
                  </div>
                  <div className="divide-y divide-[#00F5FF]/8">
                    {[
                      { icon: Layers, label: "Material", value: "ASA Polymer (UV-stabilized)" },
                      { icon: Cpu, label: "Design Method", value: "Generative AI-integrated CAD" },
                      { icon: Thermometer, label: "Thermal Range", value: "−20°C to 90°C operational" },
                      { icon: SlidersHorizontal, label: "Retention System", value: "Single-hand magnetic draw" },
                      { icon: Wrench, label: "Compatibility", value: "Universal — 18–22V impact drivers" },
                      { icon: CheckCircle, label: "Post-Processing", value: "Zero — print-ready output" },
                    ].map((spec) => (
                      <div key={spec.label} className="flex items-center gap-3 px-5 py-3.5 hover:bg-[#00F5FF]/3 transition-colors">
                        <spec.icon className="w-4 h-4 text-[#00F5FF]/50 shrink-0" />
                        <span className="text-xs font-mono text-muted-foreground w-36 shrink-0">{spec.label}</span>
                        <span className="text-xs font-semibold text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* CTA footer */}
            <div className="border-t border-[#00F5FF]/10 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#00F5FF]/3">
              <p className="text-sm text-muted-foreground">
                Need custom job-site hardware or AI-designed tooling for your crew?
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 font-bold text-sm font-mono px-6 py-3 rounded-lg bg-[#00F5FF] text-[#0a0f1e] hover:bg-[#00d4e0] transition-colors whitespace-nowrap"
              >
                Request a Custom Tooling Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

        {/* ─── Project Alpha ─── */}
        <div className="mt-6 mb-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-amber-500/20" />
            <span className="text-xs font-mono text-amber-400/60 uppercase tracking-widest whitespace-nowrap">Project Alpha — In Development</span>
            <div className="flex-1 h-px bg-amber-500/20" />
          </div>

          <div className="rounded-2xl border border-amber-500/25 overflow-hidden">

            {/* Header */}
            <div className="bg-amber-500/5 border-b border-amber-500/20 px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-amber-400/70 uppercase tracking-widest block mb-1">// project.alpha — ai.generative.tooling</span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  AI-Generative Tooling <span className="text-amber-400">(In-Development)</span>
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25 whitespace-nowrap shrink-0">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse inline-block" />
                DESIGN IN PROGRESS
              </span>
            </div>

            <div className="p-8 grid lg:grid-cols-2 gap-10">

              {/* Left: Content */}
              <div className="space-y-6">

                <div>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest mb-2">Current Subject</p>
                  <h4 className="text-lg font-bold text-foreground mb-1">Universal Impact Driver Holster</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    AI-generative CAD design for a universal construction-grade holster. The logical architecture and material spec (ASA polymer, −20°C to 90°C range) are fully defined. Execution of the generative mesh algorithms and real-time physics simulation is blocked at the hardware level.
                  </p>
                </div>

                {/* STATUS ALERT */}
                <div className="rounded-xl border-2 border-amber-500/40 bg-amber-500/8 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
                    <span className="text-sm font-mono font-bold text-amber-400 uppercase tracking-widest">
                      STATUS: Design Paused Due to Hardware Constraints
                    </span>
                  </div>
                  <p className="text-sm text-amber-200/80 leading-relaxed">
                    Current 2019 Intel-based hardware lacks the CUDA Cores and VRAM required to execute the generative AI algorithms and real-time 3D rendering needed for industrial-grade ASA polymers.
                  </p>
                </div>

                {/* Technical Requirement */}
                <div className="rounded-xl border border-[#00F5FF]/20 bg-[#00F5FF]/3 p-5">
                  <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest block mb-2">Technical Requirement</span>
                  <p className="text-sm text-foreground leading-relaxed">
                    Completion of this project requires the <span className="text-[#00F5FF] font-bold">24GB VRAM of an RTX 5090</span> to handle high-fidelity physics simulations and AI-assisted CAD logic.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["RTX 5090 — 24GB VRAM", "CUDA Core Acceleration", "Real-Time Physics Sim", "AI-Assisted CAD"].map((req) => (
                      <span key={req} className="text-xs font-mono px-2.5 py-1 rounded bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/15">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right: Blueprint wireframe placeholder */}
              <div className="rounded-xl border border-amber-500/20 bg-[#0a0f1e] overflow-hidden relative">
                {/* Blueprint grid */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="blueprint-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#00F5FF" strokeWidth="0.4" />
                    </pattern>
                    <pattern id="blueprint-grid-major" width="150" height="150" patternUnits="userSpaceOnUse">
                      <rect width="150" height="150" fill="url(#blueprint-grid)" />
                      <path d="M 150 0 L 0 0 0 150" fill="none" stroke="#00F5FF" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#blueprint-grid-major)" />
                </svg>

                {/* Wireframe holster schematic */}
                <svg
                  viewBox="0 0 300 260"
                  className="relative z-10 w-full h-full p-6 opacity-70"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#00F5FF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Main holster body */}
                  <rect x="90" y="40" width="120" height="160" rx="12" strokeDasharray="5 3" />
                  {/* Belt loop top */}
                  <rect x="115" y="22" width="70" height="24" rx="6" />
                  {/* Belt loop bottom */}
                  <rect x="115" y="196" width="70" height="22" rx="6" />
                  {/* Tool insertion guide */}
                  <line x1="110" y1="80" x2="190" y2="80" strokeDasharray="4 2" />
                  <line x1="110" y1="140" x2="190" y2="140" strokeDasharray="4 2" />
                  {/* Center axis */}
                  <line x1="150" y1="40" x2="150" y2="200" stroke="#00F5FF" strokeWidth="0.5" strokeDasharray="8 4" opacity="0.4" />
                  {/* Dimension arrows */}
                  <line x1="60" y1="40" x2="60" y2="200" stroke="#00F5FF" strokeWidth="0.7" opacity="0.5" />
                  <line x1="56" y1="40" x2="64" y2="40" strokeWidth="0.7" opacity="0.5" />
                  <line x1="56" y1="200" x2="64" y2="200" strokeWidth="0.7" opacity="0.5" />
                  {/* Retention magnet indicator */}
                  <circle cx="150" cy="110" r="18" strokeDasharray="3 2" stroke="#00FF7F" strokeWidth="1.2" />
                  <circle cx="150" cy="110" r="6" stroke="#00FF7F" strokeWidth="1" />
                  {/* Corner registration marks */}
                  {[[90,40],[210,40],[90,200],[210,200]].map(([x,y], i) => (
                    <g key={i}>
                      <line x1={x-6} y1={y} x2={x+6} y2={y} stroke="#00F5FF" strokeWidth="0.6" opacity="0.5" />
                      <line x1={x} y1={y-6} x2={x} y2={y+6} stroke="#00F5FF" strokeWidth="0.6" opacity="0.5" />
                    </g>
                  ))}
                  {/* Labels */}
                  <text x="220" y="115" fontSize="7" fill="#00F5FF" stroke="none" opacity="0.7" fontFamily="monospace">⌀ MAG</text>
                  <text x="220" y="125" fontSize="7" fill="#00F5FF" stroke="none" opacity="0.7" fontFamily="monospace">LOCK</text>
                  <text x="32" y="123" fontSize="7" fill="#00F5FF" stroke="none" opacity="0.7" fontFamily="monospace">160mm</text>
                  <text x="96" y="17" fontSize="7" fill="#00F5FF" stroke="none" opacity="0.7" fontFamily="monospace">BELT_LOOP_A</text>
                  <text x="96" y="232" fontSize="7" fill="#00F5FF" stroke="none" opacity="0.7" fontFamily="monospace">BELT_LOOP_B</text>
                  <text x="96" y="250" fontSize="7" fill="#FF9500" stroke="none" opacity="0.9" fontFamily="monospace">⚠ RENDER BLOCKED — RTX 5090 REQ.</text>
                </svg>

                {/* Paused overlay badge */}
                <div className="absolute top-3 right-3 z-20">
                  <span className="text-xs font-mono px-2 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    CAD DRAFT — PAUSED
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="text-xs font-mono text-[#00F5FF]/40">// impact_driver_holster_v0.3.stl</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ─── R&D: Adaptive Construction Gear ─── */}
        <div className="mt-6 mb-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-red-500/20" />
            <span className="text-xs font-mono text-red-400/60 uppercase tracking-widest whitespace-nowrap">Napier Labs R&amp;D</span>
            <div className="flex-1 h-px bg-red-500/20" />
          </div>

          <div className="rounded-2xl border border-red-500/20 overflow-hidden">

            {/* Header */}
            <div className="bg-red-500/5 border-b border-red-500/15 px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-red-400/60 uppercase tracking-widest block mb-1">// napier.labs.rd — adaptive.construction.gear</span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Adaptive Construction Gear
                </h3>
              </div>
              {/* COMPUTE LIMITED badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-red-500/50 bg-red-500/10 shrink-0">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shrink-0" />
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  COMPUTE LIMITED
                </span>
              </div>
            </div>

            <div className="p-8 grid lg:grid-cols-2 gap-10">

              {/* Left: Engineering details */}
              <div className="space-y-6">

                {/* Project nameplate */}
                <div className="rounded-xl border border-red-500/15 bg-red-500/3 p-5">
                  <p className="text-xs font-mono text-red-400/70 uppercase tracking-widest mb-1">Project</p>
                  <h4 className="text-lg font-bold text-foreground mb-1">Universal Impact Driver Holster</h4>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                    v1.0 — AI Prototype
                  </span>
                </div>

                {/* Engineering Logic */}
                <div>
                  <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest block mb-2">Engineering Logic</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Utilizing <span className="text-foreground font-medium">Generative AI</span> and <span className="text-foreground font-medium">topology optimization</span> to create a high-strength ASA polymer holster for industrial construction environments.
                  </p>
                </div>

                {/* Compute block explanation */}
                <div className="rounded-xl border-2 border-red-500/35 bg-red-500/5 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shrink-0" />
                    <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">Compute Block</span>
                  </div>
                  <p className="text-sm text-red-200/70 leading-relaxed">
                    Awaiting <span className="text-red-300 font-semibold">24GB VRAM Hardware</span> for Final Stress Simulation. Current architecture cannot execute high-fidelity topology mesh refinement or CUDA-accelerated FEA solver passes required for production sign-off.
                  </p>
                </div>

                {/* Market goal */}
                <div className="rounded-xl border border-[#00F5FF]/20 bg-[#00F5FF]/3 p-5">
                  <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest block mb-2">2026 Market Goal</span>
                  <p className="text-sm text-foreground leading-relaxed mb-3">
                    This project serves as our <span className="text-[#00F5FF] font-bold">2026 Flagship Entry</span> into the $2B construction hardware market, specifically targeting the local Amish roofing and framing sectors.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["$2B Market", "Amish Roofing", "Framing Sector", "2026 Launch"].map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/15">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right: Blueprint */}
              <div className="rounded-xl border border-red-500/15 bg-[#080d1a] overflow-hidden relative min-h-[340px]">
                {/* Blueprint grid — red tint */}
                <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="rd-grid-sm" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#ff6b6b" strokeWidth="0.3" />
                    </pattern>
                    <pattern id="rd-grid-lg" width="120" height="120" patternUnits="userSpaceOnUse">
                      <rect width="120" height="120" fill="url(#rd-grid-sm)" />
                      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#ff6b6b" strokeWidth="0.7" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#rd-grid-lg)" />
                </svg>

                {/* 2D blueprint schematic */}
                <svg
                  viewBox="0 0 300 280"
                  className="relative z-10 w-full h-full p-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Holster body — topology optimized cutouts */}
                  <rect x="85" y="45" width="130" height="170" rx="14" stroke="#ff6b6b" strokeWidth="1.4" strokeDasharray="6 3" />
                  {/* Internal topology web */}
                  <line x1="110" y1="90" x2="210" y2="90" stroke="#ff6b6b" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.5" />
                  <line x1="110" y1="150" x2="210" y2="150" stroke="#ff6b6b" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.5" />
                  <line x1="150" y1="70" x2="150" y2="200" stroke="#ff6b6b" strokeWidth="0.5" strokeDasharray="8 4" opacity="0.3" />
                  {/* Top belt mount */}
                  <rect x="112" y="26" width="76" height="26" rx="7" stroke="#ff6b6b" strokeWidth="1.2" />
                  {/* Bottom belt mount */}
                  <rect x="112" y="208" width="76" height="22" rx="7" stroke="#ff6b6b" strokeWidth="1.2" />
                  {/* Retention lip */}
                  <path d="M 100 100 Q 150 88 200 100" stroke="#00F5FF" strokeWidth="1" strokeDasharray="4 2" />
                  {/* Stress sim mesh nodes — blocked state */}
                  {[[115,120],[150,110],[185,120],[130,155],[170,155]].map(([x,y], i) => (
                    <g key={i}>
                      <circle cx={x} cy={y} r="3.5" stroke="#ff6b6b" strokeWidth="0.8" fill="rgba(255,100,100,0.08)" />
                      <line x1={x} y1={y} x2={150} y2={130} stroke="#ff6b6b" strokeWidth="0.4" opacity="0.25" />
                    </g>
                  ))}
                  {/* Central FEA node — blocked */}
                  <circle cx="150" cy="130" r="10" stroke="#ff6b6b" strokeWidth="1.2" fill="rgba(255,100,100,0.06)" strokeDasharray="3 2" />
                  <text x="142" y="134" fontSize="7" fill="#ff6b6b" stroke="none" fontFamily="monospace" opacity="0.8">FEA</text>
                  {/* Dimension lines */}
                  <line x1="55" y1="45" x2="55" y2="215" stroke="#ff6b6b" strokeWidth="0.6" opacity="0.4" />
                  <line x1="51" y1="45" x2="59" y2="45" stroke="#ff6b6b" strokeWidth="0.6" opacity="0.4" />
                  <line x1="51" y1="215" x2="59" y2="215" stroke="#ff6b6b" strokeWidth="0.6" opacity="0.4" />
                  <text x="20" y="134" fontSize="6.5" fill="#ff6b6b" stroke="none" fontFamily="monospace" opacity="0.6">170mm</text>
                  {/* ASA label */}
                  <text x="90" y="38" fontSize="6.5" fill="#ff6b6b" stroke="none" fontFamily="monospace" opacity="0.7">MAT: ASA/UV-STB</text>
                  {/* Warning line */}
                  <text x="68" y="260" fontSize="6.5" fill="#ff6b6b" stroke="none" opacity="0.85" fontFamily="monospace">⚠ STRESS SIM BLOCKED — 24GB VRAM REQUIRED</text>
                  {/* Top right ref */}
                  <text x="196" y="38" fontSize="6" fill="#ff6b6b" stroke="none" fontFamily="monospace" opacity="0.5">v1.0</text>
                </svg>

                {/* Overlaid badges */}
                <div className="absolute top-3 right-3 z-20">
                  <span className="text-xs font-mono px-2 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                    SIM BLOCKED
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="text-xs font-mono text-red-400/40">// holster_v1.0_topology.step</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-14">
          <div className="flex-1 h-px bg-[#00F5FF]/10" />
          <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">Venture Leadership</span>
          <div className="flex-1 h-px bg-[#00F5FF]/10" />
        </div>

        {/* Power Pair — Dual Leadership */}
        <div className="grid md:grid-cols-2 gap-6">
          {powerPair.map((venture) => (
            <div
              key={venture.id}
              className="relative glass-card rounded-2xl p-8 overflow-hidden group transition-all duration-500 hover:scale-[1.02]"
              style={{
                boxShadow: `0 0 40px ${venture.glowColor}15, inset 0 1px 0 ${venture.glowColor}20`,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${venture.bgGlow} to-transparent opacity-20 group-hover:opacity-40 transition-opacity`}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${venture.glowColor}15` }}
                >
                  <venture.icon className="w-7 h-7" style={{ color: venture.glowColor }} />
                </div>

                <span
                  className="text-xs font-mono font-bold tracking-wider mb-2 block"
                  style={{ color: venture.glowColor }}
                >
                  {venture.subtitle.toUpperCase()}
                </span>

                <h3
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: venture.glowColor }}
                >
                  {venture.title}
                </h3>

                <p className="text-sm font-mono text-muted-foreground mb-3">{venture.role}</p>

                <p className="text-muted-foreground mb-6 text-balance">{venture.description}</p>

                <a
                  href={venture.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: venture.glowColor,
                    color: "#141b2d",
                    boxShadow: `0 0 20px ${venture.glowColor}40`,
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  {venture.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
