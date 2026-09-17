import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, Calendar, Sparkles, CheckCircle2, Users, 
  Clock, Shield, ArrowRight 
} from 'lucide-react';
import { VENUE_INFO, SERVICES_LIST } from '../data/venueData';

interface ServicesPageProps {
  onOpenBookingWithService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBookingWithService }) => {
  return (
    <div className="bg-ivory text-charcoal">
      
      {/* Page Header */}
      <section className="relative py-20 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-gold text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Tailored Event Excellence
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            Events & <span className="gold-gradient-text">Services</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Explore our comprehensive event hosting capabilities at Rawal Marquee, Bani Gala. Every celebration is tailored with elegance.
          </p>

          <div className="pt-4">
            <a
              href={VENUE_INFO.telLink}
              className="inline-flex items-center space-x-2 btn-gold px-6 py-3 rounded-xl text-xs font-bold text-charcoal shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Booking Line: {VENUE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services List - Large Cards Layout */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES_LIST.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-amber-900/10 shadow-xl ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 shadow-lg border-2 border-amber-500/20 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="px-3 py-1 rounded-full bg-charcoal/80 border border-amber-500/30 text-gold font-bold">
                        {service.capacity}
                      </span>
                      <span className="text-amber-200 font-medium">Rawal Marquee Setup</span>
                    </div>
                  </div>
                </div>

                {/* Info Column */}
                <div className={`lg:col-span-6 space-y-5 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-gold font-bold text-xs uppercase tracking-widest block">
                      Category 0{index + 1}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1">
                      {service.title}
                    </h2>
                    <p className="text-xs text-gray-500 font-semibold mt-1">
                      Ideal for: {service.idealFor.join(' • ')}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2 bg-ivory p-4 rounded-xl border border-amber-900/10">
                    <span className="text-xs font-bold text-charcoal uppercase tracking-wider block mb-2">
                      Key Highlights & Features:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-800">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenBookingWithService(service.title)}
                      className="btn-gold px-6 py-3 rounded-xl text-xs font-bold text-charcoal flex items-center space-x-2 shadow-lg cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-charcoal" />
                      <span>Book {service.title}</span>
                    </button>

                    <a
                      href={VENUE_INFO.telLink}
                      className="px-6 py-3 rounded-xl border border-amber-500/50 hover:bg-amber-500/10 text-charcoal text-xs font-bold transition-all flex items-center space-x-2"
                    >
                      <Phone className="w-4 h-4 text-gold" />
                      <span>Call 0300 5582288</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Direct Call Banner */}
      <section className="py-12 bg-charcoal text-white border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Have Custom Requirements or Special Themes?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Our event specialists are available 7 days a week to discuss customized floor plans, stage designs, and catering arrangements.
          </p>
          <div className="pt-2">
            <a
              href={VENUE_INFO.telLink}
              className="inline-flex items-center space-x-2 btn-gold px-8 py-4 rounded-xl text-sm font-bold text-charcoal shadow-2xl"
            >
              <Phone className="w-5 h-5 text-charcoal" />
              <span>Call Now: 0300 5582288</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
