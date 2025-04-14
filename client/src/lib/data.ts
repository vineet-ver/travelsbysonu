// Services data
export const services = [
  {
    title: 'Wedding Ceremonies',
    description: 'Make your special day unforgettable with our elegantly decorated luxury cars, perfect for baraat processions and bride & groom transportation.',
    icon: 'fas fa-ring'
  },
  {
    title: 'Corporate Events',
    description: 'Impress clients and executives with premium transportation services for conferences, meetings, and corporate retreats.',
    icon: 'fas fa-briefcase'
  },
  {
    title: 'Celebration & Parties',
    description: 'Arrive in style to your birthday, anniversary, or special celebration with our chauffeur-driven luxury vehicles.',
    icon: 'fas fa-glass-cheers'
  },
  {
    title: 'Tourist Excursions',
    description: 'Explore India\'s most beautiful destinations in comfort and style with our luxury car rental services.',
    icon: 'fas fa-map-marked-alt'
  },
  {
    title: 'Airport Transfers',
    description: 'Begin or end your journey in luxury with our punctual and sophisticated airport pickup and drop-off services.',
    icon: 'fas fa-plane-arrival'
  },
  {
    title: 'Film & Photo Shoots',
    description: 'Our stunning vehicles are available for film productions, music videos, and professional photography sessions.',
    icon: 'fas fa-film'
  }
];

// Car types for filtering
export const carTypes = [
  { value: 'sedan', label: 'Luxury Sedans' },
  { value: 'suv', label: 'Premium SUVs' },
  { value: 'vintage', label: 'Vintage Collection' },
  { value: 'wedding', label: 'Wedding Specials' }
];

// Cars data
export const cars = [
  {
    id: 'rolls-phantom',
    name: 'Rolls Royce Phantom',
    category: 'sedan',
    badge: 'Premium',
    price: 45000,
    rating: 5,
    bookings: 48,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 4 passengers' },
      { icon: 'fas fa-suitcase', text: '3 large bags' },
      { icon: 'fas fa-snowflake', text: 'Climate control' }
    ]
  },
  {
    id: 'mercedes-s',
    name: 'Mercedes Benz S-Class',
    category: 'wedding',
    badge: 'Wedding Special',
    price: 25000,
    rating: 4.5,
    bookings: 36,
    image: 'https://images.unsplash.com/photo-1609061401043-03510c45eb88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 4 passengers' },
      { icon: 'fas fa-suitcase', text: '2 large bags' },
      { icon: 'fas fa-snowflake', text: 'Climate control' }
    ]
  },
  {
    id: 'vintage-rolls',
    name: 'Vintage Rolls Royce',
    category: 'vintage',
    badge: 'Vintage Collection',
    price: 55000,
    rating: 5,
    bookings: 29,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 4 passengers' },
      { icon: 'fas fa-suitcase', text: '1 large bag' },
      { icon: 'fas fa-camera', text: 'Perfect for photoshoots' }
    ]
  },
  {
    id: 'bmw-7',
    name: 'BMW 7 Series',
    category: 'sedan',
    badge: 'Premium',
    price: 22000,
    rating: 5,
    bookings: 42,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 4 passengers' },
      { icon: 'fas fa-suitcase', text: '2 large bags' },
      { icon: 'fas fa-snowflake', text: 'Climate control' }
    ]
  },
  {
    id: 'audi-a8',
    name: 'Audi A8',
    category: 'wedding',
    badge: 'Wedding Special',
    price: 18000,
    rating: 4.5,
    bookings: 31,
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 4 passengers' },
      { icon: 'fas fa-suitcase', text: '2 large bags' },
      { icon: 'fas fa-snowflake', text: 'Climate control' }
    ]
  },
  {
    id: 'range-rover',
    name: 'Range Rover Autobiography',
    category: 'suv',
    badge: 'Premium SUV',
    price: 30000,
    rating: 5,
    bookings: 38,
    image: 'https://images.unsplash.com/photo-1551952238-2a4a0a94397c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 5 passengers' },
      { icon: 'fas fa-suitcase', text: '3 large bags' },
      { icon: 'fas fa-snowflake', text: 'Climate control' }
    ]
  }
];

// Event types for the booking form
export const eventTypes = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'party', label: 'Party/Celebration' },
  { value: 'tourism', label: 'Tourism' },
  { value: 'airport', label: 'Airport Transfer' },
  { value: 'photoshoot', label: 'Photoshoot/Film' }
];

// Rental durations for the booking form
export const durations = [
  { value: '4h', label: '4 Hours' },
  { value: '8h', label: '8 Hours (Full Day)' },
  { value: '24h', label: '24 Hours' },
  { value: '2d', label: '2 Days' },
  { value: '3d', label: '3 Days' },
  { value: 'custom', label: 'Custom Duration' }
];

// Destinations data
export const destinations = [
  {
    id: 'delhi',
    name: 'Delhi/NCR',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1581781870027-332d3f7d9b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'goa',
    name: 'Goa',
    price: 14000,
    image: 'https://images.unsplash.com/photo-1558350315-8aa00e8e4590?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chennai',
    name: 'Chennai',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1517427677506-ade074eb1432?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

// Testimonials data
export const testimonials = [
  {
    name: 'Ananya Kumar',
    initials: 'AK',
    event: 'Delhi Wedding',
    rating: 5,
    text: 'The vintage Rolls Royce was the perfect choice for our wedding. The chauffeur was professional, and the car was beautifully decorated. Unforgettable experience!'
  },
  {
    name: 'Rajiv Sharma',
    initials: 'RS',
    event: 'Corporate Event',
    rating: 5,
    text: 'We hired the Range Rover for our corporate retreat in Udaipur. The service was impeccable, and the vehicle was luxurious and comfortable. Highly recommended!'
  },
  {
    name: 'Priya Mehta',
    initials: 'PM',
    event: 'Anniversary Tour',
    rating: 4.5,
    text: 'The Mercedes S-Class made our anniversary celebration in Mumbai truly special. The service was outstanding, and the car was in pristine condition. Worth every rupee!'
  }
];

// FAQ data
export const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 2-4 weeks in advance for regular bookings, and 2-3 months ahead for peak wedding season or major events. For last-minute bookings, please call us directly to check availability.'
  },
  {
    question: 'What is included in the rental price?',
    answer: 'Our rental prices include a professional chauffeur, fuel for local travel (within city limits), basic decorations for wedding cars, bottled water, and standard insurance. Additional services like extended decorations, intercity travel, or overtime are available at extra cost.'
  },
  {
    question: 'Do you provide car decorations for weddings?',
    answer: 'Yes, basic decorations are included in wedding packages. We offer flower garlands, ribbons, and "Just Married" signage. For custom or more elaborate decorations, we have premium packages available or can work with your wedding decorator.'
  },
  {
    question: 'Can I book for intercity travel?',
    answer: 'Yes, we offer intercity travel services. Additional charges apply based on distance, duration, and whether it\'s a one-way or round trip. Please specify your requirements during booking so we can provide an accurate quote.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 7+ days before the booking date receive a full refund minus transaction fees. Cancellations 3-7 days prior receive a 70% refund. Cancellations less than 72 hours before are subject to a 50% cancellation fee. No-shows or same-day cancellations are non-refundable.'
  }
];
