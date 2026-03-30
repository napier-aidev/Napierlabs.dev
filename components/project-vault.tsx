"use client"

import { ExternalLink, Zap, FlaskConical, CheckCircle, Clock, Wrench } from "lucide-react"

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
