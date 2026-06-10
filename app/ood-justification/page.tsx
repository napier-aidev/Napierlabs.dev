"use client"

import Link from "next/link"
import { Lock, ExternalLink, Brain, Cpu, Scissors, ShieldCheck, Armchair, Monitor, FileText, CheckCircle2, XCircle, AlertTriangle } from "lucide-react"

const infraTable = [
  {
    item: "Puget Systems RTX 5090 Workstation",
    category: "AI Inference Platform",
    cost: "$6,800",
    barrier: "Cognitive Fatigue & Time-on-Task",
    accommodation:
      "Reduces AI render and inference time by 400%, compressing a full day's productive output into a short, low-fatigue work window. Without this, extended screen exposure triggers documented hand spasms and motor control degradation.",
    priority: "Critical",
    icon: Monitor,
  },
  {
    item: "Prusa XL 5-Toolhead System",
    category: "Additive Manufacturing Node",
    cost: "$4,200",
    barrier: "Manual Dexterity — Fine Motor Control",
    accommodation:
      "Automated tool-changing, load-cell calibration, and network-linked G-code delivery via Prusa Connect eliminate 98% of the hands-on operation required for 3D manufacturing. Enables 'Lights-Out' production with zero physical intervention.",
    priority: "Critical",
    icon: Cpu,
  },
  {
    item: "Graphtec CE8000-60 Industrial Plotter",
    category: "Precision Production Hardware",
    cost: "$3,500",
    barrier: "Manual Dexterity — Cutting & Alignment",
    accommodation:
      "Barcode-driven cut-path automation, ARMS 8.0 optical registration, Media Set Assist, and Blind-Touch Control remove all precision manual cutting tasks. Sub-millimeter accuracy is machine-enforced, not operator-dependent.",
    priority: "Critical",
    icon: Scissors,
  },
  {
    item: "Gaahleri Atlantis Waterfall Booth & Silent Air Compressor + (2x) Swallowtail SD Airbrush Units",
    category: "Laboratory Safety Infrastructure",
    cost: "$2,100",
    barrier: "Respiratory Safety & Fine Motor Dexterity",
    accommodation:
      "Medical-grade downdraft waterfall filtration creates a compliant, clean-room standard airbrush environment. Eliminates aerosolized VOC exposure. Two Swallowtail SD units — one 0.5mm (Base/Clear) and one 0.3mm (Detail/Stenciling) — provide a Unified Ergonomic Interface using a consistent pistol-grip movement, bypassing the top-trigger actuation that is non-viable due to documented fine motor constraints.",
    priority: "High",
    icon: ShieldCheck,
  },
  {
    item: "UPLIFT Desk 4-Leg Commercial Frame",
    category: "Ergonomic Accommodation",
    cost: "$1,400",
    barrier: "Postural Fatigue & Physical Endurance",
    accommodation:
      "330 lb capacity sit-stand desk enables dynamic posture cycling across long production sessions. Static seated posture is a primary aggravator of fatigue-induced motor symptoms; this directly mitigates that risk.",
    priority: "High",
    icon: Armchair,
  },
  {
    item: "Ergotron LX Sit-Stand Monitor Arm",
    category: "Ergonomic Accommodation",
    cost: "$340",
    barrier: "Neck & Upper Limb Strain",
    accommodation:
      "Full-range monitor positioning removes static neck load during extended design and production sessions. Enables rapid ergonomic adjustment without interrupting workflow — critical for sustained output windows.",
    priority: "Standard",
    icon: Monitor,
  },
]

const totalCost = "$18,340"

