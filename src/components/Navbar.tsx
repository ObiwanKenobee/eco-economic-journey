
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Impact', href: '#impact' },
    { name: 'Partners', href: '#partners' },
    { name: 'Join Us', href: '#join' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-serif font-semibold tracking-tight text-earth">
            <span className="text-charcoal">The</span> Eco-Economy
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover-line text-charcoal/80 hover:text-charcoal text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          {isAuthenticated ? (
            <Button href="/dashboard" size="sm">
              Dashboard
            </Button>
          ) : (
            <div className="flex items-center space-x-2">
              <Button href="/auth/login" variant="secondary" size="sm">
                Sign In
              </Button>
              <Button href="/auth/register" size="sm">
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-earth rounded-md"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-charcoal" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-charcoal" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-white transform transition-transform ease-in-out duration-300',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="pt-24 px-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 text-charcoal text-lg font-medium border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {isAuthenticated ? (
            <Link to="/dashboard" className="block py-3" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full justify-center">
                Dashboard
              </Button>
            </Link>
          ) : (
            <div className="grid grid-cols-2 gap-3 pt-3">
              <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="secondary" className="w-full justify-center">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-center">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
