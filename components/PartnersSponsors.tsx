"use client"

import { useState } from "react"
import { ArrowRight, ExternalLink, Play } from "lucide-react"
import { serviceInquiryHref } from "@/lib/inquiry"

type PanelId = "sponsorships" | "business"

const panels: { id: PanelId; label: string }[] = [
  { id: "sponsorships", label: "Brand Sponsorships & Gear Showcases" },
  { id: "business", label: "Strategic Business Partnerships" },
]

/** Swap in a hosted embed URL when the Carverall cut is published. */
const CARVERALL_EMBED_SRC: string | null = null

const showcasePlaceholder = `<!DOCTYPE html>
<html>
  <body style="margin:0;height:100vh;display:flex;align-items:center;justify-content:center;background:#080d17;color:#d7deea;font-family:ui-sans-serif,system-ui,sans-serif;text-align:center;padding:24px;">
    <div>
      <div style="width:52px;height:52px;margin:0 auto 16px;border-radius:999px;border:1px solid rgba(0,255,148,.45);display:flex;align-items:center;justify-content:center;color:#00FF94;font-size:18px;">&#9654;</div>
      <p style="margin:0 0 8px;letter-spacing:.18em;text-transform:uppercase;font-size:11px;color:#00FF94;font-family:ui-monospace,monospace;">Showcase embed</p>
      <p style="margin:0;max-width:28rem;line-height:1.5;color:#9aa4b2;">Hardware workflow testing, field runs, and key takeaways.</p>
    </div>
  </body>
</html>`

const collaborations = [
  {
    name: "Garage Door Sales Pro",
    type: "Contracted software execution",
    solution: "Automated quoting and order portal for field sales teams.",
    href: "#contact",
    cta: "Request a demo",
    external: false,
  },
  {
    name: "Pixel Lab",
    type: "Joint venture",
    solution:
      "Aquaculture management app for tracking, breeding logistics, and ecosystem data.",
    href: "https://pixelshrimp.tech",
    cta: "Open live app",
    external: true,
  },
  {
    name: "Setlist.rip",
    type: "Product collaboration",
    solution:
      "Live entertainment dashboard for real-time fan engagement and show operations.",
    href: "#projects",
    cta: "View project",
    external: false,
  },
]

export function PartnersSponsors() {
  const [active, setActive] = useState<PanelId>("sponsorships")

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
    event.preventDefault()
    const next =
      event.key === "ArrowRight"
        ? panels[(index + 1) % panels.length]
        : panels[(index - 1 + panels.length) % panels.length]
    setActive(next.id)
    document.getElementById(`partners-tab-${next.id}`)?.focus()
  }

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="relative py-28 px-4 scroll-mt-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00C8FF]/30 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-[#00FF94] font-mono text-xs uppercase tracking-[0.2em] mb-4">
            Partners &amp; Sponsors
          </p>
          <h2
            id="partners-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Partnerships &amp;{" "}
            <span className="text-glow-dual">Brand Collaborations</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-balance">
            Who we build with, and the equipment we trust in production.
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Partnership types"
          className="glass-card rounded-2xl sm:rounded-full p-1.5 flex flex-col sm:flex-row gap-1.5 mb-10"
        >
          {panels.map((panel, index) => {
            const selected = active === panel.id
            return (
              <button
                key={panel.id}
                id={`partners-tab-${panel.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`partners-panel-${panel.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(panel.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={
                  selected
                    ? "flex-1 rounded-xl sm:rounded-full px-4 py-3 text-sm font-semibold text-[#0B0F19] bg-gradient-to-r from-[#00FF94] to-[#00C8FF] shadow-[0_0_22px_rgba(0,255,148,0.2)] transition-all"
                    : "flex-1 rounded-xl sm:rounded-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-[#00FF94] transition-colors"
                }
              >
                {panel.label}
              </button>
            )
          })}
        </div>

        <div
          id="partners-panel-sponsorships"
          role="tabpanel"
          aria-labelledby="partners-tab-sponsorships"
          hidden={active !== "sponsorships"}
        >
          <div className="mb-8 max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Brand Sponsorships &amp; Gear Showcases
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technical sponsorships with hardware, laser, tooling, and developer
              software brands. We put the gear through real production work and
              show what holds up.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <article className="glass-card glow-border rounded-2xl p-6 md:p-8 lg:col-span-3 flex flex-col">
              <p className="text-[#00C8FF] font-mono text-xs uppercase tracking-[0.18em] mb-3">
                Featured brand showcase
              </p>
              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-balance">
                Carverall Laser Engraving &amp; Equipment Series
              </h4>
              <figure className="mb-5">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#00FF94]/25 bg-[#080d17] shadow-[0_0_32px_rgba(0,255,148,0.08)]">
                  <iframe
                    title="Carverall Laser Engraving and Equipment Series: hardware workflow testing, field runs, and key takeaways"
                    className="absolute inset-0 h-full w-full"
                    src={CARVERALL_EMBED_SRC ?? undefined}
                    srcDoc={CARVERALL_EMBED_SRC ? undefined : showcasePlaceholder}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
                <figcaption className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                  <Play className="w-4 h-4 mt-0.5 shrink-0 text-[#00FF94]" aria-hidden />
                  Hardware workflow testing, field runs, and key takeaways.
                </figcaption>
              </figure>
            </article>

            <article className="glass-card glow-border rounded-2xl p-6 md:p-8 lg:col-span-2 flex flex-col ring-1 ring-[#00FF94]/40">
              <p className="inline-flex self-start rounded-full bg-[#00FF94] px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-[#0B0F19] mb-5">
                OPEN FOR SPONSORSHIPS
              </p>
              <h4 className="text-xl font-bold text-foreground mb-4">
                Open for Sponsorships
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                Accepting Q1/Q2 creator sponsorships for fabrication machinery,
                production hardware, and dev tooling. Contact for media kit &amp;
                production specs.
              </p>
              <a
                href={serviceInquiryHref("sponsorship")}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-[#0B0F19] bg-gradient-to-r from-[#00FF94] to-[#00C8FF] hover:brightness-110 transition-all duration-300 shadow-[0_0_28px_rgba(0,200,255,0.22)] border border-white/10"
              >
                Contact for media kit
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
            </article>
          </div>
        </div>

        <div
          id="partners-panel-business"
          role="tabpanel"
          aria-labelledby="partners-tab-business"
          hidden={active !== "business"}
        >
          <div className="mb-8 max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Strategic Business Partnerships
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Joint ventures, contracted software execution, and collaborative
              B2B ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collaborations.map((project) => (
              <article
                key={project.name}
                className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col transition-all duration-300"
              >
                <p className="text-xs font-mono text-[#00FF94]/80 uppercase tracking-widest mb-3">
                  {project.type}
                </p>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {project.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.solution}
                </p>
                <a
                  href={project.href}
                  {...(project.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium border border-[#00FF94]/35 bg-[rgba(11,15,25,0.6)] backdrop-blur-md text-foreground hover:border-[#00C8FF]/50 hover:text-[#00C8FF] transition-all duration-300"
                >
                  {project.cta}
                  {project.external ? (
                    <ExternalLink className="w-4 h-4" aria-hidden />
                  ) : (
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  )}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
