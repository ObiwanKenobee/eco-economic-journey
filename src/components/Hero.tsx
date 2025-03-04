
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowDown, Leaf } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const howItWorks = document.getElementById('how-it-works');
    if (howItWorks) {
      howItWorks.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 to-forest/60 z-0 opacity-30"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-savanna/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-forest/20 rounded-full blur-[80px] animate-float animation-delay-1000"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
          alt="African wilderness"
          className={`w-full h-full object-cover object-center transition-all duration-1000 scale-110 ${isLoaded ? 'scale-100 filter-none' : 'scale-110 blur-sm'}`}
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-6 mx-auto pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium tracking-wide border border-white/20">
              <Leaf className="w-4 h-4 text-savanna" />
              The Future is Regenerative—Where Economy and Ecology Merge
            </span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Welcome to the <span className="bg-clip-text text-transparent bg-gradient-to-r from-savanna to-forest">Eco-Utopia</span> Revolution
          </h1>

          <p className={`text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience a new paradigm where tourism transforms into a force for planetary healing—every adventure funds ecosystem restoration and community prosperity.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button href="#join" size="lg" className="min-w-[160px]" glow>
              Join the Revolution
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg" className="min-w-[160px]" onClick={scrollToNext}>
              Discover How
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/3 left-20 w-20 h-20 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center animation-delay-700 animate-float z-10">
        <Leaf className="w-8 h-8 text-savanna/80" />
      </div>
      
      <div className="absolute bottom-1/3 right-20 w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center animation-delay-1500 animate-float z-10">
        <svg className="w-6 h-6 text-forest/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H9.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9H15.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button 
          onClick={scrollToNext} 
          className="flex flex-col items-center justify-center group"
          aria-label="Scroll down"
        >
          <span className="text-white/70 text-sm mb-2 group-hover:text-white transition-colors">Discover More</span>
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-all">
            <ArrowDown className="w-5 h-5 text-white/70 group-hover:text-white transition-colors animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
