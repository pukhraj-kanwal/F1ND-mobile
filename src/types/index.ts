// Core User Types
export interface User {
  // Primary Identifiers
  id: string;
  email: string;
  username: string;
  
  // Personal Information
  firstName: string;
  lastName: string;
  displayName: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  
  // Profile Media
  profilePhoto?: string;
  coverPhoto?: string;
  profileThumbnail?: string;
  
  // Contact Information
  phone?: string;
  alternateEmail?: string;
  
  // Location Data
  location?: UserLocation;
  
  // Account Status
  accountType: 'free' | 'premium' | 'elite' | 'business';
  accountStatus: 'active' | 'suspended' | 'deactivated' | 'pending';
  isVerified: boolean;
  isHost: boolean;
  isBusiness: boolean;
  
  // Verification Levels
  verification: UserVerification;
  
  // Reputation & Trust
  reputationScore: number;
  trustLevel: 'new' | 'trusted' | 'verified' | 'elite';
  badges: string[];
  
  // Preferences
  budgetTier: '$' | '$$' | '$$$' | '$$$$' | '$$$$$';
  interests: string[];
  languages: string[];
  
  // Privacy Settings
  privacy: UserPrivacy;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  lastActiveAt: Date;
  lastLoginAt: Date;
  
  // Metadata
  metadata: UserMetadata;
}

export interface UserLocation {
  country: string;
  state?: string;
  city?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  timezone: string;
  isPublic: boolean;
}

export interface UserVerification {
  email: {
    isVerified: boolean;
    verifiedAt?: Date;
  };
  phone: {
    isVerified: boolean;
    verifiedAt?: Date;
  };
  identity: {
    isVerified: boolean;
    verifiedAt?: Date;
    level: 'none' | 'basic' | 'enhanced' | 'premium';
  };
  background: {
    isVerified: boolean;
    verifiedAt?: Date;
  };
}

export interface UserPrivacy {
  profileVisibility: 'public' | 'connections' | 'private';
  locationVisibility: 'public' | 'city' | 'private';
  activityVisibility: 'public' | 'connections' | 'private';
  contactVisibility: 'public' | 'connections' | 'private';
}

export interface UserMetadata {
  referralCode?: string;
  referredBy?: string;
  signupSource: string;
  deviceInfo?: object;
  utmParams?: object;
}

// Activity Types
export interface Activity {
  // Primary Identifiers
  id: string;
  hostId: string;
  businessId?: string;
  
  // Basic Information
  title: string;
  description: string;
  shortDescription: string;
  
  // Categorization
  category: string;
  subcategories: string[];
  tags: string[];
  
  // Location Information
  location: ActivityLocation;
  
  // Scheduling
  schedule: ActivitySchedule;
  
  // Participation
  participants: ActivityParticipants;
  
  // Pricing Structure
  pricing: ActivityPricing;
  
  // Content & Media
  media: ActivityMedia;
  
  // Requirements & Details
  requirements: ActivityRequirements;
  
  // Inclusions & Exclusions
  inclusions: string[];
  exclusions: string[];
  
  // Policies
  cancellationPolicy: CancellationPolicy;
  
  // Status & Visibility
  status: 'draft' | 'published' | 'full' | 'cancelled' | 'completed' | 'postponed';
  visibility: 'public' | 'private' | 'invite_only' | 'unlisted';
  
  // Host Settings
  hostSettings: ActivityHostSettings;
  
  // Analytics
  analytics: ActivityAnalytics;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  
  // Metadata
  metadata: ActivityMetadata;
}

export interface ActivityLocation {
  type: 'physical' | 'virtual' | 'hybrid';
  venue?: {
    name: string;
    address: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    placeId?: string;
  };
  virtualDetails?: {
    platform: string;
    accessLink?: string;
    accessCode?: string;
  };
  meetingPoint?: string;
  isAddressPublic: boolean;
}

export interface ActivitySchedule {
  startDate: Date;
  endDate: Date;
  timezone: string;
  duration: number;
  isRecurring: boolean;
  recurrencePattern?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    interval: number;
    endDate?: Date;
    maxOccurrences?: number;
  };
}

export interface ActivityParticipants {
  minParticipants: number;
  maxParticipants: number;
  currentParticipants: number;
  waitlistCount: number;
  allowWaitlist: boolean;
  requiresApproval: boolean;
}

export interface ActivityPricing {
  model: 'free' | 'fixed' | 'pitch_in' | 'tiered' | 'donation';
  basePrice?: number;
  currency: string;
  pricePerPerson?: number;
  totalBudget?: number;
  budgetBreakdown?: {
    item: string;
    cost: number;
    description?: string;
  }[];
  earlyBirdDiscount?: {
    percentage: number;
    validUntil: Date;
  };
  groupDiscounts?: {
    minSize: number;
    discount: number;
  }[];
}

export interface ActivityMedia {
  coverImage: string;
  images: string[];
  videos: string[];
  documents: string[];
}

export interface ActivityRequirements {
  ageRestriction?: {
    minAge: number;
    maxAge?: number;
  };
  dressCode?: string;
  fitnessLevel?: 'low' | 'moderate' | 'high' | 'extreme';
  skillLevel?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  specialRequirements?: string[];
}

export interface CancellationPolicy {
  type: 'flexible' | 'moderate' | 'strict' | 'super_strict';
  refundPercentage: number;
  cutoffHours: number;
  description: string;
}

