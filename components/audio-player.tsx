"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function AudioPlayer() {
  const [hasPlayed, setHasPlayed] = useState(false)
  const [showPermission, setShowPermission] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Check if audio has already been played in this session
    const played = sessionStorage.getItem("audioPlayed")
    if (played) {
      setHasPlayed(true)
      return
    }

    // Try to autoplay after a short delay
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setHasPlayed(true)
            setIsPlaying(true)
            sessionStorage.setItem("audioPlayed", "true")
          })
          .catch(() => {
            // Autoplay failed, show permission request
            setShowPermission(true)
          })
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      setIsPlaying(false)
    }

    const handlePlay = () => {
      setIsPlaying(true)
    }

    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("play", handlePlay)

    return () => {
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("play", handlePlay)
    }
  }, [])

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setHasPlayed(true)
      setIsPlaying(true)
      setShowPermission(false)
      sessionStorage.setItem("audioPlayed", "true")
    }
  }

  const handleDismiss = () => {
    setShowPermission(false)
    setHasPlayed(true)
    sessionStorage.setItem("audioPlayed", "true")
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/Adamantis Ads Sample.mp3" loop />

      {/* Permission Dialog */}
      {showPermission && (
        <div className="fixed bottom-24 right-6 bg-card border border-border rounded-lg shadow-2xl p-4 max-w-sm z-50 animate-fade-in">
          <div className="flex items-start gap-3">
            <Volume2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-card-foreground mb-1">Welcome to Adamantis Studios</h3>
              <p className="text-sm text-muted-foreground mb-3">Would you like to hear a brief introduction?</p>
              <div className="flex gap-2">
                <button
                  onClick={handlePlayAudio}
                  className="flex-1 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-all"
                >
                  Play Audio
                </button>
                <button
                  onClick={handleDismiss}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-muted-foreground hover:bg-secondary transition-all"
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {hasPlayed && !showPermission && (
        <div className="fixed bottom-24 left-6 flex gap-2 z-50">
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-accent-foreground transition-all"
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleMute}
            className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-accent-foreground transition-all"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
      )}
    </>
  )
}
