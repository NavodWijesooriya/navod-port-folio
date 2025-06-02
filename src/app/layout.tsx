import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navod Wijesooriya | Portfolio",
  description:
    "Full-stack web developer specializing in React, Next.js, Firebase and modern web technologies. View my projects, skills, and experience in software development.",
  keywords: [
    "Navod Wijesooriya",
    "hire developer",
    "freelance developer",
    "Navod Wijesooriya portfolio",
    "Navod",
    "navod",
    "navod wijesooriya",

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
      "en-US": "/en-US",
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
      "Full-stack web developer specializing in React, Next.js, Firebase and modern web technologies.",
    url: "https://navodwijesooriya.me",
    siteName: "Navod Wijesooriya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/navodwijesooriya.png",
        width: 1200,
        height: 630,
        alt: "Navod Wijesooriya - Full-stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navod Wijesooriya | Full-stack Web Developer",
    description: "Full-stack developer specializing in React, Next.js and Firebase",
    creator: "@navodwijesooriya",
    images: ["/assets/navodwijesooriya.png"],
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
    yandex: "yandex-verification-code", // Replace with your actual verification code if needed
  },
};

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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <ClientLayout>{children}</ClientLayout>
        <Script
          id="schema-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Navod Wijesooriya",
              url: "https://navodwijesooriya.me",
              sameAs: [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://twitter.com/yourusername",
              ],
              jobTitle: "Full-stack Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              image: "https://navodwijesooriya.me/assets/edit-image.png",
              description:
                "Full-stack web developer specializing in React, Next.js, Firebase and modern web technologies.",
            }),
          }}
        />
      </body>
    </html>
  );
}
