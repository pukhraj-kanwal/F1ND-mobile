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

interface ForgotPasswordScreenProps {
  navigation: any;
}

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
    }, 1500);
  };

  const handleResendEmail = () => {
    setEmailSent(false);
    handleResetPassword();
  };

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  if (emailSent) {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[colors.gradients.primary[0], colors.gradients.primary[1]]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.content}>
            <View style={styles.successContainer}>
              <View style={styles.iconContainer}>
                <Ionicons name="mail-outline" size={64} color={colors.primary[500]} />
              </View>
              
              <Text style={styles.successTitle}>Check Your Email</Text>
              <Text style={styles.successMessage}>
                We've sent a password reset link to{'\n'}
                <Text style={styles.emailText}>{email}</Text>
              </Text>
              
              <Text style={styles.instructionText}>
                Click the link in the email to reset your password. If you don't see the email, check your spam folder.
              </Text>
              
              <View style={styles.buttonContainer}>
                <Button
                  title="Resend Email"
                  onPress={handleResendEmail}
                  variant="outline"
                  style={styles.resendButton}
                />
                
                <Button
                  title="Back to Sign In"
                  onPress={handleBackToLogin}
                  style={styles.backButton}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }

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
            </View>

            {/* Reset Password Form */}
            <View style={styles.formContainer}>
              <View style={styles.iconContainer}>
                <Ionicons name="lock-closed-outline" size={48} color={colors.primary[500]} />
              </View>
              
              <Text style={styles.title}>Forgot Password?</Text>
              <Text style={styles.subtitle}>
                No worries! Enter your email address and we'll send you a link to reset your password.
              </Text>

              <View style={styles.form}>
                <Input
                  label="Email Address"
                  value={email}
                  onChangeText={(value) => {
                    setEmail(value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  error={error}
                  leftIcon={
                    <Ionicons name="mail-outline" size={20} color={colors.text.secondary} />
                  }
                />

                <Button
                  title="Send Reset Link"
                  onPress={handleResetPassword}
                  loading={isLoading}
                  style={styles.resetButton}
                />
              </View>

              {/* Back to Login */}
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Remember your password? </Text>
                <TouchableOpacity onPress={handleBackToLogin}>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: semanticSpacing.lg,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: semanticSpacing.lg,
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
    letterSpacing: 2,
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
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: semanticSpacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: semanticSpacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: semanticSpacing.xl,
    lineHeight: 24,
  },
  form: {
    width: '100%',
    marginBottom: semanticSpacing.lg,
  },
  resetButton: {
    marginTop: semanticSpacing.lg,
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
  // Success state styles
  successContainer: {
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
    alignItems: 'center',
  },
  successTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: semanticSpacing.sm,
  },
  successMessage: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: semanticSpacing.lg,
    lineHeight: 24,
  },
  emailText: {
    color: colors.primary[500],
    fontWeight: '600',
  },
  instructionText: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: semanticSpacing.xl,
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: semanticSpacing.md,
  },
  resendButton: {
    marginBottom: semanticSpacing.sm,
  },
  backToLoginButton: {
    // Different name to avoid conflict
  },
});