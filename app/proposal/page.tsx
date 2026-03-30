import { Lock, TrendingUp, DollarSign, BarChart3, Layers, Zap, Terminal } from "lucide-react"
import Link from "next/link"

const bundleRows = [
  {
    bundle: "Starter B2B Bundle",
    units: "24 shirts / mo",
    print: "$5.00",
    blank: "$3.50",
    sublimation: "$1.50",
    fulfillment: "$0.75",
    costPerUnit: "$10.75",
    sellPrice: "$22.00",
    grossPerUnit: "$11.25",
    monthlyGross: "$270",
    note: "Entry-level: retail shops, small teams",
  },
  {
    bundle: "Growth B2B Bundle",
    units: "48 shirts / mo",
    print: "$4.50",
    blank: "$3.25",
    sublimation: "$1.25",
    fulfillment: "$0.65",
    costPerUnit: "$9.65",
    sellPrice: "$21.00",
    grossPerUnit: "$11.35",
    monthlyGross: "$545",
    note: "Mid-tier: sports teams, uniform contracts",
  },
  {
    bundle: "Scale B2B Bundle",
    units: "96 shirts / mo",
    print: "$4.00",
    blank: "$3.00",
    sublimation: "$1.00",
    fulfillment: "$0.55",
    costPerUnit: "$8.55",
    sellPrice: "$20.00",
    grossPerUnit: "$11.45",
    monthlyGross: "$1,099",
    note: "Production-tier: events, B2B wholesale",
  },
  {
    bundle: "Vinyl Signage Package",
    units: "20 units / mo",
    print: "—",
    blank: "$2.00",
    sublimation: "—",
    fulfillment: "$1.25",
    costPerUnit: "$8.25",
    sellPrice: "$28.00",
    grossPerUnit: "$19.75",
    monthlyGross: "$395",
    note: "Vehicle graphics, retail signage",
  },
  {
    bundle: "Digital App Retainer",
    units: "1 client / mo",
    print: "—",
    blank: "—",
    sublimation: "—",
    fulfillment: "$0.00",
    costPerUnit: "~$120 time",
    sellPrice: "$750",
    grossPerUnit: "$630",
    monthlyGross: "$750",
    note: "Vinyl Vision Pro / Garage Door SaaS",
  },
]

