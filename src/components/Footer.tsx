
import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'About', href: '#' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy', href: '#' },
  ];
  
  const socialLinks = [
    { 
      name: 'Twitter', 
      href: '#', 
      icon: <Twitter className="w-5 h-5" /> 
    },
    { 
      name: 'LinkedIn', 
      href: '#', 
      icon: <Linkedin className="w-5 h-5" /> 
    },
    { 
      name: 'Instagram', 
      href: '#', 
      icon: <Instagram className="w-5 h-5" /> 
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container px-6 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-serif font-semibold tracking-tight text-earth">
              <span className="text-charcoal">The</span> Eco-Economy
            </a>
            <p className="mt-3 text-sm text-gray-500 max-w-md">
              Redefining African Tourism—Where Every Journey Protects Nature. Join us in building a sustainable future.
            </p>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-500 hover-line hover:text-charcoal transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social links */}
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-charcoal hover:border-charcoal transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Guardian-IO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
