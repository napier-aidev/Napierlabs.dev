import Image from "next/image"
import { Suspense } from "react"
import { SITE_LOGO } from "@/lib/site-logo"
import { Hero } from "@/components/hero"
import { BrandMission } from "@/components/brand-mission"
import { About } from "@/components/about"
import { ActivePipelines } from "@/components/active-pipelines"
import { PartnersSponsors } from "@/components/PartnersSponsors"
import { ServicesPricing } from "@/components/ServicesPricing"
import { ShopGrid } from "@/components/ShopGrid"
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
              <a href="#services" className={navLinkClass}>
                Services &amp; Pricing
              </a>
              <a href="#projects" className={navLinkClass}>
                Apps
              </a>
              <a href="#shop" className={navLinkClass}>
                Shop
              </a>
              <a href="#partners" className={navLinkClass}>
                Partners &amp; Sponsors
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold text-[#0B0F19] bg-[#00FF94] hover:brightness-110 rounded-full px-4 py-2 transition-all shadow-[0_0_18px_rgba(0,255,148,0.25)]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ServicesPricing />
        <BrandMission />
        <ActivePipelines />
        <PartnersSponsors />
        <ShopGrid />
        <About />
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}
