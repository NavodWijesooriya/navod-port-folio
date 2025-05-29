import Resume from '@/components/resume/Resume'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Navod Wijesooriya - Full-stack Developer",
  description: "View and download my professional resume highlighting my skills, experience, and qualifications in web development.",
  openGraph: {
    title: "Resume | Navod Wijesooriya - Full-stack Developer",
    description: "View and download my professional resume highlighting my skills, experience, and qualifications in web development.",
  }
};

const page = () => {
  return (
    <div>
      <Navbar />
      <Resume />
      <Footer />
    </div>
  )
}

export default page