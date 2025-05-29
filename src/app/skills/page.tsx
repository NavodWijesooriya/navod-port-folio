import Skills from '@/components/skills/Skills';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Expertise | Navod Wijesooriya - Full-stack Developer",
  description: "Discover my technical skills in React, Next.js, Firebase, and other front-end and back-end technologies.",
  openGraph: {
    title: "Skills & Expertise | Navod Wijesooriya - Full-stack Developer",
    description: "Discover my technical skills in React, Next.js, Firebase, and other front-end and back-end technologies.",
  }
};

const page = () => {
    return (
        <div>
            <Navbar />
            <Skills />
            <Footer />
        </div>
    )
}

export default page;