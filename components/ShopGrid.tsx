import { Check, ExternalLink } from "lucide-react"

const products = [
  {
    name: "Custom Laser-Engraved Slate Coasters (Batch of 25)",
    price: "$125.00",
    checkoutUrl: "https://buy.stripe.com/test_placeholder_1",
    features: [
      "Real natural edge slate",
      "Deep laser engraving",
      "Laser-sealed",
      "Includes custom company logo etching",
    ],
  },
  {
    name: "Executive Anodized Aluminum Business/VIP Cards (Pack of 50)",
    price: "$175.00",
    checkoutUrl: "https://buy.stripe.com/test_placeholder_2",
    features: [
      "Matte black finish",
      "Ultra-precise fiber-laser engraved logo",
      "Double-sided vector graphics",
      "Custom QR code integration",
    ],
  },
  {
    name: "Bespoke Laser Leatherette Trucker Hats (Batch of 20)",
    price: "$360.00",
    checkoutUrl: "https://buy.stripe.com/test_placeholder_3",
    features: [
      "Richardson 112 / Decky structured fit",
      "Heat-pressed laserette patches",
      "Custom contour stitching",
    ],
  },
]

export function ShopGrid() {
  return (
    <section
      id="shop"
      aria-labelledby="shop-heading"
      className="relative py-28 px-4 scroll-mt-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF94]/25 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-[#00FF94] font-mono text-xs uppercase tracking-[0.2em] mb-4">
            Merch &amp; Lab Hardware
          </p>
          <h2
            id="shop-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            The Napier Labs <span className="text-glow-dual">Store</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-balance">
            Order custom engraved batch runs, studio merchandise, or digital
            tools directly.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.checkoutUrl}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-glow-dual text-[#00FF94] mb-6">
                {product.price}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed"
                  >
                    <Check
                      className="w-4 h-4 mt-0.5 shrink-0 text-[#00FF94]"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={product.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buy ${product.name}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-[#0B0F19] bg-gradient-to-r from-[#00FF94] to-[#00C8FF] hover:brightness-110 transition-all duration-300 shadow-[0_0_28px_rgba(0,200,255,0.22)] border border-white/10"
              >
                Buy now
                <ExternalLink className="w-4 h-4" aria-hidden />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-white/[0.08] bg-[rgba(11,15,25,0.55)] backdrop-blur-xl px-6 py-5 text-center text-sm text-muted-foreground leading-relaxed">
          Looking for larger wholesale quantities (100+ units) or custom
          material prototyping?{" "}
          <a
            href="#contact"
            className="text-[#00FF94] font-medium hover:text-[#00C8FF] transition-colors"
          >
            Contact us directly
          </a>{" "}
          for volume purchase orders.
        </p>
      </div>
    </section>
  )
}
