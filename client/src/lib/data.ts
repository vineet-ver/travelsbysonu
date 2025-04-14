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
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'suv',
    badge: 'Family',
    price: 3000,
    rating: 4.5,
    bookings: 65,
    image: 'https://images.unsplash.com/photo-1649155217559-370c6382b82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 7 passengers' },
      { icon: 'fas fa-suitcase', text: '3 large bags' },
      { icon: 'fas fa-snowflake', text: 'Climate control' }
    ]
  },
  {
    id: 'mahindra-scorpio',
    name: 'Mahindra Scorpio',
    category: 'suv',
    badge: 'Popular',
    price: 3500,
    rating: 4.7,
    bookings: 89,
    image: 'https://images.unsplash.com/photo-1625731728272-b0b9800f8500?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 7 passengers' },
      { icon: 'fas fa-suitcase', text: '4 large bags' },
      { icon: 'fas fa-mountain', text: 'Rugged & reliable' }
    ]
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova Crysta',
    category: 'suv',
    badge: 'Family',
    price: 4000,
    rating: 4.8,
    bookings: 112,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 7 passengers' },
      { icon: 'fas fa-suitcase', text: '4 large bags' },
      { icon: 'fas fa-snowflake', text: 'Climate control' }
    ]
  },
  {
    id: 'toyota-crysta',
    name: 'Toyota Crysta',
    category: 'suv',
    badge: 'Premium',
    price: 4500,
    rating: 4.9,
    bookings: 98,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 7 passengers' },
      { icon: 'fas fa-suitcase', text: '4 large bags' },
      { icon: 'fas fa-snowflake', text: 'Climate control' }
    ]
  },
  {
    id: 'mahindra-xuv',
    name: 'Mahindra XUV',
    category: 'suv',
    badge: 'Premium SUV',
    price: 4000,
    rating: 4.6,
    bookings: 76,
    image: 'https://images.unsplash.com/photo-1617808654153-9be2536c45de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 7 passengers' },
      { icon: 'fas fa-suitcase', text: '3 large bags' },
      { icon: 'fas fa-snowflake', text: 'Climate control' }
    ]
  },
  {
    id: 'sedan-premium',
    name: 'Premium Sedan',
    category: 'sedan',
    badge: 'Wedding Special',
    price: 5500,
    rating: 4.8,
    bookings: 58,
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      { icon: 'fas fa-user-friends', text: 'Up to 4 passengers' },
      { icon: 'fas fa-suitcase', text: '2 large bags' },
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
    price: 3000,
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1581781870027-332d3f7d9b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'goa',
    name: 'Goa',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1558350315-8aa00e8e4590?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gurugram',
    name: 'Gurugram',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1586157191167-ddb9bdcbfa7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
