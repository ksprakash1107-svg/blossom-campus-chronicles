import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Departments from "@/components/Departments";
import Admissions from "@/components/Admissions";
import Faculty from "@/components/Faculty";
import CampusLife from "@/components/CampusLife";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Departments />
      <Admissions />
      <Faculty />
      <CampusLife />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
