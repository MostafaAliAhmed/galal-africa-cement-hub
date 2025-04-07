
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="font-heading font-bold text-lg">G</span>
              </div>
              <span className="font-heading font-bold text-xl">Galal Exporting</span>
            </div>
            <p className="text-blue-200 mb-6 max-w-md">
              Connecting Egypt to Africa through quality cement products. Your reliable partner for construction material exports since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#markets" className="text-blue-200 hover:text-white transition-colors">Markets</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Cairo Nasr City, Egypt</li>
              <li>+201210101133</li>
              <li>GalalExporting@Gmail.com</li>
              <li>WhatsApp: +201210101133</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-blue-700 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Galal Exporting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
