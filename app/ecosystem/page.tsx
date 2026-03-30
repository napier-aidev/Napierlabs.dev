import { Monitor, Scissors, ShieldCheck, ArrowLeft, ArrowUpRight, Armchair } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const roadmap = [
  {
    icon: Monitor,
    category: "The AI Core",
    item: "Puget Systems RTX 5090 Workstation",
    detail:
      "Optimized for local LLM training and 4K rendering. Purpose-built for AI inference pipelines and high-throughput creative production without cloud dependency.",
    status: "2026 Roadmap",
  },
  {
    icon: Scissors,
    category: "Precision Production",
    item: "Graphtec CE8000-60 Industrial Plotter",
    detail:
      "Barcode-integrated B2B workflow with sub-millimeter cut accuracy. Native integration target for Vinyl Vision Pro's automated cut-path logic engine.",
    status: "2026 Roadmap",
  },
  {
    icon: ShieldCheck,
    category: "Laboratory Safety",
    item: "Gaahleri Atlantis Waterfall Booth & Silent Air Compressor",
    detail:
      "Medical-grade air filtration with downdraft waterfall containment. Provides a clean-room standard environment for high-detail airbrushing operations.",
    status: "2026 Roadmap",
  },
  {
    icon: Armchair,
    category: "Ergonomic Infrastructure",
    item: "UPLIFT Desk 4-Leg Commercial Frame",
    detail:
      "330 lb capacity for heavy manufacturing configurations. Supports dual-monitor rigs, production hardware, and adaptive ergonomic workflows.",
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
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#00F5FF] transition-colors mb-12 font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lab
          </Link>

          {/* Page header */}
          <div className="text-center mb-20">
            <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// napier.labs.ecosystem</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">The Napier Labs </span>
              <span className="text-[#00F5FF] text-glow">Ecosystem</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
              The physical and digital infrastructure behind Napier Labs — where AI software precision meets industrial hardware capability.
            </p>
          </div>

          {/* 2026 Roadmap Section */}
          <div className="mb-8">
            <div className="glass-card glow-border rounded-2xl p-8 md:p-12">
              <div className="mb-10">
                <span className="text-xs font-mono font-bold text-[#00F5FF] tracking-widest uppercase">
                  Technical Infrastructure Roadmap
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                  Planned 2026 Lab Standards
                </h2>
                <p className="text-muted-foreground mt-3 max-w-2xl">
                  Purpose-selected hardware engineered for AI training throughput, precision manufacturing, laboratory safety, and adaptive ergonomic workflows — all at production scale.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {roadmap.map((item) => (
                  <div
                    key={item.item}
                    className="glass-card glass-card-hover rounded-xl p-6 group transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center shrink-0 group-hover:bg-[#00F5FF]/20 transition-colors">
                          <item.icon className="w-6 h-6 text-[#00F5FF]" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-[#00F5FF]/70 uppercase tracking-wider block mb-1">
                            {item.category}
                          </span>
                          <h3 className="text-base font-semibold text-foreground leading-snug">
                            {item.item}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.detail}
                      </p>
                      <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-[#00F5FF]/10 text-[#00F5FF]">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Software Alignment note */}
          <div className="glass-card rounded-2xl p-8 mb-8 border border-[#00F5FF]/20">
            <div className="flex items-start gap-4">
              <div className="w-2 h-full min-h-[2rem] rounded-full bg-[#00F5FF] shrink-0 mt-1" />
              <div>
                <span className="text-xs font-mono text-[#00F5FF] uppercase tracking-widest mb-2 block">
                  // project.alignment
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  Our software —{" "}
                  <span className="text-foreground font-semibold">Vinyl Vision Pro</span> and{" "}
                  <span className="text-foreground font-semibold">Cuesight.ai</span> — is currently
                  being pre-optimized to integrate natively with this hardware roadmap. Every software
                  architecture decision is made with this physical infrastructure as the target
                  environment.
                </p>
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
              Every hardware selection is chosen to extend the capability of our AI workflows into the physical world. We don&apos;t just build software — we build the machines that run alongside it.
            </p>
            <p className="text-[#00F5FF] font-mono text-sm mt-6">Built with AI. Tested in the Field.</p>
          </div>

        </div>
      </main>
    </div>
  )
}
