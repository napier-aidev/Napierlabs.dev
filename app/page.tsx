import Image from "next/image"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Business } from "@/components/business"
import { StudioRig } from "@/components/studio-rig"
import { ProjectVault } from "@/components/project-vault"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background grid-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center">
              <Image
                src="/napier-labs-logo-v2.png"
                alt="Napier Labs"
                width={40}
                height={40}
                className="h-10 w-auto mix-blend-screen drop-shadow-[0_0_10px_#00F5FF] hover:drop-shadow-[0_0_15px_#00F5FF] transition-all"
              />
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors">About</a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors">Services</a>
              <a href="#studio" className="text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors">Studio</a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-[#00F5FF] font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Business />
        <StudioRig />
        <ProjectVault />
        <Footer />
      </main>

    </div>
  )
}
