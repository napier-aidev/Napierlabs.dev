"use client"

import { Brain, Cpu, Hammer, Sparkles } from "lucide-react"

const skills = [
  { icon: Brain, label: "Agentic AI", description: "Building intelligent, autonomous systems" },
  { icon: Cpu, label: "Digital Ecosystems", description: "Full-stack AI-powered platforms" },
  { icon: Hammer, label: "The Forge", description: "Crafting tools that didn't exist yesterday" },
  { icon: Sparkles, label: "Vibe Engineering", description: "Where creativity meets capability" },
]

export function About() {
  return (
    <section id="about" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// the.vibe-smith</span>
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-6">
            <span className="text-[#00F5FF]">{"<"}</span>
            Architect
            <span className="text-[#00F5FF]">{"/>"}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Life dealt a specific hand that required me to constantly adapt to the physical world around me. 
              Now, the playing field is leveled.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With the power of AI and a creative mind, I no longer just adapt—I architect. 
              At Napier Labs, I forge the digital ecosystems that didn&apos;t exist yesterday.
            </p>
            <p className="text-[#00F5FF] font-medium text-glow-sm">
              This is where disability meets limitless capability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6 pt-6 border-t border-[#00F5FF]/20">
              Outside the lab, I am a Partner and Co-Owner of <span className="text-[#00F5FF] font-semibold">Cyberboss Studios</span>. I lead the technical infrastructure and equipment side of our elite branding and signage operation, combining my passion for hardware with scalable business resources.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-[#00F5FF]">AI</span>
                <span className="text-sm text-muted-foreground ml-2">Powered</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-[#00F5FF]">Vibe</span>
                <span className="text-sm text-muted-foreground ml-2">Smith</span>
              </div>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-300 group"
              >
                <skill.icon className="w-10 h-10 text-[#00F5FF] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
