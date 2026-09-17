import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryContactPage } from './pages/GalleryContactPage';
import { GALLERY_ITEMS } from './data/venueData';

// Scroll to top on route change helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('Wedding');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpenBooking = (serviceName: string = 'Wedding') => {
    setSelectedServiceForBooking(serviceName);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans selection:bg-amber-500 selection:text-charcoal">
        {/* Header Navigation */}
        <Header onOpenBooking={() => handleOpenBooking('Wedding')} />

        {/* Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenBooking={() => handleOpenBooking('Wedding')} 
                  onOpenLightbox={handleOpenLightbox}
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <AboutPage 
                  onOpenBooking={() => handleOpenBooking('Wedding')} 
                />
              } 
            />
            <Route 
              path="/services" 
              element={
                <ServicesPage 
                  onOpenBookingWithService={(serviceName) => handleOpenBooking(serviceName)} 
                />
              } 
            />
            <Route 
              path="/gallery-contact" 
              element={
                <GalleryContactPage 
                  onOpenLightbox={handleOpenLightbox}
                />
              } 
            />
            {/* Fallback redirect route */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenBooking={() => handleOpenBooking('Wedding')} 
                  onOpenLightbox={handleOpenLightbox}
                />
              } 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp and Direct Call buttons */}
        <FloatingActions />

        {/* Interactive Booking Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          defaultEventType={selectedServiceForBooking}
        />

        {/* Lightbox Image Preview Modal */}
        <LightboxModal
          items={GALLERY_ITEMS}
          currentIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
        />
      </div>
    </Router>
  );
}
