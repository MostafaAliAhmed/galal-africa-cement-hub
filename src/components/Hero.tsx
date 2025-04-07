
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-16 pb-20 bg-gradient-to-br from-sand-50 to-sand-100 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-ocean-100 opacity-40"></div>
        <div className="absolute left-1/3 -bottom-32 w-64 h-64 rounded-full bg-africa-100 opacity-30"></div>
        <div className="absolute left-24 top-48 w-12 h-12 rounded-md bg-clay-300 opacity-20 transform rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-lg">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sand-900 leading-tight mb-4">
                Connecting <span className="text-sand-600">Egypt</span> to <span className="text-africa-700">Africa</span> Through Quality Cement
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Premium cement exports from the heart of Egypt to growing African markets. Building stronger foundations for a connected future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-sand-500 hover:bg-sand-600 text-white px-6 py-6">
                  Our Products
                </Button>
                <Button variant="outline" className="border-sand-500 text-sand-600 hover:bg-sand-50 px-6 py-6">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-80 lg:h-[450px] overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Cement export facility" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Active Exporter</span>
                </div>
                <p className="text-sm opacity-80">Serving markets in East and Central Africa</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-48">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm text-gray-500">Export Volume</span>
                <span className="text-ocean-600 font-bold">↑ 24%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-ocean-500 rounded-full w-3/4"></div>
              </div>
              <p className="mt-2 text-xs text-gray-500">Year-over-year growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
