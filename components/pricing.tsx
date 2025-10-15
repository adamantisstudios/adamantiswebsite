"use client"

import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Pay Once, Own Forever",
    price: "From GH₵ 4,500",
    description: "A little costly but you save long-term",
    features: [
      "1,000 keyword optimization injection",
      "Local and international SEO ranking",
      "Hosting forever included",
      "100% website uptime guarantee",
      "Higher customization options",
      "Website design review included",
      "Perfect for long-term savings",
    ],
    highlighted: true,
  },
  {
    name: "Yearly Renewal Plan",
    price: "From GH₵ 1,500/year",
    description: "Affordable for businesses on a low budget",
    features: [
      "1,000 keyword optimization injection",
      "Local and international SEO ranking",
      "Domain name included",
      "Hosting & SSL security",
      "5 official email options",
      "cPanel access",
      "Lightning-fast loading speed",
    ],
    highlighted: false,
  },
  {
    name: "Free Website Build",
    price: "Free",
    description: "We build it for free with our branding",
    features: [
      "Complete website build at no cost",
      "Custom domain assistance available",
      "Free hosting & SSL security",
      "Professional design",
      "Our advert on homepage",
      "Helps cover setup & maintenance",
      "Great for startups",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  const handleWhatsApp = (planName: string) => {
    const message = encodeURIComponent(`I'm interested in the ${planName} package. Please provide more details.`)
    window.open(`https://wa.me/233242799990?text=${message}`, "_blank")
  }

  return (
    <section id="pricing" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Website Packages</h2>
          <p className="text-xl text-muted-foreground">Choose the perfect plan for your business</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.highlighted
                  ? "bg-accent text-accent-foreground border-2 border-accent shadow-xl"
                  : "bg-card border border-border"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-accent-foreground" : "text-card-foreground"}`}
              >
                {plan.name}
              </h3>
              <div
                className={`text-3xl font-bold mb-4 ${plan.highlighted ? "text-accent-foreground" : "text-foreground"}`}
              >
                {plan.price}
              </div>
              <p className={`mb-6 ${plan.highlighted ? "text-accent-foreground/90" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-accent-foreground" : "text-accent"}`}
                    />
                    <span className={`text-sm ${plan.highlighted ? "text-accent-foreground" : "text-card-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleWhatsApp(plan.name)}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.highlighted
                    ? "bg-white text-accent hover:bg-white/90"
                    : "bg-accent text-accent-foreground hover:bg-accent/90"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
