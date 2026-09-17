import { ServiceItem, GalleryItem } from '../types';

export const VENUE_INFO = {
  name: "Rawal Marquee",
  tagline: "A beautiful and elegant venue for weddings, receptions, engagements, family celebrations and special events in Bani Gala.",
  address: "A Q Khan Rd, Bani Gala, Pakistan",
  phone: "0300 5582288",
  phoneRaw: "03005582288",
  telLink: "tel:03005582288",
  whatsappLink: "https://wa.me/923005582288?text=Hello%20Rawal%20Marquee%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20event.",
  email: "info@rawalmarquee.com",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13278.435777852197!2d73.148187!3d33.708234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9df1dbbd21%3A0xc3f173f4bb0be5e6!2sBani%20Gala%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
  workingHours: "Monday - Sunday: 10:00 AM - 10:00 PM",
  capacity: "Up to 1,200 Guests",
  parkingCapacity: "150+ Vehicles with Valet Service",
};

export const IMAGES = {
  heroBg: "/assets/hero_bg.jpg", // Pinterest hero background image (hosted locally)
  aboutVenue: "/assets/about_marquee.jpg", // Pinterest marquee hall image (hosted locally)
  weddingService: "/assets/wedding_stage.jpg", // Pinterest wedding stage decor (hosted locally)
  receptionService: "/assets/reception.jpg", // Pinterest reception walima decor (hosted locally)
  engagementService: "/assets/engagement.jpg", // Pinterest engagement floral stage (hosted locally)
  corporateService: "/assets/corporate.jpg", // Pinterest corporate/special gala decor (hosted locally)
  familyService: "/assets/engagement.jpg", // Festive family celebration
  specialService: "/assets/corporate.jpg", // Special celebration stage
  ctaBg: "/assets/cta_bg.jpg", // Pinterest CTA background image (hosted locally)
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "weddings",
    title: "Weddings (Barat)",
    shortDesc: "Grand wedding celebrations with regal stage decor, exquisite floral pathways, and spacious guest seating.",
    fullDesc: "Your wedding day deserves nothing short of perfection. At Rawal Marquee, we transform your dream Barat ceremony into a grand reality. Our spacious air-conditioned marquee features majestic stage designs, red-carpet walkways, crystal chandelier lighting, and royal seating tailored to reflect your heritage and style.",
    image: IMAGES.weddingService,
    features: [
      "Custom Royal Stage & Backdrop Setup",
      "Red Carpet Bridal Entrance Aisle",
      "VIP Lounges & Bridal Dressing Room",
      "Custom Floral & Crystal Decor Options",
      "Flexible Seating Layouts (Up to 1,200 guests)"
    ],
    capacity: "500 - 1,200 Guests",
    idealFor: ["Barat Ceremonies", "Nikkah Functions", "Grand Wedding Receptions"]
  },
  {
    id: "receptions",
    title: "Receptions (Walima)",
    shortDesc: "A sophisticated setting with soothing ambient illumination and high-end banquet arrangements for Walima events.",
    fullDesc: "Celebrate the start of a beautiful union with an elegant Walima reception at Rawal Marquee. We offer subtle, sophisticated color schemes, luxurious table centerpieces, romantic mood lighting, and flawless buffet layouts that impress every guest.",
    image: IMAGES.receptionService,
    features: [
      "Sophisticated Ambient Lighting & Sound",
      "Custom Round Table & Sofa Cluster Seating",
      "Dedicated Buffet & Live Station Counters",
      "Gentle Floral & Ivory Decor Themes",
      "Spacious Stage for Couple & Family Photos"
    ],
    capacity: "400 - 1,000 Guests",
    idealFor: ["Walima Receptions", "Post-Wedding Dinners", "Formal Evening Celebrations"]
  },
  {
    id: "engagements",
    title: "Engagements & Family Events",
    shortDesc: "Comfortable and stylish space for engagements, birthdays, dholki, mehendi, and intimate family gatherings.",
    fullDesc: "From vibrant Mehendi nights filled with music to intimate engagement ceremonies and festive family reunions, Rawal Marquee provides versatile layouts configured to your exact celebration size and theme.",
    image: IMAGES.engagementService,
    features: [
      "Customized Theme Backdrops & Photobooths",
      "Vibrant Mehendi/Dholki Stage Arrangements",
      "Cozy Seating for Family & Close Friends",
      "High-Quality Sound System for Music & Dancing",
      "Custom Dessert & Refreshment Corners"
    ],
    capacity: "100 - 500 Guests",
    idealFor: ["Engagement Ring Ceremonies", "Mehendi & Dholki Nights", "Anniversaries & Birthday Parties"]
  },
  {
    id: "corporate",
    title: "Corporate & Special Events",
    shortDesc: "Professional event setup for corporate functions, annual galas, award nights, and special occasions.",
    fullDesc: "Elevate your corporate profile with a impeccably organized venue. Rawal Marquee offers a refined environment equipped for corporate annual dinners, product launches, award ceremonies, and executive galas in Bani Gala.",
    image: IMAGES.corporateService,
    features: [
      "High-Definition Projectors & LED Screens Setup",
      "Podium & Professional Public Address System",
      "Formal Banquet & Theater Seating Configurations",
      "Secure High-Speed Wi-Fi & AV Support",
      "Corporate Dining & Coffee Break Facilities"
    ],
    capacity: "200 - 800 Guests",
    idealFor: ["Corporate Annual Galas", "Product Launches", "Award Functions & Dinners"]
  },
  {
    id: "family-celebrations",
    title: "Family Celebrations",
    shortDesc: "Warm, hospitable, and beautifully organized environment for milestone family moments and reunions.",
    fullDesc: "Mark life's cherished milestones—from silver anniversaries to baby showers and graduation dinners—with warm Pakistani hospitality and elegant surroundings.",
    image: IMAGES.familyService,
    features: [
      "Family-Friendly Seating Arrangements",
      "Kid-Friendly Space & Activity Corners",
      "Custom Theme Decorations",
      "Personalized Menu Coordination Support",
      "Attentive On-Site Event Staff"
    ],
    capacity: "100 - 600 Guests",
    idealFor: ["Anniversaries", "Milestone Birthdays", "Family Reunions & Banquets"]
  },
  {
    id: "special-events",
    title: "Special Celebrations",
    shortDesc: "Flexible venue arrangements adaptable to charity galas, fashion shows, and custom private celebrations.",
    fullDesc: "Whatever your special occasion demands, our creative event team works closely with you to tailor lighting, seating, stage size, and floor plans to match your exact vision.",
    image: IMAGES.specialService,
    features: [
      "Customizable Floor Plans & Runway Stage Options",
      "Dynamic Intelligent Lighting Rigging",
      "Valet Parking & Executive Security Support",
      "Flexible Setup & Teardown Timings",
      "Dedicated Event Coordinator"
    ],
    capacity: "200 - 1,000 Guests",
    idealFor: ["Charity Galas", "Cultural Exhibitions", "Fashion Shows & Performances"]
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Elegant Venue",
    description: "Architecturally refined marquee structure with high ceilings, grand chandeliers, and carpeted floors.",
    icon: "Building",
    image: "/assets/elegant_venue.jpg"
  },
  {
    title: "Beautiful Event Décor",
    description: "Versatile floral arrangements, regal stage designs, and customizable lighting themes.",
    icon: "Sparkles",
    image: "/assets/wedding_stage.jpg"
  },
  {
    title: "Spacious Seating",
    description: "Ample room for up to 1,200 guests with comfortable sofa lounges and banquet tables.",
    icon: "Armchair",
    image: "/assets/spacious_seating.jpg"
  },
  {
    title: "Professional Service",
    description: "Experienced, courteous staff ensuring flawless event execution from guest arrival to wrap-up.",
    icon: "UserCheck",
    image: "/assets/corporate.jpg"
  },
  {
    title: "Memorable Atmosphere",
    description: "Enchanting ambience created with warm lighting, sound acoustics, and climate control.",
    icon: "Heart",
    image: "/assets/atmosphere_card.jpg"
  },
  {
    title: "Convenient Location",
    description: "Prime location on A Q Khan Road, Bani Gala, easily accessible with ample secure parking.",
    icon: "MapPin",
    image: "/assets/location_card.jpg"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Grand Wedding Stage",
    category: "Wedding Stage",
    image: "/assets/wedding_stage.jpg",
    description: "Luxurious floral wedding stage backdrop with soft warm lighting."
  },
  {
    id: "gal-2",
    title: "Marquee Night View",
    category: "Marquee Interior",
    image: "/assets/about_marquee.jpg",
    description: "Spacious interior with majestic chandeliers and carpeted aisle."
  },
  {
    id: "gal-3",
    title: "Royal Dining Setup",
    category: "Dining Area",
    image: "/assets/reception.jpg",
    description: "Exquisite banquet dining tables with gold cutlery and fresh centerpieces."
  },
  {
    id: "gal-4",
    title: "Engagement & Stage Floral Decor",
    category: "Table Setup",
    image: "/assets/engagement.jpg",
    description: "Floral arrangement with ambient candlelit glow."
  },
  {
    id: "gal-5",
    title: "Reception Evening Setup",
    category: "Reception Setup",
    image: "/assets/reception.jpg",
    description: "Ivory and gold reception decor for memorable evening celebrations."
  },
  {
    id: "gal-6",
    title: "Corporate & Event Gala Setup",
    category: "Wedding Décor",
    image: "/assets/corporate.jpg",
    description: "Grand lighting and luxury stage setup for special events."
  },
  {
    id: "gal-7",
    title: "Chandelier & Fairy Lighting",
    category: "Lighting & Decoration",
    image: "/assets/lighting.jpg",
    description: "Warm golden ceiling lights adding magic to night functions."
  },
  {
    id: "gal-8",
    title: "Celebration Atmosphere",
    category: "Event Atmosphere",
    image: "/assets/atmosphere.jpg",
    description: "Joyful guests enjoying a lavish wedding banquet at Rawal Marquee."
  },
  {
    id: "gal-9",
    title: "Mehendi Floral Stage",
    category: "Wedding Décor",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=1000",
    description: "Vibrant yellow and orange floral stage arrangement for Mehendi ceremonies."
  },
  {
    id: "gal-10",
    title: "Custom Lounge Seating",
    category: "Marquee Interior",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1000",
    description: "Plush velvet sofa seating arrangement for VIP family guests."
  },
  {
    id: "gal-11",
    title: "Buffet Presentation",
    category: "Dining Area",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1000",
    description: "Hygienic, temperature-controlled buffet station with live food counters."
  },
  {
    id: "gal-12",
    title: "Floral Table Centerpiece",
    category: "Table Setup",
    image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=1000",
    description: "Fresh rose and lily centerpieces adding elegance to every table."
  }
];
