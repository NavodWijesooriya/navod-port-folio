import PasswordManagerMobileApp from '@/components/projects/PasswordManagerMobileApp';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Manager Mobile App - React Native | Navod Wijesooriya",
  description: "Secure React Native mobile app with biometric authentication, AES-256 encryption, and cross-platform compatibility. Built with Expo for iOS and Android.",
  keywords: ["password manager", "React Native app", "mobile app development", "biometric authentication", "Expo", "iOS Android", "security app"],
  openGraph: {
    title: "Password Manager Mobile App - React Native | Navod Wijesooriya",
    description: "Secure React Native mobile app with biometric authentication, AES-256 encryption, and cross-platform compatibility.",
    url: "https://navodwijesooriya.me/projects/passward-manager-mobileapp",
    images: [
      {
        url: "/assets/dashboard.jpeg",
        width: 1200,
        height: 630,
        alt: "Password Manager App Dashboard Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Password Manager Mobile App - React Native",
    description: "Secure mobile app with biometric authentication and encryption",
    images: ["/assets/dashboard.jpeg"],
  },
};

const page = () => {
  return (
    <>
      <div>
        <Navbar />
        <PasswordManagerMobileApp />
        <Footer />
      </div>

      {/* Structured data for the mobile app project */}
      <Script
        id="password-manager-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "Password Manager Mobile App",
            "description": "Secure React Native mobile app with biometric authentication, AES-256 encryption, and cross-platform compatibility.",
            "url": "https://expo.dev/@navodwijesooriya/password-manager",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": ["iOS", "Android"],
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
            "runtimePlatform": ["React Native", "Expo"],
            "keywords": "password manager, mobile security, biometric authentication, React Native, Expo",
            "screenshot": "https://navodwijesooriya.me/assets/dashboard.jpeg"
          })
        }}
      />
    </>
  )
}

export default page;