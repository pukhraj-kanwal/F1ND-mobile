import React from 'react';
import {
  View,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from '@theme/ThemeProvider';

export interface CardProps extends Omit<TouchableOpacityProps, 'style'> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'small' | 'medium' | 'large';
  margin?: 'none' | 'small' | 'medium' | 'large';
  borderRadius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  pressable?: boolean;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'medium',
  margin = 'none',
  borderRadius = 'medium',
  pressable = false,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  // Get padding values
  const getPadding = () => {
    switch (padding) {
      case 'none':
        return 0;
      case 'small':
        return theme.semanticSpacing.sm;
      case 'medium':
        return theme.semanticSpacing.cardPadding;
      case 'large':
        return theme.semanticSpacing.lg;
      default:
        return theme.semanticSpacing.cardPadding;
    }
  };

  // Get margin values
  const getMargin = () => {
    switch (margin) {
      case 'none':
        return 0;
      case 'small':
        return theme.semanticSpacing.sm;
      case 'medium':
        return theme.semanticSpacing.md;
      case 'large':
        return theme.semanticSpacing.lg;
      default:
        return 0;
    }
  };

  // Get border radius values
  const getBorderRadius = () => {
    switch (borderRadius) {
      case 'none':
        return 0;
      case 'small':
        return theme.borderRadius.sm;
      case 'medium':
        return theme.semanticBorderRadius.card;
      case 'large':
        return theme.borderRadius.xl;
      case 'full':
        return theme.borderRadius.full;
      default:
        return theme.semanticBorderRadius.card;
    }
  };

  // Get card styles based on variant
  const getCardStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      padding: getPadding(),
      margin: getMargin(),
      borderRadius: getBorderRadius(),
    };

    // Variant-specific styles
    let variantStyle: ViewStyle = {};
    
    switch (variant) {
      case 'default':
        variantStyle = {
          backgroundColor: theme.colors.surface,
          ...theme.semanticShadows.card,
        };
        break;
      case 'elevated':
        variantStyle = {
          backgroundColor: theme.colors.surface,
          ...theme.semanticShadows.cardHover,
        };
        break;
      case 'outlined':
        variantStyle = {
          backgroundColor: theme.colors.background,
          borderWidth: 1,
          borderColor: theme.colors.border,
        };
        break;
      case 'filled':
        variantStyle = {
          backgroundColor: theme.colors.surface,
        };
        break;
    }

    return {
      ...baseStyle,
      ...variantStyle,
    };
  };

  const cardStyle = [getCardStyle(), style];

  if (pressable) {
    return (
      <TouchableOpacity
        style={cardStyle}
        activeOpacity={0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={cardStyle}>
      {children}
    </View>
  );
};

export default Card;