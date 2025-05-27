import Projects from "@/components/projects/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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