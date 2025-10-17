"use client"

import { useState, useRef, useEffect } from "react"
import { X, Play } from "lucide-react"

export default function VideoSection() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Automatically play the video when fullscreen is opened
  useEffect(() => {
    const video = videoRef.current
    if (isFullscreen && video) {
      video.currentTime = 0 // reset to start
      video.play().catch(() => {
        // ignore autoplay blocking
      })
    } else if (!isFullscreen && video) {
      video.pause()
    }
  }, [isFullscreen])

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Why A Permanent Website?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            You Need A Permanent Website
          </p>
        </div>

        {/* Thumbnail / Preview */}
        <div className="max-w-sm mx-auto">
          <div
            className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setIsFullscreen(true)}
          >
            <video
              src="/images/free_forever.mp4"
              poster="/images/free_forever.jpg"
              className="w-full h-full object-cover"
              muted
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-accent-foreground fill-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <div
            className="relative w-full max-w-sm aspect-[9/16]"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src="/images/free_forever.mp4"
              poster="/images/free_forever.jpg"
              className="w-full h-full rounded-lg object-cover"
              controls
            />
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 bg-accent text-accent-foreground rounded-full p-2 hover:bg-accent/90 transition-all"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
