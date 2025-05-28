import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, ThemeContextType, getTheme } from './index';

const THEME_STORAGE_KEY = '@f1nd_theme_preference';

// Create Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider Props
interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: 'light' | 'dark' | 'system';
}

// Theme Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialTheme = 'system' 
}) => {
  const systemColorScheme = useColorScheme();
  const [themePreference, setThemePreference] = useState<'light' | 'dark' | 'system'>(initialTheme);
  const [isLoading, setIsLoading] = useState(true);

  // Determine if dark mode should be active
  const isDark = themePreference === 'system' 
    ? systemColorScheme === 'dark'
    : themePreference === 'dark';

  const theme = getTheme(isDark);

  // Load theme preference from storage
  useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
          setThemePreference(savedTheme as 'light' | 'dark' | 'system');
        }
      } catch (error) {
        console.warn('Failed to load theme preference:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadThemePreference();
  }, []);

  // Save theme preference to storage
  const saveThemePreference = async (newTheme: 'light' | 'dark' | 'system') => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  };

  // Toggle between light and dark (not system)
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setThemePreference(newTheme);
    saveThemePreference(newTheme);
  };

  // Set specific theme
  const setTheme = (newIsDark: boolean) => {
    const newTheme = newIsDark ? 'dark' : 'light';
    setThemePreference(newTheme);
    saveThemePreference(newTheme);
  };

  // Set theme preference (including system)
  const setThemePreferenceValue = (newTheme: 'light' | 'dark' | 'system') => {
    setThemePreference(newTheme);
    saveThemePreference(newTheme);
  };

  const contextValue: ThemeContextType & {
    themePreference: 'light' | 'dark' | 'system';
    setThemePreference: (theme: 'light' | 'dark' | 'system') => void;
    isLoading: boolean;
  } = {
    theme,
    isDark,
    toggleTheme,
    setTheme,
    themePreference,
    setThemePreference: setThemePreferenceValue,
    isLoading,
  };

  // Don't render children until theme is loaded
  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use theme context
export const useTheme = (): ThemeContextType & {
  themePreference: 'light' | 'dark' | 'system';
  setThemePreference: (theme: 'light' | 'dark' | 'system') => void;
  isLoading: boolean;
} => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context as any;
};

// Hook to get current theme object
export const useThemeColors = () => {
  const { theme } = useTheme();
  return theme.colors;
};

// Hook to get typography styles
export const useTypography = () => {
  const { theme } = useTheme();
  return theme.typography;
};

// Hook to get spacing values
export const useSpacing = () => {
  const { theme } = useTheme();
  return {
    spacing: theme.spacing,
    semanticSpacing: theme.semanticSpacing,
  };
};

// Hook to get common styles
export const useCommonStyles = () => {
  const { theme } = useTheme();
  
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    
    safeContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: theme.semanticSpacing.safeAreaTop,
    },
    
    screenContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: theme.semanticSpacing.screenHorizontal,
      paddingVertical: theme.semanticSpacing.screenVertical,
    },
    
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.semanticBorderRadius.card,
      padding: theme.semanticSpacing.cardPadding,
      ...theme.semanticShadows.card,
    },
    
    row: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
    },
    
    column: {
      flexDirection: 'column' as const,
    },
    
    center: {
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
    },
    
    spaceBetween: {
      justifyContent: 'space-between' as const,
    },
    
    flex1: {
      flex: 1,
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
    
    primaryButtonText: {
      ...theme.typography.button.medium,
      color: theme.colors.text,
      textAlign: 'center' as const,
    },
    
    secondaryButton: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.semanticBorderRadius.button,
      paddingHorizontal: theme.semanticSpacing.buttonPaddingHorizontal,
      paddingVertical: theme.semanticSpacing.buttonPaddingVertical,
    },
    
    secondaryButtonText: {
      ...theme.typography.button.medium,
      color: theme.colors.primary,
      textAlign: 'center' as const,
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
    
    inputLabel: {
      ...theme.typography.input.label,
      color: theme.colors.text,
      marginBottom: theme.semanticSpacing.xs,
    },
    
    inputError: {
      ...theme.typography.input.error,
      color: theme.colors.error,
      marginTop: theme.semanticSpacing.xs,
    },
  };
};

// HOC for theme-aware components
export const withTheme = <P extends object>(
  Component: React.ComponentType<P & { theme: Theme }>
) => {
  return (props: P) => {
    const { theme } = useTheme();
    return <Component {...props} theme={theme} />;
  };
};

export default ThemeProvider;