import Image from "next/image"
import { SITE_LOGO } from "@/lib/site-logo"
import { Hero } from "@/components/hero"
import { BrandMission } from "@/components/brand-mission"
import { About } from "@/components/about"
import { ActivePipelines } from "@/components/active-pipelines"
import { Partnerships } from "@/components/partnerships"
import { Footer } from "@/components/footer"

const navLinkClass =
  "text-sm text-muted-foreground hover:text-[#00FF94] transition-colors"

export default function Home() {
  return (
    <div className="min-h-screen bg-background grid-bg">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center">
              <Image
                src={SITE_LOGO}
                alt="Napier Labs"
                width={40}
                height={40}
                className="h-10 w-auto mix-blend-screen rounded-md drop-shadow-[0_0_14px_rgba(0,255,148,0.25)] hover:drop-shadow-[0_0_20px_rgba(0,200,255,0.35)] transition-all"
              />
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className={navLinkClass}>
                About
              </a>
              <a href="#projects" className={navLinkClass}>
                Pipelines
              </a>
              <a href="#partnerships" className={navLinkClass}>
                Partnerships
              </a>
              <span className="text-sm text-muted-foreground/50 cursor-default group relative">
                Merch
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-[#00C8FF] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Coming Soon
                </span>
              </span>
              <a
                href="#contact"
                className="text-sm text-[#00FF94] font-medium hover:text-[#00C8FF] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <BrandMission />
        <ActivePipelines />
        <Partnerships />
        <About />
        <Footer />
      </main>
    </div>
  )
}
