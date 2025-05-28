// F1ND Premium Color Palette
export const colors = {
  // Primary Brand Colors
  primary: {
    50: '#FFF8F0',
    100: '#FFECD1',
    200: '#FFD6A3',
    300: '#FFBF75',
    400: '#FFA947',
    500: '#FF9319', // Main brand color - Luxury Gold
    600: '#E6830E',
    700: '#CC740C',
    800: '#B3640A',
    900: '#995508',
  },

  // Secondary Colors - Deep Luxury
  secondary: {
    50: '#F8F9FA',
    100: '#E9ECEF',
    200: '#DEE2E6',
    300: '#CED4DA',
    400: '#ADB5BD',
    500: '#6C757D',
    600: '#495057',
    700: '#343A40',
    800: '#212529',
    900: '#000000', // Premium Black
  },

  // Accent Colors - Racing Red
  accent: {
    50: '#FFF5F5',
    100: '#FED7D7',
    200: '#FEB2B2',
    300: '#FC8181',
    400: '#F56565',
    500: '#E53E3E', // F1 Racing Red
    600: '#C53030',
    700: '#9B2C2C',
    800: '#822727',
    900: '#63171B',
  },

  // Neutral Grays
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },

  // Status Colors
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },

  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },

  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },

  info: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },

  // Luxury Gradients
  gradients: {
    primary: ['#FF9319', '#FFD6A3'],
    secondary: ['#212529', '#495057'],
    accent: ['#E53E3E', '#FC8181'],
    gold: ['#FFD700', '#FFA500'],
    platinum: ['#E5E4E2', '#BCC6CC'],
    sunset: ['#FF6B6B', '#FFE66D'],
    ocean: ['#4ECDC4', '#44A08D'],
    royal: ['#667EEA', '#764BA2'],
  },

  // Semantic Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F5F5F5',
    dark: '#000000',
    overlay: 'rgba(0, 0, 0, 0.5)',
    blur: 'rgba(255, 255, 255, 0.8)',
  },

  text: {
    primary: '#212121',
    secondary: '#757575',
    tertiary: '#BDBDBD',
    inverse: '#FFFFFF',
    accent: '#FF9319',
    error: '#EF4444',
    success: '#22C55E',
    warning: '#F59E0B',
  },

  border: {
    light: '#E0E0E0',
    medium: '#BDBDBD',
    dark: '#757575',
    accent: '#FF9319',
  },

  // Activity Category Colors
  categories: {
    motorsports: '#E53E3E',
    luxury_dining: '#FF9319',
    yacht_parties: '#3B82F6',
    private_events: '#8B5CF6',
    adventure: '#10B981',
    wellness: '#EC4899',
    cultural: '#F59E0B',
    networking: '#6366F1',
    entertainment: '#EF4444',
    travel: '#06B6D4',
  },

  // Budget Tier Colors
  budgetTiers: {
    '$': '#22C55E',      // Accessible
    '$$': '#F59E0B',     // Moderate
    '$$$': '#FF9319',    // Premium
    '$$$$': '#8B5CF6',   // Luxury
    '$$$$$': '#000000',  // Ultra-Luxury
  },
};

// Light Theme Colors
export const lightTheme = {
  primary: colors.primary[500],
  secondary: colors.secondary[700],
  accent: colors.accent[500],
  background: colors.background.primary,
  surface: colors.background.secondary,
  text: colors.text.primary,
  textSecondary: colors.text.secondary,
  border: colors.border.light,
  error: colors.error[500],
  warning: colors.warning[500],
  success: colors.success[500],
  info: colors.info[500],
};

// Dark Theme Colors
export const darkTheme = {
  primary: colors.primary[400],
  secondary: colors.secondary[300],
  accent: colors.accent[400],
  background: colors.secondary[900],
  surface: colors.secondary[800],
  text: colors.text.inverse,
  textSecondary: colors.gray[400],
  border: colors.gray[700],
  error: colors.error[400],
  warning: colors.warning[400],
  success: colors.success[400],
  info: colors.info[400],
};

export type ColorTheme = typeof lightTheme;