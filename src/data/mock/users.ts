import { User } from '../../types/index';

export const mockUsers: User[] = [
  {
    id: 'user_1',
    email: 'alexandra.sterling@email.com',
    username: 'alexandra_sterling',
    firstName: 'Alexandra',
    lastName: 'Sterling',
    displayName: 'Alexandra Sterling',
    dateOfBirth: new Date('1990-03-15'),
    gender: 'female',
    profilePhoto: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400',
    coverPhoto: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
    profileThumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150',
    phone: '+1-555-0123',
    location: {
      country: 'US',
      state: 'California',
      city: 'Los Angeles',
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
      timezone: 'America/Los_Angeles',
      isPublic: true,
    },
    accountType: 'elite',
    accountStatus: 'active',
    isVerified: true,
    isHost: true,
    isBusiness: false,
    verification: {
      email: {
        isVerified: true,
        verifiedAt: new Date('2024-01-15'),
      },
      phone: {
        isVerified: true,
        verifiedAt: new Date('2024-01-15'),
      },
      identity: {
        isVerified: true,
        verifiedAt: new Date('2024-01-20'),
        level: 'premium',
      },
      background: {
        isVerified: true,
        verifiedAt: new Date('2024-01-25'),
      },
    },
    reputationScore: 950,
    trustLevel: 'elite',
    badges: ['verified_host', 'luxury_curator', 'top_rated'],
    budgetTier: '$$$$$',
    interests: ['motorsports', 'luxury_dining', 'yacht_parties', 'private_events'],
    languages: ['en', 'fr', 'es'],
    privacy: {
      profileVisibility: 'public',
      locationVisibility: 'city',
      activityVisibility: 'public',
      contactVisibility: 'connections',
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-12-01'),
    lastActiveAt: new Date('2024-12-15'),
    lastLoginAt: new Date('2024-12-15'),
    metadata: {
      referralCode: 'ALEX2024',
      signupSource: 'instagram_ad',
      deviceInfo: { platform: 'ios', version: '17.0' },
      utmParams: { source: 'instagram', medium: 'social', campaign: 'luxury_launch' },
    },
  },
  {
    id: 'user_2',
    email: 'marcus.blackwood@email.com',
    username: 'marcus_blackwood',
    firstName: 'Marcus',
    lastName: 'Blackwood',
    displayName: 'Marcus Blackwood',
    dateOfBirth: new Date('1985-07-22'),
    gender: 'male',
    profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    coverPhoto: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
    profileThumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    phone: '+1-555-0456',
    location: {
      country: 'US',
      state: 'New York',
      city: 'New York',
      coordinates: {
        latitude: 40.7128,
        longitude: -74.0060,
      },
      timezone: 'America/New_York',
      isPublic: true,
    },
    accountType: 'premium',
    accountStatus: 'active',
    isVerified: true,
    isHost: true,
    isBusiness: true,
    verification: {
      email: {
        isVerified: true,
        verifiedAt: new Date('2024-02-01'),
      },
      phone: {
        isVerified: true,
        verifiedAt: new Date('2024-02-01'),
      },
      identity: {
        isVerified: true,
        verifiedAt: new Date('2024-02-05'),
        level: 'enhanced',
      },
      background: {
        isVerified: true,
        verifiedAt: new Date('2024-02-10'),
      },
    },
    reputationScore: 875,
    trustLevel: 'verified',
    badges: ['business_verified', 'motorsports_expert', 'event_curator'],
    budgetTier: '$$$$',
    interests: ['motorsports', 'networking', 'luxury_dining', 'adventure'],
    languages: ['en', 'de'],
    privacy: {
      profileVisibility: 'public',
      locationVisibility: 'public',
      activityVisibility: 'public',
      contactVisibility: 'public',
    },
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-12-01'),
    lastActiveAt: new Date('2024-12-14'),
    lastLoginAt: new Date('2024-12-14'),
    metadata: {
      referralCode: 'MARC2024',
      signupSource: 'referral',
      referredBy: 'user_1',
      deviceInfo: { platform: 'android', version: '14.0' },
    },
  },
  {
    id: 'user_3',
    email: 'sophia.chen@email.com',
    username: 'sophia_chen',
    firstName: 'Sophia',
    lastName: 'Chen',
    displayName: 'Sophia Chen',
    dateOfBirth: new Date('1992-11-08'),
    gender: 'female',
    profilePhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    coverPhoto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    profileThumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    phone: '+1-555-0789',
    location: {
      country: 'US',
      state: 'Florida',
      city: 'Miami',
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
      timezone: 'America/New_York',
      isPublic: true,
    },
    accountType: 'premium',
    accountStatus: 'active',
    isVerified: true,
    isHost: false,
    isBusiness: false,
    verification: {
      email: {
        isVerified: true,
        verifiedAt: new Date('2024-03-01'),
      },
      phone: {
        isVerified: true,
        verifiedAt: new Date('2024-03-01'),
      },
      identity: {
        isVerified: true,
        verifiedAt: new Date('2024-03-05'),
        level: 'basic',
      },
      background: {
        isVerified: false,
      },
    },
    reputationScore: 720,
    trustLevel: 'trusted',
    badges: ['early_adopter', 'social_butterfly'],
    budgetTier: '$$$',
    interests: ['yacht_parties', 'wellness', 'cultural', 'luxury_dining'],
    languages: ['en', 'zh', 'es'],
    privacy: {
      profileVisibility: 'public',
      locationVisibility: 'city',
      activityVisibility: 'connections',
      contactVisibility: 'connections',
    },
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-12-01'),
    lastActiveAt: new Date('2024-12-13'),
    lastLoginAt: new Date('2024-12-13'),
    metadata: {
      referralCode: 'SOPH2024',
      signupSource: 'google_search',
      deviceInfo: { platform: 'ios', version: '17.1' },
    },
  },
  {
    id: 'user_4',
    email: 'james.wellington@email.com',
    username: 'james_wellington',
    firstName: 'James',
    lastName: 'Wellington',
    displayName: 'James Wellington',
    dateOfBirth: new Date('1988-05-12'),
    gender: 'male',
    profilePhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    coverPhoto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    profileThumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    phone: '+44-20-7946-0958',
    location: {
      country: 'GB',
      state: 'England',
      city: 'London',
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
      timezone: 'Europe/London',
      isPublic: true,
    },
    accountType: 'elite',
    accountStatus: 'active',
    isVerified: true,
    isHost: true,
    isBusiness: false,
    verification: {
      email: {
        isVerified: true,
        verifiedAt: new Date('2024-01-10'),
      },
      phone: {
        isVerified: true,
        verifiedAt: new Date('2024-01-10'),
      },
      identity: {
        isVerified: true,
        verifiedAt: new Date('2024-01-15'),
        level: 'premium',
      },
      background: {
        isVerified: true,
        verifiedAt: new Date('2024-01-20'),
      },
    },
    reputationScore: 920,
    trustLevel: 'elite',
    badges: ['verified_host', 'international_curator', 'luxury_expert'],
    budgetTier: '$$$$$',
    interests: ['motorsports', 'cultural', 'luxury_dining', 'travel'],
    languages: ['en', 'fr', 'it'],
    privacy: {
      profileVisibility: 'public',
      locationVisibility: 'public',
      activityVisibility: 'public',
      contactVisibility: 'connections',
    },
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-12-01'),
    lastActiveAt: new Date('2024-12-15'),
    lastLoginAt: new Date('2024-12-15'),
    metadata: {
      referralCode: 'JAMES2024',
      signupSource: 'word_of_mouth',
      deviceInfo: { platform: 'ios', version: '17.0' },
    },
  },
  {
    id: 'user_5',
    email: 'isabella.rossi@email.com',
    username: 'isabella_rossi',
    firstName: 'Isabella',
    lastName: 'Rossi',
    displayName: 'Isabella Rossi',
    dateOfBirth: new Date('1995-09-18'),
    gender: 'female',
    profilePhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    coverPhoto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    profileThumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
    phone: '+39-06-1234-5678',
    location: {
      country: 'IT',
      state: 'Lazio',
      city: 'Rome',
      coordinates: {
        latitude: 41.9028,
        longitude: 12.4964,
      },
      timezone: 'Europe/Rome',
      isPublic: true,
    },
    accountType: 'free',
    accountStatus: 'active',
    isVerified: false,
    isHost: false,
    isBusiness: false,
    verification: {
      email: {
        isVerified: true,
        verifiedAt: new Date('2024-11-01'),
      },
      phone: {
        isVerified: false,
      },
      identity: {
        isVerified: false,
        level: 'none',
      },
      background: {
        isVerified: false,
      },
    },
    reputationScore: 150,
    trustLevel: 'new',
    badges: ['newcomer'],
    budgetTier: '$$',
    interests: ['cultural', 'wellness', 'luxury_dining'],
    languages: ['it', 'en', 'fr'],
    privacy: {
      profileVisibility: 'public',
      locationVisibility: 'city',
      activityVisibility: 'public',
      contactVisibility: 'private',
    },
    createdAt: new Date('2024-11-01'),
    updatedAt: new Date('2024-12-01'),
    lastActiveAt: new Date('2024-12-12'),
    lastLoginAt: new Date('2024-12-12'),
    metadata: {
      referralCode: 'BELLA2024',
      signupSource: 'tiktok_ad',
      deviceInfo: { platform: 'android', version: '14.0' },
      utmParams: { source: 'tiktok', medium: 'social', campaign: 'gen_z_launch' },
    },
  },
];

// Helper functions for mock data
export const getUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id);
};

export const getUsersByBudgetTier = (tier: string): User[] => {
  return mockUsers.filter(user => user.budgetTier === tier);
};

export const getVerifiedUsers = (): User[] => {
  return mockUsers.filter(user => user.isVerified);
};

export const getHostUsers = (): User[] => {
  return mockUsers.filter(user => user.isHost);
};

export const getUsersByLocation = (city: string): User[] => {
  return mockUsers.filter(user => user.location?.city === city);
};

export const getUsersByInterest = (interest: string): User[] => {
  return mockUsers.filter(user => user.interests.includes(interest));
};