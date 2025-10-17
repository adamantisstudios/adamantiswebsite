import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import VideoSection from "@/components/video-section"
import Testimonies from "@/components/testimonies"
import Pricing from "@/components/pricing"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import PromoPopup from "@/components/promo-popup"
import AudioPlayer from "@/components/audio-player"
import ServicesCarousel from "@/components/services-carousel"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <VideoSection />
      <Testimonies />
      <Pricing />
      <ServicesCarousel />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppWidget />
      <PromoPopup />
      <AudioPlayer />
    </main>
  )
}
