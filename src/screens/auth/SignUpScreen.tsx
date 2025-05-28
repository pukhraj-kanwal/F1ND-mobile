import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Button, Input } from '../../components/ui';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { semanticSpacing } from '../../theme/spacing';

interface SignUpScreenProps {
  navigation: any;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && acceptedTerms;
  };

  const handleSignUp = async () => {
    if (!acceptedTerms) {
      Alert.alert('Terms Required', 'Please accept the Terms of Service and Privacy Policy');
      return;
    }
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to onboarding
      navigation.replace('Onboarding');
    }, 2000);
  };

  const handleSocialSignUp = (provider: string) => {
    Alert.alert('Social Sign Up', `${provider} sign up will be implemented`);
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.gradients.primary[0], colors.gradients.primary[1]]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color={colors.text.inverse} />
              </TouchableOpacity>
              <Text style={styles.logo}>F1ND</Text>
              <Text style={styles.tagline}>Join the Luxury Experience</Text>
            </View>

            {/* Sign Up Form */}
            <View style={styles.formContainer}>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>Start your journey with exclusive experiences</Text>

              <View style={styles.form}>
                <View style={styles.nameRow}>
                  <View style={styles.nameField}>
                    <Input
                      label="First Name"
                      value={formData.firstName}
                      onChangeText={(value) => updateFormData('firstName', value)}
                      placeholder="First name"
                      error={errors.firstName}
                      leftIcon={
                        <Ionicons name="person-outline" size={20} color={colors.text.secondary} />
                      }
                    />
                  </View>
                  <View style={styles.nameField}>
                    <Input
                      label="Last Name"
                      value={formData.lastName}
                      onChangeText={(value) => updateFormData('lastName', value)}
                      placeholder="Last name"
                      error={errors.lastName}
                    />
                  </View>
                </View>

                <Input
                  label="Email"
                  value={formData.email}
                  onChangeText={(value) => updateFormData('email', value)}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  error={errors.email}
                  leftIcon={
                    <Ionicons name="mail-outline" size={20} color={colors.text.secondary} />
                  }
                />

                <Input
                  label="Password"
                  value={formData.password}
                  onChangeText={(value) => updateFormData('password', value)}
                  placeholder="Create a password"
                  secureTextEntry={!showPassword}
                  error={errors.password}
                  leftIcon={
                    <Ionicons name="lock-closed-outline" size={20} color={colors.text.secondary} />
                  }
                  rightIcon={
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                      <Ionicons
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color={colors.text.secondary}
                      />
                    </TouchableOpacity>
                  }
                />

                <Input
                  label="Confirm Password"
                  value={formData.confirmPassword}
                  onChangeText={(value) => updateFormData('confirmPassword', value)}
                  placeholder="Confirm your password"
                  secureTextEntry={!showConfirmPassword}
                  error={errors.confirmPassword}
                  leftIcon={
                    <Ionicons name="lock-closed-outline" size={20} color={colors.text.secondary} />
                  }
                  rightIcon={
                    <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                      <Ionicons
                        name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                        size={20}
                        color={colors.text.secondary}
                      />
                    </TouchableOpacity>
                  }
                />

                {/* Terms and Conditions */}
                <TouchableOpacity
                  style={styles.termsContainer}
                  onPress={() => setAcceptedTerms(!acceptedTerms)}
                >
                  <View style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}>
                    {acceptedTerms && (
                      <Ionicons name="checkmark" size={16} color={colors.text.inverse} />
                    )}
                  </View>
                  <Text style={styles.termsText}>
                    I agree to the{' '}
                    <Text style={styles.termsLink}>Terms of Service</Text>
                    {' '}and{' '}
                    <Text style={styles.termsLink}>Privacy Policy</Text>
                  </Text>
                </TouchableOpacity>

                <Button
                  title="Create Account"
                  onPress={handleSignUp}
                  loading={isLoading}
                  style={styles.signUpButton}
                />
              </View>

              {/* Social Sign Up */}
              <View style={styles.socialContainer}>
                <View style={styles.divider}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>Or sign up with</Text>
                  <View style={styles.dividerLine} />
                </View>

                <View style={styles.socialButtons}>
                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => handleSocialSignUp('Google')}
                  >
                    <Ionicons name="logo-google" size={24} color={colors.text.primary} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => handleSocialSignUp('Apple')}
                  >
                    <Ionicons name="logo-apple" size={24} color={colors.text.primary} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.socialButton}
                    onPress={() => handleSocialSignUp('Facebook')}
                  >
                    <Ionicons name="logo-facebook" size={24} color={colors.text.primary} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Login Link */}
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={handleLogin}>
                  <Text style={styles.loginLink}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: semanticSpacing.lg,
    paddingTop: semanticSpacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: semanticSpacing.xl,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: semanticSpacing.sm,
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.text.inverse,
    marginBottom: semanticSpacing.xs,
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 16,
    color: colors.text.inverse,
    opacity: 0.9,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: colors.background.primary,
    borderRadius: 24,
    padding: semanticSpacing.xl,
    shadowColor: colors.secondary[900],
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: semanticSpacing.xs,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: semanticSpacing.xl,
  },
  form: {
    marginBottom: semanticSpacing.lg,
  },
  nameRow: {
    flexDirection: 'row',
    gap: semanticSpacing.md,
  },
  nameField: {
    flex: 1,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: semanticSpacing.lg,
    marginBottom: semanticSpacing.lg,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.border.medium,
    marginRight: semanticSpacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: colors.primary[500],
    borderColor: colors.primary[500],
  },
  termsText: {
    flex: 1,
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 20,
  },
  termsLink: {
    color: colors.primary[500],
    fontWeight: '600',
  },
  signUpButton: {
    marginTop: semanticSpacing.md,
  },
  socialContainer: {
    marginBottom: semanticSpacing.lg,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: semanticSpacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border.light,
  },
  dividerText: {
    fontSize: 14,
    color: colors.text.secondary,
    marginHorizontal: semanticSpacing.md,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: semanticSpacing.md,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    color: colors.text.secondary,
  },
  loginLink: {
    fontSize: 16,
    color: colors.primary[500],
    fontWeight: '600',
  },
});