import { writeFileSync } from "node:fs"

// GitHub Pages: custom domain + allow Next.js _next assets (disable Jekyll)
writeFileSync("out/CNAME", "napierlabs.dev\n")
writeFileSync("out/.nojekyll", "")
