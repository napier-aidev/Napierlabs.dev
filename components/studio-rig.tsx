"use client"

import { Laptop, Smartphone, Keyboard, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const currentGear = [
  {
    icon: Laptop,
    category: "Workstation",
    items: [
      { name: "MacBook Pro", spec: "Intel Core i9 — Daily Driver" },
      { name: "macOS Development", spec: "Primary Build Machine" },
    ],
  },
  {
    icon: Smartphone,
    category: "Mobile Testing",
    items: [
      { name: "Google Pixel 10 Pro", spec: "Pure Android — Primary Test Device" },
      { name: "Cross-Platform QA", spec: "iOS & Android Validation" },
    ],
  },
  {
    icon: Keyboard,
    category: "Peripherals",
    items: [
      { name: "Minimalist Desk Setup", spec: "Clean & Distraction-Free" },
      { name: "Essential Tools Only", spec: "Optimized for Focus" },
    ],
  },
]

export function StudioRig() {
  return (
    <section id="studio" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// studio.rig</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Current </span>
            <span className="text-glow text-[#00F5FF]">Setup</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            The active hardware powering the lab today. Lean, focused, and built for cross-platform development.
          </p>
        </div>

        {/* Current gear display */}
        <div className="glass-card glow-border rounded-2xl p-8 mb-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-mono font-bold text-[#00F5FF] tracking-widest uppercase">
              Current Gear
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#00F5FF]/10 text-[#00F5FF]">
              Active 2025
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {currentGear.map((category) => (
              <div key={category.category} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-[#00F5FF]" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.category}</h3>
                </div>
                <div className="space-y-3 pl-1">
                  {category.items.map((item) => (
                    <div key={item.name} className="group">
                      <p className="text-sm text-foreground group-hover:text-[#00F5FF] transition-colors">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">{item.spec}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2026 Roadmap CTA */}
        <div className="glass-card rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#00F5FF]/15">
          <div>
            <p className="text-sm font-mono text-[#00F5FF] mb-1">// 2026.hardware.roadmap</p>
            <p className="text-muted-foreground text-sm text-balance">
              Puget Systems RTX 5090, Graphtec CE8000-60, Gaahleri Waterfall Booth & UPLIFT Commercial Desk — all pre-optimized for our AI software stack.
            </p>
          </div>
          <Link
            href="/ecosystem"
            className="inline-flex items-center gap-2 bg-[#00F5FF] text-[#141b2d] px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#00F5FF]/90 transition-all duration-300 glow-border whitespace-nowrap shrink-0"
          >
            View Full 2026 Roadmap
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
