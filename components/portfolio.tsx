import Image from "next/image"

const portfolioItems = [
  {
    image: "/images/logo designs-01.jpg",
    title: "Logo Design",
    description: "Corporate branding for a tech company",
  },
  {
    image: "/images/website page-01.jpg",
    title: "Website Development",
    description: "E-commerce platform for a retail business",
  },
  {
    image: "/images/social media campaign-01.jpg",
    title: "Social Media Campaign",
    description: "Integrated marketing for a food brand",
  },
  {
    image: "/images/video advert-01.jpg",
    title: "Video Production",
    description: "Corporate video for a financial institution",
  },
  {
    image: "/images/ccvt camera-01.jpg",
    title: "Security Installation",
    description: "CCTV and access control for a commercial property",
  },
  {
    image: "/images/print out-01.jpg",
    title: "Print Design",
    description: "Brochures and marketing materials for an event",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground">Showcasing Our Creative Work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-card">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
