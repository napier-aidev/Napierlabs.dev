import { ArrowRight, Check } from "lucide-react"
import { serviceInquiryHref } from "@/lib/inquiry"

const tiers = [
  {
    id: "starter",
    name: "Starter Digital & Identity",
    price: "$750 – $1,500",
    description:
      "Perfect for new businesses, solo operators, and local service providers needing a clean digital presence.",
    features: [
      "Modern 1–3 page responsive website",
      "Primary vector logo design",
      "Domain & DNS setup",
      "Google Business & social integration",
      "Fast hosting setup",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    id: "growth",
    name: "Growth & Custom Merch",
    price: "$2,000 – $4,500",
    description:
      "For established businesses looking to elevate their customer experience and physical branding.",
    features: [
      "5–8 page dynamic website or client portal",
      "Full visual brand kit (colors, typography, assets)",
      "Custom batch of branded physical merchandise (laser-engraved slate, metal cards, or headwear patches)",
      "Priority turnaround",
    ],
    cta: "Upgrade Your Brand",
    featured: true,
  },
  {
    id: "custom",
    name: "Custom Software & Systems",
    price: "Starting at $5,000",
    description:
      "For B2B operations requiring custom software, internal tooling, or automated client dashboards.",
    features: [
      "Full-stack web application development",
      "Database integration & auth",
      "Business workflow automation",
      "Custom API connections",
      "Ongoing support options",
    ],
    cta: "Request Scope",
    featured: false,
  },
] as const

export function ServicesPricing() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-28 px-4 scroll-mt-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF94]/25 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#00FF94] font-mono text-xs uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Straightforward Services.{" "}
            <span className="text-glow-dual">Transparent Pricing.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-balance">
            Custom software, high-converting websites, and physical branded
            merchandise tailored for your business.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className={
                tier.featured
                  ? "glass-card glow-border rounded-2xl p-8 flex flex-col relative ring-1 ring-[#00FF94]/60 shadow-[0_0_48px_rgba(0,255,148,0.16)] lg:-translate-y-3"
                  : "glass-card glass-card-hover rounded-2xl p-8 flex flex-col relative transition-all duration-300"
              }
            >
              {tier.featured ? (
                <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#00FF94] px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-[#0B0F19]">
                  MOST POPULAR
                </p>
              ) : null}
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                {tier.name}
              </h3>
              <p className="text-2xl font-bold text-glow-dual text-[#00FF94] mb-4">
                {tier.price}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#00FF94]" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={serviceInquiryHref(tier.id)}
                className={
                  tier.featured
                    ? "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-[#0B0F19] bg-gradient-to-r from-[#00FF94] to-[#00C8FF] hover:brightness-110 transition-all duration-300 shadow-[0_0_28px_rgba(0,200,255,0.22)] border border-white/10"
                    : "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium border border-[#00FF94]/35 bg-[rgba(11,15,25,0.6)] backdrop-blur-md text-foreground hover:border-[#00C8FF]/50 hover:text-[#00C8FF] transition-all duration-300"
                }
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>

        <aside className="glass-card glow-border rounded-2xl p-8 md:p-10 mt-8 md:mt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
                Need Dedicated 1-on-1 Consulting or Bespoke Builds?
              </h3>
              <p className="text-muted-foreground leading-relaxed text-balance">
                We reserve limited capacity each quarter for private founders and
                businesses needing hands-on custom engineering or specialized
                physical fabrication outside standard tiers.
              </p>
            </div>
            <a
              href={serviceInquiryHref("private")}
              className="shrink-0 inline-flex items-center justify-center gap-2 text-[#00FF94] font-semibold hover:text-[#00C8FF] transition-colors"
            >
              Inquire for Private Retainer
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
