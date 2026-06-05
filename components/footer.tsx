"use client"

import { supabase } from "@/lib/supabase";
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
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const { error } = await supabase.from("inquiries").insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          type: formData.projectType,
          timeline: formData.timeline,
          budget: formData.budget,
          message: formData.message,
        },
      ])

      if (error) throw error

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        timeline: "",
        budget: "",
        message: "",
      })
    } catch (error) {
      console.error("Submission failed:", error)
      setSubmitStatus("error")
      const fallback =
        "Failed to send message. Please try again or email hello@napierlabs.dev."
      const detail =
        error instanceof Error
          ? error.message
          : typeof error === "object" &&
              error !== null &&
              "message" in error &&
              typeof (error as { message: unknown }).message === "string"
            ? (error as { message: string }).message
            : fallback
      setErrorMessage(detail || fallback)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClasses =
    "w-full bg-[#080d17] border border-[#00FF94]/22 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#00C8FF] focus:ring-1 focus:ring-[#00C8FF]/40 transition-all"
  const selectClasses =
    "w-full bg-[#080d17] border border-[#00FF94]/22 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-[#00C8FF] focus:ring-1 focus:ring-[#00C8FF]/40 transition-all appearance-none cursor-pointer"

  return (
    <footer id="contact" className="py-20 px-4 pb-40">
      <div className="max-w-6xl mx-auto">
        {/* Contact CTA */}
        <div className="glass-card glow-border rounded-2xl p-8 md:p-12 mb-12">
          <div className="text-center mb-10">
            <span className="text-[#00FF94] font-mono text-sm mb-4 block uppercase tracking-wider">// secure.channel</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Partnership &amp; </span>
              <span className="text-glow-dual text-[#00C8FF]">Build</span>
              <span className="text-foreground"> Inquiries</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-balance">
              Sponsorship, API validation, integrations, or co-marketing—send a concise brief and expected outcomes.
            </p>
          </div>

          {submitStatus === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00FF94]/15 flex items-center justify-center border border-[#00C8FF]/25">
                <Send className="w-8 h-8 text-[#00C8FF]" />
              </div>
              <h3 className="text-2xl font-bold text-[#00FF94] text-glow-dual mb-4">Transmission Received.</h3>
              <p className="text-muted-foreground">We&apos;ll review your request and reply from the lab.</p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="mt-8 text-[#00C8FF] font-mono text-sm hover:underline"
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
                  <label className="block text-sm font-mono text-[#00FF94] mb-2">Name *</label>
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
                  <label className="block text-sm font-mono text-[#00FF94] mb-2">Email *</label>
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
                <label className="block text-sm font-mono text-[#00FF94] mb-2">Company</label>
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
                  <label className="block text-sm font-mono text-[#00FF94] mb-2">Inquiry Type *</label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="" disabled>Select type...</option>
                    <option value="Partnership / Sponsorship">Partnership / Sponsorship</option>
                    <option value="API / SDK / Integration">API / SDK / Integration</option>
                    <option value="Hardware Validation">Hardware Validation</option>
                    <option value="iOS/Android App Development">iOS/Android App Development</option>
                    <option value="B2B Branding">B2B Branding</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-mono text-[#00FF94] mb-2">Timeline *</label>
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
                  <label className="block text-sm font-mono text-[#00FF94] mb-2">Budget Range *</label>
                  <select
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="" disabled>Select budget...</option>
                    <option value="0-2k">$0 - $2k</option>
                    <option value="2k-5k">$2k - $5k</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k+">$10k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-[#00FF94] mb-2">Project Details</label>
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
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FF94] to-[#00C8FF] text-[#0B0F19] px-10 py-4 rounded-lg font-bold hover:brightness-110 transition-all duration-300 glow-border submit-pulse disabled:opacity-50 disabled:cursor-not-allowed"
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
            <Terminal className="w-5 h-5 text-[#00FF94]" />
            <span className="font-bold text-[#00C8FF]">Napier Labs</span>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@napierlabs.dev"
              className="p-2 rounded-lg glass-card hover:bg-[#00FF94]/10 transition-colors group flex items-center gap-2"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-[#00C8FF] transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-[#00FF94] transition-colors">hello@napierlabs.dev</span>
            </a>
            <span className="text-sm text-muted-foreground/60 font-mono">Social channels coming soon</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            Napier Labs | Agentic velocity. Field-tested integrations.
          </p>
        </div>
      </div>
    </footer>
  )
}
