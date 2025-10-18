import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Adamantis Studios - Ghana's Premier Marketing, IT & Security Solutions Business | 50+ Services",
  description:
    "🚀 Transform Your Business with Adamantis Studios! Ghana's leading holistic marketing, IT solutions, and security services provider. We offer 50+ professional services including: Digital Marketing & SEO, Social Media Management, Professional Web & App Development, Graphics Design, Video Production, CCTV Installation, Business Registration, and more. Affordable packages from GHS 1,500. Get your FREE website audit today! 📞 +233 24 279 9990",
  keywords: [
    // Location-based keywords
    "marketing agency Ghana",
    "IT solutions Ghana",
    "web development Ghana",
    "digital marketing Accra",
    "graphics design Ghana",
    "CCTV installation Ghana",
    "security solutions Ghana",
    "business services Ghana",

    // Digital Marketing Services
    "digital marketing",
    "SEO services",
    "social media management",
    "social media marketing",
    "YouTube video ads",
    "WhatsApp business setup",
    "content writing services",
    "blog writing",
    "copywriting services",
    "online marketing",
    "brand management",
    "digital branding",
    "social media strategy",
    "Facebook marketing",
    "Instagram marketing",
    "LinkedIn marketing",
    "Twitter marketing",
    "TikTok marketing",

    // Design & Media Services
    "graphics design",
    "logo design",
    "professional logo design",
    "2D logo design",
    "3D logo design",
    "photo editing",
    "photo manipulation",
    "printing services",
    "typesetting services",
    "video production",
    "animation services",
    "photography services",
    "event photography",
    "event videography",
    "radio ads",
    "TV commercials",
    "live streaming",
    "drone services",
    "aerial photography",
    "social media graphics",
    "voice acting",
    "music recording",
    "music mastering",
    "interior design",
    "3D epoxy design",
    "office wear design",
    "company profile design",
    "brochure design",
    "flyer design",
    "banner design",
    "business card design",

    // IT Solutions
    "web development",
    "website design",
    "mobile app development",
    "app development",
    "WordPress development",
    "custom website",
    "e-commerce website",
    "business website",
    "landing page design",
    "PC repair",
    "Mac repair",
    "computer repair",
    "software installation",
    "hardware repair",
    "website audit",
    "website to app conversion",
    "Google Maps listing",
    "business listing",
    "ICT training",
    "computer training",
    "software training",
    "computer accessories",
    "office supplies",
    "fillable PDF forms",

    // Security Solutions
    "CCTV installation",
    "security camera installation",
    "surveillance systems",
    "gate automation",
    "GPS tracking",
    "car tracking",
    "access control",
    "electric fence",
    "garage door installation",
    "razor wire installation",
    "video intercom",
    "security solutions",
    "home security",
    "office security",

    // Business Services
    "business registration",
    "company registration",
    "business compliance",
    "visa services",
    "CV writing",
    "cover letter writing",
    "sales activation",
    "telemarketing",
    "van sales",
    "B2B sales",
    "business startup",
    "business consulting",

    // Service combinations
    "affordable web design Ghana",
    "professional marketing services",
    "complete IT solutions",
    "holistic business services",
    "one-stop business solutions",
    "small business services Ghana",
    "startup services Ghana",
    "business growth services",
  ].join(", "),
  authors: [{ name: "Adamantis Studios" }],
  creator: "Adamantis Studios",
  publisher: "Adamantis Studios",
  robots: "index, follow",
  alternates: {
    canonical: "https://adamantisstudios.netlify.app",
  },
  openGraph: {
    title: "Adamantis Studios - 50+ Marketing, IT & Security Services | Ghana's #1 Business Solutions Provider",
    description:
      "🚀 Transform Your Business Today! Professional Web Development from GHS 1,500 | Digital Marketing & SEO | Graphics Design | CCTV Installation | Business Registration | 50+ Services Under One Roof. FREE Website Audit! Call +233 24 279 9990 📞",
    images: [
      {
        url: "https://adamantisstudios.netlify.app/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Adamantis Studios - Your Complete Business Solutions Partner in Ghana",
      },
    ],
    url: "https://adamantisstudios.netlify.app",
    siteName: "Adamantis Studios",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adamantis Studios - 50+ Marketing, IT & Security Services | Ghana's #1 Business Solutions",
    description:
      "🚀 Transform Your Business! Web Development from GHS 1,500 | Digital Marketing | Graphics Design | CCTV | Business Registration | 50+ Services. FREE Audit! 📞 +233 24 279 9990",
    images: ["https://adamantisstudios.netlify.app/images/preview.jpg"],
    creator: "@AdamantisStudios",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Business Services",
  other: {
    "fb:app_id": "your-facebook-app-id",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Adamantis Studios",
    description:
      "Ghana's premier holistic marketing, IT solutions, and security services provider offering 50+ professional services including digital marketing, web development, graphics design, CCTV installation, and business services.",
    image: "https://adamantisstudios.netlify.app/images/preview.jpg",
    logo: "https://adamantisstudios.netlify.app/images/logo.png",
    url: "https://adamantisstudios.netlify.app",
    telephone: "+233242799990",
    priceRange: "GHS 1,500 - GHS 10,000",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GH",
      addressLocality: "Ghana",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "5.6037",
      longitude: "-0.1870",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/adamantisstudios",
      "https://www.instagram.com/adamantisstudios",
      "https://www.linkedin.com/company/adamantisstudios",
      "https://twitter.com/adamantisstudios",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Professional Business Website - Pay Once Forever",
        description:
          "One-time payment website with 1,000 keyword SEO optimization, lifetime hosting, and 100% uptime guarantee",
        price: "4500",
        priceCurrency: "GHS",
      },
      {
        "@type": "Offer",
        name: "Yearly Renewal Professional Website",
        description: "Affordable yearly website package with domain, hosting, SSL, and 1,000 keyword SEO optimization",
        price: "1500",
        priceCurrency: "GHS",
      },
      {
        "@type": "Offer",
        name: "Free Website with Advertisement",
        description: "Get your website built for free with our advertisement placement option",
        price: "0",
        priceCurrency: "GHS",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Digital Marketing Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing & Branding" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Writing & Blogging" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "YouTube Video Ads" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "IT Solutions",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "WordPress Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "PC & Mac Repair" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "ICT Training" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Design & Media Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphics Design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logo Design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Production" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photography Services" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Animation Services" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Security Solutions",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CCTV Installation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gate Automation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "GPS Car Tracking" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Access Control Systems" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Business Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Registration" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sales Activation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Telemarketing Services" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Startup Services" } },
          ],
        },
      ],
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <meta name="geo.region" content="GH" />
        <meta name="geo.placename" content="Ghana" />
        <meta name="geo.position" content="5.6037;-0.1870" />
        <meta name="ICBM" content="5.6037, -0.1870" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
