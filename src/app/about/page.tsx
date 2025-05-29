import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Navod Wijesooriya - Full-stack Developer",
  description: "Learn about Navod Wijesooriya's journey, expertise, and passion for web development with React, Next.js, and modern technologies.",
  openGraph: {
    title: "About Me | Navod Wijesooriya - Full-stack Developer",
    description: "Learn about Navod Wijesooriya's journey, expertise, and passion for web development with React, Next.js, and modern technologies.",
  }
};

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default AboutPage;
