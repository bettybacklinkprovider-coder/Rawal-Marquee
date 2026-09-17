import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, MapPin, Sparkles } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events & Services', path: '/services' },
    { name: 'Gallery & Contact', path: '/gallery-contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-charcoal text-amber-200/90 text-xs py-2 px-4 border-b border-amber-900/30 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              {VENUE_INFO.address}
            </span>
            <span className="text-gray-500">•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Bookings Open for 2026-2027 Wedding Season
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={VENUE_INFO.telLink} 
              className="flex items-center gap-1.5 font-medium hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              Call: <span className="text-white font-semibold">{VENUE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal/95 backdrop-blur-md shadow-xl py-3 border-b border-amber-500/20'
            : 'bg-charcoal py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-full bg-amber-500/20 p-[1.5px] shadow-lg shadow-amber-900/20 group-hover:scale-105 transition-transform overflow-hidden border border-amber-400/50">
              <img
                src="/assets/logo.jpg"
                alt="Rawal Marquee Crest Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white block leading-tight">
                RAWAL <span className="gold-gradient-text font-normal">MARQUEE</span>
              </span>
              <span className="text-[10px] tracking-widest text-amber-300/80 uppercase block font-medium">
                Bani Gala • Islamabad
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive(link.path)
                    ? 'text-gold font-semibold'
                    : 'text-gray-300 hover:text-amber-300'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={VENUE_INFO.telLink}
              className="flex items-center space-x-2 text-xs font-semibold px-4 py-2.5 rounded-lg border border-amber-500/40 text-amber-200 hover:bg-amber-500/10 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{VENUE_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="btn-gold text-xs px-5 py-2.5 rounded-lg shadow-md flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-charcoal" />
              <span>Book Your Event</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a
              href={VENUE_INFO.telLink}
              className="sm:hidden p-2 rounded-lg border border-amber-500/40 text-gold hover:bg-amber-500/10"
              aria-label="Call Venue"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-charcoal border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-amber-500/15 text-gold font-semibold border-l-2 border-gold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col space-y-2.5">
              <a
                href={VENUE_INFO.telLink}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg border border-amber-500/40 text-amber-200 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Now: {VENUE_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full btn-gold py-3 rounded-lg text-sm font-semibold flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="w-4 h-4 text-charcoal" />
                <span>Book Your Event</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
