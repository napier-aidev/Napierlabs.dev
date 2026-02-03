"use client"

import { Globe, Palette, Cog, Layers } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "I build high-performance, cinematic digital experiences—like this one—using Next.js, AI-driven code, and modern UI/UX principles.",
    features: ["Next.js", "AI-Driven Code", "Modern UI/UX"],
  },
  {
    icon: Palette,
    title: "Brand Design & Upstarting",
    description: "Full-scale brand identity, logo design, and market entry strategy for high-impact ventures.",
    features: ["Brand Identity", "Logo Design", "Market Strategy"],
  },
  {
    icon: Cog,
    title: "App & Automation",
    description: "Custom B2B software solutions, including computer vision tools (Cuesight.ai) and internal business workflow apps.",
    features: ["Computer Vision", "B2B Software", "Workflow Apps"],
  },
  {
    icon: Layers,
    title: "Vinyl & Signage",
    description: "High-precision physical production and sublimation services via Cyberboss Studios.",
    features: ["Cyberboss Studios", "Sublimation", "Custom Signage"],
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
            <span className="text-foreground">What I </span>
            <span className="text-glow text-[#00F5FF]">Build</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            From concept to deployment, I deliver end-to-end solutions that transform ideas into reality.
          </p>
          <p className="text-[#00F5FF] font-mono text-sm mt-4 text-glow-sm">
            &quot;Shipping is no longer a guessing game.&quot;
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-300 group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00F5FF]/20 transition-colors">
                  <service.icon className="w-6 h-6 text-[#00F5FF]" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-mono px-2 py-1 rounded bg-[#00F5FF]/10 text-[#00F5FF]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
