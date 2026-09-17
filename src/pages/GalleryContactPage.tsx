import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Phone, MapPin, Calendar, User, PhoneCall, 
  MessageSquare, CheckCircle2, Eye, Filter, Send 
} from 'lucide-react';
import { VENUE_INFO, GALLERY_ITEMS } from '../data/venueData';
import { BookingFormData } from '../types';

interface GalleryContactPageProps {
  onOpenLightbox: (index: number) => void;
}

export const GalleryContactPage: React.FC<GalleryContactPageProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Contact Form State
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    eventType: 'Wedding',
    preferredDate: '',
    guestCount: '300-500 Guests',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const categories = [
    'All',
    'Wedding Stage',
    'Wedding Décor',
    'Marquee Interior',
    'Reception Setup',
    'Dining Area',
    'Table Setup',
    'Lighting & Decoration',
    'Event Atmosphere'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-ivory text-charcoal">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-gold text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Visual Portfolio & Reservations
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white">
            Gallery & <span className="gold-gradient-text">Contact</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Browse our photo gallery of past wedding ceremonies, stages, and banquet setups, or contact our team directly for bookings.
          </p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-gold font-semibold uppercase tracking-widest text-xs">
              Moments Captured
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              Rawal Marquee Photo Gallery
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-gray-600 text-sm">
              Click any image below to open full-screen lightbox preview.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-charcoal text-gold border border-amber-500/50 shadow-md'
                    : 'bg-white text-gray-700 border border-amber-900/10 hover:bg-amber-500/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              // Find index in master GALLERY_ITEMS array for correct lightbox navigation
              const masterIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onOpenLightbox(masterIndex >= 0 ? masterIndex : 0)}
                  className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-amber-900/10 shadow-lg bg-charcoal"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <span className="self-start text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-amber-500/20 text-gold border border-amber-500/40 backdrop-blur-md">
                      {item.category}
                    </span>

                    <div>
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-xs text-gray-300 line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                      )}
                      <p className="text-[11px] text-gold font-medium mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-3.5 h-3.5" /> View Full Image
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact-form-section" className="py-16 sm:py-20 bg-ivory-dark border-t border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Side */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-gold font-semibold uppercase tracking-widest text-xs">
                  Get In Touch
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1">
                  Contact Rawal Marquee
                </h2>
                <div className="w-16 h-1 bg-gold mt-2 rounded-full" />
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                We invite you to visit Rawal Marquee in Bani Gala to tour our event hall, stage setups, and dining arrangements in person.
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-amber-900/10 shadow-md flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-charcoal">{VENUE_INFO.name}</h3>
                    <p className="text-sm text-gray-700 font-medium">{VENUE_INFO.address}</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-amber-900/10 shadow-md flex items-start space-x-4">
                  <PhoneCall className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-charcoal">Phone Number</h3>
                    <a 
                      href={VENUE_INFO.telLink} 
                      className="text-base text-gold font-bold hover:underline block"
                    >
                      {VENUE_INFO.phone}
                    </a>
                    <span className="text-xs text-gray-500">Available 10:00 AM - 10:00 PM Daily</span>
                  </div>
                </div>
              </div>

              {/* Click to Call Action Button */}
              <div className="pt-2">
                <a
                  href={VENUE_INFO.telLink}
                  className="w-full btn-gold py-4 rounded-xl text-sm font-bold text-charcoal shadow-xl flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5 text-charcoal" />
                  <span>Click to Call: {VENUE_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-amber-900/10 shadow-xl relative">
                
                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <h3 className="font-serif text-2xl font-bold text-charcoal border-b border-amber-900/10 pb-3">
                      Event Inquiry & Booking Form
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-charcoal mb-1.5 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Tariq Mahmood"
                          className="w-full bg-ivory border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-1.5 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <PhoneCall className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="0300 5582288"
                            className="w-full bg-ivory border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-gold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-1.5 uppercase tracking-wider">
                          Event Type *
                        </label>
                        <select
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className="w-full bg-ivory border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold"
                        >
                          <option value="Wedding">Wedding (Barat)</option>
                          <option value="Reception">Reception (Walima)</option>
                          <option value="Engagement">Engagement / Mehendi</option>
                          <option value="Family Event">Family Celebration</option>
                          <option value="Corporate">Corporate Function</option>
                          <option value="Special Celebration">Special Event</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-1.5 uppercase tracking-wider">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                          <input
                            type="date"
                            required
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className="w-full bg-ivory border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-1.5 uppercase tracking-wider">
                          Expected Guest Count
                        </label>
                        <select
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                          className="w-full bg-ivory border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold"
                        >
                          <option value="100-250 Guests">100 - 250 Guests</option>
                          <option value="300-500 Guests">300 - 500 Guests</option>
                          <option value="500-800 Guests">500 - 800 Guests</option>
                          <option value="800-1200 Guests">800 - 1,200 Guests</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-charcoal mb-1.5 uppercase tracking-wider">
                        Your Message / Requirements
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide details on hall setup, catering preferences, timing..."
                        className="w-full bg-ivory border border-gray-200 rounded-xl px-4 py-3 text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-gold resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-gold py-4 rounded-xl text-sm font-bold text-charcoal flex items-center justify-center space-x-2 shadow-xl cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-charcoal" />
                      <span>Submit / Book Now</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 text-gold flex items-center justify-center mx-auto border border-amber-500/40">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-charcoal">
                      Thank You for Contacting Us!
                    </h3>
                    <p className="text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                      Dear <strong className="text-charcoal">{formData.name}</strong>, your event inquiry for <strong className="text-gold">{formData.eventType}</strong> has been successfully submitted. Our team at Rawal Marquee will call you shortly on <strong className="text-charcoal">{formData.phone}</strong>.
                    </p>

                    <div className="pt-4 flex justify-center">
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="btn-gold px-8 py-3 rounded-xl text-xs font-bold text-charcoal"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-charcoal text-white relative overflow-hidden border-t border-amber-500/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-gold font-bold uppercase tracking-widest text-xs">
            Let's Celebrate Together
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Planning Your Next Celebration?
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Get in touch with Rawal Marquee and start planning your memorable event today.
          </p>

          <div className="pt-4">
            <a
              href={VENUE_INFO.telLink}
              className="inline-flex items-center space-x-2 btn-gold px-8 py-4 rounded-xl text-sm font-bold text-charcoal shadow-2xl"
            >
              <Phone className="w-5 h-5 text-charcoal" />
              <span>Call 0300 5582288</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
