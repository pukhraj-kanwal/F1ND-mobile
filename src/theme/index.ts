import { colors, lightTheme, darkTheme, ColorTheme } from './colors';
import { typography, fontFamilies, fontSizes, fontWeights } from './typography';
import { 
  spacing, 
  semanticSpacing, 
  borderRadius, 
  semanticBorderRadius,
  shadows,
  semanticShadows,
  dimensions,
  animations,
  zIndex,
  opacity,
  layout
} from './spacing';

// Main Theme Interface
export interface Theme {
  colors: ColorTheme & {
    raw: typeof colors;
  };
  typography: typeof typography;
  spacing: typeof spacing;
  semanticSpacing: typeof semanticSpacing;
  borderRadius: typeof borderRadius;
  semanticBorderRadius: typeof semanticBorderRadius;
  shadows: typeof shadows;
  semanticShadows: typeof semanticShadows;
  dimensions: typeof dimensions;
  animations: typeof animations;
  zIndex: typeof zIndex;
  opacity: typeof opacity;
  layout: typeof layout;
  fonts: typeof fontFamilies;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  isDark: boolean;
}

// Create Light Theme
export const createLightTheme = (): Theme => ({
  colors: {
    ...lightTheme,
    raw: colors,
  },
  typography,
  spacing,
  semanticSpacing,
  borderRadius,
  semanticBorderRadius,
  shadows,
  semanticShadows,
  dimensions,
  animations,
  zIndex,
  opacity,
  layout,
  fonts: fontFamilies,
  fontSizes,
  fontWeights,
  isDark: false,
});

// Create Dark Theme
export const createDarkTheme = (): Theme => ({
  colors: {
    ...darkTheme,
    raw: colors,
  },
  typography,
  spacing,
  semanticSpacing,
  borderRadius,
  semanticBorderRadius,
  shadows,
  semanticShadows,
  dimensions,
  animations,
  zIndex,
  opacity,
  layout,
  fonts: fontFamilies,
  fontSizes,
  fontWeights,
  isDark: true,
});

// Default themes
export const lightThemeConfig = createLightTheme();
export const darkThemeConfig = createDarkTheme();

// Theme utilities
export const getTheme = (isDark: boolean): Theme => {
  return isDark ? darkThemeConfig : lightThemeConfig;
};

// Export individual design tokens
export {
  colors,
  lightTheme,
  darkTheme,
  typography,
  fontFamilies,
  fontSizes,
  fontWeights,
  spacing,
  semanticSpacing,
  borderRadius,
  semanticBorderRadius,
  shadows,
  semanticShadows,
  dimensions,
  animations,
  zIndex,
  opacity,
  layout,
};

// Theme constants for easy access
export const THEME_CONSTANTS = {
  // Common measurements
  HEADER_HEIGHT: dimensions.header.height,
  TAB_BAR_HEIGHT: dimensions.tabBar.height,
  SAFE_AREA_TOP: semanticSpacing.safeAreaTop,
  SAFE_AREA_BOTTOM: semanticSpacing.safeAreaBottom,
  
  // Common spacing
  SCREEN_PADDING: semanticSpacing.screenHorizontal,
  CARD_PADDING: semanticSpacing.cardPadding,
  SECTION_SPACING: semanticSpacing.sectionSpacing,
  
  // Animation durations
  FAST_ANIMATION: animations.duration.fast,
  NORMAL_ANIMATION: animations.duration.normal,
  SLOW_ANIMATION: animations.duration.slow,
  
  // Common z-indexes
  MODAL_Z_INDEX: zIndex.modal,
  OVERLAY_Z_INDEX: zIndex.overlay,
  DROPDOWN_Z_INDEX: zIndex.dropdown,
  
  // Breakpoints
  MOBILE_BREAKPOINT: dimensions.breakpoints.sm,
  TABLET_BREAKPOINT: dimensions.breakpoints.md,
  DESKTOP_BREAKPOINT: dimensions.breakpoints.lg,
};

// Style helpers
export const createStyleSheet = (theme: Theme) => ({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  
  safeContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: THEME_CONSTANTS.SAFE_AREA_TOP,
  },
  
  screenContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: THEME_CONSTANTS.SCREEN_PADDING,
  },
  
  // Card styles
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.semanticBorderRadius.card,
    padding: theme.semanticSpacing.cardPadding,
    ...theme.semanticShadows.card,
  },
  
  cardPressed: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.semanticBorderRadius.card,
    padding: theme.semanticSpacing.cardPadding,
    ...theme.semanticShadows.cardHover,
  },
  
  // Text styles
  heading: {
    ...theme.typography.heading.h2,
    color: theme.colors.text,
  },
  
  subheading: {
    ...theme.typography.heading.h4,
    color: theme.colors.text,
  },
  
  body: {
    ...theme.typography.body.medium,
    color: theme.colors.text,
  },
  
  caption: {
    ...theme.typography.caption.medium,
    color: theme.colors.textSecondary,
  },
  
  // Button styles
  primaryButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.semanticBorderRadius.button,
    paddingHorizontal: theme.semanticSpacing.buttonPaddingHorizontal,
    paddingVertical: theme.semanticSpacing.buttonPaddingVertical,
    ...theme.semanticShadows.button,
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.semanticBorderRadius.button,
    paddingHorizontal: theme.semanticSpacing.buttonPaddingHorizontal,
    paddingVertical: theme.semanticSpacing.buttonPaddingVertical,
  },
  
  // Input styles
  input: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.semanticBorderRadius.input,
    paddingHorizontal: theme.semanticSpacing.md,
    paddingVertical: theme.semanticSpacing.sm,
    ...theme.typography.input.text,
    color: theme.colors.text,
  },
  
  inputFocused: {
    borderColor: theme.colors.primary,
    ...theme.semanticShadows.button,
  },
  
  // Layout helpers
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  column: {
    flexDirection: 'column',
  },
  
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  spaceBetween: {
    justifyContent: 'space-between',
  },
  
  spaceAround: {
    justifyContent: 'space-around',
  },
  
  // Spacing helpers
  marginTop: (size: keyof typeof spacing) => ({
    marginTop: spacing[size],
  }),
  
  marginBottom: (size: keyof typeof spacing) => ({
    marginBottom: spacing[size],
  }),
  
  marginHorizontal: (size: keyof typeof spacing) => ({
    marginHorizontal: spacing[size],
  }),
  
  marginVertical: (size: keyof typeof spacing) => ({
    marginVertical: spacing[size],
  }),
  
  paddingTop: (size: keyof typeof spacing) => ({
    paddingTop: spacing[size],
  }),
  
  paddingBottom: (size: keyof typeof spacing) => ({
    paddingBottom: spacing[size],
  }),
  
  paddingHorizontal: (size: keyof typeof spacing) => ({
    paddingHorizontal: spacing[size],
  }),
  
  paddingVertical: (size: keyof typeof spacing) => ({
    paddingVertical: spacing[size],
  }),
});

// Export type for theme context
export type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
};