const roiRows = [
  {
    metric: "Shirts Produced / Month",
    baseline: "27 units",
    ai: "96 units",
    delta: "+255%",
    driver: "AI layout optimization, batch queuing",
  },
  {
    metric: "Design Hours / Order",
    baseline: "2.5 hrs",
    ai: "0.4 hrs",
    delta: "−84%",
    driver: "Vinyl Vision Pro AI auto-trace & cut path",
  },
  {
    metric: "Error Rate (Remakes)",
    baseline: "~18%",
    ai: "~3%",
    delta: "−83%",
    driver: "ARMS 8.0 optical registration, barcode workflow",
  },
  {
    metric: "Monthly Gross Revenue",
    baseline: "$590",
    ai: "$3,059",
    delta: "+418%",
    driver: "Volume scaling across all bundles",
  },
  {
    metric: "Production Labor Hours",
    baseline: "60 hrs",
    ai: "28 hrs",
    delta: "−53%",
    driver: "Adaptive tooling (Media Set Assist, Blind-Touch)",
  },
  {
    metric: "Clients Serviced / Month",
    baseline: "2–3",
    ai: "7–10",
    delta: "+3.5x",
    driver: "AI automation + Garage Door Pro referrals",
  },
  {
    metric: "Net Operating Margin",
    baseline: "~22%",
    ai: "~51%",
    delta: "+132%",
    driver: "Overhead stays flat; volume lifts gross margin",
  },
  {
    metric: "Annual Run Rate",
    baseline: "$7,080",
    ai: "$36,708",
    delta: "+419%",
    driver: "Full B2B stack operational by Q3 2026",
  },
]

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Confidentiality Banner */}
      <div className="bg-[#00F5FF]/10 border-b border-[#00F5FF]/20 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
          <Lock className="w-4 h-4 text-[#00F5FF] shrink-0" />
          <p className="text-xs font-mono text-[#00F5FF] text-center">
            PRIVATE — For OOD Partners and Technical Collaborators Only. Not for public distribution.
          </p>
          <Lock className="w-4 h-4 text-[#00F5FF] shrink-0" />
        </div>
      </div>

      <main className="px-4 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-[#00F5FF]/20" />
              <span className="text-xs font-mono text-[#00F5FF]/60 uppercase tracking-widest">
                // executive.strategy.2026
              </span>
              <div className="h-px flex-1 bg-[#00F5FF]/20" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Napier Labs:{" "}
              <span className="text-[#00F5FF]">2026 Executive Strategy</span>
              {" "}&amp; Vocational Roadmap
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Private document for OOD Partners and Technical Collaborators only. This deck outlines the full financial architecture, production scaling model, and AI-driven growth trajectory underpinning the Napier Labs 2026 operating plan.
            </p>

            {/* Key metric pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: TrendingUp, label: "3.5x Scaling Target", sub: "Q3 2026" },
                { icon: DollarSign, label: "$36,708 ARR Projection", sub: "Full Stack Ops" },
                { icon: Zap, label: "−84% Design Time", sub: "AI-Augmented" },
                { icon: BarChart3, label: "51% Net Margin", sub: "At Scale" },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00F5FF]/25 bg-[#00F5FF]/5"
                >
                  <pill.icon className="w-4 h-4 text-[#00F5FF]" />
                  <div>
                    <span className="text-sm font-semibold text-foreground block leading-none">
                      {pill.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{pill.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Table 1: Monthly B2B Bundle Breakdown ─── */}
          <div className="mb-12">
            <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden">
              {/* Table header */}
              <div className="bg-[#00F5FF]/8 border-b border-[#00F5FF]/20 px-8 py-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#00F5FF]/60 uppercase tracking-widest block mb-1">
                    // revenue.model.01
                  </span>
                  <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#00F5FF]" />
                    Monthly B2B Bundle Breakdown
                  </h2>
                </div>
                <span className="hidden sm:block text-xs font-mono px-3 py-1.5 rounded-full bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20">
                  Cost-Basis Analysis
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#00F5FF]/10 bg-[#00F5FF]/3">
                      <th className="text-left px-6 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">Bundle</th>
                      <th className="text-right px-4 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">Volume</th>
                      <th className="text-right px-4 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">Print</th>
                      <th className="text-right px-4 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">Blank</th>
                      <th className="text-right px-4 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">Sublim.</th>
                      <th className="text-right px-4 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">Fulfill.</th>
                      <th className="text-right px-4 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">COGS/Unit</th>
                      <th className="text-right px-4 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">Sell</th>
                      <th className="text-right px-4 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">Gross/Unit</th>
                      <th className="text-right px-6 py-4 font-mono text-xs text-[#00F5FF] uppercase tracking-wider font-bold">Mo. Gross</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bundleRows.map((row, i) => (
                      <tr
                        key={row.bundle}
                        className={`border-b border-[#00F5FF]/8 transition-colors hover:bg-[#00F5FF]/4 ${
                          i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="font-semibold text-foreground">{row.bundle}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{row.note}</div>
                        </td>
                        <td className="px-4 py-4 text-right font-mono text-xs text-muted-foreground">{row.units}</td>
                        <td className="px-4 py-4 text-right font-mono text-xs text-muted-foreground">{row.print}</td>
                        <td className="px-4 py-4 text-right font-mono text-xs text-muted-foreground">{row.blank}</td>
                        <td className="px-4 py-4 text-right font-mono text-xs text-muted-foreground">{row.sublimation}</td>
                        <td className="px-4 py-4 text-right font-mono text-xs text-muted-foreground">{row.fulfillment}</td>
                        <td className="px-4 py-4 text-right font-mono text-xs text-foreground">{row.costPerUnit}</td>
                        <td className="px-4 py-4 text-right font-mono text-xs text-foreground">{row.sellPrice}</td>
                        <td className="px-4 py-4 text-right font-mono text-xs text-foreground">{row.grossPerUnit}</td>
                        <td className="px-6 py-4 text-right font-mono font-bold text-[#00F5FF]">{row.monthlyGross}</td>
                      </tr>
                    ))}
                    {/* Totals row */}
                    <tr className="bg-[#00F5FF]/8 border-t-2 border-[#00F5FF]/30">
                      <td colSpan={9} className="px-6 py-4 font-bold text-foreground text-sm">
                        Combined Monthly Gross (All Bundles Active)
                      </td>
                      <td className="px-6 py-4 text-right font-mono font-bold text-[#00F5FF] text-base">
                        $3,059
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ─── Table 2: Scaling ROI ─── */}
          <div className="mb-12">
            <div className="rounded-2xl border border-[#00F5FF]/20 overflow-hidden">
              <div className="bg-[#00F5FF]/8 border-b border-[#00F5FF]/20 px-8 py-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#00F5FF]/60 uppercase tracking-widest block mb-1">
                    // revenue.model.02
                  </span>
                  <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#00F5FF]" />
                    Scaling ROI: Baseline vs. AI-Augmented Operations
                  </h2>
                </div>
                <span className="hidden sm:block text-xs font-mono px-3 py-1.5 rounded-full bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/20">
                  3.5x Trajectory
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#00F5FF]/10 bg-[#00F5FF]/3">
                      <th className="text-left px-6 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">Metric</th>
                      <th className="text-right px-6 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">Baseline (Manual)</th>
                      <th className="text-right px-6 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">AI-Augmented</th>
                      <th className="text-right px-6 py-4 font-mono text-xs text-[#00F5FF] uppercase tracking-wider font-bold">Delta</th>
                      <th className="text-left px-6 py-4 font-mono text-xs text-[#00F5FF]/70 uppercase tracking-wider">AI Driver</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roiRows.map((row, i) => {
                      const isPositive = row.delta.startsWith("+")
                      const isNegative = row.delta.startsWith("−")
                      return (
                        <tr
                          key={row.metric}
                          className={`border-b border-[#00F5FF]/8 transition-colors hover:bg-[#00F5FF]/4 ${
                            i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"
                          }`}
                        >
                          <td className="px-6 py-4 font-semibold text-foreground">{row.metric}</td>
                          <td className="px-6 py-4 text-right font-mono text-sm text-muted-foreground">{row.baseline}</td>
                          <td className="px-6 py-4 text-right font-mono text-sm text-foreground font-semibold">{row.ai}</td>
                          <td className="px-6 py-4 text-right">
                            <span
                              className={`inline-block font-mono font-bold text-sm px-2 py-0.5 rounded ${
                                isPositive
                                  ? "text-[#00F5FF] bg-[#00F5FF]/10"
                                  : isNegative
                                  ? "text-green-400 bg-green-400/10"
                                  : "text-foreground"
                              }`}
                            >
                              {row.delta}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-xs text-muted-foreground max-w-[220px]">{row.driver}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Operational Dependency Note */}
          <div className="mb-12 rounded-xl border border-[#00F5FF]/30 bg-[#00F5FF]/5 px-8 py-6 flex gap-5 items-start">
            <div className="w-1 self-stretch rounded-full bg-[#00F5FF] shrink-0" />
            <div>
              <span className="text-xs font-mono font-bold text-[#00F5FF] uppercase tracking-widest block mb-2">
                Critical Path — Counselor Note
              </span>
              <p className="text-foreground font-medium leading-relaxed mb-3">
                This 3.5x scaling trajectory is fundamentally dependent on the synergy between{" "}
                <span className="text-[#00F5FF]">Local AI Inference</span> and{" "}
                <span className="text-[#00F5FF]">Industrial-Grade Plotting</span>.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Graphtec CE8000-60 cutter eliminates the primary production bottleneck. The Puget Systems workstation eliminates the AI inference bottleneck. Without both, the volume numbers in this deck are unachievable. These are not luxury items — they are the load-bearing infrastructure of the business model.
              </p>
            </div>
          </div>

          {/* Vocational Accommodation Section */}
          <div className="mb-12 glass-card rounded-2xl p-8">
            <span className="text-xs font-mono text-[#00F5FF]/60 uppercase tracking-widest block mb-3">// vocational.context</span>
            <h2 className="text-xl font-bold text-foreground mb-4">Vocational Accommodation Framework</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  label: "Physical Prosthetic (AI)",
                  body: "AI serves as a direct cognitive and physical extension — offsetting limitations in manual design throughput and enabling the same output as a 3-person team with a single operator.",
                },
                {
                  label: "Adaptive Hardware Protocol",
                  body: "Media Set Assist and Blind-Touch Control on the Graphtec CE8000-60 are primary vocational accommodations, not convenience features. They sustain production across extended sessions.",
                },
                {
                  label: "Ergonomic Workstation",
                  body: "The Ergotron LX sit-stand rig enables a compliant, safe production environment. Physical strain is a documented performance risk addressed directly by this equipment.",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[#00F5FF]/15 p-5">
                  <h3 className="text-sm font-bold text-[#00F5FF] mb-2">{item.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer bar */}
          <div className="border-t border-[#00F5FF]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00F5FF]" />
              <span className="font-bold text-[#00F5FF] font-mono text-sm">Napier Labs — Executive Deck</span>
            </div>
            <p className="text-xs font-mono text-muted-foreground">
              Confidential · 2026 · Not for Public Distribution
            </p>
            <Link
              href="/"
              className="text-xs font-mono text-muted-foreground hover:text-[#00F5FF] transition-colors"
            >
              ← Return to Public Site
            </Link>
          </div>

        </div>
      </main>
    </div>
  )
}
