
import { ArrowRight } from "lucide-react";

const markets = [
  {
    name: "East Africa",
    image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    countries: ["Kenya", "Uganda", "Tanzania", "Ethiopia"],
    stats: "35% of export volume"
  },
  {
    name: "West Africa",
    image: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    countries: ["Ghana", "Nigeria", "Ivory Coast", "Senegal"],
    stats: "25% of export volume"
  },
  {
    name: "Central Africa",
    image: "https://images.unsplash.com/photo-1519333796630-303ae0df3aa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    countries: ["Congo", "Cameroon", "Chad", "Central African Republic"],
    stats: "20% of export volume"
  },
  {
    name: "Southern Africa",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    countries: ["South Africa", "Zimbabwe", "Zambia", "Mozambique"],
    stats: "15% of export volume"
  }
];

const Markets = () => {
  return (
    <section id="markets" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Our African Markets</h2>
          <p className="text-lg text-gray-600">
            From Egypt to the rest of Africa, we supply quality cement products to support infrastructure development across the continent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((market) => (
            <div key={market.name} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={market.image} 
                  alt={market.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2">{market.name}</h3>
                <p className="text-sm opacity-80 mb-3">{market.stats}</p>
                <ul className="flex flex-wrap gap-2 mb-3">
                  {market.countries.map((country) => (
                    <li key={country} className="text-xs bg-white/20 rounded-full px-2 py-1">
                      {country}
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-flex items-center text-sm font-medium text-white">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative p-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                From the Heart of Egypt to Growing African Markets
              </h3>
              <p className="text-white/80">
                We pride ourselves on establishing reliable supply chains that connect Egyptian manufacturing excellence with construction projects across Africa. Our strategic shipping routes and logistics expertise ensure your cement arrives safely and on time.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="African landscape" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
