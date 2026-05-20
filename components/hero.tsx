"use client"

import Image from "next/image"
import { ArrowDown, Bot } from "lucide-react"
import { SITE_LOGO } from "@/lib/site-logo"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Matrix / industrial atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-[#00FF94]/[0.07] rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00C8FF]/10 rounded-full blur-[80px] animate-pulse delay-1000" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(90deg, #00FF94 1px, transparent 1px), linear-gradient(#00C8FF 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-10 md:mb-14">
          <Image
            src={SITE_LOGO}
            alt="Napier Labs"
            width={1024}
            height={813}
            priority
            loading="eager"
            className="h-[200px] md:h-[360px] w-auto logo-pulse-cyber mix-blend-screen drop-shadow-[0_0_36px_rgba(0,200,255,0.5)]"
          />
        </div>

        <p className="inline-flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-[0.25em] text-[#00FF94] mb-5">
          <Bot className="w-4 h-4" aria-hidden />
          Agentic Engineer
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-[1.15]">
          <span className="text-glow-dual">Limitless Capability.</span>
          <br />
          <span className="text-foreground">High-Velocity Execution.</span>
        </h1>

        <p className="text-base md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
          NapierLabs is an agile technology and design firm pioneering advanced,
          AI-assisted development workflows. As an Agentic Engineer, I leverage
          cutting-edge AI architectures to build, deploy, and scale custom
          software ecosystems at a pace traditional workflows can&apos;t match.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#partnerships"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-[#0B0F19] bg-gradient-to-r from-[#00FF94] to-[#00C8FF] hover:brightness-110 transition-all duration-300 shadow-[0_0_28px_rgba(0,200,255,0.22)] border border-white/10"
          >
            Partner With Us
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto group rounded-xl px-8 py-4 font-medium border border-[#00FF94]/35 bg-[rgba(11,15,25,0.6)] backdrop-blur-md text-foreground hover:border-[#00C8FF]/50 hover:bg-[rgba(15,22,38,0.85)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="group-hover:text-[#00C8FF] transition-colors">
              Active Pipelines
            </span>
            <ArrowDown className="w-4 h-4 text-[#00FF94] group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
          scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00FF94] via-[#00C8FF] to-transparent" />
      </div>
    </section>
  )
}
