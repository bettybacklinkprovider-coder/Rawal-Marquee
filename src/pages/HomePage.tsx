import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Phone, Calendar, ArrowRight, Sparkles, CheckCircle2, MapPin, 
  Building, Armchair, UserCheck, Heart, Eye
} from 'lucide-react';
import { VENUE_INFO, IMAGES, GALLERY_ITEMS } from '../data/venueData';

interface HomePageProps {
  onOpenBooking: () => void;
  onOpenLightbox: (index: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, onOpenLightbox }) => {
  // Why Choose icons helper
  const getWhyChooseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building className="w-6 h-6 text-gold" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-gold" />;
      case 'Armchair': return <Armchair className="w-6 h-6 text-gold" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-gold" />;
      case 'Heart': return <Heart className="w-6 h-6 text-gold" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-gold" />;
      default: return <Sparkles className="w-6 h-6 text-gold" />;
    }
  };

  const whyChoosePoints = [
    {
      title: "Elegant Venue",
      desc: "An architecturally refined venue with high ceilings, luxurious chandeliers, and carpeted walkways.",
      icon: "Building",
      image: "/assets/elegant_venue.jpg"
    },
    {
      title: "Beautiful Event Décor",
      desc: "Tailored stage backdrops, fresh floral styling, and golden lighting themes designed for your vision.",
      icon: "Sparkles",
      image: "/assets/wedding_stage.jpg"
    },
    {
      title: "Spacious Seating",
      desc: "Comfortable lounge sofas, royal guest tables, and flexible floor plans for up to 1,200 guests.",
      icon: "Armchair",
      image: "/assets/spacious_seating.jpg"
    },
    {
      title: "Professional Service",
      desc: "Attentive management and experienced event staff dedicated to smooth, hassle-free celebrations.",
      icon: "UserCheck",
      image: "/assets/corporate.jpg"
    },
    {
      title: "Memorable Atmosphere",
      desc: "Enchanting ambience crafted through temperature control, crystal lighting, and rich acoustics.",
      icon: "Heart",
      image: "/assets/atmosphere_card.jpg"
    },
    {
      title: "Convenient Location",
      desc: "Located on A Q Khan Rd, Bani Gala with smooth access roads and secure valet parking facilities.",
      icon: "MapPin",
      image: "/assets/location_card.jpg"
    }
  ];

  // 4 Home Service cards
  const homeServices = [
    {
      id: "weddings",
      title: "Weddings",
      desc: "Elegant wedding celebrations with beautiful décor and spacious seating.",
      image: IMAGES.weddingService
    },
    {
      id: "receptions",
      title: "Receptions",
      desc: "A sophisticated setting for memorable reception events.",
      image: IMAGES.receptionService
    },
    {
      id: "engagements",
      title: "Engagements & Family Events",
      desc: "Comfortable and stylish space for engagements, birthdays and family gatherings.",
      image: IMAGES.engagementService
    },
    {
      id: "corporate",
      title: "Corporate & Special Events",
      desc: "Professional event setup for corporate functions and special occasions.",
      image: IMAGES.corporateService
    }
  ];

  // Gallery Preview: 8 curated items
  const galleryPreview = GALLERY_ITEMS.slice(0, 8);

  return (
    <div className="space-y-0">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-charcoal text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroBg}
            alt="Rawal Marquee Wedding Venue"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 flex flex-col items-center"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500/20 p-1 border-2 border-gold/60 shadow-xl backdrop-blur-md overflow-hidden mb-1">
              <img
                src="/assets/logo.jpg"
                alt="Rawal Marquee Crest Emblem"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold" />
              Bani Gala's Premier Marquee Venue
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15]">
              Create Unforgettable Moments at <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Rawal Marquee</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              A beautiful and elegant venue for weddings, receptions, engagements, family celebrations and special events in Bani Gala.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto btn-gold px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center space-x-2 shadow-2xl cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-charcoal" />
                <span>Book Your Event</span>
              </button>

              <a
                href={VENUE_INFO.telLink}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-amber-400/50 text-white font-semibold text-base flex items-center justify-center space-x-2 backdrop-blur-md transition-all"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>Call {VENUE_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-amber-200/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" /> Up to 1,200 Guest Capacity
              </span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" /> Fully Air-Conditioned
              </span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" /> Valet Parking Included
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT RAWAL MARQUEE */}
      <section className="py-20 bg-ivory text-charcoal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="text-gold font-semibold uppercase tracking-widest text-xs">
                  Welcome To Rawal Marquee
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal mt-1">
                  A Venue Crafted for <span className="text-gold">Memorable Celebrations</span>
                </h2>
                <div className="w-16 h-1 bg-gold mt-3 rounded-full" />
              </div>

              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Rawal Marquee is a stylish and distinguished event venue situated in the scenic heart of Bani Gala, Pakistan. Designed with understated luxury and expansive architecture, we provide an enchanted setting for life's most precious occasions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Elegant event spaces",
                  "Beautiful décor",
                  "Comfortable guest seating",
                  "Professional event environment",
                  "Suitable for weddings and private celebrations",
                  "Convenient Bani Gala location"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <Link
                  to="/about"
                  className="btn-gold px-6 py-3 rounded-lg text-sm font-bold text-charcoal inline-flex items-center space-x-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={IMAGES.aboutVenue}
                  alt="Rawal Marquee Venue Interior"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-xl bg-charcoal/80 backdrop-blur-md border border-amber-500/30">
                  <p className="font-serif text-lg font-bold text-amber-200">Located at A Q Khan Rd, Bani Gala</p>
                  <p className="text-xs text-gray-300">Easily accessible with grand entrance and guest drop-off bay.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — EVENTS & SERVICES */}
      <section className="py-20 bg-charcoal text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-gold font-semibold uppercase tracking-widest text-xs">
              Unforgettable Hosting
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Events & Services
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-gray-300 text-sm sm:text-base">
              From majestic wedding Barat stages to sophisticated corporate galas, Rawal Marquee provides custom-tailored event setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-gold-light transition-all duration-300 flex flex-col group shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-gold hover:text-amber-300 pt-2 border-t border-white/10"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — WHY CHOOSE RAWAL MARQUEE */}
      <section className="py-20 bg-ivory-dark text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-gold font-semibold uppercase tracking-widest text-xs">
              Distinguished Features
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal">
              Why Choose Rawal Marquee
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-gray-600 text-sm sm:text-base">
              We combine timeless elegance with modern hospitality standards to give your event the prestige it deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-amber-900/10 shadow-lg hover:shadow-xl hover:border-gold/50 transition-all group overflow-hidden flex flex-col"
              >
                {item.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm border border-amber-500/30 flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-colors shadow-md">
                      {getWhyChooseIcon(item.icon)}
                    </div>
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-charcoal mb-2 group-hover:text-amber-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 — GALLERY PREVIEW */}
      <section className="py-20 bg-charcoal text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
            <div>
              <span className="text-gold font-semibold uppercase tracking-widest text-xs">
                Visual Showcase
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-1">
                Gallery Preview
              </h2>
              <div className="w-16 h-1 bg-gold mt-2 rounded-full" />
            </div>

            <Link
              to="/gallery-contact"
              className="btn-gold px-6 py-3 rounded-xl text-xs font-bold text-charcoal inline-flex items-center space-x-2 self-start md:self-auto"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPreview.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => onOpenLightbox(index)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <span className="self-start text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-amber-500/20 text-gold border border-amber-500/30 backdrop-blur-md">
                    {item.category}
                  </span>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h4 className="font-serif text-lg font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-amber-200/80 mt-0.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5 text-gold" /> Click to enlarge
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — CONTACT & BOOKING CTA */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden border-t border-amber-500/20">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.ctaBg}
            alt="Rawal Marquee Night Event"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-gold text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-gold" />
              Start Planning Today
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
              Let’s Make Your Special Day Unforgettable
            </h2>

            <div className="pt-2 text-amber-100/90 space-y-1 text-sm sm:text-base max-w-xl mx-auto font-medium">
              <p className="font-serif text-xl text-gold font-bold">{VENUE_INFO.name}</p>
              <p className="flex items-center justify-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                {VENUE_INFO.address}
              </p>
              <p className="text-lg text-white font-semibold pt-1">
                Phone: <a href={VENUE_INFO.telLink} className="text-gold underline">{VENUE_INFO.phone}</a>
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={VENUE_INFO.telLink}
                className="w-full sm:w-auto btn-gold px-8 py-4 rounded-xl text-sm font-bold text-charcoal shadow-2xl flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5 text-charcoal" />
                <span>Call Now: {VENUE_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5 text-gold" />
                <span>Contact Us & Reserve</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
