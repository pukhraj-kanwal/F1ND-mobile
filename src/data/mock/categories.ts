export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  parentId?: string;
  subcategories?: Category[];
  isActive: boolean;
  sortOrder: number;
}

export const mockCategories: Category[] = [
  {
    id: 'motorsports',
    name: 'Motorsports',
    description: 'Formula 1, racing events, and automotive experiences',
    icon: '🏎️',
    color: '#E53E3E',
    isActive: true,
    sortOrder: 1,
    subcategories: [
      {
        id: 'formula1',
        name: 'Formula 1',
        description: 'F1 races, paddock access, and VIP experiences',
        icon: '🏁',
        color: '#E53E3E',
        parentId: 'motorsports',
        isActive: true,
        sortOrder: 1,
      },
      {
        id: 'luxury_cars',
        name: 'Luxury Cars',
        description: 'Supercar experiences, test drives, and showcases',
        icon: '🚗',
        color: '#E53E3E',
        parentId: 'motorsports',
        isActive: true,
        sortOrder: 2,
      },
      {
        id: 'racing_events',
        name: 'Racing Events',
        description: 'Track days, racing experiences, and competitions',
        icon: '🏆',
        color: '#E53E3E',
        parentId: 'motorsports',
        isActive: true,
        sortOrder: 3,
      },
    ],
  },
  {
    id: 'luxury_dining',
    name: 'Luxury Dining',
    description: 'Fine dining, wine tastings, and culinary experiences',
    icon: '🍽️',
    color: '#FF9319',
    isActive: true,
    sortOrder: 2,
    subcategories: [
      {
        id: 'michelin_dining',
        name: 'Michelin Dining',
        description: 'Michelin-starred restaurants and chef experiences',
        icon: '⭐',
        color: '#FF9319',
        parentId: 'luxury_dining',
        isActive: true,
        sortOrder: 1,
      },
      {
        id: 'wine_tasting',
        name: 'Wine Tasting',
        description: 'Wine tastings, vineyard tours, and sommelier experiences',
        icon: '🍷',
        color: '#FF9319',
        parentId: 'luxury_dining',
        isActive: true,
        sortOrder: 2,
      },
      {
        id: 'private_chef',
        name: 'Private Chef',
        description: 'Private dining experiences with renowned chefs',
        icon: '👨‍🍳',
        color: '#FF9319',
        parentId: 'luxury_dining',
        isActive: true,
        sortOrder: 3,
      },
    ],
  },
  {
    id: 'yacht_parties',
    name: 'Yacht Parties',
    description: 'Luxury yacht experiences, cruises, and water activities',
    icon: '🛥️',
    color: '#3B82F6',
    isActive: true,
    sortOrder: 3,
    subcategories: [
      {
        id: 'sunset_cruises',
        name: 'Sunset Cruises',
        description: 'Romantic sunset cruises and dinner experiences',
        icon: '🌅',
        color: '#3B82F6',
        parentId: 'yacht_parties',
        isActive: true,
        sortOrder: 1,
      },
      {
        id: 'party_cruises',
        name: 'Party Cruises',
        description: 'Social yacht parties and entertainment cruises',
        icon: '🎉',
        color: '#3B82F6',
        parentId: 'yacht_parties',
        isActive: true,
        sortOrder: 2,
      },
      {
        id: 'fishing_charters',
        name: 'Fishing Charters',
        description: 'Luxury fishing experiences and deep-sea adventures',
        icon: '🎣',
        color: '#3B82F6',
        parentId: 'yacht_parties',
        isActive: true,
        sortOrder: 3,
      },
    ],
  },
  {
    id: 'private_events',
    name: 'Private Events',
    description: 'Exclusive gatherings, celebrations, and special occasions',
    icon: '🎭',
    color: '#8B5CF6',
    isActive: true,
    sortOrder: 4,
    subcategories: [
      {
        id: 'celebrations',
        name: 'Celebrations',
        description: 'Birthday parties, anniversaries, and milestone events',
        icon: '🎂',
        color: '#8B5CF6',
        parentId: 'private_events',
        isActive: true,
        sortOrder: 1,
      },
      {
        id: 'corporate_events',
        name: 'Corporate Events',
        description: 'Business gatherings, team building, and networking',
        icon: '💼',
        color: '#8B5CF6',
        parentId: 'private_events',
        isActive: true,
        sortOrder: 2,
      },
      {
        id: 'exclusive_parties',
        name: 'Exclusive Parties',
        description: 'VIP parties, launch events, and exclusive gatherings',
        icon: '🥂',
        color: '#8B5CF6',
        parentId: 'private_events',
        isActive: true,
        sortOrder: 3,
      },
    ],
  },
  {
    id: 'adventure',
    name: 'Adventure',
    description: 'Thrilling experiences, outdoor activities, and unique adventures',
    icon: '🏔️',
    color: '#10B981',
    isActive: true,
    sortOrder: 5,
    subcategories: [
      {
        id: 'helicopter_tours',
        name: 'Helicopter Tours',
        description: 'Scenic helicopter flights and aerial experiences',
        icon: '🚁',
        color: '#10B981',
        parentId: 'adventure',
        isActive: true,
        sortOrder: 1,
      },
      {
        id: 'extreme_sports',
        name: 'Extreme Sports',
        description: 'Skydiving, bungee jumping, and adrenaline activities',
        icon: '🪂',
        color: '#10B981',
        parentId: 'adventure',
        isActive: true,
        sortOrder: 2,
      },
      {
        id: 'luxury_safari',
        name: 'Luxury Safari',
        description: 'Premium wildlife experiences and safari adventures',
        icon: '🦁',
        color: '#10B981',
        parentId: 'adventure',
        isActive: true,
        sortOrder: 3,
      },
    ],
  },
  {
    id: 'wellness',
    name: 'Wellness',
    description: 'Spa experiences, wellness retreats, and health-focused activities',
    icon: '🧘‍♀️',
    color: '#EC4899',
    isActive: true,
    sortOrder: 6,
    subcategories: [
      {
        id: 'luxury_spa',
        name: 'Luxury Spa',
        description: 'Premium spa treatments and wellness experiences',
        icon: '💆‍♀️',
        color: '#EC4899',
        parentId: 'wellness',
        isActive: true,
        sortOrder: 1,
      },
      {
        id: 'wellness_retreats',
        name: 'Wellness Retreats',
        description: 'Multi-day wellness and mindfulness retreats',
        icon: '🏝️',
        color: '#EC4899',
        parentId: 'wellness',
        isActive: true,
        sortOrder: 2,
      },
      {
        id: 'fitness_experiences',
        name: 'Fitness Experiences',
        description: 'Personal training, yoga, and fitness adventures',
        icon: '💪',
        color: '#EC4899',
        parentId: 'wellness',
        isActive: true,
        sortOrder: 3,
      },
    ],
  },
  {
    id: 'cultural',
    name: 'Cultural',
    description: 'Art exhibitions, cultural tours, and educational experiences',
    icon: '🎨',
    color: '#F59E0B',
    isActive: true,
    sortOrder: 7,
    subcategories: [
      {
        id: 'art_exhibitions',
        name: 'Art Exhibitions',
        description: 'Private gallery tours and exclusive art viewings',
        icon: '🖼️',
        color: '#F59E0B',
        parentId: 'cultural',
        isActive: true,
        sortOrder: 1,
      },
      {
        id: 'cultural_tours',
        name: 'Cultural Tours',
        description: 'Historical tours, museum visits, and cultural immersion',
        icon: '🏛️',
        color: '#F59E0B',
        parentId: 'cultural',
        isActive: true,
        sortOrder: 2,
      },
      {
        id: 'music_events',
        name: 'Music Events',
        description: 'Concerts, opera, and exclusive musical performances',
        icon: '🎼',
        color: '#F59E0B',
        parentId: 'cultural',
        isActive: true,
        sortOrder: 3,
      },
    ],
  },
  {
    id: 'networking',
    name: 'Networking',
    description: 'Professional networking, business meetups, and social connections',
    icon: '🤝',
    color: '#6366F1',
    isActive: true,
    sortOrder: 8,
    subcategories: [
      {
        id: 'business_networking',
        name: 'Business Networking',
        description: 'Professional networking events and business mixers',
        icon: '💼',
        color: '#6366F1',
        parentId: 'networking',
        isActive: true,
        sortOrder: 1,
      },
      {
        id: 'social_meetups',
        name: 'Social Meetups',
        description: 'Casual social gatherings and community events',
        icon: '👥',
        color: '#6366F1',
        parentId: 'networking',
        isActive: true,
        sortOrder: 2,
      },
      {
        id: 'industry_events',
        name: 'Industry Events',
        description: 'Sector-specific events and professional conferences',
        icon: '🏢',
        color: '#6366F1',
        parentId: 'networking',
        isActive: true,
        sortOrder: 3,
      },
    ],
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Shows, performances, and entertainment experiences',
    icon: '🎪',
    color: '#EF4444',
    isActive: true,
    sortOrder: 9,
    subcategories: [
      {
        id: 'theater_shows',
        name: 'Theater Shows',
        description: 'Broadway shows, theater performances, and premieres',
        icon: '🎭',
        color: '#EF4444',
        parentId: 'entertainment',
        isActive: true,
        sortOrder: 1,
      },
      {
        id: 'comedy_shows',
        name: 'Comedy Shows',
        description: 'Stand-up comedy, improv shows, and comedy events',
        icon: '😂',
        color: '#EF4444',
        parentId: 'entertainment',
        isActive: true,
        sortOrder: 2,
      },
      {
        id: 'live_performances',
        name: 'Live Performances',
        description: 'Concerts, live music, and performance art',
        icon: '🎤',
        color: '#EF4444',
        parentId: 'entertainment',
        isActive: true,
        sortOrder: 3,
      },
    ],
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'Luxury travel experiences, destinations, and getaways',
    icon: '✈️',
    color: '#06B6D4',
    isActive: true,
    sortOrder: 10,
    subcategories: [
      {
        id: 'luxury_getaways',
        name: 'Luxury Getaways',
        description: 'Premium vacation packages and luxury destinations',
        icon: '🏖️',
        color: '#06B6D4',
        parentId: 'travel',
        isActive: true,
        sortOrder: 1,
      },
      {
        id: 'city_breaks',
        name: 'City Breaks',
        description: 'Urban adventures and city exploration experiences',
        icon: '🏙️',
        color: '#06B6D4',
        parentId: 'travel',
        isActive: true,
        sortOrder: 2,
      },
      {
        id: 'unique_destinations',
        name: 'Unique Destinations',
        description: 'Off-the-beaten-path and exclusive travel experiences',
        icon: '🗺️',
        color: '#06B6D4',
        parentId: 'travel',
        isActive: true,
        sortOrder: 3,
      },
    ],
  },
];

// Helper functions for categories
export const getCategoryById = (id: string): Category | undefined => {
  const findCategory = (categories: Category[]): Category | undefined => {
    for (const category of categories) {
      if (category.id === id) return category;
      if (category.subcategories) {
        const found = findCategory(category.subcategories);
        if (found) return found;
      }
    }
    return undefined;
  };
  return findCategory(mockCategories);
};

export const getMainCategories = (): Category[] => {
  return mockCategories.filter(category => !category.parentId);
};

export const getSubcategories = (parentId: string): Category[] => {
  const parent = getCategoryById(parentId);
  return parent?.subcategories || [];
};

export const getCategoriesByColor = (color: string): Category[] => {
  return mockCategories.filter(category => category.color === color);
};

export const getActiveCategories = (): Category[] => {
  return mockCategories.filter(category => category.isActive);
};

export const getCategoryPath = (categoryId: string): Category[] => {
  const path: Category[] = [];
  const category = getCategoryById(categoryId);
  
  if (category) {
    path.push(category);
    if (category.parentId) {
      const parent = getCategoryById(category.parentId);
      if (parent) {
        path.unshift(parent);
      }
    }
  }
  
  return path;
};