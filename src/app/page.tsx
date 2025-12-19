import Navbar from "@/components/Navbar";
import DescribeMe from "@/components/DescribeMe";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Script from "next/script";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Navod Wijesooriya | Full-stack Web Developer | React & Next.js Expert",
  description:
    "Hire Navod Wijesooriya, a full-stack web developer specializing in React, Next.js, and Firebase. Building high-performance web applications with modern technologies.",
  openGraph: {
    title: "Navod Wijesooriya | Full-stack Web Developer | React & Next.js Expert",
    description:
      "Hire Navod Wijesooriya, a full-stack web developer specializing in React, Next.js, and Firebase. Building high-performance web applications with modern technologies.",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <DescribeMe />
        <AboutMe />
        <Projects />
        <Skills />
      </main>
      <Footer />

      {/* Home page specific structured data */}
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://navodwijesooriya.me/",
            name: "Navod Wijesooriya - Full-stack Developer Portfolio",
            description:
              "Professional portfolio of Navod Wijesooriya, a Full-stack Web Developer specializing in React, Next.js, and Firebase",
            author: {
              "@type": "Person",
              name: "Navod Wijesooriya",
              url: "https://navodwijesooriya.me/",
            },
          }),
        }}
      />
    </>
  );
}
