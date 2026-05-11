"use client"

import Image from "next/image"
import { ArrowDown, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F5FF]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00F5FF]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        {/* Hero Logo - Centerpiece */}
        <div className="mb-[60px]">
          <Image
            src="/napier-labs-logo.png"
            alt="Napier Labs - Cross-Platform iOS and Android Developer"
            width={1024}
            height={559}
            priority
            loading="eager"
            className="h-[250px] md:h-[400px] w-auto logo-pulse drop-shadow-[0_0_48px_rgba(0,245,255,0.35)]"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5 text-balance leading-tight">
          Where <span className="text-[#00F5FF] text-glow">AI Logic</span> Meets<br className="hidden md:block" /> Professional Manufacturing.
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto text-balance">
          Building a unified ecosystem of AI software and the physical hardware that drives them.
        </p>

        {/* Subtitle with glow */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Sparkles className="w-5 h-5 text-[#00F5FF]" />
          <span className="text-sm text-[#00F5FF] font-mono text-glow-sm">The Forge of the Vibe-Smith</span>
          <Sparkles className="w-5 h-5 text-[#00F5FF]" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group glass-card glass-card-hover px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
          >
            <span className="text-foreground group-hover:text-[#00F5FF] transition-colors">Explore Projects</span>
            <ArrowDown className="w-4 h-4 text-[#00F5FF] group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="bg-[#00F5FF] text-[#141b2d] px-8 py-4 rounded-lg font-medium hover:bg-[#00F5FF]/90 transition-all duration-300 glow-border"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground font-mono">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00F5FF] to-transparent" />
      </div>
    </section>
  )
}
