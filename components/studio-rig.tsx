"use client"

import { Laptop, Smartphone, Keyboard } from "lucide-react"

const setup = [
  {
    icon: Laptop,
    category: "Workstation",
    items: [
      { name: "MacBook Pro", spec: "Intel Core i9" },
      { name: "The Reliable Workhorse", spec: "Daily Driver" },
    ],
  },
  {
    icon: Smartphone,
    category: "Mobile Testing",
    items: [
      { name: "Google Pixel 10 Pro", spec: "Pure Android" },
      { name: "Android Optimization", spec: "Testing Device" },
    ],
  },
  {
    icon: Keyboard,
    category: "Peripherals",
    items: [
      { name: "Minimalist Setup", spec: "Clean & Efficient" },
      { name: "Essential Tools Only", spec: "Distraction-Free" },
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
            <span className="text-foreground">The </span>
            <span className="text-glow text-[#00F5FF]">Setup</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            The hardware that powers the laboratory. Carefully curated tools for maximum productivity.
          </p>
        </div>

        {/* Main rig display */}
        <div className="glass-card glow-border rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {setup.map((category) => (
              <div key={category.category} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-[#00F5FF]" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.category}</h3>
                </div>
                
                <div className="space-y-3 pl-13">
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

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Focus", value: "Cross-Platform Native Developer (iOS & Android)" },
            { label: "Standard", value: "Pixel Perfect" },
            { label: "Philosophy", value: "Clean Code" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-lg p-4 text-center">
              <p className="text-lg font-bold text-[#00F5FF] text-glow-sm">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-mono">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Specialization */}
        <div className="mt-8 glass-card rounded-xl p-6 text-center">
          <p className="text-muted-foreground text-balance">
            I specialize in building high-performance, fluid mobile experiences for both ecosystems using modern frameworks like React Native and PWA technologies, ensuring no user is left behind.
          </p>
        </div>
      </div>
    </section>
  )
}
