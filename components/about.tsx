"use client"

import { Bot, CloudCog, Cpu, Workflow } from "lucide-react"

const skills = [
  {
    icon: Bot,
    label: "Agentic Systems",
    description:
      "Orchestrated AI agents for spec-to-ship workflows—from codegen and test harnesses to deployment choreography.",
  },
  {
    icon: CloudCog,
    label: "Active Deployment",
    description:
      "Staging, canary, and production-adjacent pipelines with observability baked into every release train.",
  },
  {
    icon: Cpu,
    label: "Technical Audits",
    description:
      "SDK, API, and infrastructure stress tests anchored in live product surfaces—not synthetic labs only.",
  },
  {
    icon: Workflow,
    label: "Niche Vertical SaaS",
    description:
      "Entertainment, aquaculture, compliance, and industrial adjacencies served with domain-tight UX.",
  },
]

export function About() {
  return (
    <section id="about" className="py-28 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00FF94] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
            // agentic.engineering
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Built for <span className="text-glow-dual">B2B credibility</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance text-lg">
            One operator, full-stack authority: software architecture,
            integration readiness, and narrative clarity for sponsors who need
            evidence—not promises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              The <span className="text-[#00C8FF]">Agentic Engineer</span> model
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              NapierLabs situates AI as an execution layer inside rigorous human
              direction—design systems, compliance logic, and operational
              realism stay in the loop while agents compress build cycles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That posture is intentional for partners: you collaborate with a
              hub that can reference live traffic, failing tests, integration
              quirks, and roadmap heat while your product is exercised in
              parallel with ours.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg border border-[#00FF94]/30 text-[#00FF94] bg-[#00FF94]/5">
                AI-assisted delivery
              </span>
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg border border-[#00C8FF]/30 text-[#00C8FF] bg-[#00C8FF]/5">
                Production-adjacent QA
              </span>
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg border border-white/15 text-muted-foreground">
                Sponsor-ready reporting
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="rounded-xl border border-white/[0.08] bg-[rgba(11,15,25,0.6)] backdrop-blur-md p-6 transition-all duration-300 hover:border-[#00C8FF]/25"
              >
                <skill.icon
                  className="w-9 h-9 text-[#00FF94] mb-4"
                  aria-hidden
                />
                <h3 className="font-semibold text-foreground mb-2">
                  {skill.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
