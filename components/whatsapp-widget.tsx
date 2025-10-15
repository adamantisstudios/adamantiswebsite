"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import Image from "next/image"

const templateQuestions = [
  "I'd like to know more about your digital marketing services.",
  "I need a quote for website development. Can you help?",
  "I'm interested in your security solutions. What options do you offer?",
  "Do you offer business registration services? I need help with my startup.",
  "I'd like to schedule a consultation for graphic design services.",
]

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [customMessage, setCustomMessage] = useState("")

  const handleTemplateClick = (question: string) => {
    const message = encodeURIComponent(question)
    window.open(`https://wa.me/233242799990?text=${message}`, "_blank")
  }

  const handleCustomMessage = () => {
    if (customMessage.trim()) {
      const message = encodeURIComponent(customMessage)
      window.open(`https://wa.me/233242799990?text=${message}`, "_blank")
      setCustomMessage("")
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle className="w-7 h-7 text-accent-foreground" />
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] bg-card border border-border rounded-lg shadow-2xl z-50 overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-accent text-accent-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle size={24} />
              <span className="font-semibold">Chat with us</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:rotate-90 transition-transform duration-300"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 max-h-[400px] overflow-y-auto">
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto mb-3 relative">
                <Image
                  src="/images/logo.png"
                  alt="Adamantis Studios"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Adamantis Studios</h3>
              <p className="text-sm text-muted-foreground">Hello! How can we help you today?</p>
            </div>

            {/* Template Questions */}
            <div className="space-y-2 mb-4">
              {templateQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleTemplateClick(question)}
                  className="w-full text-left p-3 bg-secondary rounded-lg text-sm text-card-foreground hover:bg-secondary/80 transition-all duration-300 hover:translate-x-1"
                >
                  {question}
                </button>
              ))}
            </div>

            {/* Custom Message */}
            <div>
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-3 bg-secondary border border-border rounded-lg text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                rows={3}
              />
              <button
                onClick={handleCustomMessage}
                className="w-full mt-2 bg-accent text-accent-foreground py-2 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              >
                Begin Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
