
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Play, Globe, Leaf, Users, Shield, Sun } from 'lucide-react';
import Button from './Button';

const PartnersSection = () => {
  const partnerLogos = [
    { name: 'Royal Air Maroc', logoPlaceholder: 'RAM', icon: <Globe className="w-6 h-6 text-earth/70" /> },
    { name: 'Attijariwafa Bank', logoPlaceholder: 'AWB', icon: <Shield className="w-6 h-6 text-savanna/70" /> },
    { name: 'Maroc Telecom', logoPlaceholder: 'MT', icon: <Users className="w-6 h-6 text-forest/70" /> },
    { name: 'African Union', logoPlaceholder: 'AU', icon: <Sun className="w-6 h-6 text-earth/70" /> },
    { name: 'World Wildlife Fund', logoPlaceholder: 'WWF', icon: <Leaf className="w-6 h-6 text-forest/70" /> },
  ];

  const testimonials = [
    {
      quote: "The Eco-Economy platform has transformed our community. Tourism now funds our conservation efforts and provides sustainable livelihoods.",
      name: "Amina Okafor",
      role: "Community Leader",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "As an investor, I've seen firsthand how the Guardian system creates value while regenerating ecosystems. This is the future of ethical business.",
      name: "Michael Chen",
      role: "Impact Investor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "My safari experience funded the protection of 10 acres of wilderness and supported anti-poaching efforts. Travel with purpose changes everything.",
      name: "Sarah Johnson",
      role: "Eco-Tourist",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="partners" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 bg-grain"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container px-6 mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-savanna/20 text-earth rounded-full mb-4">
            Our Collective
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Uniting for a <span className="text-forest">Regenerative Future</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've gathered a diverse coalition of organizations and individuals committed to transforming our relationship with nature through innovative economic systems.
          </p>
        </AnimatedSection>
        
        {/* Partner logos */}
        <AnimatedSection animation="fade-up" delay={200} className="mb-20">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="w-40 h-24 flex flex-col items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] group"
              >
                <div className="mb-2 transition-transform duration-300 group-hover:scale-110">
                  {partner.icon}
                </div>
                <span className="text-base font-medium text-gray-500 group-hover:text-charcoal transition-colors">{partner.logoPlaceholder}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
        
        {/* Testimonials section */}
        <AnimatedSection animation="fade-up" delay={400} className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
        
        {/* Video testimonial */}
        <AnimatedSection animation="fade-up" delay={600} className="max-w-4xl mx-auto">
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
              <h3 className="text-xl font-bold text-white mb-2">The Eco-Economy Vision</h3>
              <p className="text-white/90 max-w-2xl">
                "Witness how our integrated approach is transforming tourism into a powerful force for planetary healing and community prosperity."
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={800} className="text-center mt-16">
          <Button href="#join" glow>
            Become A Partner
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PartnersSection;
