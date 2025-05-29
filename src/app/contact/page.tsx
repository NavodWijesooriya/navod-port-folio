import Contact from "@/components/contact/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Navod Wijesooriya - Full-stack Developer",
  description: "Get in touch with me for freelance work, full-time opportunities, or project collaborations in web development.",
  openGraph: {
    title: "Contact | Navod Wijesooriya - Full-stack Developer",
    description: "Get in touch with me for freelance work, full-time opportunities, or project collaborations in web development.",
  }
};

const page = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  )
}

export default page;
// This is a placeholder for the Contact page.