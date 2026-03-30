"use client"

import { Brain, Cpu, Hammer, Sparkles } from "lucide-react"

const skills = [
  { icon: Brain, label: "Vibe Coder", description: "AI as a physical prosthetic—bridging high-level code to real-world manufacturing output" },
  { icon: Cpu, label: "AI Infrastructure", description: "Local training pipelines, agentic systems, and full-stack AI-powered platforms" },
  { icon: Hammer, label: "Physical Production", description: "Industrial cutting, sublimation, and precision hardware operations via Cyberboss Studios" },
  { icon: Sparkles, label: "3.5x Growth", description: "Scaled business output despite physical mobility challenges through AI-augmented workflows" },
]

export function About() {
  return (
    <section id="about" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// the.vibe-coder</span>
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-6">
            <span className="text-[#00F5FF]">{"<"}</span>
            Architect
            <span className="text-[#00F5FF]">{"/>"}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio content */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              The Architect: <span className="text-[#00F5FF]">Bridging Logic & Matter</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I operate as a <span className="text-[#00F5FF] font-semibold">Vibe Coder</span>—leveraging AI not just as a tool, but as a <span className="text-foreground font-medium">Physical Prosthetic</span>. In an industry that often demands intense manual dexterity, I use high-level AI logic to bypass physical barriers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My mission at Napier Labs is to prove that with the right technical infrastructure, physical mobility challenges are no longer a bottleneck to <span className="text-[#00F5FF] font-bold">3.5x business growth</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I don&apos;t just write code; I architect systems that transform intent into physical reality.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-[#00F5FF]">3.5x</span>
                <span className="text-sm text-muted-foreground ml-2">Growth</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-[#00F5FF]">AI</span>
                <span className="text-sm text-muted-foreground ml-2">Prosthetic</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-2xl font-bold text-[#00F5FF]">Vibe</span>
                <span className="text-sm text-muted-foreground ml-2">Coder</span>
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
