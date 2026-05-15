"use client"

import { Activity, Binary, Fish, Gavel, Radio } from "lucide-react"

const pipelines = [
  {
    id: "setlist",
    name: "Setlist.rip",
    badge: "Alpha Deployment",
    badgeVariant: "alpha" as const,
    tagline: "Live Entertainment Dashboard",
    description:
      "A mobile dashboard disrupting live entertainment management, engineered to streamline real-time fan engagement and live show optimization for bands. Currently in active alpha testing.",
    icon: Radio,
    accent: "#00FF94",
  },
  {
    id: "pixel-lab",
    name: "Pixel Lab",
    badge: "Proprietary Beta",
    badgeVariant: "beta" as const,
    tagline: "Bio-Data & Niche Aquaculture Management",
    description:
      "A specialized, data-driven application engineered for precise aquatic ecosystem management, tracking, and breeding logistics. Currently scaling infrastructure.",
    icon: Fish,
    accent: "#00C8FF",
  },
  {
    id: "smartspec",
    name: "SmartSpec AI",
    badge: "In Development / Pipeline",
    badgeVariant: "pipeline" as const,
    tagline: "B2B Industrial Compliance Engine",
    description:
      "An enterprise-grade compliance engine built for the construction industry, instantly cross-referencing complex building codes against real-time material orders.",
    icon: Gavel,
    accent: "#00FF94",
  },
]

const badgeStyles: Record<
  (typeof pipelines)[number]["badgeVariant"],
  string
> = {
  alpha:
    "bg-[#00FF94]/12 text-[#00FF94] border-[#00FF94]/35 shadow-[0_0_20px_rgba(0,255,148,0.12)]",
  beta:
    "bg-[#00C8FF]/12 text-[#00C8FF] border-[#00C8FF]/35 shadow-[0_0_20px_rgba(0,200,255,0.12)]",
  pipeline:
    "bg-violet-500/10 text-violet-300 border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.12)]",
}

export function ActivePipelines() {
  return (
    <section
      id="projects"
      aria-labelledby="pipelines-heading"
      className="relative py-28 px-4 scroll-mt-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF94]/25 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#00C8FF] font-mono text-xs uppercase tracking-[0.2em] mb-4">
            <Activity className="w-4 h-4" aria-hidden />
            <span>// development.hub</span>
          </div>
          <h2
            id="pipelines-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Active Pipelines &amp;{" "}
            <span className="text-glow-dual">Software Ecosystems</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-balance">
            High-utility platforms in motion—shipping to internal and early
            access environments with continuous integration, agent-assisted
            builds, and live deployment telemetry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pipelines.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-2xl border border-white/[0.08] bg-[rgba(11,15,25,0.72)] backdrop-blur-xl p-7 flex flex-col transition-all duration-300 hover:border-[#00FF94]/25 hover:shadow-[0_0_40px_rgba(0,200,255,0.08)]"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(120% 80% at 10% 0%, ${p.accent}12 0%, transparent 55%)`,
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-semibold px-3 py-1.5 rounded-full border ${badgeStyles[p.badgeVariant]}`}
                  >
                    <Binary className="w-3 h-3 opacity-80 shrink-0" aria-hidden />
                    {p.badge}
                  </span>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.03] group-hover:border-[#00C8FF]/30 transition-colors"
                    style={{ color: p.accent }}
                  >
                    <p.icon className="w-5 h-5" aria-hidden />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-[#00C8FF] transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs font-mono text-[#00FF94]/80 uppercase tracking-widest mb-4">
                  {p.tagline}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>

                <div className="mt-6 pt-5 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono text-muted-foreground/70 uppercase tracking-wider">
                    Status: live build loop
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
