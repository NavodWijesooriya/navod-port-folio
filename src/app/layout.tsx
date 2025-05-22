import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navod - Portfolio & Personal Website",
  description: "Professional portfolio showcasing projects, skills, and experience in software development and design by Navod",
  keywords: ["portfolio", "developer", "software engineer", "web development", "projects", "skills"],
  authors: [{ name: "Navod" }],
  creator: "Navod",
  publisher: "Navod",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://navodwijesooriya.me"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Navod - Portfolio & Personal Website",
    description: "Professional portfolio showcasing projects, skills, and experience in software development and design by Navod",
    url: "https://navodwijesooriya.me",
    siteName: "Navod Wijesooriya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/navodwijesooriya.png",
        width: 1200,
        height: 630,
        alt: "Navod Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navod - Portfolio & Personal Website",
    description: "Professional portfolio showcasing projects, skills, and experience",
    images: ["/twitter-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