export interface ActivityHostSettings {
  autoApprove: boolean;
  allowQuestions: boolean;
  allowReviews: boolean;
  sendReminders: boolean;
  collectGuestInfo: boolean;
  requireWaiver: boolean;
}

export interface ActivityAnalytics {
  viewCount: number;
  bookmarkCount: number;
  shareCount: number;
  inquiryCount: number;
  conversionRate: number;
}

export interface ActivityMetadata {
  source: 'manual' | 'imported' | 'cloned';
  originalActivityId?: string;
  seasonality?: string[];
  weatherDependent: boolean;
  lastModifiedBy: string;
}

// Participation Types
export interface Participation {
  id: string;
  userId: string;
  activityId: string;
  status: 'pending' | 'approved' | 'declined' | 'cancelled' | 'completed' | 'no_show';
  joinMethod: 'direct' | 'invitation' | 'waitlist' | 'referral';
  paymentStatus: 'pending' | 'paid' | 'partial' | 'refunded' | 'failed';
  amountPaid: number;
  currency: string;
  paymentMethodId?: string;
  transactionId?: string;
  guestCount: number;
  guestDetails?: GuestDetail[];
  isWaitlisted: boolean;
  waitlistPosition?: number;
  waitlistJoinedAt?: Date;
  hasQuestions: boolean;
  questions?: string;
  hostResponse?: string;
  checkedIn: boolean;
  checkInTime?: Date;
  checkInMethod?: 'qr_code' | 'manual' | 'automatic';
  hasReviewed: boolean;
  reviewId?: string;
  joinedAt: Date;
  approvedAt?: Date;
  cancelledAt?: Date;
  completedAt?: Date;
  cancellationReason?: string;
  cancellationSource: 'user' | 'host' | 'system';
  refundAmount?: number;
}

export interface GuestDetail {
  name: string;
  email?: string;
  phone?: string;
  dietaryRestrictions?: string[];
  specialRequirements?: string[];
}

// Business Types
export interface Business {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: string;
  subcategories: string[];
  location: BusinessLocation;
  contact: BusinessContact;
  services: BusinessService[];
  verification: BusinessVerification;
  media: BusinessMedia;
  operatingHours: OperatingHours;
  pricing: BusinessPricing;
  policies: BusinessPolicies;
  analytics: BusinessAnalytics;
  rating: number;
  reviewCount: number;
  status: 'active' | 'inactive' | 'pending' | 'suspended';
  createdAt: Date;
  updatedAt: Date;
  metadata: BusinessMetadata;
}

export interface BusinessLocation {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  serviceAreas: string[];
}

export interface BusinessContact {
  email: string;
  phone: string;
  website?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface BusinessService {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: {
    type: 'fixed' | 'hourly' | 'package' | 'custom';
    amount?: number;
    currency: string;
    details?: string;
  };
  duration?: number;
  availability: string[];
  requirements?: string[];
}

export interface BusinessVerification {
  isVerified: boolean;
  verifiedAt?: Date;
  documents: {
    businessLicense: boolean;
    insurance: boolean;
    certifications: string[];
  };
  backgroundCheck: boolean;
}

export interface BusinessMedia {
  logo: string;
  coverImage: string;
  gallery: string[];
  videos: string[];
  documents: string[];
}

export interface OperatingHours {
  [key: string]: {
    open: string;
    close: string;
    closed: boolean;
  };
}

export interface BusinessPricing {
  currency: string;
  paymentMethods: string[];
  cancellationPolicy: CancellationPolicy;
  refundPolicy: string;
}

export interface BusinessPolicies {
  termsOfService: string;
  privacyPolicy: string;
  cancellationPolicy: string;
  refundPolicy: string;
}

export interface BusinessAnalytics {
  totalBookings: number;
  totalRevenue: number;
  averageRating: number;
  responseTime: number;
  completionRate: number;
}

export interface BusinessMetadata {
  registrationNumber?: string;
  taxId?: string;
  insuranceProvider?: string;
  lastAuditDate?: Date;
}

// Message Types
export interface Message {
  id: string;
  senderId: string;
  content: string;
  type: 'text' | 'image' | 'video' | 'audio' | 'file' | 'location' | 'system';
  media?: string[];
  threadId: string;
  threadType: 'activity' | 'group' | 'direct' | 'support';
  sentAt: Date;
  reactions?: MessageReaction[];
  replyTo?: string;
  isEdited: boolean;
  editedAt?: Date;
  isDeleted: boolean;
  deletedAt?: Date;
}

export interface MessageReaction {
  userId: string;
  emoji: string;
  createdAt: Date;
}

// Review Types
export interface Review {
  id: string;
  reviewerId: string;
  targetId: string;
  targetType: 'activity' | 'user' | 'business';
  rating: number;
  title?: string;
  content: string;
  media?: string[];
  isAnonymous: boolean;
  isVerified: boolean;
  helpfulCount: number;
  reportCount: number;
  status: 'active' | 'hidden' | 'reported' | 'removed';
  createdAt: Date;
  updatedAt: Date;
}

// Navigation Types
export interface NavigationProps {
  navigation: any;
  route: any;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Common UI Types
export interface SelectOption {
  label: string;
  value: string;
}

export interface FilterOption {
  id: string;
  label: string;
  value: any;
  count?: number;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  error: string;
  warning: string;
  success: string;
  info: string;
}

export interface Theme {
  colors: ThemeColors;
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  typography: {
    h1: object;
    h2: object;
    h3: object;
    h4: object;
    body: object;
    caption: object;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  shadows: {
    sm: object;
    md: object;
    lg: object;
  };
}