import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Pricing from "@/components/pricing"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import PromoPopup from "@/components/promo-popup"
import AudioPlayer from "@/components/audio-player"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppWidget />
      <PromoPopup />
      <AudioPlayer />
    </main>
  )
}
