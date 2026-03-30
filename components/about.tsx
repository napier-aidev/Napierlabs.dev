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
            <p className="text-lg text-muted-foreground leading-relaxed">
              I operate under the <span className="text-[#00F5FF] font-semibold">Vibe Coder</span> methodology—using AI not just as a tool, but as a <span className="text-foreground font-medium">physical prosthetic</span> that bridges the gap between high-level creative direction and real-world manufacturing execution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Physical mobility challenges once defined my limitations. AI redefined them entirely. Through AI-augmented workflows, I&apos;ve driven <span className="text-[#00F5FF] font-bold">3.5x business growth</span>—architecting systems, running production lines, and shipping software simultaneously.
            </p>
            <p className="text-[#00F5FF] font-medium text-glow-sm">
              This is where physical limitation meets limitless capability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6 pt-6 border-t border-[#00F5FF]/20">
              As Co-Owner of <span className="text-[#00F5FF] font-semibold">Cyberboss Studios</span>, I lead the technical infrastructure—industrial plotters, sublimation hardware, and AI-optimized production workflows—turning code-level precision into physical, tangible product.
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
