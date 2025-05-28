import { Activity } from '../../types/index';

export const mockActivities: Activity[] = [
  {
    id: 'activity_1',
    hostId: 'user_1',
    title: 'Monaco Grand Prix VIP Experience',
    description: 'Join us for the ultimate Formula 1 experience at the Monaco Grand Prix. This exclusive package includes paddock access, yacht party, and private dining with racing legends. Experience the glamour and excitement of the most prestigious race on the F1 calendar.',
    shortDescription: 'Ultimate F1 Monaco GP VIP experience with paddock access and yacht party',
    category: 'motorsports',
    subcategories: ['formula1', 'vip_events', 'luxury_travel'],
    tags: ['f1', 'monaco', 'vip', 'yacht', 'luxury', 'racing', 'exclusive'],
    location: {
      type: 'physical',
      venue: {
        name: 'Circuit de Monaco',
        address: 'Monte Carlo, Monaco',
        coordinates: {
          latitude: 43.7347,
          longitude: 7.4206,
        },
        placeId: 'ChIJX8a5-HLzzgIRQQfDJg_Mvxs',
      },
      meetingPoint: 'Monaco Yacht Club - VIP Reception Area',
      isAddressPublic: true,
    },
    schedule: {
      startDate: new Date('2025-05-25T08:00:00Z'),
      endDate: new Date('2025-05-25T22:00:00Z'),
      timezone: 'Europe/Monaco',
      duration: 840, // 14 hours
      isRecurring: false,
    },
    participants: {
      minParticipants: 4,
      maxParticipants: 12,
      currentParticipants: 8,
      waitlistCount: 3,
      allowWaitlist: true,
      requiresApproval: true,
    },
    pricing: {
      model: 'fixed',
      basePrice: 15000,
      currency: 'USD',
      pricePerPerson: 15000,
      earlyBirdDiscount: {
        percentage: 10,
        validUntil: new Date('2025-03-01'),
      },
    },
    media: {
      coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
      ],
      videos: ['https://example.com/monaco-gp-preview.mp4'],
      documents: ['https://example.com/monaco-gp-itinerary.pdf'],
    },
    requirements: {
      ageRestriction: {
        minAge: 21,
      },
      dressCode: 'Smart casual to formal (yacht party requires cocktail attire)',
      specialRequirements: ['Valid passport required', 'Travel insurance recommended'],
    },
    inclusions: [
      'Paddock access passes',
      'VIP grandstand seating',
      'Yacht party invitation',
      'Gourmet lunch and dinner',
      'Meet & greet with F1 personalities',
      'Professional photography',
      'Luxury transportation',
    ],
    exclusions: [
      'Flights to Monaco',
      'Hotel accommodation',
      'Personal expenses',
      'Alcoholic beverages (available for purchase)',
    ],
    cancellationPolicy: {
      type: 'moderate',
      refundPercentage: 50,
      cutoffHours: 168, // 7 days
      description: '50% refund if cancelled 7+ days before event',
    },
    status: 'published',
    visibility: 'public',
    hostSettings: {
      autoApprove: false,
      allowQuestions: true,
      allowReviews: true,
      sendReminders: true,
      collectGuestInfo: true,
      requireWaiver: true,
    },
    analytics: {
      viewCount: 1247,
      bookmarkCount: 89,
      shareCount: 34,
      inquiryCount: 23,
      conversionRate: 0.65,
    },
    createdAt: new Date('2024-11-01'),
    updatedAt: new Date('2024-12-01'),
    publishedAt: new Date('2024-11-05'),
    metadata: {
      source: 'manual',
      seasonality: ['spring', 'racing_season'],
      weatherDependent: false,
      lastModifiedBy: 'user_1',
    },
  },
  {
    id: 'activity_2',
    hostId: 'user_2',
    title: 'Private Yacht Sunset Dinner - Miami',
    description: 'Experience Miami\'s stunning skyline from the water aboard a luxury 80-foot yacht. This intimate dinner cruise features a world-class chef, premium wines, and breathtaking sunset views. Perfect for networking, romance, or celebrating special occasions.',
    shortDescription: 'Luxury yacht dinner cruise with Miami skyline views and gourmet cuisine',
    category: 'yacht_parties',
    subcategories: ['luxury_dining', 'sunset_cruise', 'networking'],
    tags: ['yacht', 'miami', 'sunset', 'dinner', 'luxury', 'networking', 'skyline'],
    location: {
      type: 'physical',
      venue: {
        name: 'Miami Beach Marina',
        address: '300 Alton Rd, Miami Beach, FL 33139',
        coordinates: {
          latitude: 25.7753,
          longitude: -80.1394,
        },
        placeId: 'ChIJb7Dv8ExM2YgRQQfDJg_Mvxs',
      },
      meetingPoint: 'Dock 15 - Look for the "Ocean Dreams" yacht',
      isAddressPublic: true,
    },
    schedule: {
      startDate: new Date('2025-01-15T18:00:00Z'),
      endDate: new Date('2025-01-15T22:00:00Z'),
      timezone: 'America/New_York',
      duration: 240, // 4 hours
      isRecurring: false,
    },
    participants: {
      minParticipants: 6,
      maxParticipants: 20,
      currentParticipants: 14,
      waitlistCount: 2,
      allowWaitlist: true,
      requiresApproval: false,
    },
    pricing: {
      model: 'fixed',
      basePrice: 450,
      currency: 'USD',
      pricePerPerson: 450,
      groupDiscounts: [
        {
          minSize: 4,
          discount: 10,
        },
      ],
    },
    media: {
      coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      images: [
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      ],
      videos: [],
      documents: [],
    },
    requirements: {
      ageRestriction: {
        minAge: 18,
      },
      dressCode: 'Smart casual to cocktail attire',
      specialRequirements: ['Non-slip shoes recommended'],
    },
    inclusions: [
      '4-hour yacht charter',
      '4-course gourmet dinner',
      'Premium wine pairings',
      'Professional crew service',
      'Sunset photography session',
      'Welcome cocktail',
    ],
    exclusions: [
      'Transportation to marina',
      'Gratuities',
      'Additional alcoholic beverages',
    ],
    cancellationPolicy: {
      type: 'flexible',
      refundPercentage: 100,
      cutoffHours: 48,
      description: 'Full refund if cancelled 48+ hours before event',
    },
    status: 'published',
    visibility: 'public',
    hostSettings: {
      autoApprove: true,
      allowQuestions: true,
      allowReviews: true,
      sendReminders: true,
      collectGuestInfo: true,
      requireWaiver: false,
    },
    analytics: {
      viewCount: 892,
      bookmarkCount: 67,
      shareCount: 28,
      inquiryCount: 15,
      conversionRate: 0.78,
    },
    createdAt: new Date('2024-10-15'),
    updatedAt: new Date('2024-11-20'),
    publishedAt: new Date('2024-10-20'),
    metadata: {
      source: 'manual',
      seasonality: ['winter', 'year_round'],
      weatherDependent: true,
      lastModifiedBy: 'user_2',
    },
  },
  {
    id: 'activity_3',
    hostId: 'user_4',
    title: 'Exclusive Wine Tasting at Château Margaux',
    description: 'Join us for an extraordinary wine tasting experience at one of Bordeaux\'s most prestigious châteaux. This private tour includes tastings of rare vintages, a guided vineyard walk, and lunch prepared by a Michelin-starred chef.',
    shortDescription: 'Private wine tasting at prestigious Château Margaux with rare vintages',
    category: 'luxury_dining',
    subcategories: ['wine_tasting', 'cultural', 'gourmet_experience'],
    tags: ['wine', 'bordeaux', 'chateau', 'luxury', 'tasting', 'michelin', 'exclusive'],
    location: {
      type: 'physical',
      venue: {
        name: 'Château Margaux',
        address: '33460 Margaux, France',
        coordinates: {
          latitude: 45.0436,
          longitude: -0.6544,
        },
        placeId: 'ChIJX8a5-HLzzgIRQQfDJg_Mvxs',
      },
      meetingPoint: 'Château Margaux Main Reception',
      isAddressPublic: true,
    },
    schedule: {
      startDate: new Date('2025-04-12T10:00:00Z'),
      endDate: new Date('2025-04-12T16:00:00Z'),
      timezone: 'Europe/Paris',
      duration: 360, // 6 hours
      isRecurring: false,
    },
    participants: {
      minParticipants: 4,
      maxParticipants: 8,
      currentParticipants: 6,
      waitlistCount: 0,
      allowWaitlist: true,
      requiresApproval: true,
    },
    pricing: {
      model: 'fixed',
      basePrice: 2500,
      currency: 'EUR',
      pricePerPerson: 2500,
    },
    media: {
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800',
        'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800',
      ],
      videos: [],
      documents: ['https://example.com/chateau-margaux-history.pdf'],
    },
    requirements: {
      ageRestriction: {
        minAge: 21,
      },
      dressCode: 'Smart casual (comfortable walking shoes recommended)',
      specialRequirements: ['Valid ID required for alcohol consumption'],
    },
    inclusions: [
      'Private château tour',
      'Tasting of 6 premium wines',
      'Michelin-starred lunch',
      'Expert sommelier guidance',
      'Vineyard walk',
      'Wine education materials',
      'Souvenir wine bottle',
    ],
    exclusions: [
      'Transportation to château',
      'Additional wine purchases',
      'Personal expenses',
    ],
    cancellationPolicy: {
      type: 'strict',
      refundPercentage: 25,
      cutoffHours: 336, // 14 days
      description: '25% refund if cancelled 14+ days before event',
    },
    status: 'published',
    visibility: 'public',
    hostSettings: {
      autoApprove: false,
      allowQuestions: true,
      allowReviews: true,
      sendReminders: true,
      collectGuestInfo: true,
      requireWaiver: false,
    },
    analytics: {
      viewCount: 654,
      bookmarkCount: 45,
      shareCount: 19,
      inquiryCount: 12,
      conversionRate: 0.85,
    },
    createdAt: new Date('2024-09-20'),
    updatedAt: new Date('2024-11-15'),
    publishedAt: new Date('2024-09-25'),
    metadata: {
      source: 'manual',
      seasonality: ['spring', 'harvest_season'],
      weatherDependent: false,
      lastModifiedBy: 'user_4',
    },
  },
  {
    id: 'activity_4',
    hostId: 'user_1',
    title: 'Private Helicopter Tour & Michelin Dining',
    description: 'Soar above the stunning California coastline in a private helicopter, then land at an exclusive vineyard for a multi-course meal prepared by a Michelin-starred chef. This unforgettable experience combines adventure with luxury dining.',
    shortDescription: 'Private helicopter tour with exclusive vineyard dining experience',
    category: 'adventure',
    subcategories: ['helicopter_tour', 'luxury_dining', 'scenic_flights'],
    tags: ['helicopter', 'california', 'vineyard', 'michelin', 'adventure', 'luxury', 'scenic'],
    location: {
      type: 'physical',
      venue: {
        name: 'Napa Valley Heliport',
        address: 'Napa, CA 94558',
        coordinates: {
          latitude: 38.2975,
          longitude: -122.2869,
        },
      },
      meetingPoint: 'Napa Valley Heliport - Private Terminal',
      isAddressPublic: true,
    },
    schedule: {
      startDate: new Date('2025-03-20T14:00:00Z'),
      endDate: new Date('2025-03-20T19:00:00Z'),
      timezone: 'America/Los_Angeles',
      duration: 300, // 5 hours
      isRecurring: false,
    },
    participants: {
      minParticipants: 2,
      maxParticipants: 6,
      currentParticipants: 4,
      waitlistCount: 1,
      allowWaitlist: true,
      requiresApproval: true,
    },
    pricing: {
      model: 'fixed',
      basePrice: 3500,
      currency: 'USD',
      pricePerPerson: 3500,
    },
    media: {
      coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      images: [
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800',
      ],
      videos: ['https://example.com/helicopter-tour-preview.mp4'],
      documents: [],
    },
    requirements: {
      ageRestriction: {
        minAge: 18,
      },
      dressCode: 'Comfortable clothing, closed-toe shoes required',
      fitnessLevel: 'low',
      specialRequirements: ['Weight restrictions apply (max 250 lbs per person)', 'Valid ID required'],
    },
    inclusions: [
      '90-minute helicopter tour',
      'Professional pilot guide',
      '5-course Michelin-starred meal',
      'Wine pairings',
      'Private vineyard tour',
      'Professional photography',
      'Transportation to/from heliport',
    ],
    exclusions: [
      'Gratuities',
      'Personal expenses',
      'Additional alcoholic beverages',
    ],
    cancellationPolicy: {
      type: 'moderate',
      refundPercentage: 50,
      cutoffHours: 72,
      description: '50% refund if cancelled 72+ hours before event',
    },
    status: 'published',
    visibility: 'public',
    hostSettings: {
      autoApprove: false,
      allowQuestions: true,
      allowReviews: true,
      sendReminders: true,
      collectGuestInfo: true,
      requireWaiver: true,
    },
    analytics: {
      viewCount: 1156,
      bookmarkCount: 78,
      shareCount: 42,
      inquiryCount: 18,
      conversionRate: 0.72,
    },
    createdAt: new Date('2024-11-10'),
    updatedAt: new Date('2024-12-05'),
    publishedAt: new Date('2024-11-15'),
    metadata: {
      source: 'manual',
      seasonality: ['spring', 'summer', 'fall'],
      weatherDependent: true,
      lastModifiedBy: 'user_1',
    },
  },
];

// Helper functions for mock activities
export const getActivityById = (id: string): Activity | undefined => {
  return mockActivities.find(activity => activity.id === id);
};

export const getActivitiesByHost = (hostId: string): Activity[] => {
  return mockActivities.filter(activity => activity.hostId === hostId);
};

export const getActivitiesByCategory = (category: string): Activity[] => {
  return mockActivities.filter(activity => activity.category === category);
};

export const getActivitiesByLocation = (city: string): Activity[] => {
  return mockActivities.filter(activity => 
    activity.location.venue?.address.toLowerCase().includes(city.toLowerCase())
  );
};

export const getActivitiesByPriceRange = (minPrice: number, maxPrice: number): Activity[] => {
  return mockActivities.filter(activity => {
    const price = activity.pricing.pricePerPerson || activity.pricing.basePrice || 0;
    return price >= minPrice && price <= maxPrice;
  });
};

export const getUpcomingActivities = (): Activity[] => {
  const now = new Date();
  return mockActivities.filter(activity => activity.schedule.startDate > now);
};

export const getFeaturedActivities = (): Activity[] => {
  return mockActivities.filter(activity => 
    activity.analytics.viewCount > 1000 || activity.analytics.conversionRate > 0.7
  );
};