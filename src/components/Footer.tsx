import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-gray-300 pt-16 pb-8 border-t border-amber-500/20 relative overflow-hidden">
      {/* Decorative ambient background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-amber-500/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-full bg-amber-500/20 p-[1.5px] shadow-lg overflow-hidden border border-amber-400/50">
                <img
                  src="/assets/logo.jpg"
                  alt="Rawal Marquee Crest Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                RAWAL <span className="gold-gradient-text font-normal">MARQUEE</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              A premier luxury venue crafted to host unforgettable weddings, Barat, Walima, engagements, family celebrations, and corporate galas in Bani Gala.
            </p>
            <div className="pt-2">
              <a
                href={VENUE_INFO.telLink}
                className="inline-flex items-center space-x-2 btn-gold px-4 py-2.5 rounded-lg text-xs font-bold text-charcoal shadow-md"
              >
                <Phone className="w-4 h-4 text-charcoal" />
                <span>Call Now: {VENUE_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white border-b border-amber-500/30 pb-2 inline-block">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-gold transition-colors flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Events & Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery-contact" className="hover:text-gold transition-colors flex items-center space-x-2">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Gallery & Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white border-b border-amber-500/30 pb-2 inline-block">
              Events We Host
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Wedding Barat Ceremonies</span>
              </li>
              <li className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Walima Receptions</span>
              </li>
              <li className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Engagements & Mehendi</span>
              </li>
              <li className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Family Birthdays & Anniversaries</span>
              </li>
              <li className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>Corporate Galas & Meetings</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white border-b border-amber-500/30 pb-2 inline-block">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>{VENUE_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={VENUE_INFO.telLink} className="hover:text-gold font-semibold text-white transition-colors">
                  {VENUE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span className="text-xs text-gray-400">{VENUE_INFO.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Rawal Marquee, Bani Gala. All Rights Reserved.</p>
          <p className="flex items-center space-x-1 text-gray-400">
            <span>Designed for memorable celebrations in Bani Gala</span>
            <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500 ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};
