
import React from 'react';
import Button from './Button';
import AnimatedCounter from './AnimatedCounter';
import AnimatedSection from './AnimatedSection';
import { Globe, TreePine, Heart } from 'lucide-react';

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 lg:py-32 bg-earth text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
      
      {/* Abstract background graphic */}
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-savanna/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-forest/10 rounded-full blur-3xl"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="leaf-particle absolute h-2 w-2 bg-savanna rounded-full animate-float" style={{top: '10%', left: '20%', animationDelay: '0s'}}></div>
        <div className="leaf-particle absolute h-3 w-3 bg-forest rounded-full animate-float" style={{top: '30%', left: '70%', animationDelay: '1.5s'}}></div>
        <div className="leaf-particle absolute h-2 w-2 bg-savanna rounded-full animate-float" style={{top: '70%', left: '30%', animationDelay: '3s'}}></div>
        <div className="leaf-particle absolute h-4 w-4 bg-forest rounded-full animate-float" style={{top: '60%', left: '80%', animationDelay: '4.5s'}}></div>
        <div className="leaf-particle absolute h-3 w-3 bg-savanna rounded-full animate-float" style={{top: '40%', left: '10%', animationDelay: '6s'}}></div>
      </div>
      
      <div className="container px-6 mx-auto relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-white/10 text-white/90 rounded-full mb-4">
            Measuring Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Tourism Into A <span className="text-savanna">$100B</span> Regeneration Engine
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our integrated approach creates a revolutionary economic model that funds conservation and community prosperity at unprecedented scale.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" delay={200} className="text-center">
            <div className="flex flex-col items-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-savanna/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mb-4 text-savanna">
                  <Globe className="w-8 h-8" />
                </div>
                <div className="mb-4">
                  <AnimatedCounter
                    end={11}
                    prefix="$"
                    suffix="B+"
                    className="text-4xl md:text-5xl text-savanna font-bold"
                  />
                </div>
                <p className="text-white/80">
                  tourism revenue in Morocco transformed into a force for ecological regeneration
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400} className="text-center">
            <div className="flex flex-col items-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-forest/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mb-4 text-forest">
                  <TreePine className="w-8 h-8" />
                </div>
                <div className="mb-4">
                  <AnimatedCounter
                    end={1}
                    suffix="M+"
                    className="text-4xl md:text-5xl text-forest font-bold"
                  />
                </div>
                <p className="text-white/80">
                  wildlife species protected through our integrated Eco-Economy system
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600} className="text-center">
            <div className="flex flex-col items-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-savanna/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full mb-4 text-savanna">
                  <Heart className="w-8 h-8" />
                </div>
                <div className="mb-4">
                  <AnimatedCounter
                    end={100}
                    suffix="%"
                    className="text-4xl md:text-5xl text-savanna font-bold"
                  />
                </div>
                <p className="text-white/80">
                  of profits reinvested into conservation, community development, and ecological restoration
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="fade-up" delay={800} className="text-center mt-16">
          <Button variant="secondary" href="#partners" glow>
            Join Our Movement
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ImpactSection;
