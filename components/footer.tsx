import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Adamantis Studios</h3>
            <p className="text-accent-foreground/80 text-sm leading-relaxed">
              Your One-Stop Solution for Marketing and IT Services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-accent-foreground/80 hover:text-accent-foreground text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Digital Marketing",
                "Graphics Design",
                "Web Development",
                "Security Solutions",
                "Business Services",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-accent-foreground/80 hover:text-accent-foreground text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li>Madina, Accra, Ghana</li>
              <li>0242-799-990 | 0551-999-901</li>
              <li>info.adamantisstudios@gmail.com</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://wa.me/233242799990"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 text-center">
          <p className="text-accent-foreground/80 text-sm">&copy; 2025 Adamantis Studios. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
