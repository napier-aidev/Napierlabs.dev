"use client"

import Link from "next/link"
import { Lock, ExternalLink, Brain, Cpu, Scissors, ShieldCheck, Armchair, Monitor, FileText } from "lucide-react"

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
    item: "Gaahleri Atlantis Waterfall Booth & Silent Air Compressor",
    category: "Laboratory Safety Infrastructure",
    cost: "$2,100",
    barrier: "Respiratory & Environmental Safety",
    accommodation:
      "Medical-grade downdraft waterfall filtration creates a compliant, clean-room standard airbrush environment. Eliminates aerosolized solvent and paint particulate exposure — a documented occupational health risk for extended production sessions.",
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
                <li>
                  <strong>Full Ecosystem &amp; Hardware Audit:</strong>{" "}
                  <span className="font-mono">napierlabs.dev/ecosystem</span>
                </li>
              </ul>
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
              <Link
                href="/ecosystem"
                className="text-xs font-mono text-muted-foreground hover:text-[#00F5FF] transition-colors"
              >
                View Full Ecosystem →
              </Link>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}
