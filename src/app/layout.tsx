import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import Script from "next/script";
import SanowFall from "@/components/SanowFall";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Navod Wijesooriya | Full-stack Web Developer | React & Next.js Expert",
    template: "%s | Navod Wijesooriya"
  },
  description:
    "Hire Navod Wijesooriya, an expert full-stack web developer from Sri Lanka specializing in React, Next.js, Firebase, and modern web technologies. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Navod Wijesooriya", "full-stack developer", "React developer", "Next.js expert",
    "Firebase developer", "web developer Sri Lanka", "freelance developer",
    "JavaScript developer", "TypeScript developer", "hire developer",
    "portfolio website", "travel booking app", "mobile app developer",
    "React Native developer", "modern web development", "responsive design"
  ],
  authors: [{ name: "Navod Wijesooriya", url: "https://navodwijesooriya.me" }],
  creator: "Navod Wijesooriya",
  publisher: "Navod Wijesooriya",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://navodwijesooriya.me"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Navod Wijesooriya | Full-stack Web Developer",
    description:
      "Expert full-stack web developer specializing in React, Next.js, Firebase and modern web technologies. Available for hire.",
    url: "https://navodwijesooriya.me",
    siteName: "Navod Wijesooriya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/navodwijesooriya.png",
        width: 1200,
        height: 630,
        alt: "Navod Wijesooriya - Full-stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navod Wijesooriya | Full-stack Web Developer",
    description: "Expert full-stack developer specializing in React, Next.js and Firebase. Available for hire.",
    creator: "@navodwijesooriya",
    images: ["/assets/navodwijesooriya.png"],
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  category: "Technology",
} as Metadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://navodwijesooriya.me" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
     
        <ClientLayout>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 9999,
              pointerEvents: 'none',
            }}
          >
            <SanowFall />
          </div>
          {children}
        </ClientLayout>
        <Script
          id="enhanced-schema-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Navod Wijesooriya",
              url: "https://navodwijesooriya.me",
              image: "https://navodwijesooriya.me/assets/edit-image.png",
              sameAs: [
                "https://github.com/navodwijesooriya",
                "https://linkedin.com/in/navodwijesooriya",
                "https://twitter.com/navodwijesooriya",
                "https://instagram.com/navodwijesooriya",
                "https://youtube.com/@navodwijesooriya"
              ],
              jobTitle: "Full-stack Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
              email: "navodtwijesooriya@gmail.com",
              telephone: "+94714128942",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Sri Lanka"
              },
              knowsAbout: [
                "React", "Next.js", "Firebase", "TypeScript", "JavaScript",
                "React Native", "Node.js", "Web Development", "Mobile App Development"
              ],
              alumniOf: {
                "@type": "Organization",
                name: "Software Developer"
              },
              description: "Expert full-stack web developer specializing in React, Next.js, Firebase and modern web technologies. Available for freelance projects and full-time opportunities.",
              hasOccupation: {
                "@type": "Occupation",
                name: "Full-stack Web Developer",
                occupationLocation: {
                  "@type": "Country",
                  name: "Sri Lanka"
                },
                skills: "React, Next.js, Firebase, TypeScript, JavaScript, React Native"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
