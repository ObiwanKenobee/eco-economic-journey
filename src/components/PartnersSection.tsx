
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Play } from 'lucide-react';

const PartnersSection = () => {
  const partnerLogos = [
    { name: 'Royal Air Maroc', logoPlaceholder: 'RAM' },
    { name: 'Attijariwafa Bank', logoPlaceholder: 'AWB' },
    { name: 'Maroc Telecom', logoPlaceholder: 'MT' },
    { name: 'African Union', logoPlaceholder: 'AU' },
    { name: 'World Wildlife Fund', logoPlaceholder: 'WWF' },
  ];

  return (
    <section id="partners" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 bg-grain"></div>
      
      <div className="container px-6 mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-savanna/20 text-earth rounded-full mb-4">
            Our Network
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Leading the Future of Ethical Travel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've partnered with leading organizations committed to conservation and sustainable development across Africa.
          </p>
        </AnimatedSection>
        
        {/* Partner logos */}
        <AnimatedSection animation="fade-up" delay={200} className="mb-20">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
              >
                <span className="text-xl font-bold text-gray-300">{partner.logoPlaceholder}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
        
        {/* Video testimonial */}
        <AnimatedSection animation="fade-up" delay={400} className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900 shadow-xl">
            {/* Video thumbnail */}
            <img 
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
              alt="Video testimonial" 
              className="w-full h-full object-cover opacity-70"
            />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                className="w-20 h-20 flex items-center justify-center bg-white/90 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-white group"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 text-earth fill-earth group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Video caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-medium">
                "My safari experience funded the protection of 10 acres of wilderness and supported anti-poaching efforts."
              </p>
              <p className="text-white/70 text-sm mt-2">
                — Sarah Johnson, Eco-Tourist
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PartnersSection;
