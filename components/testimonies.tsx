"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonies = [
  {
    id: 1,
    name: "Owusu Asante",
    role: "Business Man",
    image: "/images/owusu_asante.jpg",
    rating: 5,
    comment:
      "As a business man, I needed a reliable team to boost my online visibility. They transformed my digital presence and helped me reach more clients than ever before. Truly exceptional service!",
  },
  {
    id: 2,
    name: "Daniel Osei",
    role: "Mechanical Engineer",
    image: "/images/daniel_osei.jpg",
    rating: 5,
    comment:
      "Being a mechanical engineer, I value precision and efficiency. Their branding and website design were done with outstanding attention to detail—absolutely exceeded my expectations.",
  },
  {
    id: 3,
    name: "Cynthia Boakye",
    role: "Trader",
    image: "/images/cynthia_boakye.jpg",
    rating: 4,
    comment:
      "As a trader, time and trust are everything. Their communication was clear, and they delivered exactly what I needed to attract more customers online. Very satisfied!",
  },
  {
    id: 4,
    name: "Mavis Owusu",
    role: "Sole Business Owner",
    image: "/images/mavis_owusu.jpg",
    rating: 5,
    comment:
      "Running a sole business can be tough, but their IT solutions made everything smoother and more efficient. The team is professional, responsive, and reliable—highly recommended!",
  },
  {
    id: 5,
    name: "Sarah Odame",
    role: "Entrepreneur",
    image: "/images/sarah_odame.jpg",
    rating: 5,
    comment:
      "As an entrepreneur, I’m always looking for ways to grow. Partnering with them was the best decision—my business now runs smarter, and the returns have been incredible.",
  },
]

export default function Testimonies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonies.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonies.length) % testimonies.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonies.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  return (
    <section id="testimonies" className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Real testimonies from satisfied clients who have experienced our exceptional service
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Testimonies Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonies.map((testimony) => (
                <div key={testimony.id} className="w-full flex-shrink-0 px-2 md:px-4">
                  <Card className="p-4 md:p-8 bg-background border-2 border-border hover:border-accent transition-colors mx-auto max-w-2xl">
                    {/* Rating */}
                    <div className="flex gap-1 mb-3 md:mb-4">
                      {Array.from({ length: testimony.rating }).map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent md:w-5 md:h-5" />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-sm md:text-lg text-foreground mb-4 md:mb-6 leading-relaxed italic">
                      "{testimony.comment}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 md:gap-4">
                      <img
                        src={testimony.image || "/placeholder.svg"}
                        alt={testimony.name}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-accent flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="font-semibold text-foreground text-sm md:text-lg truncate">{testimony.name}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground truncate">{testimony.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 md:mt-8 px-2 md:px-0">
            <button
              onClick={goToPrevious}
              className="bg-accent text-accent-foreground p-1.5 md:p-2 rounded-full hover:bg-accent/90 transition-colors flex-shrink-0"
              aria-label="Previous testimony"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-1.5 md:gap-2 flex-1 mx-2 md:mx-4">
              {testimonies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent w-6 md:w-8 h-2 md:h-2"
                      : "bg-muted-foreground/50 hover:bg-muted-foreground w-2 h-2"
                  }`}
                  aria-label={`Go to testimony ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-accent text-accent-foreground p-1.5 md:p-2 rounded-full hover:bg-accent/90 transition-colors flex-shrink-0"
              aria-label="Next testimony"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
