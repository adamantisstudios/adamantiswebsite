"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/swiper-slide slide-1.jpg",
    title: "Holistic Marketing & IT Solutions",
    description: "Comprehensive digital and traditional marketing services to grow your business",
    cta: "Get Started",
    href: "#contact",
  },
  {
    image: "/images/swiper-slide slide-2.jpg",
    title: "Professional Graphics & Web Development",
    description: "Custom designs and development solutions tailored to your needs",
    cta: "Our Services",
    href: "#services",
  },
  {
    image: "images/swiper-slide slide-3.jpg",
    title: "Security & IT Infrastructure",
    description: "Complete security solutions and IT services for your business",
    cta: "Contact Us",
    href: "#contact",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center w-full">
            <div className="container mx-auto px-4 w-full">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in-up">
                  {slide.title}
                </h1>
                <p
                  className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slide.description}
                </p>
                <Link
                  href={slide.href}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all hover:gap-4 animate-fade-in-up text-sm md:text-base"
                  style={{ animationDelay: "0.4s" }}
                >
                  {slide.cta}
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
