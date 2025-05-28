import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { Button } from '../../components/ui';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { semanticSpacing } from '../../theme/spacing';

interface LocationPermissionScreenProps {
  navigation: any;
}

export const LocationPermissionScreen: React.FC<LocationPermissionScreenProps> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEnableLocation = async () => {
    setIsLoading(true);
    
    try {
      // Request location permissions
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status === 'granted') {
        // Get current location
        const location = await Location.getCurrentPositionAsync({});
        console.log('Location granted:', location);
        
        // Navigate to next screen
        navigation.navigate('InterestSelection');
      } else {
        Alert.alert(
          'Location Access Denied',
          'Location access helps us show you nearby activities and events. You can enable this later in Settings.',
          [
            { text: 'Skip for Now', onPress: () => navigation.navigate('InterestSelection') },
            { text: 'Try Again', onPress: handleEnableLocation },
          ]
        );
      }
    } catch (error) {
      console.error('Location error:', error);
      Alert.alert(
        'Location Error',
        'Unable to access location. You can continue without location services.',
        [
          { text: 'Continue', onPress: () => navigation.navigate('InterestSelection') },
        ]
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkip = () => {
    navigation.navigate('InterestSelection');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.gradients.primary[0], colors.gradients.primary[1]]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Content */}
        <View style={styles.content}>
          {/* Icon */}
          <View style={styles.iconContainer}>
            <View style={styles.iconBackground}>
              <Ionicons name="location-outline" size={64} color={colors.primary[500]} />
            </View>
            <View style={styles.iconAccent}>
              <Ionicons name="pulse-outline" size={32} color={colors.primary[400]} />
            </View>
          </View>

          {/* Text Content */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Enable Location</Text>
            <Text style={styles.subtitle}>
              Discover amazing experiences happening near you
            </Text>
            <Text style={styles.description}>
              We'll use your location to show you the best activities, events, and experiences in your area. Your location data is kept private and secure.
            </Text>
          </View>

          {/* Benefits */}
          <View style={styles.benefitsContainer}>
            <View style={styles.benefit}>
              <View style={styles.benefitIcon}>
                <Ionicons name="compass-outline" size={24} color={colors.text.inverse} />
              </View>
              <Text style={styles.benefitText}>Find nearby luxury experiences</Text>
            </View>

            <View style={styles.benefit}>
              <View style={styles.benefitIcon}>
                <Ionicons name="time-outline" size={24} color={colors.text.inverse} />
              </View>
              <Text style={styles.benefitText}>Get real-time activity updates</Text>
            </View>

            <View style={styles.benefit}>
              <View style={styles.benefitIcon}>
                <Ionicons name="people-outline" size={24} color={colors.text.inverse} />
              </View>
              <Text style={styles.benefitText}>Connect with local community</Text>
            </View>
          </View>
        </View>

        {/* Bottom Actions */}
        <View style={styles.bottomContainer}>
          <Button
            title="Enable Location"
            onPress={handleEnableLocation}
            loading={isLoading}
            style={styles.enableButton}
            rightIcon={
              <Ionicons name="location" size={20} color={colors.text.inverse} />
            }
          />
          
          <Button
            title="Skip for Now"
            onPress={handleSkip}
            variant="ghost"
            textStyle={styles.skipText}
            style={styles.skipButton}
          />
          
          <View style={styles.indicatorContainer}>
            <View style={styles.indicator} />
            <View style={[styles.indicator, styles.indicatorActive]} />
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
  content: {
    flex: 1,
    paddingHorizontal: semanticSpacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'relative',
    marginBottom: semanticSpacing.xxl,
  },
  iconBackground: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.secondary[900],
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  iconAccent: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.secondary[900],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: semanticSpacing.xxl,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text.inverse,
    textAlign: 'center',
    marginBottom: semanticSpacing.md,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.inverse,
    textAlign: 'center',
    marginBottom: semanticSpacing.lg,
    opacity: 0.9,
  },
  description: {
    fontSize: 16,
    color: colors.text.inverse,
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 24,
    paddingHorizontal: semanticSpacing.md,
  },
  benefitsContainer: {
    gap: semanticSpacing.lg,
    width: '100%',
  },
  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: semanticSpacing.lg,
  },
  benefitIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: semanticSpacing.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  benefitText: {
    fontSize: 16,
    color: colors.text.inverse,
    fontWeight: '500',
    flex: 1,
  },
  bottomContainer: {
    paddingHorizontal: semanticSpacing.lg,
    paddingBottom: semanticSpacing.xl,
    alignItems: 'center',
  },
  enableButton: {
    width: '100%',
    backgroundColor: colors.background.primary,
    marginBottom: semanticSpacing.md,
  },
  skipButton: {
    marginBottom: semanticSpacing.lg,
  },
  skipText: {
    color: colors.text.inverse,
    fontSize: 16,
    fontWeight: '600',
    opacity: 0.8,
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