
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    
    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-sand-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Reach out to discuss your cement import needs or request a customized quote for your projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-sand-800 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your cement requirements..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-sand-500 hover:bg-sand-600 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-sand-800 text-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-sand-700 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sand-200" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Office Address</h4>
                    <p className="text-sand-200">Cairo Nasr City, Egypt</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-sand-700 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-sand-200" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone Number</h4>
                    <p className="text-sand-200">+201210101133</p>
                    <p className="text-sand-200 text-sm mt-1">WhatsApp available at the same number</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-sand-700 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-sand-200" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-sand-200">GalalExporting@Gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-bold mb-3">Business Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-medium">Monday - Friday:</p>
                    <p className="text-sand-200">9:00 AM - 5:00 PM (EET)</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday:</p>
                    <p className="text-sand-200">9:00 AM - 1:00 PM (EET)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-sand-700">
                <p className="text-sm text-sand-300">
                  For urgent inquiries, please contact us directly via phone or WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
