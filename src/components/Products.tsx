
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cementTypes = [
  {
    id: "opc",
    name: "Ordinary Portland Cement",
    description: "General-purpose cement suitable for all basic construction applications. Conforms to international standards and provides excellent workability.",
    grades: ["32.5N", "42.5N", "52.5N"],
    applications: ["General construction", "Residential buildings", "Concrete structures"],
    image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ppc",
    name: "Portland Pozzolana Cement",
    description: "Enhanced with pozzolanic materials for improved durability in aggressive environments. Ideal for infrastructure projects.",
    grades: ["32.5R", "42.5R"],
    applications: ["Marine structures", "Underground works", "Water-retaining structures"],
    image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "src",
    name: "Sulphate Resistant Cement",
    description: "Specially formulated to resist sulphate attack in soil and groundwater. Excellent for foundations in challenging environments.",
    grades: ["42.5N", "52.5N"],
    applications: ["Coastal structures", "Sewage works", "Foundations in sulphate-rich soils"],
    image: "https://images.unsplash.com/photo-1517456215183-9a2c3a749f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "whc",
    name: "White Cement",
    description: "Premium-grade white cement for architectural and decorative applications requiring aesthetic finishes.",
    grades: ["42.5N", "52.5N"],
    applications: ["Decorative concrete", "Terrazzo", "Swimming pools"],
    image: "https://images.unsplash.com/photo-1583229737850-983b5efb133d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Products = () => {
  return (
    <section id="services" className="py-24 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sand-800 mb-4">Our Cement Products</h2>
          <p className="text-lg text-gray-600">
            We export high-quality cement products that meet international standards and are suitable for various construction applications.
          </p>
        </div>
        
        <Tabs defaultValue="opc" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10 bg-transparent">
            {cementTypes.map(type => (
              <TabsTrigger 
                key={type.id} 
                value={type.id}
                className="px-5 py-2 rounded-full data-[state=active]:bg-sand-500 data-[state=active]:text-white"
              >
                {type.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {cementTypes.map(type => (
            <TabsContent key={type.id} value={type.id} className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="rounded-xl overflow-hidden h-80">
                    <img 
                      src={type.image} 
                      alt={type.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sand-800 mb-4">{type.name}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-sand-700 mb-2">Available Grades</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.grades.map((grade) => (
                        <span
                          key={grade}
                          className="px-3 py-1 bg-sand-100 text-sand-700 rounded-full text-sm"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-sand-700 mb-2">Common Applications</h4>
                    <ul className="space-y-1">
                      {type.applications.map((app) => (
                        <li key={app} className="text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-sand-500 rounded-full"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-clay-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-clay-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-sand-800 mb-2">Quality Certified</h3>
              <p className="text-sm text-gray-600">
                All products meet international quality standards and undergo rigorous testing.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-ocean-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-sand-800 mb-2">Reliable Supply</h3>
              <p className="text-sm text-gray-600">
                Consistent production schedules ensure steady supply to meet project timelines.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-africa-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-africa-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-sand-800 mb-2">Fair Pricing</h3>
              <p className="text-sm text-gray-600">
                Competitive prices with volume discounts and transparent quotation process.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-sand-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-sand-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-sand-800 mb-2">Documentation</h3>
              <p className="text-sm text-gray-600">
                Complete export documentation and assistance with customs clearance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
