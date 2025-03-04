
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PillarsSection from '../components/PillarsSection';
import ImpactSection from '../components/ImpactSection';
import PartnersSection from '../components/PartnersSection';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    // Observe all elements with the slide-up class
    document.querySelectorAll('.slide-up').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Clean up observer on component unmount
      document.querySelectorAll('.slide-up').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <PillarsSection />
      <ImpactSection />
      <PartnersSection />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Index;