export default function OodJustificationPage() {
  return (
    <>
      <style>{`
        @media print {
          nav, .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .print-page { background: white !important; color: black !important; }
          .print-card { background: white !important; border: 1px solid #ccc !important; }
          .print-table-header { background: #f5f5f5 !important; color: black !important; }
          .print-table-row { border-bottom: 1px solid #e0e0e0 !important; }
          .print-muted { color: #555 !important; }
          .print-cyan { color: #0077aa !important; }
          .print-badge-critical { background: #fff0f0 !important; color: #cc0000 !important; border: 1px solid #cc0000 !important; }
          .print-badge-high { background: #fff8e0 !important; color: #996600 !important; border: 1px solid #996600 !important; }
          .print-badge-standard { background: #f0f0ff !important; color: #333399 !important; border: 1px solid #333399 !important; }
          .print-section { page-break-inside: avoid; }
          a { color: #0077aa !important; }
          .print-hide { display: none !important; }
        }
      `}</style>

      <div className="min-h-screen bg-background text-foreground print-page">

        {/* Confidentiality Banner — no-print keeps it visible on screen, hidden when printing */}
        <div className="bg-[#00F5FF]/8 border-b border-[#00F5FF]/20 px-4 py-3 no-print">
          <div className="max-w-5xl mx-auto flex items-center justify-center gap-3">
            <Lock className="w-4 h-4 text-[#00F5FF] shrink-0" />
            <p className="text-xs font-mono text-[#00F5FF] text-center">
              CONFIDENTIAL: Documentation for Napier Labs Vocational Rehabilitation Case. Not for public distribution.
            </p>
            <Lock className="w-4 h-4 text-[#00F5FF] shrink-0" />
          </div>
        </div>

        {/* Print-only header */}
        <div className="hidden print:block px-10 pt-10 pb-4 border-b border-gray-300">
          <p className="text-xs font-mono text-gray-500 mb-1">CONFIDENTIAL — Vocational Rehabilitation Documentation</p>
          <h1 className="text-2xl font-bold text-black">2026 Vocational Infrastructure &amp; Accessibility Audit</h1>
          <p className="text-sm text-gray-600 mt-1">Napier Labs · Prepared for OOD Vocational Rehabilitation Counselor</p>
        </div>

        <main className="px-4 py-16 print:py-8 print:px-10">
          <div className="max-w-5xl mx-auto">

            {/* Document header */}
            <div className="mb-14 print:mb-8">
              <div className="flex items-center gap-4 mb-8 no-print">
                <div className="h-px flex-1 bg-[#00F5FF]/15" />
                <span className="text-xs font-mono text-[#00F5FF]/50 uppercase tracking-widest whitespace-nowrap">
                  // vocational.rehabilitation.documentation
                </span>
                <div className="h-px flex-1 bg-[#00F5FF]/15" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 no-print">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
                    2026 Vocational Infrastructure
                    <br />
                    <span className="text-[#00F5FF]">&amp; Accessibility Audit</span>
                  </h1>
                  <p className="text-muted-foreground max-w-2xl">
                    A formal documentation of adaptive hardware requirements, vocational barriers, and infrastructure accommodations required to sustain and scale the Napier Labs production operation under the 2026 OOD Vocational Rehabilitation plan.
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-xs font-mono text-[#00F5FF]/60 block mb-1">Case Reference</span>
                  <span className="text-xs font-mono text-foreground block">Napier Labs · 2026</span>
                  <span className="text-xs font-mono text-muted-foreground block mt-1">OOD Vocational Rehabilitation</span>
                </div>
              </div>

              {/* Document meta strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 print-card">
                {[
                  { label: "Document Type", value: "Vocational Audit" },
                  { label: "Total Infrastructure Cost", value: totalCost },
                  { label: "Items Requested", value: `${infraTable.length} Line Items` },
                  { label: "Classification", value: "Confidential" },
                ].map((meta) => (
                  <div
                    key={meta.label}
                    className="rounded-lg border border-[#00F5FF]/15 bg-[#00F5FF]/3 px-4 py-3 print-card"
                  >
                    <span className="text-xs font-mono text-muted-foreground block mb-1 print-muted">{meta.label}</span>
                    <span className="text-sm font-bold text-foreground">{meta.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── Infrastructure Table ─── */}
            <div className="mb-12 print-section">
              <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden print-card">

                {/* Table header */}
                <div className="bg-[#00F5FF]/6 border-b border-[#00F5FF]/15 px-8 py-5 flex items-center justify-between print-table-header">
                  <div>
                    <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-1 no-print print-cyan">
                      // section.01
                    </span>
                    <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#00F5FF] no-print" />
                      Vocational Rehabilitation &amp; Industrial Infrastructure Request
                    </h2>
                  </div>
                  <span className="hidden sm:block text-xs font-mono px-3 py-1.5 rounded-full bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20 no-print">
                    ADA / OOD Accommodation Basis
                  </span>
                </div>

                {/* Table rows */}
                <div className="divide-y divide-[#00F5FF]/8">
                  {infraTable.map((row) => (
                    <div
                      key={row.item}
                      className="px-8 py-6 grid md:grid-cols-[1fr_140px_100px] gap-6 hover:bg-[#00F5FF]/3 transition-colors print-table-row"
                    >
                      {/* Main info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="w-8 h-8 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center shrink-0 no-print">
                            <row.icon className="w-4 h-4 text-[#00F5FF]" />
                          </div>
                          <h3 className="font-bold text-foreground text-sm">{row.item}</h3>
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground print-muted">
                            {row.category}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-[#00F5FF]/70 mb-1 print-cyan">
                            Barrier: {row.barrier}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed print-muted">
                            {row.accommodation}
                          </p>
                        </div>
                      </div>

                      {/* Priority badge */}
                      <div className="flex md:justify-center items-start md:items-center pt-1">
                        <span
                          className={`inline-block text-xs font-mono font-bold px-3 py-1.5 rounded-full ${
                            row.priority === "Critical"
                              ? "bg-red-500/10 text-red-400 border border-red-500/20 print-badge-critical"
                              : row.priority === "High"
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 print-badge-high"
                              : "bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20 print-badge-standard"
                          }`}
                        >
                          {row.priority}
                        </span>
                      </div>

                      {/* Cost */}
                      <div className="flex md:justify-end items-start md:items-center">
                        <span className="text-base font-bold font-mono text-[#00F5FF] print-cyan">
                          {row.cost}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Totals row */}
                  <div className="px-8 py-5 bg-[#00F5FF]/6 border-t-2 border-[#00F5FF]/25 flex items-center justify-between print-table-header">
                    <div>
                      <p className="text-sm font-bold text-foreground">Total Infrastructure Investment</p>
                      <p className="text-xs text-muted-foreground font-mono print-muted">
                        {infraTable.length} vocational accommodation items · Full production stack
                      </p>
                    </div>
                    <span className="text-2xl font-bold font-mono text-[#00F5FF] print-cyan">{totalCost}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Surface Finishing Technical Specification ─── */}
            <div className="mb-12 print-section">
              <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden print-card">

                {/* Header */}
                <div className="bg-[#00F5FF]/6 border-b border-[#00F5FF]/15 px-8 py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 print-table-header">
                  <div>
                    <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-1 no-print print-cyan">// section.01a — surface.finishing.specification</span>
                    <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[#00F5FF] no-print" />
                      Surface Finishing: Mandatory Vocational Accommodation Detail
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">Gaahleri Swallowtail SD — Dual-Unit Configuration &amp; Ergonomic Mandate</p>
                  </div>
                  <span className="hidden sm:block text-xs font-mono px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 whitespace-nowrap shrink-0 self-start mt-1 no-print">
                    Non-Negotiable Accommodation
                  </span>
                </div>

                {/* Non-viability mandate */}
                <div className="px-8 py-5 border-b border-red-500/15 bg-red-500/4 flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block mb-1">Non-Viable Tool — Top-Trigger Airbrush Design</span>
                    <p className="text-sm text-muted-foreground leading-relaxed print-muted">
                      Standard top-trigger airbrush actuation requires repeated pinch-grip compression at the index finger, sustained over the duration of a production session. For the Napier Labs founder, this actuation pattern is <span className="text-red-400 font-semibold">non-viable</span> due to documented fine motor dexterity constraints — the same hand spasm and motor control degradation that underpins this vocational rehabilitation case. Conventional airbrush ergonomics are a direct barrier to surface finishing production.
                    </p>
                  </div>
                </div>

                {/* Dual-unit spec cards */}
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#00F5FF]/10 border-b border-[#00F5FF]/10">

                  {/* Unit A */}
                  <div className="p-7">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/25">Unit A</span>
                        <h3 className="text-sm font-bold text-foreground">Swallowtail SD — 0.5mm</h3>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">Base / Clear</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 print-muted">
                      High-volume output configuration — optimized for broad base coat coverage and UV-protective clear topcoat application across large substrate surfaces. The wider 0.5mm nozzle delivers consistent full-panel coverage at low actuation effort.
                    </p>
                    <div className="space-y-2">
                      {[
                        { label: "Needle / Nozzle", value: "0.5mm" },
                        { label: "Application", value: "Base Coat, Clear Coat" },
                        { label: "Substrates", value: "ASA Print, Vinyl, Fabric" },
                        { label: "Actuation", value: "Pistol-Grip (Ergonomic)" },
                      ].map((spec) => (
                        <div key={spec.label} className="flex items-center justify-between py-1.5 border-b border-[#00F5FF]/8 last:border-0">
                          <span className="text-xs font-mono text-muted-foreground print-muted">{spec.label}</span>
                          <span className="text-xs font-semibold text-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Unit B */}
                  <div className="p-7">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/25">Unit B</span>
                        <h3 className="text-sm font-bold text-foreground">Swallowtail SD — 0.3mm</h3>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20 shrink-0">Detail / Stencil</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 print-muted">
                      Precision output configuration — optimized for fine-line stencil work, logo detail application, and gradient fade finishing. The 0.3mm nozzle delivers sub-millimeter edge control required for branded production deliverables and holster surface detailing.
                    </p>
                    <div className="space-y-2">
                      {[
                        { label: "Needle / Nozzle", value: "0.3mm" },
                        { label: "Application", value: "Detail, Stencil, Gradient" },
                        { label: "Substrates", value: "ASA Print, Hard Surface" },
                        { label: "Actuation", value: "Pistol-Grip (Ergonomic)" },
                      ].map((spec) => (
                        <div key={spec.label} className="flex items-center justify-between py-1.5 border-b border-[#00F5FF]/8 last:border-0">
                          <span className="text-xs font-mono text-muted-foreground print-muted">{spec.label}</span>
                          <span className="text-xs font-semibold text-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Unified Ergonomic Interface rationale */}
                <div className="px-8 py-6 bg-[#00F5FF]/3 flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#00FF7F] shrink-0 mt-0.5 no-print" />
                  <div>
                    <span className="text-xs font-mono font-bold text-[#00FF7F] uppercase tracking-widest block mb-2">Unified Ergonomic Interface — Accommodation Rationale</span>
                    <p className="text-sm text-muted-foreground leading-relaxed print-muted">
                      By standardizing both finishing units on the same Swallowtail SD pistol-grip platform, the Napier Labs production workflow achieves a <span className="text-foreground font-semibold">Unified Ergonomic Interface</span> across all finishing phases. The operator switches between Unit A and Unit B — pre-loaded with different needle configurations — without changing grip style, trigger mechanism, or hand position. All surface finishing production is performed using a single, pain-free, low-force <span className="text-[#00F5FF] font-semibold">pistol-grip actuation pattern</span> that does not aggravate documented motor control symptoms. This is not a preference — it is the only actuation geometry that allows sustained finishing output within the operator&apos;s functional capacity.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ─── Vibe Coding Methodology ─── */}
            <div className="mb-12 print-section">
              <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden print-card">

                <div className="bg-[#00F5FF]/6 border-b border-[#00F5FF]/15 px-8 py-5 print-table-header">
                  <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-1 no-print print-cyan">
                    // section.02
                  </span>
                  <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Brain className="w-5 h-5 text-[#00F5FF] no-print" />
                    The Vibe Coding Methodology
                  </h2>
                </div>

                <div className="px-8 py-8 space-y-6">
                  <p className="text-sm text-muted-foreground leading-relaxed print-muted">
                    The Napier Labs operational model is built on a proprietary methodology called <strong className="text-foreground">"Vibe Coding"</strong> — a framework in which Artificial Intelligence functions as a <strong className="text-foreground">Physical Prosthetic</strong>. Rather than augmenting cognitive performance alone, AI is deployed to directly replace the physical and fine-motor tasks that would otherwise be inaccessible due to documented vocational barriers.
                  </p>

                  <div className="grid md:grid-cols-3 gap-5">
                    {[
                      {
                        step: "01",
                        title: "Intent Layer",
                        body: "The operator defines the design intent — dimensions, material, geometry — using natural language or high-level CAD parameters. No precise manual drafting required.",
                      },
                      {
                        step: "02",
                        title: "AI Bridge Layer",
                        body: "Generative AI tools translate operator intent into production-ready outputs: STL files, G-code, cut paths, and vinyl layouts. This is the Physical Prosthetic — it converts cognitive direction into physical manufacturing instructions.",
                      },
                      {
                        step: "03",
                        title: "Automated Execution Layer",
                        body: "Hardware automation (Prusa XL, Graphtec CE8000-60) executes the AI-generated files without manual physical intervention. The operator monitors; the machines produce.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="rounded-xl border border-[#00F5FF]/15 p-5 print-card"
                      >
                        <span className="text-xs font-mono text-[#00F5FF] block mb-2 print-cyan">// step.{item.step}</span>
                        <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed print-muted">{item.body}</p>
                      </div>
                    ))}
                  </div>

                  {/* Core statement */}
                  <div className="rounded-xl border border-[#00F5FF]/30 bg-[#00F5FF]/5 px-6 py-5 flex gap-4 items-start print-card">
                    <div className="w-1 self-stretch rounded-full bg-[#00F5FF] shrink-0" />
                    <div>
                      <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest block mb-2 print-cyan">
                        Accessibility Statement
                      </span>
                      <p className="text-sm text-foreground font-medium leading-relaxed">
                        This methodology is not a productivity strategy — it is an <strong>accessibility framework</strong>. Without the AI bridge and the automated hardware that executes its output, the physical production tasks required to operate Napier Labs are not performable within the operator's documented functional limitations. The infrastructure requested in Section 01 is the physical implementation of this framework.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Evidence Links ─── */}
            <div className="mb-12 print-section no-print">
              <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden">
                <div className="bg-[#00F5FF]/6 border-b border-[#00F5FF]/15 px-8 py-5">
                  <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-1">// section.03</span>
                  <h2 className="text-lg font-bold text-foreground">Supporting Evidence</h2>
                </div>
                <div className="px-8 py-7 grid md:grid-cols-2 gap-5">
                  <div className="rounded-xl border border-[#00F5FF]/15 p-6">
                    <span className="text-xs font-mono text-[#00F5FF]/60 block mb-2">// financial.projection</span>
                    <h3 className="text-sm font-bold text-foreground mb-2">60-Day Scaling Log &amp; ROI Analysis</h3>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                      Full revenue model, COGS breakdown, and Baseline vs. AI-Augmented operations table demonstrating the 3.5x scaling trajectory.
                    </p>
                    <Link
                      href="/proposal"
                      className="inline-flex items-center gap-2 text-sm font-bold font-mono text-[#00F5FF] border border-[#00F5FF]/30 rounded-lg px-5 py-2.5 hover:bg-[#00F5FF]/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View 60-Day Scaling Log
                    </Link>
                  </div>

                  <div className="rounded-xl border border-[#00F5FF]/15 p-6">
                    <span className="text-xs font-mono text-[#00F5FF]/60 block mb-2">// case.study</span>
                    <h3 className="text-sm font-bold text-foreground mb-2">3D Manufacturing Case Study</h3>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                      Engineering report for the Universal Impact Driver Holster — demonstrating AI-driven design eliminating 95% of physical labor in construction hardware manufacturing.
                    </p>
                    <Link
                      href="/#projects"
                      className="inline-flex items-center gap-2 text-sm font-bold font-mono text-[#00F5FF] border border-[#00F5FF]/30 rounded-lg px-5 py-2.5 hover:bg-[#00F5FF]/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View 3D Manufacturing Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Print-only evidence note */}
            <div className="hidden print:block mb-10 border border-gray-300 rounded-lg p-6">
              <h2 className="text-base font-bold text-black mb-3">Supporting Evidence (Digital References)</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>60-Day Scaling Log &amp; ROI Analysis:</strong>{" "}
                  <span className="font-mono">napierlabs.dev/proposal</span>
                </li>
                <li>
                  <strong>3D Manufacturing Case Study (Impact Driver Holster):</strong>{" "}
                  <span className="font-mono">napierlabs.dev/#projects</span>
                </li>
              </ul>
            </div>

            {/* ─── Section 04: Technical Compute Requirement ─── */}
            <div className="mb-12 print-section">
              <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden print-card">

                {/* Section header */}
                <div className="bg-[#00F5FF]/6 border-b border-[#00F5FF]/15 px-8 py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 print-table-header">
                  <div>
                    <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-1 no-print print-cyan">// section.04</span>
                    <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-[#00F5FF] no-print" />
                      Technical Requirement: Generative AI &amp; CAD Compute Node
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      High-Fidelity Generative Compute — Minimum System Specifications for 2026 Vocational Operation
                    </p>
                  </div>
                  <span className="hidden sm:block text-xs font-mono px-3 py-1.5 rounded-full bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20 whitespace-nowrap shrink-0 self-start mt-1 no-print">
                    Data Sheet Rev. 2026
                  </span>
                </div>

                {/* VRAM / CUDA / Tensor Spec Table */}
                <div className="overflow-x-auto border-b border-[#00F5FF]/10">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#00F5FF]/10 bg-[#00F5FF]/3 print-table-header">
                        <th className="text-left px-6 py-3 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider print-cyan">Compute Parameter</th>
                        <th className="text-right px-6 py-3 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider print-cyan">Minimum Required</th>
                        <th className="text-right px-6 py-3 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider print-cyan">RTX 5090 (Proposed)</th>
                        <th className="text-left px-6 py-3 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider print-cyan">Vocational Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          param: "VRAM Capacity",
                          min: "24 GB GDDR7",
                          proposed: "24 GB GDDR7X",
                          fn: "Full generative AI mesh inference; local LLM execution without cloud dependency",
                        },
                        {
                          param: "CUDA Core Count",
                          min: "16,000+ cores",
                          proposed: "21,760 cores",
                          fn: "Parallel topology optimization iterations; FEA solver acceleration",
                        },
                        {
                          param: "Tensor Core (AI) Gen",
                          min: "4th Gen (FP8 support)",
                          proposed: "5th Gen (FP4/FP8)",
                          fn: "Autodesk AI inference, nTop generative design, MIT MechStyle model runs",
                        },
                        {
                          param: "Memory Bandwidth",
                          min: "1.5 TB/s",
                          proposed: "1.79 TB/s",
                          fn: "High-throughput polygon mesh I/O for multi-body ASA simulations",
                        },
                        {
                          param: "Ray Tracing Cores",
                          min: "3rd Gen",
                          proposed: "4th Gen",
                          fn: "Real-time photorealistic CAD render for client review and documentation",
                        },
                        {
                          param: "NVLink / PCIe",
                          min: "PCIe 5.0 x16",
                          proposed: "PCIe 5.0 x16",
                          fn: "Full-bandwidth data transfer for AI training dataset pipelines",
                        },
                      ].map((row, i) => (
                        <tr
                          key={row.param}
                          className={`border-b border-[#00F5FF]/8 hover:bg-[#00F5FF]/3 transition-colors print-table-row ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}
                        >
                          <td className="px-6 py-4 font-semibold text-foreground text-sm">{row.param}</td>
                          <td className="px-6 py-4 text-right font-mono text-xs text-muted-foreground print-muted">{row.min}</td>
                          <td className="px-6 py-4 text-right font-mono text-xs font-bold text-[#00F5FF] print-cyan">{row.proposed}</td>
                          <td className="px-6 py-4 text-xs text-muted-foreground leading-relaxed max-w-[260px] print-muted">{row.fn}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* System Capability Comparison */}
                <div className="px-8 py-7 border-b border-[#00F5FF]/10">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5 flex items-center gap-2">
                    <span className="w-px h-4 bg-[#00F5FF] inline-block" />
                    System Capability Comparison
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">

                    {/* Current System — FAIL */}
                    <div className="rounded-xl border-2 border-red-500/30 bg-red-500/4 overflow-hidden print-card">
                      <div className="px-5 py-3 border-b border-red-500/20 bg-red-500/8 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                          <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">Current System</span>
                        </div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-500/15 text-red-400 border border-red-500/25">2019 Mac — FAILS</span>
                      </div>
                      <div className="p-5 space-y-3">
                        {[
                          "Fails to meet minimum VRAM requirements for Generative AI",
                          "Thermal throttling prevents industrial rendering sessions",
                          "No dedicated CUDA acceleration — CPU-only inference",
                          "Unable to run nTop, Autodesk AI, or MIT MechStyle at operational load",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <XCircle className="w-3.5 h-3.5 text-red-400/70 shrink-0 mt-0.5" />
                            <span className="text-xs text-muted-foreground leading-relaxed print-muted">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Proposed System — PASS */}
                    <div className="rounded-xl border-2 border-[#00FF7F]/25 bg-[#00FF7F]/3 overflow-hidden print-card">
                      <div className="px-5 py-3 border-b border-[#00FF7F]/20 bg-[#00FF7F]/8 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00FF7F] shrink-0" />
                          <span className="text-xs font-mono font-bold text-[#00FF7F] uppercase tracking-wider">Proposed System</span>
                        </div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#00FF7F]/10 text-[#00FF7F] border border-[#00FF7F]/20">RTX 5090 — PASSES</span>
                      </div>
                      <div className="p-5 space-y-3">
                        {[
                          "Meets and exceeds all 2026 industrial CAD standards",
                          "24 GB VRAM allows 100% local AI inference — no cloud",
                          "Topology Optimization (nTop) runs at full fidelity",
                          "Sustained compute under thermal load for full production sessions",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF7F]/70 shrink-0 mt-0.5" />
                            <span className="text-xs text-muted-foreground leading-relaxed print-muted">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Mandatory Hardware Footer */}
                <div className="px-8 py-6 bg-amber-500/5 border-t-2 border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 print-card">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 no-print" />
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">Mandatory Hardware Requirement</span>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      The software stack required for Napier Labs —{" "}
                      <span className="text-[#00F5FF]">Autodesk Fusion</span>,{" "}
                      <span className="text-[#00F5FF]">nTop</span>, and{" "}
                      <span className="text-[#00F5FF]">MIT MechStyle</span>{" "}
                      — requires a dedicated <span className="text-amber-400 font-bold">24 GB VRAM GPU</span> to perform vocational tasks. Without this, generative design, stress simulation, and AI-assisted CAD are non-functional at the operator&apos;s documented capacity level.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ─── Section 05: 30-Day Launch Sequence ─── */}
            <div className="mb-12 print-section">
              <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden print-card">

                {/* Section header */}
                <div className="bg-[#00F5FF]/6 border-b border-[#00F5FF]/15 px-8 py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 print-table-header">
                  <div>
                    <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest block mb-1 no-print print-cyan">// section.05 — implementation.timeline</span>
                    <h2 className="text-lg font-bold text-foreground">
                      Napier Labs: 30-Day Launch Sequence (Post-Funding)
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Immediate Vocational Implementation — Week-by-Week Activation Protocol
                    </p>
                  </div>
                  <span className="hidden sm:block text-xs font-mono px-3 py-1.5 rounded-full bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20 whitespace-nowrap shrink-0 self-start mt-1 no-print">
                    T+0 to T+30 Days
                  </span>
                </div>

                {/* Timeline steps */}
                <div className="px-8 py-8">
                  <div className="relative">
                    {/* Vertical connector line */}
                    <div className="absolute left-[19px] top-8 bottom-8 w-px bg-gradient-to-b from-[#00F5FF]/40 via-[#00F5FF]/20 to-[#00F5FF]/5 no-print" />

                    <div className="space-y-0">
                      {[
                        {
                          week: "Week 1",
                          days: "Days 1–7",
                          title: "Infrastructure Deployment & Calibration",
                          color: "#00F5FF",
                          bgColor: "bg-[#00F5FF]/10",
                          borderColor: "border-[#00F5FF]/30",
                          tasks: [
                            "Receive and install Puget Systems RTX 5090 Workstation; run GPU benchmark suite",
                            "Prusa XL unboxing, first-layer calibration, and multi-material toolhead configuration (ASA + TPU + PETG)",
                            "Graphtec CE8000-60 installation, barcode workflow integration test with Vinyl Vision Pro",
                            "Gaahleri Atlantis airbrush booth assembly and airflow safety certification",
                            "UPLIFT desk ergo configuration and dual-monitor rig build",
                          ],
                          milestone: "Lab fully operational — all hardware live and calibrated",
                        },
                        {
                          week: "Week 2",
                          days: "Days 8–14",
                          title: "AI Stack Activation & First Production Run",
                          color: "#00F5FF",
                          bgColor: "bg-[#00F5FF]/8",
                          borderColor: "border-[#00F5FF]/25",
                          tasks: [
                            "Install and license Autodesk Fusion, nTop, and MIT MechStyle on RTX 5090 workstation",
                            "Run first local AI inference pipeline — topology optimization test on Impact Driver Holster v1.0",
                            "Execute first Prusa XL production run: 10x ASA holster prototypes in 'Lights-Out' overnight cycle",
                            "Complete first Graphtec fleet magnet cut batch using barcode-driven workflow",
                            "Capture production documentation and photography for B2B pitch assets",
                          ],
                          milestone: "First AI-manufactured products in hand — prototype validation complete",
                        },
                        {
                          week: "Week 3",
                          days: "Days 15–21",
                          title: "B2B Outreach & Client Acquisition",
                          color: "#00FF7F",
                          bgColor: "bg-[#00FF7F]/8",
                          borderColor: "border-[#00FF7F]/25",
                          tasks: [
                            "Launch targeted outreach to local Amish roofing and framing contractors (primary ICP)",
                            "Present Fleet & Field Branding package — trailer magnets and fleet graphics — to 3 target accounts",
                            "Deliver Crew Apparel Cycle sample pack (Hotronix 360 IQ printed hats) to 2 construction firms",
                            "Submit holster samples to 2 job-site managers for field testing feedback",
                            "Initiate Garage Door Sales Pro client referral pipeline for upsell opportunities",
                          ],
                          milestone: "Minimum 2 signed B2B LOIs or purchase orders in hand",
                        },
                        {
                          week: "Week 4",
                          days: "Days 22–30",
                          title: "First Fulfillment Cycle & Recurring Revenue Lock-In",
                          color: "#00FF7F",
                          bgColor: "bg-[#00FF7F]/6",
                          borderColor: "border-[#00FF7F]/20",
                          tasks: [
                            "Complete first full B2B fulfillment cycle: fleet graphics + crew apparel for signed accounts",
                            "Invoice Client 1 — Starter Bundle (24 shirts + signage): ~$420 gross",
                            "Invoice Client 2 — Growth Bundle (48 shirts): ~$545 gross + $340 vinyl add-on",
                            "Set up monthly recurring order cadence with both clients via Vinyl Vision Pro subscription logic",
                            "File first OOD progress report: lab operational, first revenue generated, scaling trajectory confirmed",
                          ],
                          milestone: "$1,500+ first-month gross — recurring fulfillment cycle established",
                        },
                      ].map((step, i) => (
                        <div key={step.week} className="relative flex gap-5 pb-8 last:pb-0 print-table-row">
                          {/* Step indicator */}
                          <div className="relative z-10 flex flex-col items-center shrink-0 no-print" style={{ width: "40px" }}>
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs font-mono border-2 ${step.bgColor} ${step.borderColor}`}
                              style={{ color: step.color, borderColor: `${step.color}40` }}
                            >
                              W{i + 1}
                            </div>
                          </div>

                          {/* Content card */}
                          <div className={`flex-1 rounded-xl border ${step.borderColor} overflow-hidden print-card`} style={{ borderColor: `${step.color}20` }}>
                            {/* Card header */}
                            <div className="px-6 py-3 border-b flex items-center justify-between gap-4" style={{ borderColor: `${step.color}15`, backgroundColor: `${step.color}06` }}>
                              <div className="flex items-center gap-3 flex-wrap">
                                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded" style={{ color: step.color, backgroundColor: `${step.color}15`, border: `1px solid ${step.color}25` }}>
                                  {step.week}
                                </span>
                                <span className="text-xs font-mono text-muted-foreground print-muted">{step.days}</span>
                                <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                              </div>
                            </div>

                            {/* Task list */}
                            <div className="px-6 py-4 space-y-2">
                              {step.tasks.map((task) => (
                                <div key={task} className="flex items-start gap-2.5">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: `${step.color}70` }} />
                                  <span className="text-xs text-muted-foreground leading-relaxed print-muted">{task}</span>
                                </div>
                              ))}
                            </div>

                            {/* Milestone footer */}
                            <div className="px-6 py-3 border-t flex items-center gap-2" style={{ borderColor: `${step.color}15`, backgroundColor: `${step.color}04` }}>
                              <span className="text-xs font-mono font-bold" style={{ color: step.color }}>✦ Milestone:</span>
                              <span className="text-xs font-semibold text-foreground">{step.milestone}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Immediate ROI callout */}
                <div className="mx-8 mb-8 rounded-xl border border-[#00F5FF]/30 bg-[#00F5FF]/5 px-6 py-5 flex gap-4 items-start print-card">
                  <div className="w-1 self-stretch rounded-full bg-[#00F5FF] shrink-0" />
                  <div>
                    <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest block mb-2 print-cyan">Immediate ROI — Day 30 Target</span>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      By Day 30, Napier Labs transitions from R&amp;D to active B2B fulfillment, securing the first{" "}
                      <span className="text-[#00F5FF] font-bold">$1,500 in recurring monthly revenue</span>.
                      This is not a projection — it is a direct output of the operational stack activated in Weeks 1–2 and the client relationships initiated in Week 3.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Signature / Attestation block */}
            <div className="rounded-2xl border border-[#00F5FF]/20 p-8 print-card print-section">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-1 self-stretch rounded-full bg-[#00F5FF] shrink-0 print-cyan" />
                <div>
                  <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest block mb-2 print-cyan">
                    Operator Attestation
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed print-muted">
                    The information presented in this document is accurate to the best of my knowledge and reflects genuine vocational barriers, documented functional limitations, and the infrastructure required to operate Napier Labs at a sustainable, scalable level under the 2026 OOD Vocational Rehabilitation program.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-[#00F5FF]/10">
                <div>
                  <span className="text-xs font-mono text-muted-foreground block mb-2 print-muted">Operator / Owner</span>
                  <div className="h-8 border-b border-[#00F5FF]/20 print:border-gray-400" />
                  <span className="text-xs text-muted-foreground mt-1 block print-muted">Napier Labs</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground block mb-2 print-muted">Date</span>
                  <div className="h-8 border-b border-[#00F5FF]/20 print:border-gray-400" />
                  <span className="text-xs text-muted-foreground mt-1 block print-muted">2026</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground block mb-2 print-muted">Counselor Review</span>
                  <div className="h-8 border-b border-[#00F5FF]/20 print:border-gray-400" />
                  <span className="text-xs text-muted-foreground mt-1 block print-muted">OOD Case Ref.</span>
                </div>
              </div>
            </div>

            {/* Nav footer — screen only */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
              <Link
                href="/"
                className="text-xs font-mono text-muted-foreground hover:text-[#00F5FF] transition-colors"
              >
                ← Return to Public Site
              </Link>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 text-sm font-bold font-mono text-[#00F5FF] border border-[#00F5FF]/30 rounded-lg px-5 py-2.5 hover:bg-[#00F5FF]/10 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Print / Save as PDF
              </button>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}
