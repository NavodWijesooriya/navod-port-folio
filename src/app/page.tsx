import Navbar from "@/components/Navbar";
import DescribeMe from "@/components/DescribeMe";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <DescribeMe />
      <AboutMe />
      <Projects />
      <Skills />
      {/* Uncomment the following line to include the Loading component */}
      {/* <Loading /> */}
      <Footer />
      {/* Add more sections as needed */}
    </div>
  );
}
