export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  capacity: string;
  idealFor: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Wedding Décor' | 'Wedding Stage' | 'Marquee Interior' | 'Reception Setup' | 'Dining Area' | 'Table Setup' | 'Lighting & Decoration' | 'Event Atmosphere';
  image: string;
  description?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  eventType: string;
  preferredDate: string;
  guestCount?: string;
  message: string;
}
