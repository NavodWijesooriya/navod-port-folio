import Projects from "@/components/projects/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Navod Wijesooriya - Full-stack Developer",
  description: "Explore my portfolio of web development projects using Next.js, React, Firebase and other modern technologies.",
  openGraph: {
    title: "Projects | Navod Wijesooriya - Full-stack Developer",
    description: "Explore my portfolio of web development projects using Next.js, React, Firebase and other modern technologies.",
  }
};

const page = () => {
    return (
        <div>
             <Navbar />
            <Projects />
            <Footer />  
        </div>
    )
}

export default page