
import React from 'react';
import { Leaf, CreditCard, Radio, Globe, Users, ShieldCheck, Lock } from 'lucide-react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

interface PillarCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  color: string;
}

const PillarCard = ({ title, description, icon, delay, color }: PillarCardProps) => (
  <AnimatedSection
    animation="fade-up"
    delay={delay}
    className={`relative flex flex-col items-center bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] overflow-hidden`}
  >
    <div className={`absolute top-0 left-0 right-0 h-1 ${color}`}></div>
    <div className={`w-16 h-16 flex items-center justify-center bg-sand rounded-full mb-6 ${color.replace('bg-', 'text-')}`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-charcoal mb-4">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </AnimatedSection>
);

const PillarsSection = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots"></div>
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-earth/10 text-earth rounded-full mb-4">
            Our Utopian Vision
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            A <span className="text-forest">Regenerative Economy</span> That Heals Our Planet
          </h2>
          
          {isAuthenticated ? (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our integrated ecosystem transforms tourism into a powerful engine for conservation, community prosperity, and ecological restoration across Africa and beyond.
            </p>
          ) : (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our integrated ecosystem transforms tourism into a powerful force for planetary healing and community prosperity. <span className="text-earth font-medium">Sign in to see our impact metrics.</span>
            </p>
          )}
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mt-12">
          <PillarCard
            title="Guardian-Wild"
            description="Luxury eco-tourism destinations where every visitor becomes a guardian of wilderness, directly funding habitat restoration."
            icon={<Globe className="w-8 h-8" />}
            delay={200}
            color="bg-forest"
          />
          <PillarCard
            title="Guardian-Pay"
            description="A revolutionary financial system turning everyday transactions into micro-donations for conservation projects."
            icon={<CreditCard className="w-8 h-8" />}
            delay={400}
            color="bg-savanna"
          />
          <PillarCard
            title="Guardian-Telecom"
            description="Communication infrastructure that connects remote communities while funding conservation with every call and data stream."
            icon={<Radio className="w-8 h-8" />}
            delay={600}
            color="bg-earth"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mt-6 lg:mt-10">
          <PillarCard
            title="Guardian-Community"
            description="Empowering local populations to become stewards of their natural heritage while building sustainable livelihoods."
            icon={<Users className="w-8 h-8" />}
            delay={800}
            color="bg-savanna"
          />
          <PillarCard
            title="Guardian-Restore"
            description="Systematic rewilding and ecosystem restoration funded directly by our interconnected economic system."
            icon={<Leaf className="w-8 h-8" />}
            delay={1000}
            color="bg-forest"
          />
          <PillarCard
            title="Guardian-Shield"
            description="Advanced protection systems using ethical technology to safeguard wildlife and habitats from threats."
            icon={<ShieldCheck className="w-8 h-8" />}
            delay={1200}
            color="bg-earth"
          />
        </div>
        
        {!isAuthenticated ? (
          <AnimatedSection animation="fade-up" delay={1400} className="text-center mt-16 p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-earth/10 rounded-full text-earth">
                <Lock className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">Impact Metrics Protected</h3>
            <p className="text-gray-600 mb-6">
              Our detailed impact metrics, including data on Morocco's $11B+ tourism revenue transformation and our $100B regeneration engine, are available to registered members only.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/auth/login" variant="secondary">
                Sign In
              </Button>
              <Button href="/auth/register" glow>
                Join the Movement
              </Button>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection animation="fade-up" delay={1400} className="text-center mt-16">
            <Button href="#impact" glow>
              See Our Impact
            </Button>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default PillarsSection;
