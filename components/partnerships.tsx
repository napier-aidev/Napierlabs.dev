"use client"

import { Cpu, Mail, Megaphone, ShieldCheck } from "lucide-react"

const pillars = [
  {
    title: "API & SDK Integration / Stress Testing",
    body: "We leverage rapid, AI-assisted development loops to stress-test dev tools, hosting platforms, and APIs—delivering real-world technical audits, case studies, and deployment data during active build cycles.",
    icon: Cpu,
    accent: "#00C8FF",
  },
  {
    title: "Targeted Audience Reach",
    body: "Gain high-visibility exposure and early integration opportunities within our upcoming dedicated user bases across platforms like Setlist.rip and Pixel Lab.",
    icon: Megaphone,
    accent: "#00FF94",
  },
  {
    title: "Hardware & Workflow Validation",
    body: "See how your infrastructure, components, or developer gear perform when pushed to the limit in an elite Agentic Engineering workflow.",
    icon: ShieldCheck,
    accent: "#00C8FF",
  },
]

export function Partnerships() {
  return (
    <section
      id="partnerships"
      aria-labelledby="partnerships-heading"
      className="relative py-28 px-4 scroll-mt-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00C8FF]/30 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-[#00FF94] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">
            // b2b.hub
          </span>
          <h2
            id="partnerships-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Strategic Partnerships &amp;{" "}
            <span className="text-glow-dual">Sponsorships</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-balance">
            We build the software that powers niche industries—from live
            entertainment to industrial compliance and specialized ecosystems.
            Partnering with NapierLabs means embedding your brand, hardware, or
            API directly into high-velocity development pipelines and real-world
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-white/[0.08] bg-[rgba(11,15,25,0.72)] backdrop-blur-xl p-8 flex flex-col transition-all duration-300 hover:border-[#00FF94]/20 hover:shadow-[0_0_36px_rgba(0,255,148,0.06)]"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10 bg-white/[0.03]"
                style={{ color: pillar.accent }}
              >
                <pillar.icon className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-xl px-8 py-4 font-semibold text-[#0B0F19] bg-gradient-to-r from-[#00FF94] to-[#00C8FF] hover:brightness-110 transition-all duration-300 shadow-[0_0_28px_rgba(0,200,255,0.25),0_0_20px_rgba(0,255,148,0.15)] border border-white/10"
          >
            <Mail className="w-5 h-5" aria-hidden />
            Contact for Sponsorship &amp; Partnership Inquiries
          </a>
        </div>
      </div>
    </section>
  )
}
