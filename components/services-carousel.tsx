"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Hire a Worker Today",
    description: "Connect with skilled professionals ready to work for your business needs.",
    url: "https://registrypoint.netlify.app/",
    color: "from-blue-600 to-blue-700",
  },
  {
    id: 2,
    title: "Search for a Job",
    description: "Find your next career opportunity with our comprehensive job portal.",
    url: "https://fasthiredterms.netlify.app/",
    color: "from-purple-600 to-purple-700",
  },
  {
    id: 3,
    title: "Business Regulatory & Compliance",
    description: "Ensure your business meets all regulatory requirements and compliance standards.",
    url: "https://bizcomplianceforms.netlify.app/",
    color: "from-green-600 to-green-700",
  },
  {
    id: 4,
    title: "General Writing Services",
    description: "Professional writing services including CVs, cover letters, and more.",
    url: "https://cvwriterpros.netlify.app/",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: 5,
    title: "Earn Money Working As an Agent",
    description: "Work remotely as an agent and earn competitive commissions.",
    url: "https://dataflexghana.netlify.app/",
    color: "from-red-600 to-red-700",
  },
  {
    id: 6,
    title: "Boost Your Social Media Presence",
    description: "Grow your followers and engagement with our viral growth tools.",
    url: "https://viralgrowthtools.netlify.app/",
    color: "from-pink-600 to-pink-700",
  },
  {
    id: 7,
    title: "Visit Our Projects Portfolio",
    description: "Explore our complete portfolio of creative and technical projects.",
    url: "https://www.behance.net/adamantisstudios",
    color: "from-indigo-600 to-indigo-700",
  },
]

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
    setIsAutoPlay(false)
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < 3; i++) {
      cards.push(services[(currentIndex + i) % services.length])
    }
    return cards
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Our Services & Opportunities</h2>
          <p className="text-xl text-muted-foreground">
            Explore our range of professional services and business solutions
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-3 gap-6">
            {getVisibleCards().map((service, index) => (
              <div
                key={service.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <Link href={service.url} target="_blank" rel="noopener noreferrer">
                  <div
                    className={`bg-gradient-to-br ${service.color} rounded-xl p-8 h-full flex flex-col justify-between text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group`}
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-white/90 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-base leading-relaxed">{service.description}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                      <span className="font-semibold">Learn More</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute -left-16 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute -right-16 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted w-2 hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0 px-2">
                  <Link href={service.url} target="_blank" rel="noopener noreferrer">
                    <div
                      className={`bg-gradient-to-br ${service.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex items-center gap-2 text-white/80">
                        <span className="font-semibold text-sm">Learn More</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={goToPrevious}
              className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex justify-center gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-muted w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
