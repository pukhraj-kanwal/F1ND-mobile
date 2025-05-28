import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../components/ui';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { semanticSpacing } from '../../theme/spacing';

const { width, height } = Dimensions.get('window');

interface WelcomeScreenProps {
  navigation: any;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('LocationPermission');
  };

  const handleSkip = () => {
    navigation.navigate('MainTabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.gradients.primary[0], colors.gradients.primary[1]]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Skip Button */}
        <View style={styles.skipContainer}>
          <Button
            title="Skip"
            onPress={handleSkip}
            variant="ghost"
            textStyle={styles.skipText}
          />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Logo and Branding */}
          <View style={styles.brandingContainer}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>F1ND</Text>
              <View style={styles.logoAccent} />
            </View>
            
            <Text style={styles.tagline}>
              Discover Extraordinary{'\n'}Experiences
            </Text>
            
            <Text style={styles.subtitle}>
              Connect with luxury activities, exclusive events, and like-minded individuals who share your passion for the extraordinary.
            </Text>
          </View>

          {/* Feature Highlights */}
          <View style={styles.featuresContainer}>
            <View style={styles.feature}>
              <View style={styles.featureIcon}>
                <Ionicons name="diamond-outline" size={32} color={colors.text.inverse} />
              </View>
              <Text style={styles.featureTitle}>Luxury Experiences</Text>
              <Text style={styles.featureDescription}>
                Access exclusive events and premium activities
              </Text>
            </View>

            <View style={styles.feature}>
              <View style={styles.featureIcon}>
                <Ionicons name="people-outline" size={32} color={colors.text.inverse} />
              </View>
              <Text style={styles.featureTitle}>Elite Community</Text>
              <Text style={styles.featureDescription}>
                Connect with verified, like-minded individuals
              </Text>
            </View>

            <View style={styles.feature}>
              <View style={styles.featureIcon}>
                <Ionicons name="shield-checkmark-outline" size={32} color={colors.text.inverse} />
              </View>
              <Text style={styles.featureTitle}>Trusted & Secure</Text>
              <Text style={styles.featureDescription}>
                Verified hosts and secure payment processing
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom Action */}
        <View style={styles.bottomContainer}>
          <Button
            title="Get Started"
            onPress={handleGetStarted}
            style={styles.getStartedButton}
            rightIcon={
              <Ionicons name="arrow-forward" size={20} color={colors.text.inverse} />
            }
          />
          
          <View style={styles.indicatorContainer}>
            <View style={[styles.indicator, styles.indicatorActive]} />
            <View style={styles.indicator} />
            <View style={styles.indicator} />
            <View style={styles.indicator} />
          </View>
        </View>
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
  skipContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: semanticSpacing.lg,
    paddingTop: semanticSpacing.md,
  },
  skipText: {
    color: colors.text.inverse,
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: semanticSpacing.lg,
    justifyContent: 'center',
  },
  brandingContainer: {
    alignItems: 'center',
    marginBottom: semanticSpacing.xxl,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: semanticSpacing.lg,
  },
  logo: {
    fontSize: 64,
    fontWeight: 'bold',
    color: colors.text.inverse,
    letterSpacing: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  logoAccent: {
    width: 60,
    height: 4,
    backgroundColor: colors.text.inverse,
    borderRadius: 2,
    marginTop: semanticSpacing.sm,
    opacity: 0.8,
  },
  tagline: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text.inverse,
    textAlign: 'center',
    marginBottom: semanticSpacing.lg,
    lineHeight: 36,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.inverse,
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 24,
    paddingHorizontal: semanticSpacing.md,
  },
  featuresContainer: {
    gap: semanticSpacing.xl,
  },
  feature: {
    alignItems: 'center',
    paddingHorizontal: semanticSpacing.lg,
  },
  featureIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: semanticSpacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.inverse,
    marginBottom: semanticSpacing.xs,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: colors.text.inverse,
    opacity: 0.8,
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomContainer: {
    paddingHorizontal: semanticSpacing.lg,
    paddingBottom: semanticSpacing.xl,
    alignItems: 'center',
  },
  getStartedButton: {
    width: '100%',
    backgroundColor: colors.background.primary,
    marginBottom: semanticSpacing.lg,
  },
  indicatorContainer: {
    flexDirection: 'row',
    gap: semanticSpacing.sm,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  indicatorActive: {
    backgroundColor: colors.text.inverse,
    width: 24,
  },
});