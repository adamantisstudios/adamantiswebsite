"use client"
import { useState, useEffect, useRef } from "react"
import {
  Globe,
  Smartphone,
  Youtube,
  MessageCircle,
  FileText,
  PenTool,
  Palette,
  Camera,
  Printer,
  Video,
  Film,
  Radio,
  Podcast,
  Megaphone,
  Box,
  BookOpen,
  Bone as Drone,
  ImageIcon,
  Mic,
  CameraIcon,
  VideoIcon,
  Music,
  PaintBucket,
  Layers,
  Shirt,
  Laptop,
  Wrench,
  Monitor,
  FileCheck,
  Search,
  MapPin,
  ShoppingBag,
  GraduationCap,
  Disc,
  Settings,
  DoorOpen,
  Car,
  CreditCard,
  Zap,
  Warehouse,
  Shield,
  VideoIcon as VideoIntercom,
  FileSignature,
  Plane,
  TrendingUp,
  Phone,
  Truck,
  Briefcase,
  Rocket,
  X,
} from "lucide-react"

const categories = [
  { id: "all", label: "All Services" },
  { id: "digital", label: "Digital Marketing" },
  { id: "design", label: "Design & Media" },
  { id: "it", label: "IT Solutions" },
  { id: "security", label: "Security" },
  { id: "business", label: "Business Services" },
]

