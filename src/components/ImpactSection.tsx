
import React from 'react';
import Button from './Button';
import AnimatedCounter from './AnimatedCounter';
import AnimatedSection from './AnimatedSection';

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 lg:py-32 bg-earth text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      
      {/* Abstract background graphic */}
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-savanna/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-forest/10 rounded-full blur-3xl"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-white/10 text-white/90 rounded-full mb-4">
            The Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Tourism Into A $100B Conservation Engine
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our approach creates a sustainable economic model that funds conservation at a scale never seen before.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" delay={200} className="text-center">
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="mb-4">
                <AnimatedCounter
                  end={11}
                  prefix="$"
                  suffix="B+"
                  className="text-4xl md:text-5xl text-savanna"
                />
              </div>
              <p className="text-white/80">
                tourism revenue in Morocco—let's make it sustainable.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400} className="text-center">
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="mb-4">
                <AnimatedCounter
                  end={1}
                  suffix="M+"
                  className="text-4xl md:text-5xl text-savanna"
                />
              </div>
              <p className="text-white/80">
                wildlife species at risk—Eco-Economy is the solution.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600} className="text-center">
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="mb-4">
                <AnimatedCounter
                  end={100}
                  suffix="%"
                  className="text-4xl md:text-5xl text-savanna"
                />
              </div>
              <p className="text-white/80">
                tourism dollars fund preservation under this system.
              </p>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="fade-up" delay={800} className="text-center mt-16">
          <Button variant="secondary" href="#partners">
            Support The Mission
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ImpactSection;
