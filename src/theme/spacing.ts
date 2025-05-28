// Spacing Scale - Based on 8px grid system
export const spacing = {
  0: 0,
  1: 4,    // 0.25rem
  2: 8,    // 0.5rem
  3: 12,   // 0.75rem
  4: 16,   // 1rem
  5: 20,   // 1.25rem
  6: 24,   // 1.5rem
  7: 28,   // 1.75rem
  8: 32,   // 2rem
  9: 36,   // 2.25rem
  10: 40,  // 2.5rem
  11: 44,  // 2.75rem
  12: 48,  // 3rem
  14: 56,  // 3.5rem
  16: 64,  // 4rem
  20: 80,  // 5rem
  24: 96,  // 6rem
  28: 112, // 7rem
  32: 128, // 8rem
  36: 144, // 9rem
  40: 160, // 10rem
  44: 176, // 11rem
  48: 192, // 12rem
  52: 208, // 13rem
  56: 224, // 14rem
  60: 240, // 15rem
  64: 256, // 16rem
  72: 288, // 18rem
  80: 320, // 20rem
  96: 384, // 24rem
};

// Semantic Spacing - For consistent component spacing
export const semanticSpacing = {
  // Component Internal Spacing
  xs: spacing[1],    // 4px
  sm: spacing[2],    // 8px
  md: spacing[4],    // 16px
  lg: spacing[6],    // 24px
  xl: spacing[8],    // 32px
  xxl: spacing[12],  // 48px
  
  // Layout Spacing
  containerPadding: spacing[4],     // 16px
  sectionSpacing: spacing[8],       // 32px
  cardPadding: spacing[6],          // 24px
  listItemSpacing: spacing[4],      // 16px
  
  // Screen Margins
  screenHorizontal: spacing[4],     // 16px
  screenVertical: spacing[6],       // 24px
  
  // Form Spacing
  formFieldSpacing: spacing[4],     // 16px
  formSectionSpacing: spacing[8],   // 32px
  
  // Button Spacing
  buttonPaddingHorizontal: spacing[6], // 24px
  buttonPaddingVertical: spacing[3],   // 12px
  buttonSpacing: spacing[4],           // 16px
  
  // Navigation Spacing
  tabBarHeight: 80,
  headerHeight: 56,
  statusBarHeight: 44,
  
  // Safe Area
  safeAreaTop: 44,
  safeAreaBottom: 34,
};

// Border Radius Scale
export const borderRadius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  full: 9999,
};

// Semantic Border Radius
export const semanticBorderRadius = {
  button: borderRadius.lg,        // 12px
  card: borderRadius.xl,          // 16px
  input: borderRadius.md,         // 8px
  modal: borderRadius['2xl'],     // 20px
  avatar: borderRadius.full,      // Circle
  badge: borderRadius.full,       // Pill shape
  image: borderRadius.lg,         // 12px
  container: borderRadius.xl,     // 16px
};

// Shadow Definitions
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  xs: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
  },
  '2xl': {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 16,
  },
};

// Semantic Shadows
export const semanticShadows = {
  card: shadows.sm,
  cardHover: shadows.md,
  modal: shadows.xl,
  dropdown: shadows.lg,
  button: shadows.xs,
  buttonPressed: shadows.none,
  floating: shadows['2xl'],
  header: shadows.sm,
};

// Layout Dimensions
export const dimensions = {
  // Screen Breakpoints
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  
  // Component Sizes
  button: {
    small: {
      height: 32,
      paddingHorizontal: spacing[4],
      paddingVertical: spacing[2],
    },
    medium: {
      height: 44,
      paddingHorizontal: spacing[6],
      paddingVertical: spacing[3],
    },
    large: {
      height: 56,
      paddingHorizontal: spacing[8],
      paddingVertical: spacing[4],
    },
  },
  
  input: {
    height: 48,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
  },
  
  avatar: {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
    '2xl': 80,
    '3xl': 96,
  },
  
  icon: {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    '2xl': 40,
  },
  
  // Card Dimensions
  card: {
    minHeight: 120,
    imageHeight: 200,
    avatarSize: 48,
  },
  
  // List Item Dimensions
  listItem: {
    minHeight: 64,
    avatarSize: 40,
    iconSize: 24,
  },
  
  // Navigation Dimensions
  tabBar: {
    height: 80,
    iconSize: 24,
  },
  
  header: {
    height: 56,
    iconSize: 24,
  },
  
  // Modal Dimensions
  modal: {
    maxWidth: 400,
    borderRadius: semanticBorderRadius.modal,
  },
};

// Animation Durations
export const animations = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 350,
    slower: 500,
  },
  
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

// Z-Index Scale
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

// Opacity Scale
export const opacity = {
  0: 0,
  5: 0.05,
  10: 0.1,
  20: 0.2,
  25: 0.25,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  75: 0.75,
  80: 0.8,
  90: 0.9,
  95: 0.95,
  100: 1,
};

// Layout Utilities
export const layout = {
  flex: {
    1: { flex: 1 },
    auto: { flex: 'auto' },
    initial: { flex: 'initial' },
    none: { flex: 'none' },
  },
  
  flexDirection: {
    row: { flexDirection: 'row' as const },
    column: { flexDirection: 'column' as const },
    rowReverse: { flexDirection: 'row-reverse' as const },
    columnReverse: { flexDirection: 'column-reverse' as const },
  },
  
  justifyContent: {
    start: { justifyContent: 'flex-start' as const },
    end: { justifyContent: 'flex-end' as const },
    center: { justifyContent: 'center' as const },
    between: { justifyContent: 'space-between' as const },
    around: { justifyContent: 'space-around' as const },
    evenly: { justifyContent: 'space-evenly' as const },
  },
  
  alignItems: {
    start: { alignItems: 'flex-start' as const },
    end: { alignItems: 'flex-end' as const },
    center: { alignItems: 'center' as const },
    baseline: { alignItems: 'baseline' as const },
    stretch: { alignItems: 'stretch' as const },
  },
  
  alignSelf: {
    auto: { alignSelf: 'auto' as const },
    start: { alignSelf: 'flex-start' as const },
    end: { alignSelf: 'flex-end' as const },
    center: { alignSelf: 'center' as const },
    baseline: { alignSelf: 'baseline' as const },
    stretch: { alignSelf: 'stretch' as const },
  },
  
  position: {
    absolute: { position: 'absolute' as const },
    relative: { position: 'relative' as const },
  },
  
  overflow: {
    visible: { overflow: 'visible' as const },
    hidden: { overflow: 'hidden' as const },
    scroll: { overflow: 'scroll' as const },
  },
};

export type SpacingScale = typeof spacing;
export type SemanticSpacing = typeof semanticSpacing;
export type BorderRadiusScale = typeof borderRadius;
export type ShadowScale = typeof shadows;
export type DimensionsScale = typeof dimensions;