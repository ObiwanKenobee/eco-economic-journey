
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowDown } from 'lucide-react';

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
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
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
            <span className="inline-block px-4 py-1 mb-6 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium tracking-wide border border-white/20">
              Redefining African Tourism—Where Every Journey Protects Nature
            </span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            The Future of Travel is Ethical—
            <span className="text-savanna">Join the Eco-Economy</span>
          </h1>

          <p className={`text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience Africa's beauty while ensuring its survival. Every trip, every transaction, every adventure funds conservation.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button href="#join" size="lg" className="min-w-[160px]">
              Join the Movement
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg" className="min-w-[160px]" onClick={scrollToNext}>
              How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button 
          onClick={scrollToNext} 
          className="flex flex-col items-center justify-center group"
          aria-label="Scroll down"
        >
          <span className="text-white/70 text-sm mb-2 group-hover:text-white transition-colors">Discover More</span>
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-all">
            <ArrowDown className="w-4 h-4 text-white/70 group-hover:text-white transition-colors animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
