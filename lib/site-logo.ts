import type { StaticImageData } from "next/image"
import siteLogoImage from "@/public/logo-v2.png"

/**
 * Site logo asset (logo-v2.png). Static import keeps paths correct in Next builds.
 * For GitHub Pages project sites, set NEXT_PUBLIC_BASE_PATH (e.g. /Napierlabs.dev).
 */
export const SITE_LOGO: StaticImageData = siteLogoImage

/** String path for public/logo-v2.png — site-root absolute (not ./) so /ecosystem resolves correctly */
export function siteLogoPath(): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base
  return `${normalizedBase}/logo-v2.png`
}
