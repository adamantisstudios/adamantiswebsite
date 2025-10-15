"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 30000)

    // Show popup every 5 minutes
    const interval = setInterval(() => {
      setIsVisible(true)
    }, 300000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4 animate-fade-in">
      <div className="bg-card rounded-lg max-w-md w-full relative animate-scale-in shadow-2xl">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-card-foreground hover:text-accent transition-all duration-300 hover:rotate-90 z-10"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
            <Image
              src="/images/popup.jpg"
              alt="Promo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h2 className="text-2xl font-bold text-card-foreground mb-2 text-center">
            Work As An Agent For Adamantis Studios
          </h2>
          <p className="text-muted-foreground text-center mb-6">Earn From Home</p>

          <a
            href="https://wa.link/ul1zzi"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-accent text-accent-foreground text-center py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105"
          >
            Order Here
          </a>
        </div>
      </div>
    </div>
  )
}
