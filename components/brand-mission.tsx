import { Gauge } from "lucide-react"

export function BrandMission() {
  return (
    <section className="py-16 px-4" aria-label="Build philosophy">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-white/[0.08] bg-[rgba(11,15,25,0.55)] backdrop-blur-xl p-8 md:p-10 text-center shadow-[0_0_40px_rgba(0,200,255,0.04)]">
          <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-[#00FF94]/10 flex items-center justify-center border border-[#00FF94]/20">
            <Gauge className="w-6 h-6 text-[#00FF94]" aria-hidden />
          </div>
          <span className="text-[#00C8FF] font-mono text-xs uppercase tracking-[0.2em] mb-3 block">
            // velocity.standard
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 text-balance">
            Ship in <span className="text-glow-dual">real loops</span>, not slide
            decks.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-balance">
            Platforms here are in alpha, beta, and active pipeline phases—not
            shelf-ware. NapierLabs runs continuous integration, agent-assisted
            implementation, and staged rollouts so partners engage with software
            while metrics, APIs, and workloads are still sharpening in
            production-grade environments.
          </p>
        </div>
      </div>
    </section>
  )
}
