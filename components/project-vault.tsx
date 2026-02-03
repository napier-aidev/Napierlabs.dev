"use client"

import { useState } from "react"
import { ExternalLink, Github, Layers, Star } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Cyberboss Studios",
    description: "My active partnership in the vinyl and signage industry.",
    tags: ["Partnership", "Vinyl", "Signage", "Branding"],
    projectStatus: "active",
    featured: true,
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Cuesight.ai",
    description: "Advanced analytics and computer vision tracking for the billiards community.",
    tags: ["AI Analytics", "Computer Vision", "Billiards", "Sports Tech"],
    projectStatus: "construction",
    featured: true,
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Pixel Lab",
    description: "AI command center for modern aquarists.",
    tags: ["AI", "Agentic Systems", "React", "Supabase"],
    projectStatus: "construction",
    featured: true,
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Vinyl Vision Pro",
    description: "Proprietary AI tool for material scaling at Cyberboss Studios.",
    tags: ["Computer Vision", "AI", "Internal Tool", "Material Tracking"],
    projectStatus: "construction",
    featured: true,
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Home Improvement Workflow App",
    description: "Custom B2B solution for automated project management.",
    tags: ["B2B", "Invoice Automation", "Workflow", "Industry Solution"],
    projectStatus: "construction",
    featured: true,
    github: "#",
    live: "#",
  },
]

export function ProjectVault() {
  const [filter, setFilter] = useState<"all" | "featured">("all")
  
  const filteredProjects = filter === "featured" 
    ? projects.filter(p => p.featured) 
    : projects

  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// project.vault</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-glow text-[#00F5FF]">{"{"}</span>
            <span className="text-foreground"> Projects </span>
            <span className="text-glow text-[#00F5FF]">{"}"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            A curated collection of work from the vault. Each project represents a unique challenge conquered.
          </p>
          
          {/* Filter tabs */}
          <div className="inline-flex glass-card rounded-lg p-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === "all" 
                  ? "bg-[#00F5FF] text-[#141b2d]" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Layers className="w-4 h-4 inline mr-2" />
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === "featured" 
                  ? "bg-[#00F5FF] text-[#141b2d]" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Star className="w-4 h-4 inline mr-2" />
              Featured
            </button>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-xl overflow-hidden transition-all duration-300 group relative"
            >
              {/* Status Badge */}
              <div className="absolute top-3 right-3 z-10">
                {project.projectStatus === "active" ? (
                  <span className="text-xs font-bold font-mono px-2 py-1 rounded bg-[#00F5FF]/20 text-[#00F5FF] text-glow-sm">
                    LIVE
                  </span>
                ) : (
                  <span className="text-xs font-bold font-mono px-2 py-1 rounded bg-[#FF4D00]/20 text-[#FF4D00] pulse-amber">
                    COMING SOON
                  </span>
                )}
              </div>
              
              {/* Project header with status */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <Star className="w-4 h-4 text-[#00F5FF] fill-[#00F5FF]" />
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 rounded-lg bg-secondary/50 hover:bg-[#00F5FF]/20 transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-4 h-4 text-muted-foreground hover:text-[#00F5FF]" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        className="p-2 rounded-lg bg-secondary/50 hover:bg-[#00F5FF]/20 transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-[#00F5FF]" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-[#00F5FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
              </div>
              
              {/* Tags */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded bg-[#00F5FF]/10 text-[#00F5FF]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
