import TourismWebApp from '@/components/projects/TourismWebApp';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tourism Web App - Travel Booking Platform | Navod Wijesooriya",
  description: "Comprehensive travel booking platform built with Next.js, Firebase, and Stripe. Features real-time booking, admin panel, blog management, and Google Maps integration.",
  keywords: ["tourism web app", "travel booking platform", "Next.js project", "Firebase", "Stripe integration", "React developer", "full-stack developer"],
  openGraph: {
    title: "Tourism Web App - Travel Booking Platform | Navod Wijesooriya",
    description: "Comprehensive travel booking platform built with Next.js, Firebase, and Stripe. Features real-time booking, admin panel, blog management, and Google Maps integration.",
    url: "https://navodwijesooriya.me/projects/tourism-web-app",
    images: [
      {
        url: "/assets/mooi-home.png",
        width: 1200,
        height: 630,
        alt: "Tourism Web App Homepage Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tourism Web App - Travel Booking Platform",
    description: "Full-stack travel booking platform with Next.js and Firebase",
    images: ["/assets/mooi-home.png"],
  },
};

const page = () => {
  return (
    <>
      <div>
        <Navbar />
        <TourismWebApp />
        <Footer />
      </div>

      {/* Structured data for the project */}
      <Script
        id="tourism-project-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Tourism Web App - Travel Booking Platform",
            "description": "Comprehensive travel booking platform built with Next.js, Firebase, and Stripe. Features real-time booking, admin panel, blog management, and Google Maps integration.",
            "url": "https://mooilankatravels.com/",
            "applicationCategory": "WebApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Person",
              "name": "Navod Wijesooriya",
              "url": "https://navodwijesooriya.me"
            },
            "programmingLanguage": ["TypeScript", "JavaScript"],
            "runtimePlatform": ["Next.js", "React"],
            "keywords": "tourism, travel booking, Next.js, Firebase, Stripe, real-time booking",
            "screenshot": "https://navodwijesooriya.me/assets/mooi-home.png"
          })
        }}
      />
    </>
  )
}

export default page;