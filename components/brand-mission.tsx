import { Target } from "lucide-react"

export function BrandMission() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card glow-border rounded-2xl p-8 md:p-12 text-center">
          <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-[#00F5FF]/10 flex items-center justify-center">
            <Target className="w-7 h-7 text-[#00F5FF]" />
          </div>
          <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// brand.mission</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-foreground">Our </span>
            <span className="text-glow text-[#00F5FF]">Mission</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-balance">
            Napier Labs is a multidisciplinary design and development studio. We build Micro SaaS solutions for the aquatic hobby, sports analytics, and music production. Our ecosystem extends beyond code—we provide high-quality merchandise designed to reflect the culture of the niches we serve.
          </p>
        </div>
      </div>
    </section>
  )
}
