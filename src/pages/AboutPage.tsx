import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, MapPin, Phone, Calendar, CheckCircle2, ShieldCheck, 
  UtensilsCrossed, Users, Award, HeartHandshake, Compass 
} from 'lucide-react';
import { VENUE_INFO, IMAGES } from '../data/venueData';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const venueFeatures = [
    {
      title: "Spacious Event Hall",
      desc: "Fully carpeted, high-ceiling marquee accommodating up to 1,200 guests comfortably with state-of-the-art climate control.",
      image: IMAGES.heroBg
    },
    {
      title: "Royal Seating Arrangements",
      desc: "Customizable floor plans featuring plush sofa lounges, velvet family clusters, and elegant round banquet tables.",
      image: IMAGES.aboutVenue
    },
    {
      title: "Grand Stage Area",
      desc: "Elevated stage setups with customizable floral backdrops, crystal chandeliers, and LED screen rigging.",
      image: IMAGES.weddingService
    },
    {
      title: "Exclusive Dining & Buffet",
      desc: "Hygienic, temperature-controlled buffet zones and live cooking station setups to serve warm, delicious banquets.",
      image: IMAGES.receptionService
    },
    {
      title: "Endless Décor Possibilities",
      desc: "From traditional royal gold & red wedding themes to minimalist pastel ivory or modern illuminated night settings.",
      image: IMAGES.ctaBg
    }
  ];

  return (
    <div className="bg-ivory text-charcoal">
      
      {/* Banner / Hero */}
      <section className="relative py-20 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.aboutVenue}
            alt="Rawal Marquee Architecture"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal to-charcoal" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-gold text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Discover Our Legacy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            About <span className="gold-gradient-text">Rawal Marquee</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Providing a grand stage for wedding ceremonies, walima receptions, engagements, and private celebrations in Bani Gala.
          </p>
        </div>
      </section>

      {/* SECTION 1: ABOUT RAWAL MARQUEE STORY */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-gold font-semibold uppercase tracking-widest text-xs">
                Our Story & Vision
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
                Pakistan’s Premier Destination for Elegant Occasions
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Established with a vision to redefine event hospitality in Islamabad and Rawalpindi, <strong>Rawal Marquee</strong> stands as a landmark of distinction on A Q Khan Road, Bani Gala. We believe every celebration is a unique chapter in our clients' lives, deserving a venue that radiates warmth, grandeur, and flawless organization.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Whether you are hosting a traditional Barat procession with grand bridal entry, an intimate engagement party, or an executive corporate gala, our hall is engineered to deliver comfort, acoustic excellence, and mesmerizing visual aesthetics.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="p-4 rounded-xl bg-white border border-amber-900/10 shadow-sm flex items-center space-x-3">
                  <Users className="w-8 h-8 text-gold" />
                  <div>
                    <span className="block font-serif text-xl font-bold text-charcoal">1,200 Guests</span>
                    <span className="text-xs text-gray-500">Hall Capacity</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-amber-900/10 shadow-sm flex items-center space-x-3">
                  <Award className="w-8 h-8 text-gold" />
                  <div>
                    <span className="block font-serif text-xl font-bold text-charcoal">5-Star Standards</span>
                    <span className="text-xs text-gray-500">Decor & Service</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={IMAGES.weddingService}
                alt="Wedding Stage"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl border-2 border-white"
              />
              <img
                src={IMAGES.receptionService}
                alt="Walima Reception Setup"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl border-2 border-white mt-8"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: OUR VENUE SHOWCASE */}
      <section className="py-16 sm:py-20 bg-ivory-dark border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-gold font-semibold uppercase tracking-widest text-xs">
              World-Class Infrastructure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              Our Venue Capabilities
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-gray-600 text-sm sm:text-base">
              Every detail at Rawal Marquee has been thoughtfully designed to deliver seamless comfort for host families and guests alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venueFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-amber-900/10 shadow-lg hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold text-amber-200 uppercase tracking-wider">
                    Rawal Marquee
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: OUR COMMITMENT */}
      <section className="py-16 sm:py-20 bg-charcoal text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-gold font-semibold uppercase tracking-widest text-xs">
              Hospitality Promise
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Our Uncompromising Commitment
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3">
                <ShieldCheck className="w-8 h-8 text-gold" />
                <h3 className="font-serif text-lg font-bold text-white">Flawless Reliability</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Heavy-duty backup power generators ensure unhindered lighting, sound, and air-conditioning throughout your ceremony.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3">
                <UtensilsCrossed className="w-8 h-8 text-gold" />
                <h3 className="font-serif text-lg font-bold text-white">Hygienic Standards</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Strict food hygiene and spotless dining maintenance guarantee guest comfort during buffet serving.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3">
                <HeartHandshake className="w-8 h-8 text-gold" />
                <h3 className="font-serif text-lg font-bold text-white">Hospitable Staff</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Courteous uniformed floor managers and security personnel ensure warm guest reception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LOCATION & MAP */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-gold font-semibold uppercase tracking-widest text-xs">
                Easy Accessibility
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
                Convenient Bani Gala Location
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full" />

              <div className="p-6 rounded-2xl bg-white border border-amber-900/10 shadow-lg space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl font-bold text-charcoal">{VENUE_INFO.name}</h3>
                    <p className="text-sm text-gray-700 font-medium mt-0.5">{VENUE_INFO.address}</p>
                    <p className="text-xs text-gray-500 mt-1">Conveniently situated along main A Q Khan Road with smooth road access from Rawal Dam, Kashmir Highway & Murree Road.</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-4 text-xs font-semibold text-gray-700">
                  <span className="flex items-center gap-1">
                    <Compass className="w-4 h-4 text-gold" /> 15 Mins from Club Road
                  </span>
                  <span className="flex items-center gap-1">
                    <Compass className="w-4 h-4 text-gold" /> 20 Mins from Islamabad Expressway
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenBooking}
                  className="btn-gold px-8 py-4 rounded-xl text-sm font-bold text-charcoal shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-charcoal" />
                  <span>Book Your Event</span>
                </button>

                <a
                  href={VENUE_INFO.telLink}
                  className="px-8 py-4 rounded-xl border border-charcoal/30 hover:bg-charcoal hover:text-white text-charcoal font-bold text-sm transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  <span>Call 0300 5582288</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-96 relative">
              <iframe
                title="Rawal Marquee Location Map"
                src={VENUE_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
