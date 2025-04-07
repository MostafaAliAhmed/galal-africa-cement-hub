
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-sand-500 flex items-center justify-center">
            <span className="text-white font-heading font-bold text-lg">G</span>
          </div>
          <span className={`font-heading font-bold text-xl ${isScrolled ? 'text-sand-800' : 'text-sand-800'}`}>
            Galal Exporting
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className={`font-medium ${isScrolled ? 'text-sand-800' : 'text-sand-800'} hover:text-sand-600 transition-colors`}>
            About Us
          </a>
          <a href="#services" className={`font-medium ${isScrolled ? 'text-sand-800' : 'text-sand-800'} hover:text-sand-600 transition-colors`}>
            Products
          </a>
          <a href="#markets" className={`font-medium ${isScrolled ? 'text-sand-800' : 'text-sand-800'} hover:text-sand-600 transition-colors`}>
            Markets
          </a>
          <a href="#contact" className={`font-medium ${isScrolled ? 'text-sand-800' : 'text-sand-800'} hover:text-sand-600 transition-colors`}>
            Contact
          </a>
          <Button variant="default" className="bg-sand-500 hover:bg-sand-600 text-white">
            Request Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sand-800" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <a href="#about" className="py-3 font-medium text-sand-800 hover:text-sand-600" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </a>
            <a href="#services" className="py-3 font-medium text-sand-800 hover:text-sand-600" onClick={() => setIsMobileMenuOpen(false)}>
              Products
            </a>
            <a href="#markets" className="py-3 font-medium text-sand-800 hover:text-sand-600" onClick={() => setIsMobileMenuOpen(false)}>
              Markets
            </a>
            <a href="#contact" className="py-3 font-medium text-sand-800 hover:text-sand-600" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
            <Button variant="default" className="mt-3 bg-sand-500 hover:bg-sand-600 text-white">
              Request Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
