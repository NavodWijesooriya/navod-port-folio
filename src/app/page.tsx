import Navbar from "@/components/Navbar";
import DescribeMe from "@/components/DescribeMe";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <DescribeMe />
      <AboutMe />
      <Footer />
      {/* Add more sections as needed */}
    </div>
  );
}
