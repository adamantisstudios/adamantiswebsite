"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const serviceCategories = [
    { id: "all", label: "All Services" },
    { id: "digital", label: "Digital Marketing" },
    { id: "design", label: "Design & Media" },
    { id: "it", label: "IT Solutions" },
    { id: "security", label: "Security" },
    { id: "business", label: "Business Services" },
  ]

  const scrollToServices = (categoryId?: string) => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      const offset = 100 // Offset to show content below header
      const elementPosition = servicesSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Trigger category filter if provided
      if (categoryId) {
        // Dispatch custom event to update services filter
        window.dispatchEvent(new CustomEvent("filterServices", { detail: categoryId }))
      }
    }
    setIsServicesOpen(false)
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-md"
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="Adamantis Studios"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">Adamantis Studios</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-sm font-medium text-foreground hover:text-accent transition-all duration-300 relative group flex items-center gap-1"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full mt-2 right-0 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[220px] animate-fade-in">
                  {serviceCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => scrollToServices(category.id)}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-accent transition-all duration-200"
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in bg-background">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-sm font-medium text-foreground hover:text-accent transition-all duration-300 hover:translate-x-2"
              >
                {link.label}
              </Link>
            ))}

            {/* Services with submenu in mobile */}
            <div className="py-3">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-accent transition-all duration-300"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {serviceCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => scrollToServices(category.id)}
                      className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-accent transition-all duration-200"
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
