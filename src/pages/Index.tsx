
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Markets from "@/components/Markets";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Markets />
      <Contact />
      <Footer />
      <ServiceWorkerRegistration />
    </div>
  );
};

export default Index;
