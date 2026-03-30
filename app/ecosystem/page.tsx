import { Monitor, Scissors, Wind, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const infrastructure = [
  {
    icon: Monitor,
    category: "Computing",
    item: "Puget Systems RTX 5090 Workstations",
    detail: "Optimized for Local AI Training",
    status: "2026 Roadmap",
  },
  {
    icon: Scissors,
    category: "Precision Cutting",
    item: "Graphtec CE8000-60 Industrial Plotters",
    detail: "High-precision vinyl and material cutting at industrial scale",
    status: "2026 Roadmap",
  },
  {
    icon: Wind,
    category: "Airbrushing",
    item: "Gaahleri GT-Series & Silent Air Production",
    detail: "Professional-grade airbrushing with silent compressor systems",
    status: "2026 Roadmap",
  },
]

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-background grid-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/napier-labs-logo-v2.png"
                alt="Napier Labs"
                width={40}
                height={40}
                className="h-10 w-auto mix-blend-screen drop-shadow-[0_0_10px_#00F5FF] hover:drop-shadow-[0_0_15px_#00F5FF] transition-all"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors">About</Link>
              <Link href="/#services" className="text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors">Services</Link>
              <Link href="/#studio" className="text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors">Studio</Link>
              <Link href="/#projects" className="text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors">Projects</Link>
              <Link href="/ecosystem" className="text-sm text-[#00F5FF] font-medium">Ecosystem</Link>
              <Link href="/#contact" className="text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Back link */}
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors mb-12 font-mono">
            <ArrowLeft className="w-4 h-4" />
            Back to Lab
          </Link>

          {/* Page header */}
          <div className="text-center mb-20">
            <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// technical.infrastructure</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">The </span>
              <span className="text-[#00F5FF] text-glow">Ecosystem</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
              The physical and digital infrastructure behind Napier Labs—where software precision meets industrial hardware capability.
            </p>
          </div>

          {/* Technical Infrastructure Section */}
          <div className="mb-20">
            <div className="glass-card glow-border rounded-2xl p-8 md:p-12">
              <div className="mb-10">
                <span className="text-xs font-mono font-bold text-[#00F5FF] tracking-widest uppercase">Standard Lab Infrastructure</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">2026 Roadmap</h2>
                <p className="text-muted-foreground mt-3 max-w-xl">
                  Purpose-built hardware selected for AI training throughput, precision manufacturing, and professional production at scale.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {infrastructure.map((item) => (
                  <div
                    key={item.item}
                    className="glass-card glass-card-hover rounded-xl p-6 group transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center mb-5 group-hover:bg-[#00F5FF]/20 transition-colors">
                        <item.icon className="w-6 h-6 text-[#00F5FF]" />
                      </div>
                      <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider mb-2 block">{item.category}</span>
                      <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">{item.item}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.detail}</p>
                      <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-[#00F5FF]/10 text-[#00F5FF]">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy block */}
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
            <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// design.philosophy</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Code meets <span className="text-[#00F5FF] text-glow">Carbon</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
              Every hardware selection is chosen to extend the capability of our AI workflows into the physical world. We don&apos;t just build software—we build the machines that run alongside it.
            </p>
            <p className="text-[#00F5FF] font-mono text-sm mt-6">Built with AI. Tested in the Field.</p>
          </div>

        </div>
      </main>
    </div>
  )
}
