"use client"

import { useState } from "react"
import { Mail, Terminal, Send, AlertCircle } from "lucide-react"

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", company: "", projectType: "", timeline: "", budget: "", message: "" })
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClasses = "w-full bg-[#0a0f1a] border border-[#00F5FF]/30 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF]/50 transition-all"
  const selectClasses = "w-full bg-[#0a0f1a] border border-[#00F5FF]/30 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF]/50 transition-all appearance-none cursor-pointer"

  return (
    <footer id="contact" className="py-20 px-4 pb-40">
      <div className="max-w-6xl mx-auto">
        {/* Contact CTA */}
        <div className="glass-card glow-border rounded-2xl p-8 md:p-12 mb-12">
          <div className="text-center mb-10">
            <span className="text-[#00F5FF] font-mono text-sm mb-4 block">// let&apos;s.connect</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Ready to </span>
              <span className="text-glow text-[#00F5FF]">Build</span>
              <span className="text-foreground"> Something?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-balance">
              Share your vision and let&apos;s forge something extraordinary together.
            </p>
          </div>

          {submitStatus === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00F5FF]/20 flex items-center justify-center">
                <Send className="w-8 h-8 text-[#00F5FF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#00F5FF] text-glow mb-4">Transmission Received.</h3>
              <p className="text-muted-foreground">The Vibe-Smith will review your request shortly.</p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="mt-8 text-[#00F5FF] font-mono text-sm hover:underline"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              {submitStatus === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{errorMessage}</p>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-[#00F5FF] mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-[#00F5FF] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-[#00F5FF] mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className={inputClasses}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-mono text-[#00F5FF] mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="" disabled>Select type...</option>
                    <option value="iOS/Android App Development">iOS/Android App Development</option>
                    <option value="B2B Branding">B2B Branding</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-mono text-[#00F5FF] mb-2">Timeline *</label>
                  <select
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="" disabled>Select timeline...</option>
                    <option value="Immediate">Immediate</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="Research Phase">Research Phase</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-mono text-[#00F5FF] mb-2">Budget Range *</label>
                  <select
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="" disabled>Select budget...</option>
                    <option value="$2k-$5k">$2k - $5k</option>
                    <option value="$5k-$10k">$5k - $10k</option>
                    <option value="$10k+">$10k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-[#00F5FF] mb-2">Project Details</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your vision..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#00F5FF] text-[#141b2d] px-10 py-4 rounded-lg font-bold hover:bg-[#00F5FF]/90 transition-all duration-300 glow-border submit-pulse disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Transmitting..." : "Submit Inquiry"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#00F5FF]" />
            <span className="font-bold text-[#00F5FF]">Napier Labs</span>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@napierlabs.dev"
              className="p-2 rounded-lg glass-card hover:bg-[#00F5FF]/20 transition-colors group flex items-center gap-2"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-[#00F5FF] transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-[#00F5FF] transition-colors">Email</span>
            </a>
            <span className="text-sm text-muted-foreground/60 font-mono">Social channels coming soon</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            Napier Labs | Built with AI. Tested in the Field.
          </p>
        </div>
      </div>
    </footer>
  )
}
