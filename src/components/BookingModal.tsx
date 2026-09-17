import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, User, PhoneCall, Sparkles } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEventType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultEventType = 'Wedding'
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    eventType: defaultEventType,
    preferredDate: '',
    guestCount: '300-500 Guests',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      eventType: 'Wedding',
      preferredDate: '',
      guestCount: '300-500 Guests',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-charcoal text-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient top decoration */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-300" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-gold text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Rawal Marquee Reservations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Book Your Event
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Fill out the form below or call us directly at <a href={VENUE_INFO.telLink} className="text-gold font-bold hover:underline">{VENUE_INFO.phone}</a>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full bg-white/5 border border-white/15 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <PhoneCall className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 1234567"
                      className="w-full bg-white/5 border border-white/15 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-charcoal border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    <option value="Wedding">Wedding (Barat)</option>
                    <option value="Reception">Reception (Walima)</option>
                    <option value="Engagement">Engagement & Mehendi</option>
                    <option value="Family Event">Family Celebration</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Other">Special Event</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Expected Guests
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full bg-charcoal border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    <option value="100-250 Guests">100 - 250 Guests</option>
                    <option value="300-500 Guests">300 - 500 Guests</option>
                    <option value="500-800 Guests">500 - 800 Guests</option>
                    <option value="800-1200 Guests">800 - 1,200 Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Message / Special Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about stage preferences, catering choices, or event timing..."
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold resize-none"
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full btn-gold py-3 rounded-lg text-sm font-bold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4 text-charcoal" />
                  <span>Submit Booking Request</span>
                </button>

                <a
                  href={VENUE_INFO.telLink}
                  className="w-full py-2.5 rounded-lg border border-amber-500/40 text-amber-200 text-xs font-semibold flex items-center justify-center space-x-2 hover:bg-amber-500/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>Prefer Calling? Dial {VENUE_INFO.phone}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 text-gold flex items-center justify-center mx-auto border border-amber-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Booking Request Received!
            </h3>
            <p className="text-sm text-gray-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our management team at Rawal Marquee will contact you shortly on <strong className="text-gold">{formData.phone}</strong> to confirm availability for your <strong className="text-white">{formData.eventType}</strong> event.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={VENUE_INFO.telLink}
                className="btn-gold px-6 py-2.5 rounded-lg text-xs font-bold text-charcoal inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Venue Immediately</span>
              </a>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg border border-white/20 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
