"use client"

import Link from "next/link"
import { Magnet, HardHat, Cpu, Paintbrush2 } from "lucide-react"

const services = [
  {
    icon: Magnet,
    label: "Fleet & Field Branding",
    headline: "Industrial Vinyl & Magnetics",
    description:
      "High-tack trailer magnets and precision fleet graphics. Optimized for 2026 Graphtec industrial standards to ensure zero-fail durability on the job site.",
    cta: "Request a Fleet Quote",
    accent: "#00F5FF",
    tag: "// fleet.branding",
  },
  {
    icon: HardHat,
    label: "Crew Apparel Cycles",
    headline: "Performance Headwear & Workwear",
    description:
      "High-durability hats and apparel for construction professionals. Utilizing Hotronix 360 IQ technology for a zero-scorch, premium finish that lasts.",
    cta: "Inquire for Your Crew",
    accent: "#00F5FF",
    tag: "// crew.apparel",
  },
  {
    icon: Cpu,
    label: "AI-Driven 3D Manufacturing",
    headline: "Custom Tooling & Prototyping",
    description:
      "We use AI-integrated CAD to design and 3D print custom job-site hardware, tool organizers, and rugged prototypes in high-strength ASA/PETG polymers.",
    cta: "Discuss a Custom Part",
    accent: "#00F5FF",
    tag: "// additive.manufacturing",
  },
  {
    icon: Paintbrush2,
    label: "Specialized Surface Finishing",
    headline: "Industrial Airbrushing & R&D",
    description:
      "High-fidelity surface coatings for specialized hardware, including signature fishing lures and cue restoration. Utilizing Gaahleri Atlantis filtration for unmatched consistency.",
    cta: "Inquire for Custom Finishing",
    accent: "#00F5FF",
    tag: "// surface.finishing",
  },
]

export function Business() {
  return (
    <section id="services" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// services.offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">What We </span>
            <span className="text-glow text-[#00F5FF]">Build</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            From precision fleet graphics to AI-printed prototypes — every service is engineered for industrial-grade output with zero compromises.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.label}
              className="group relative glass-card rounded-2xl p-8 border border-[#00F5FF]/15 hover:border-[#00F5FF]/40 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Top row: tag + icon */}
              <div className="relative z-10 flex items-start justify-between mb-6">
                <span className="text-xs font-mono text-[#00F5FF]/60 tracking-widest">{service.tag}</span>
                <div className="w-12 h-12 rounded-xl bg-[#00F5FF]/10 flex items-center justify-center group-hover:bg-[#00F5FF]/20 transition-colors duration-300 shrink-0">
                  <service.icon className="w-6 h-6 text-[#00F5FF]" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                  {service.label}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-4 leading-snug">
                  {service.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <div className="relative z-10">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold font-mono text-[#00F5FF] border border-[#00F5FF]/30 rounded-lg px-5 py-2.5 hover:bg-[#00F5FF]/10 hover:border-[#00F5FF]/60 transition-all duration-200"
                >
                  {service.cta}
                  <span className="text-[#00F5FF]/50 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
