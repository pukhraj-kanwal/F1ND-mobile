export * from './users';
export * from './activities';
export * from './categories';

// Sample messages for chat functionality
export const mockMessages = [
  {
    id: 'msg_1',
    senderId: 'user_2',
    content: 'Hey! I saw you\'re hosting the Monaco GP experience. This looks incredible!',
    type: 'text' as const,
    threadId: 'activity_1',
    threadType: 'activity' as const,
    sentAt: new Date('2024-12-10T10:30:00Z'),
    reactions: [],
  },
  {
    id: 'msg_2',
    senderId: 'user_1',
    content: 'Thank you! It\'s going to be an amazing weekend. We still have a few spots available if you\'re interested.',
    type: 'text' as const,
    threadId: 'activity_1',
    threadType: 'activity' as const,
    sentAt: new Date('2024-12-10T10:45:00Z'),
    reactions: [],
  },
  {
    id: 'msg_3',
    senderId: 'user_3',
    content: 'What\'s included in the yacht party portion?',
    type: 'text' as const,
    threadId: 'activity_1',
    threadType: 'activity' as const,
    sentAt: new Date('2024-12-10T11:00:00Z'),
    reactions: [],
  },
];

// Sample reviews
export const mockReviews = [
  {
    id: 'review_1',
    reviewerId: 'user_3',
    targetId: 'activity_2',
    targetType: 'activity' as const,
    rating: 5,
    title: 'Absolutely Magical Evening',
    content: 'The yacht dinner cruise exceeded all expectations. The food was exceptional, the service was impeccable, and watching the sunset over Miami was breathtaking. Marcus was an excellent host and made sure everyone felt welcome. Highly recommend!',
    media: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400'],
    isAnonymous: false,
    isVerified: true,
    helpfulCount: 12,
    reportCount: 0,
    status: 'active' as const,
    createdAt: new Date('2024-11-20T15:30:00Z'),
    updatedAt: new Date('2024-11-20T15:30:00Z'),
  },
  {
    id: 'review_2',
    reviewerId: 'user_2',
    targetId: 'user_1',
    targetType: 'user' as const,
    rating: 5,
    title: 'Outstanding Host',
    content: 'Alexandra is an incredible host who pays attention to every detail. Her events are always top-notch and she creates such a welcoming atmosphere. Looking forward to the next one!',
    media: [],
    isAnonymous: false,
    isVerified: true,
    helpfulCount: 8,
    reportCount: 0,
    status: 'active' as const,
    createdAt: new Date('2024-12-01T09:15:00Z'),
    updatedAt: new Date('2024-12-01T09:15:00Z'),
  },
];

// Sample business partners
export const mockBusinessPartners = [
  {
    id: 'business_1',
    name: 'Monaco Elite Experiences',
    description: 'Premier luxury event organizer specializing in Formula 1 and high-end motorsport experiences.',
    shortDescription: 'Luxury F1 and motorsport experiences',
    category: 'motorsports',
    subcategories: ['formula1', 'vip_events'],
    location: {
      address: 'Monte Carlo, Monaco',
      city: 'Monte Carlo',
      state: 'Monaco',
      country: 'MC',
      postalCode: '98000',
      coordinates: {
        latitude: 43.7384,
        longitude: 7.4246,
      },
      serviceAreas: ['Monaco', 'French Riviera', 'Italy'],
    },
    contact: {
      email: 'info@monacoelite.com',
      phone: '+377-93-123-456',
      website: 'https://monacoelite.com',
      socialMedia: {
        instagram: '@monacoelite',
        facebook: 'MonacoEliteExperiences',
      },
    },
    services: [
      {
        id: 'service_1',
        name: 'F1 Paddock Access',
        description: 'Exclusive paddock access and VIP experiences',
        category: 'vip_access',
        pricing: {
          type: 'custom',
          currency: 'EUR',
          details: 'Pricing varies by race and package',
        },
        availability: ['Monaco GP', 'French GP', 'Italian GP'],
      },
    ],
    verification: {
      isVerified: true,
      verifiedAt: new Date('2024-01-15'),
      documents: {
        businessLicense: true,
        insurance: true,
        certifications: ['Tourism License', 'Event Management Certification'],
      },
      backgroundCheck: true,
    },
    media: {
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200',
      coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      gallery: [
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400',
      ],
      videos: [],
      documents: [],
    },
    operatingHours: {
      monday: { open: '09:00', close: '18:00', closed: false },
      tuesday: { open: '09:00', close: '18:00', closed: false },
      wednesday: { open: '09:00', close: '18:00', closed: false },
      thursday: { open: '09:00', close: '18:00', closed: false },
      friday: { open: '09:00', close: '18:00', closed: false },
      saturday: { open: '10:00', close: '16:00', closed: false },
      sunday: { open: '00:00', close: '00:00', closed: true },
    },
    pricing: {
      currency: 'EUR',
      paymentMethods: ['credit_card', 'bank_transfer', 'crypto'],
      cancellationPolicy: {
        type: 'moderate',
        refundPercentage: 50,
        cutoffHours: 168,
        description: '50% refund if cancelled 7+ days before event',
      },
      refundPolicy: 'Refunds processed within 5-10 business days',
    },
    policies: {
      termsOfService: 'https://monacoelite.com/terms',
      privacyPolicy: 'https://monacoelite.com/privacy',
      cancellationPolicy: 'Standard cancellation terms apply',
      refundPolicy: 'Refunds subject to cancellation policy',
    },
    analytics: {
      totalBookings: 156,
      totalRevenue: 2340000,
      averageRating: 4.8,
      responseTime: 2.5,
      completionRate: 0.98,
    },
    rating: 4.8,
    reviewCount: 89,
    status: 'active' as const,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-12-01'),
    metadata: {
      registrationNumber: 'MC-2024-001',
      taxId: 'MC123456789',
      insuranceProvider: 'Monaco Insurance Group',
      lastAuditDate: new Date('2024-06-01'),
    },
  },
];

// Helper function to get all mock data
export const getAllMockData = () => ({
  users: mockMessages,
  activities: mockMessages,
  categories: mockMessages,
  messages: mockMessages,
  reviews: mockReviews,
  businesses: mockBusinessPartners,
});