const services = [
  // Digital Marketing
  {
    icon: Globe,
    title: "Digital Marketing & Branding",
    description: "Comprehensive digital marketing strategies, including SEO, social media management, and branding solutions.",
    category: "digital",
  },
  {
    icon: Smartphone,
    title: "Social Media Management",
    description: "Manage and grow your social media presence with engaging content, account management, and performance analytics.",
    category: "digital",
  },
  {
    icon: Youtube,
    title: "YouTube Video Ads",
    description: "Create and optimize YouTube video ads for maximum reach and engagement.",
    category: "digital",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Setup",
    description: "Professional setup and management of WhatsApp Business for seamless customer engagement.",
    category: "digital",
  },
  {
    icon: FileText,
    title: "Blogging & Content Writing",
    description: "SEO-optimized blog writing and content creation services to drive engagement and traffic.",
    category: "digital",
  },
  {
    icon: PenTool,
    title: "Copywriting Services",
    description: "Professional copywriting services that engage your audience and drive action.",
    category: "digital",
  },
  // Design & Media
  {
    icon: Palette,
    title: "Professional Graphics Design",
    description: "High-quality graphic design services for logos, banners, flyers, brochures, and more.",
    category: "design",
  },
  {
    icon: Camera,
    title: "Technical Photo Manipulation",
    description: "Advanced photo editing and manipulation services to create professional and unique visuals.",
    category: "design",
  },
  {
    icon: Printer,
    title: "Type-Setting & Printing",
    description: "Professional typesetting and printing services for business cards, T-shirts, brochures, and more.",
    category: "design",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional video production services for ads, promotions, corporate videos, and more.",
    category: "design",
  },
  {
    icon: Film,
    title: "Animation & Photography",
    description: "Creative animation and professional photography services for various projects.",
    category: "design",
  },
  {
    icon: Radio,
    title: "Radio & TV Ads",
    description: "Production and placement of radio and TV advertisements to reach a broader audience.",
    category: "design",
  },
  {
    icon: Podcast,
    title: "Live Streaming Services",
    description: "Professional live streaming services for events and promotions.",
    category: "design",
  },
  {
    icon: Megaphone,
    title: "Town Cryer Marketing",
    description: "Traditional megaphone marketing for local campaigns with modern integration.",
    category: "design",
  },
  {
    icon: Box,
    title: "Business Logo Design",
    description: "Custom 2D and 3D logo design services to elevate your brand identity.",
    category: "design",
  },
  {
    icon: BookOpen,
    title: "Company Profile Design",
    description: "Professional company profile design services including interactive PDF and presentations.",
    category: "design",
  },
  {
    icon: Drone,
    title: "Drone Rental Services",
    description: "Aerial photography and videography services for various projects.",
    category: "design",
  },
  {
    icon: ImageIcon,
    title: "Monthly Professional Social Media Graphics",
    description: "Engage your audience with compelling social media graphics, one per day.",
    category: "design",
  },
  {
    icon: Mic,
    title: "Voice Acting Services",
    description: "Professional voice acting services for various projects.",
    category: "design",
  },
  {
    icon: CameraIcon,
    title: "Events Photography Services",
    description: "Professional photography for corporate and civil events.",
    category: "design",
  },
  {
    icon: VideoIcon,
    title: "Events Videography Services",
    description: "Professional videography for corporate and civil events.",
    category: "design",
  },
  {
    icon: Music,
    title: "Music Recording And Mastering",
    description: "High-quality music recording and mastering services.",
    category: "design",
  },
  {
    icon: PaintBucket,
    title: "Interior Design Services",
    description: "Professional interior design services for residential and commercial spaces.",
    category: "design",
  },
  {
    icon: Layers,
    title: "Custom 3D Epoxy Design Services",
    description: "Custom 3D epoxy design services for unique and durable flooring solutions.",
    category: "design",
  },
  {
    icon: Shirt,
    title: "Design Of Office Wear",
    description: "Custom design and production of office wear for a professional look.",
    category: "design",
  },
  // IT Solutions
  {
    icon: Laptop,
    title: "Web & App Development",
    description: "Custom website and mobile app development services tailored to your business needs.",
    category: "it",
  },
  {
    icon: Wrench,
    title: "PC Hardware & Software Repairs",
    description: "General PC repairs, troubleshooting, and software fixes.",
    category: "it",
  },
  {
    icon: Monitor,
    title: "PC & Mac Repair Services",
    description: "Repair and maintenance services for PCs and Macs.",
    category: "it",
  },
  {
    icon: FileCheck,
    title: "Fillable PDF Form Creation Services",
    description: "Creation of fillable PDF forms for various purposes.",
    category: "it",
  },
  {
    icon: Search,
    title: "Free Website Audit Services",
    description: "Comprehensive audit of your website for improvements.",
    category: "it",
  },
  {
    icon: Smartphone,
    title: "Converting Websites Into Mobile Apps",
    description: "Transform your website into a mobile app for better user engagement.",
    category: "it",
  },
  {
    icon: Globe,
    title: "All-in-One Business Landing Page",
    description: "Establish a professional online presence quickly with unlimited product listing.",
    category: "it",
  },
  {
    icon: MapPin,
    title: "Business On Google Map, Yango Bolt Etc",
    description: "Get your business listed on popular platforms like Google Maps, Yango, and Bolt.",
    category: "it",
  },
  {
    icon: ShoppingBag,
    title: "Sale Of All Kinds Of Computer Accessories",
    description: "Retail of various computer accessories and peripherals.",
    category: "it",
  },
  {
    icon: Box,
    title: "Procurement Of All Office Supplies And Electronics",
    description: "Sourcing and supply of office equipment and electronics.",
    category: "it",
  },
  {
    icon: GraduationCap,
    title: "General ICT Training Services",
    description: "Comprehensive training in various ICT skills.",
    category: "it",
  },
  {
    icon: Music,
    title: "Music Software Training",
    description: "Training in music software for production and editing.",
    category: "it",
  },
  {
    icon: Disc,
    title: "Sale Of PC Software/Installation",
    description: "Retail and installation of various PC software.",
    category: "it",
  },
  {
    icon: Settings,
    title: "Setup and Custom WordPress",
    description: "Setup and customization of WordPress services for your business needs.",
    category: "it",
  },
  // Security
  {
    icon: DoorOpen,
    title: "Gate Automation",
    description: "Installation and setup of automated gate systems for residential and commercial properties.",
    category: "security",
  },
  {
    icon: Car,
    title: "GPS Car Tracking Installation",
    description: "Professional installation of GPS tracking devices for vehicles.",
    category: "security",
  },
  {
    icon: CreditCard,
    title: "Access Control Installation",
    description: "Setup of access control systems for secure entry management.",
    category: "security",
  },
  {
    icon: Zap,
    title: "Electric Fence Installation",
    description: "Installation of electric fencing for enhanced security.",
    category: "security",
  },
  {
    icon: Warehouse,
    title: "Remote Garage Door Installation",
    description: "Setup of remote-controlled garage door systems.",
    category: "security",
  },
  {
    icon: Shield,
    title: "Razor Wiring Installation",
    description: "Installation of razor wiring for perimeter security.",
    category: "security",
  },
  {
    icon: VideoIntercom,
    title: "Video Intercom Installation",
    description: "Setup of video intercom systems for secure communication.",
    category: "security",
  },
  {
    icon: Camera,
    title: "CCTV Camera Installation",
    description: "Professional installation of CCTV surveillance systems.",
    category: "security",
  },
  // Business Services
  {
    icon: FileSignature,
    title: "Business Registration & Compliance",
    description: "Assistance with business registration, renewals, and compliance.",
    category: "business",
  },
  {
    icon: Plane,
    title: "Travel Document Services",
    description: "Visa CV writing, cover letters, and travel document preparation.",
    category: "business",
  },
  {
    icon: TrendingUp,
    title: "Sales Activation Services",
    description: "Boost your sales with our dedicated sales action team and professional services.",
    category: "business",
  },
  {
    icon: Phone,
    title: "Tele-Marketing Services",
    description: "Reach your audience directly with our professional tele-marketing services.",
    category: "business",
  },
  {
    icon: Truck,
    title: "Van Sales Services",
    description: "Increase your sales with our van sales services.",
    category: "business",
  },
  {
    icon: Briefcase,
    title: "B2B Sales Executives",
    description: "Professional B2B sales services to boost your business.",
    category: "business",
  },
  {
    icon: Rocket,
    title: "Business Startup Services",
    description: "Assistance in starting and growing your business.",
    category: "business",
  },
]

