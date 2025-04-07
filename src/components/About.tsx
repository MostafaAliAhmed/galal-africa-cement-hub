
import { ArrowRight, Check, Building, Map, Truck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">About Galal Exporting</h2>
          <p className="text-lg text-gray-600">
            Trusted cement exporters connecting Egyptian manufacturing excellence with growing African markets for over a decade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Egyptian architecture and cement" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-africa-100 flex items-center justify-center">
                    <Map className="w-5 h-5 text-africa-600" />
                  </div>
                  <span className="font-bold text-gray-800">Pan-African Reach</span>
                </div>
                <p className="text-sm text-gray-600">
                  Serving markets in East, West and Central Africa with reliable supply chains and logistics.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Egypt's Premier Cement Exporter</h3>
            <p className="text-gray-600 mb-6">
              Founded with a vision to connect Egyptian manufacturing excellence with growing African markets, Galal Exporting has established itself as a reliable partner for quality cement products across the continent.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <p className="text-gray-600">Quality-certified cement from Egypt's leading manufacturers</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <p className="text-gray-600">Efficient logistics and shipping from Alexandria and Port Said</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <p className="text-gray-600">Local representatives in key African markets for personalized service</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-800">Headquartered</span>
                </div>
                <p className="text-sm text-gray-600">Cairo Nasr City, Egypt</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-800">Export Volume</span>
                </div>
                <p className="text-sm text-gray-600">500,000+ tons annually</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
