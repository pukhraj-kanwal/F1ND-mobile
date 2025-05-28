import { Platform } from 'react-native';

// Font Families - Premium Typography
export const fontFamilies = {
  // Primary Font - Modern Sans-Serif
  primary: Platform.select({
    ios: 'SF Pro Display',
    android: 'Roboto',
    default: 'System',
  }),
  
  // Secondary Font - Elegant Serif for luxury content
  secondary: Platform.select({
    ios: 'Georgia',
    android: 'serif',
    default: 'serif',
  }),
  
  // Monospace for codes, numbers
  mono: Platform.select({
    ios: 'SF Mono',
    android: 'monospace',
    default: 'monospace',
  }),
  
  // Display Font - For headlines and branding
  display: Platform.select({
    ios: 'SF Pro Display',
    android: 'Roboto',
    default: 'System',
  }),
};

// Font Weights
export const fontWeights = {
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
  extrabold: '800' as const,
  black: '900' as const,
};

// Font Sizes - Responsive Scale
export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 36,
  '6xl': 42,
  '7xl': 48,
  '8xl': 56,
  '9xl': 64,
};

// Line Heights
export const lineHeights = {
  tight: 1.2,
  normal: 1.4,
  relaxed: 1.6,
  loose: 1.8,
};

// Letter Spacing
export const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
  widest: 2,
};

// Typography Styles - Semantic Design System
export const typography = {
  // Display Styles - For hero sections and major headings
  display: {
    large: {
      fontFamily: fontFamilies.display,
      fontSize: fontSizes['8xl'],
      fontWeight: fontWeights.black,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.tight,
    },
    medium: {
      fontFamily: fontFamilies.display,
      fontSize: fontSizes['6xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.tight,
    },
    small: {
      fontFamily: fontFamilies.display,
      fontSize: fontSizes['4xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
  },

  // Heading Styles
  heading: {
    h1: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes['5xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.tight,
    },
    h2: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes['4xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.normal,
    },
    h3: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes['3xl'],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
    h4: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes['2xl'],
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
    h5: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
    h6: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
  },

  // Body Text Styles
  body: {
    large: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.relaxed,
      letterSpacing: letterSpacing.normal,
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.relaxed,
      letterSpacing: letterSpacing.normal,
    },
    small: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
  },

  // Label Styles
  label: {
    large: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.wide,
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.wide,
    },
    small: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.wider,
    },
  },

  // Caption Styles
  caption: {
    large: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
    small: {
      fontFamily: fontFamilies.primary,
      fontSize: 10,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.wide,
    },
  },

  // Button Styles
  button: {
    large: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.wide,
    },
    medium: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.semibold,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.wide,
    },
    small: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.wide,
    },
  },

  // Luxury/Premium Styles
  luxury: {
    title: {
      fontFamily: fontFamilies.secondary,
      fontSize: fontSizes['4xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.wide,
    },
    subtitle: {
      fontFamily: fontFamilies.secondary,
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.wider,
    },
    accent: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.widest,
      textTransform: 'uppercase' as const,
    },
  },

  // Numeric Styles - For prices, counts, etc.
  numeric: {
    price: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes['2xl'],
      fontWeight: fontWeights.bold,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacing.normal,
    },
    currency: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
    count: {
      fontFamily: fontFamilies.mono,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
  },

  // Input Styles
  input: {
    text: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
    placeholder: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
    label: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.wide,
    },
    error: {
      fontFamily: fontFamilies.primary,
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacing.normal,
    },
  },
};

// Text Utilities
export const textUtils = {
  uppercase: {
    textTransform: 'uppercase' as const,
  },
  lowercase: {
    textTransform: 'lowercase' as const,
  },
  capitalize: {
    textTransform: 'capitalize' as const,
  },
  center: {
    textAlign: 'center' as const,
  },
  left: {
    textAlign: 'left' as const,
  },
  right: {
    textAlign: 'right' as const,
  },
  justify: {
    textAlign: 'justify' as const,
  },
};

export type TypographyStyle = typeof typography;