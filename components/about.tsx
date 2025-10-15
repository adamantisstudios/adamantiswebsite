import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">About Adamantis Studios</h2>
            <p className="text-xl text-muted-foreground">Your One-Stop Solution for Marketing and IT Services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Adamantis Studios is a holistic marketing and IT business offering comprehensive services to help
                businesses grow and thrive in today's competitive market. We combine traditional marketing strategies
                with cutting-edge digital solutions to provide a complete package for our clients.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                With expertise in over 50 different services, we're equipped to handle all your marketing, design, IT,
                and security needs under one roof.
              </p>
              <Link
                href="https://drive.google.com/file/d/1LZa0LGCOFiPutN6C8Blo4pt18srsOsgE/view?usp=sharing"
                target="_blank"
                className="inline-flex items-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
              >
                View Company Profile
                <ExternalLink size={18} />
              </Link>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/bxviQi0GoiI"
                title="Adamantis Studios Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
