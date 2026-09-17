import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <a
        href={VENUE_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:bg-emerald-500 hover:scale-110 transition-all border border-emerald-400/40 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="absolute right-14 bg-charcoal text-white text-xs py-1 px-3 rounded-md border border-amber-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          WhatsApp Inquiry
        </span>
      </a>

      {/* Direct Click to Call Button */}
      <a
        href={VENUE_INFO.telLink}
        className="w-12 h-12 rounded-full bg-amber-500 text-charcoal flex items-center justify-center shadow-2xl hover:bg-amber-400 hover:scale-110 transition-all border border-amber-300 group relative"
        aria-label="Call Rawal Marquee"
      >
        <Phone className="w-6 h-6 text-charcoal font-bold" />
        <span className="absolute right-14 bg-charcoal text-amber-300 text-xs py-1 px-3 rounded-md border border-amber-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg font-bold">
          Call: {VENUE_INFO.phone}
        </span>
      </a>
    </div>
  );
};