const galleryImages = [
  { id: 1, alt: "Instagram Management", src: "/images/instagram.jpg" },
  { id: 2, alt: "Design & Creative Services", src: "/images/startup_services.jpg" },
  { id: 3, alt: "IT Solutions & Development", src: "/images/get_a_website_now.jpg" },
  { id: 4, alt: "Security Systems", src: "/images/Monthly_Graphics_Design.jpg" },
  { id: 5, alt: "Business Services", src: "/images/register_your_business.jpg" },
  { id: 6, alt: "Professional Branding", src: "/images/town_cryer.jpg" },
]

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const categoryRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleFilterServices = (event: CustomEvent) => {
      setActiveCategory(event.detail)
    }
    window.addEventListener("filterServices", handleFilterServices as EventListener)
    return () => {
      window.removeEventListener("filterServices", handleFilterServices as EventListener)
    }
  }, [])

  useEffect(() => {
    const activeButton = categoryRefs.current[activeCategory]
    const container = containerRef.current
    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()
      setSliderStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      })
      if (servicesRef.current) {
        setTimeout(() => {
          servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    }
  }, [activeCategory])

  const filteredServices =
    activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)

  const handleWhatsApp = (serviceName: string) => {
    const message = encodeURIComponent(
      `I am interested in your ${serviceName}. How much do you charge for this service?`,
    )
    window.open(`https://wa.me/233242799990?text=${message}`, "_blank")
  }

  return (
    <section id="services" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-4">Our Services</h2>
          <p className="text-base md:text-lg text-muted-foreground">Comprehensive Solutions for Your Business Needs</p>
        </div>
        <div ref={containerRef} className="relative flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
          <div
            className="absolute h-10 bg-accent rounded-full transition-all duration-300 ease-out -z-0 hidden md:block"
            style={{
              left: `${sliderStyle.left}px`,
              width: `${sliderStyle.width}px`,
              top: "0",
            }}
          />
          {categories.map((category) => (
            <button
              key={category.id}
              ref={(el) => {
                categoryRefs.current[category.id] = el
              }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all relative z-10 flex-shrink-0 ${
                activeCategory === category.id
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-card text-card-foreground hover:bg-secondary border border-border"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* First Services Grid (0-4) */}
        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {filteredServices.slice(0, 5).map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 md:p-6 hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent transition-colors">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-xs md:text-sm font-medium transition-colors"
                >
                  <MessageCircle size={14} className="md:w-4 md:h-4" />
                  Request Quote
                </button>
              </div>
            )
          })}
        </div>

        {/* First Image */}
        <div className="mb-8 md:mb-12">
          <div
            onClick={() => setSelectedImage(galleryImages[0].src)}
            className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group bg-secondary border border-border hover:border-accent transition-all max-w-xs mx-auto"
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                View
              </span>
            </div>
          </div>
        </div>

        {/* Second Services Grid (5-9) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {filteredServices.slice(5, 10).map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index + 5}
                className="bg-card border border-border rounded-lg p-4 md:p-6 hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent transition-colors">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-xs md:text-sm font-medium transition-colors"
                >
                  <MessageCircle size={14} className="md:w-4 md:h-4" />
                  Request Quote
                </button>
              </div>
            )
          })}
        </div>

        {/* Second Image */}
        <div className="mb-8 md:mb-12">
          <div
            onClick={() => setSelectedImage(galleryImages[1].src)}
            className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group bg-secondary border border-border hover:border-accent transition-all max-w-xs mx-auto"
          >
            <img
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                View
              </span>
            </div>
          </div>
        </div>

        {/* Third Services Grid (10-14) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {filteredServices.slice(10, 15).map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index + 10}
                className="bg-card border border-border rounded-lg p-4 md:p-6 hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent transition-colors">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-xs md:text-sm font-medium transition-colors"
                >
                  <MessageCircle size={14} className="md:w-4 md:h-4" />
                  Request Quote
                </button>
              </div>
            )
          })}
        </div>

        {/* Third Image */}
        <div className="mb-8 md:mb-12">
          <div
            onClick={() => setSelectedImage(galleryImages[2].src)}
            className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group bg-secondary border border-border hover:border-accent transition-all max-w-xs mx-auto"
          >
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                View
              </span>
            </div>
          </div>
        </div>

        {/* Fourth Services Grid (15-19) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {filteredServices.slice(15, 20).map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index + 15}
                className="bg-card border border-border rounded-lg p-4 md:p-6 hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent transition-colors">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-xs md:text-sm font-medium transition-colors"
                >
                  <MessageCircle size={14} className="md:w-4 md:h-4" />
                  Request Quote
                </button>
              </div>
            )
          })}
        </div>

        {/* Fourth Image */}
        <div className="mb-8 md:mb-12">
          <div
            onClick={() => setSelectedImage(galleryImages[3].src)}
            className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group bg-secondary border border-border hover:border-accent transition-all max-w-xs mx-auto"
          >
            <img
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                View
              </span>
            </div>
          </div>
        </div>

        {/* Fifth Services Grid (20-24) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {filteredServices.slice(20, 25).map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index + 20}
                className="bg-card border border-border rounded-lg p-4 md:p-6 hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent transition-colors">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-xs md:text-sm font-medium transition-colors"
                >
                  <MessageCircle size={14} className="md:w-4 md:h-4" />
                  Request Quote
                </button>
              </div>
            )
          })}
        </div>

        {/* Fifth Image */}
        <div className="mb-8 md:mb-12">
          <div
            onClick={() => setSelectedImage(galleryImages[4].src)}
            className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group bg-secondary border border-border hover:border-accent transition-all max-w-xs mx-auto"
          >
            <img
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                View
              </span>
            </div>
          </div>
        </div>

        {/* Sixth Services Grid (25-29) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {filteredServices.slice(25, 30).map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index + 25}
                className="bg-card border border-border rounded-lg p-4 md:p-6 hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent transition-colors">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-xs md:text-sm font-medium transition-colors"
                >
                  <MessageCircle size={14} className="md:w-4 md:h-4" />
                  Request Quote
                </button>
              </div>
            )
          })}
        </div>

        {/* Sixth Image */}
        <div className="mb-8 md:mb-12">
          <div
            onClick={() => setSelectedImage(galleryImages[5].src)}
            className="relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer group bg-secondary border border-border hover:border-accent transition-all max-w-xs mx-auto"
          >
            <img
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                View
              </span>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Fullscreen view" className="w-full h-auto rounded-lg" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 md:top-4 md:right-4 bg-accent text-accent-foreground rounded-full p-1.5 md:p-2 hover:bg-accent/90 transition-all"
                aria-label="Close image"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
