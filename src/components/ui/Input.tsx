import React, { useState, forwardRef } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import { useTheme } from '@theme/ThemeProvider';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  hintStyle?: TextStyle;
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  required?: boolean;
}

export const Input = forwardRef<TextInput, InputProps>(({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  onRightIconPress,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  hintStyle,
  variant = 'outlined',
  size = 'medium',
  required = false,
  ...props
}, ref) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  // Get container styles
  const getContainerStyle = (): ViewStyle => {
    return {
      marginBottom: theme.semanticSpacing.formFieldSpacing,
    };
  };

  // Get input container styles
  const getInputContainerStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: theme.semanticBorderRadius.input,
      minHeight: theme.dimensions.input.height,
    };

    // Size-specific styles
    const sizeStyles: ViewStyle = {
      paddingHorizontal: size === 'small' ? theme.semanticSpacing.sm : 
                        size === 'large' ? theme.semanticSpacing.lg : 
                        theme.semanticSpacing.md,
      paddingVertical: size === 'small' ? theme.semanticSpacing.xs : 
                      size === 'large' ? theme.semanticSpacing.md : 
                      theme.semanticSpacing.sm,
    };

    // Variant-specific styles
    let variantStyle: ViewStyle = {};
    
    switch (variant) {
      case 'default':
        variantStyle = {
          backgroundColor: 'transparent',
          borderBottomWidth: 1,
          borderBottomColor: error ? theme.colors.error : 
                           isFocused ? theme.colors.primary : 
                           theme.colors.border,
          borderRadius: 0,
        };
        break;
      case 'filled':
        variantStyle = {
          backgroundColor: theme.colors.surface,
          borderWidth: 0,
        };
        break;
      case 'outlined':
        variantStyle = {
          backgroundColor: theme.colors.background,
          borderWidth: 1,
          borderColor: error ? theme.colors.error : 
                      isFocused ? theme.colors.primary : 
                      theme.colors.border,
        };
        break;
    }

    return {
      ...baseStyle,
      ...sizeStyles,
      ...variantStyle,
    };
  };

  // Get input text styles
  const getInputTextStyle = (): TextStyle => {
    const baseStyle = theme.typography.input.text;
    
    const sizeStyles: TextStyle = {
      fontSize: size === 'small' ? theme.fontSizes.sm : 
               size === 'large' ? theme.fontSizes.lg : 
               theme.fontSizes.md,
    };

    return {
      ...baseStyle,
      ...sizeStyles,
      color: theme.colors.text,
      flex: 1,
    };
  };

  // Get label styles
  const getLabelStyle = (): TextStyle => {
    return {
      ...theme.typography.input.label,
      color: error ? theme.colors.error : theme.colors.text,
      marginBottom: theme.semanticSpacing.xs,
    };
  };

  // Get error styles
  const getErrorStyle = (): TextStyle => {
    return {
      ...theme.typography.input.error,
      color: theme.colors.error,
      marginTop: theme.semanticSpacing.xs,
    };
  };

  // Get hint styles
  const getHintStyle = (): TextStyle => {
    return {
      ...theme.typography.caption.medium,
      color: theme.colors.textSecondary,
      marginTop: theme.semanticSpacing.xs,
    };
  };

  const handleFocus = (e: any) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };

  return (
    <View style={[getContainerStyle(), containerStyle]}>
      {label && (
        <Text style={[getLabelStyle(), labelStyle]}>
          {label}
          {required && <Text style={{ color: theme.colors.error }}> *</Text>}
        </Text>
      )}
      
      <View style={getInputContainerStyle()}>
        {leftIcon && (
          <View style={{ marginRight: theme.semanticSpacing.sm }}>
            {leftIcon}
          </View>
        )}
        
        <TextInput
          ref={ref}
          style={[getInputTextStyle(), inputStyle]}
          placeholderTextColor={theme.colors.textSecondary}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={{ marginLeft: theme.semanticSpacing.sm }}
            disabled={!onRightIconPress}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      
      {error && (
        <Text style={[getErrorStyle(), errorStyle]}>
          {error}
        </Text>
      )}
      
      {hint && !error && (
        <Text style={[getHintStyle(), hintStyle]}>
          {hint}
        </Text>
      )}
    </View>
  );
});

Input.displayName = 'Input';

export default Input;