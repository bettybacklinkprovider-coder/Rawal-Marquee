import React from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(prev);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(next);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Header info & Close */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 px-2 sm:px-6">
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-gold text-xs font-semibold uppercase tracking-wider">
            {currentItem.category}
          </span>
          <span className="text-xs text-gray-400 hidden sm:inline">
            {currentIndex + 1} of {items.length}
          </span>
        </div>
        
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 text-white hover:bg-gold hover:text-charcoal transition-all shadow-lg"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
        />

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal/80 text-white border border-amber-500/30 hover:bg-gold hover:text-charcoal transition-colors shadow-xl"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-charcoal/80 text-white border border-amber-500/30 hover:bg-gold hover:text-charcoal transition-colors shadow-xl"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption Overlay */}
      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-2xl w-full px-4 text-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-charcoal/90 border border-amber-500/30 rounded-xl p-4 shadow-xl backdrop-blur-md">
          <h4 className="font-serif text-xl font-bold text-white flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" />
            {currentItem.title}
          </h4>
          {currentItem.description && (
            <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
              {currentItem.description}
            </p>
          )}
          <p className="text-[11px] text-amber-300/70 mt-2 flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3 text-gold" /> Rawal Marquee, A Q Khan Rd, Bani Gala
          </p>
        </div>
      </div>
    </div>
  );
};
