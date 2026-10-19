export type ServiceInquiry = {
  id: string
  projectType: string
  budget: string
  message: string
}

export const SERVICE_INQUIRIES: Record<string, ServiceInquiry> = {
  starter: {
    id: "starter",
    projectType: "Starter Digital & Identity",
    budget: "0-2k",
    message:
      "Service inquiry: Starter Digital & Identity ($750 – $1,500).",
  },
  growth: {
    id: "growth",
    projectType: "Growth & Custom Merch",
    budget: "2k-5k",
    message: "Service inquiry: Growth & Custom Merch ($2,000 – $4,500).",
  },
  custom: {
    id: "custom",
    projectType: "Custom Software & Systems",
    budget: "5k-10k",
    message:
      "Service inquiry: Custom Software & Systems (starting at $5,000).",
  },
  private: {
    id: "private",
    projectType: "Private 1-on-1 Retainer",
    budget: "",
    message:
      "Service inquiry: Private 1-on-1 consulting or a bespoke build outside the standard tiers.",
  },
  sponsorship: {
    id: "sponsorship",
    projectType: "Partnership / Sponsorship",
    budget: "",
    message:
      "Sponsorship inquiry: Q1/Q2 creator sponsorship for fabrication machinery, production hardware, or dev tooling. Please share the media kit and production specs.",
  },
}

export function getServiceInquiry(id: string | null) {
  if (!id) return undefined
  return SERVICE_INQUIRIES[id]
}

export function serviceInquiryHref(id: string) {
  return `/?service=${id}#contact`
}
