
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import AnimatedSection from './AnimatedSection';
import { Check } from 'lucide-react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          interest: ''
        });
      }, 500);
    }, 1500);
  };

  return (
    <section id="join" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 top-1/3 w-80 h-80 bg-savanna/5 rounded-full blur-3xl"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-sand text-earth/80 rounded-full mb-4">
            Join Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Be Part of the Change—Join The Eco-Economy Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Together, we can transform how tourism supports conservation. Join our community of travelers, businesses, and conservationists.
          </p>
        </AnimatedSection>
        
        <div className="max-w-md mx-auto">
          <AnimatedSection 
            animation="scale-up"
            delay={200}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-earth/50 focus:border-earth transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-earth/50 focus:border-earth transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="interest" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    I am interested as a
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-earth/50 focus:border-earth transition-all appearance-none"
                  >
                    <option value="" disabled>Select your interest</option>
                    <option value="tourist">Tourist</option>
                    <option value="business">Business</option>
                    <option value="conservationist">Conservationist</option>
                    <option value="investor">Investor</option>
                  </select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Get Started'}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-forest" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  We're excited to have you join our mission. Check your email for next steps.
                </p>
              </div>
            )}
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400} className="text-center mt-8 text-gray-500 text-sm">
            <p>
              The future of Africa's economy is sustainable. Let's build it together.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
