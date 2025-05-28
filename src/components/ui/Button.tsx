import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme, useCommonStyles } from '@theme/ThemeProvider';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  onPress,
  ...props
}) => {
  const { theme } = useTheme();
  const commonStyles = useCommonStyles();

  // Get button styles based on variant
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.semanticBorderRadius.button,
      opacity: disabled || loading ? 0.6 : 1,
    };

    // Size-specific styles
    const sizeStyles: ViewStyle = {
      ...theme.dimensions.button[size],
    };

    // Variant-specific styles
    let variantStyle: ViewStyle = {};
    
    switch (variant) {
      case 'primary':
        variantStyle = {
          backgroundColor: theme.colors.primary,
          ...theme.semanticShadows.button,
        };
        break;
      case 'secondary':
        variantStyle = {
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.border,
        };
        break;
      case 'outline':
        variantStyle = {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.primary,
        };
        break;
      case 'ghost':
        variantStyle = {
          backgroundColor: 'transparent',
        };
        break;
      case 'danger':
        variantStyle = {
          backgroundColor: theme.colors.error,
          ...theme.semanticShadows.button,
        };
        break;
    }

    return {
      ...baseStyle,
      ...sizeStyles,
      ...variantStyle,
      ...(fullWidth && { width: '100%' }),
    };
  };

  // Get text styles based on variant and size
  const getTextStyle = (): TextStyle => {
    const baseTextStyle = theme.typography.button[size];
    
    let colorStyle: TextStyle = {};
    
    switch (variant) {
      case 'primary':
      case 'danger':
        colorStyle = { color: theme.colors.text };
        break;
      case 'secondary':
        colorStyle = { color: theme.colors.text };
        break;
      case 'outline':
      case 'ghost':
        colorStyle = { color: theme.colors.primary };
        break;
    }

    return {
      ...baseTextStyle,
      ...colorStyle,
      textAlign: 'center',
    };
  };

  const handlePress = (event: any) => {
    if (!disabled && !loading && onPress) {
      onPress(event);
    }
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' || variant === 'danger' ? theme.colors.text : theme.colors.primary}
        />
      ) : (
        <>
          {leftIcon && (
            <Text style={{ marginRight: theme.semanticSpacing.xs }}>
              {leftIcon}
            </Text>
          )}
          <Text style={[getTextStyle(), textStyle]}>
            {title}
          </Text>
          {rightIcon && (
            <Text style={{ marginLeft: theme.semanticSpacing.xs }}>
              {rightIcon}
            </Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;