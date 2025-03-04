
import React from 'react';
import { Leaf, CreditCard, Radio } from 'lucide-react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

interface PillarCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const PillarCard = ({ title, description, icon, delay }: PillarCardProps) => (
  <AnimatedSection
    animation="fade-up"
    delay={delay}
    className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
  >
    <div className="w-16 h-16 flex items-center justify-center bg-sand rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-charcoal mb-4">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </AnimatedSection>
);

const PillarsSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-earth/10 text-earth rounded-full mb-4">
            Our Vision
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            More Than Travel—A Global Conservation System
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our innovative model transforms tourism into a powerful engine for conservation and sustainable development across Africa.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mt-12">
          <PillarCard
            title="Guardian-Wild"
            description="Luxury eco-tourism destinations that reinvest all proceeds into wildlife protection."
            icon={<Leaf className="w-8 h-8 text-forest" />}
            delay={200}
          />
          <PillarCard
            title="Guardian-Pay"
            description="A financial system where every transaction fuels sustainability."
            icon={<CreditCard className="w-8 h-8 text-savanna" />}
            delay={400}
          />
          <PillarCard
            title="Guardian-Telecom"
            description="Connectivity built on conservation—every call, every data stream supports Africa's future."
            icon={<Radio className="w-8 h-8 text-earth" />}
            delay={600}
          />
        </div>
        
        <AnimatedSection animation="fade-up" delay={800} className="text-center mt-16">
          <Button href="#impact">
            Explore The Model
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PillarsSection;
