"use client"

import { Mail, Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="py-20 px-4 pb-40">
      <div className="max-w-6xl mx-auto">
        {/* Contact CTA */}
        <div className="glass-card glow-border rounded-2xl p-8 md:p-12 text-center mb-12">
          <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// let&apos;s.connect</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Ready to </span>
            <span className="text-glow text-[#00F5FF]">Build</span>
            <span className="text-foreground"> Something?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-balance">
            Whether you have a project in mind or just want to chat about technology, 
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <a
            href="mailto:hello@napierlabs.dev"
            className="inline-flex items-center gap-2 bg-[#00F5FF] text-[#141b2d] px-8 py-4 rounded-lg font-medium hover:bg-[#00F5FF]/90 transition-all duration-300 glow-border"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#00F5FF]" />
            <span className="font-bold text-[#00F5FF]">Napier Labs</span>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@napierlabs.dev"
              className="p-2 rounded-lg glass-card hover:bg-[#00F5FF]/20 transition-colors group flex items-center gap-2"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-[#00F5FF] transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-[#00F5FF] transition-colors">Email</span>
            </a>
            <span className="text-sm text-muted-foreground/60 font-mono">Social channels coming soon</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            Napier Labs &copy; 2026 | Protocol: Vibe-Smith | Established in the Forge.
          </p>
        </div>
      </div>
    </footer>
  )
}
