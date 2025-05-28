import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Button, Input } from '../../components/ui';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { semanticSpacing } from '../../theme/spacing';

interface ProfileSetupScreenProps {
  navigation: any;
}

interface ProfileData {
  displayName: string;
  bio: string;
  profilePhoto: string | null;
}

export const ProfileSetupScreen: React.FC<ProfileSetupScreenProps> = ({ navigation }) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    displayName: '',
    bio: '',
    profilePhoto: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateProfileData = (field: keyof ProfileData, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleImagePicker = async () => {
    try {
      // Request permission
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (permissionResult.granted === false) {
        Alert.alert('Permission Required', 'Permission to access camera roll is required!');
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setProfileData(prev => ({ 
          ...prev, 
          profilePhoto: result.assets[0].uri 
        }));
      }
    } catch (error) {
      console.error('Image picker error:', error);
      Alert.alert('Error', 'Failed to pick image');
    }
  };

  const handleTakePhoto = async () => {
    try {
      // Request permission
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      
      if (permissionResult.granted === false) {
        Alert.alert('Permission Required', 'Permission to access camera is required!');
        return;
      }

      // Launch camera
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setProfileData(prev => ({ 
          ...prev, 
          profilePhoto: result.assets[0].uri 
        }));
      }
    } catch (error) {
      console.error('Camera error:', error);
      Alert.alert('Error', 'Failed to take photo');
    }
  };

  const showImageOptions = () => {
    Alert.alert(
      'Profile Photo',
      'Choose how you\'d like to add your photo',
      [
        { text: 'Camera', onPress: handleTakePhoto },
        { text: 'Photo Library', onPress: handleImagePicker },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleComplete = async () => {
    if (!profileData.displayName.trim()) {
      Alert.alert('Display Name Required', 'Please enter a display name to continue');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to save profile
    setTimeout(() => {
      setIsLoading(false);
      console.log('Profile setup completed:', profileData);
      navigation.replace('MainTabs');
    }, 2000);
  };

  const handleSkip = () => {
    navigation.replace('MainTabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.gradients.primary[0], colors.gradients.primary[1]]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={colors.text.inverse} />
          </TouchableOpacity>
          
          <View style={styles.headerContent}>
            <Text style={styles.title}>Complete Your Profile</Text>
            <Text style={styles.subtitle}>
              Let others know who you are
            </Text>
          </View>
        </View>

        {/* Content */}
        <ScrollView 
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            {/* Profile Photo Section */}
            <View style={styles.photoSection}>
              <Text style={styles.sectionTitle}>Profile Photo</Text>
              <Text style={styles.sectionDescription}>
                Add a photo to help others recognize you
              </Text>
              
              <TouchableOpacity 
                style={styles.photoContainer}
                onPress={showImageOptions}
                activeOpacity={0.8}
              >
                {profileData.profilePhoto ? (
                  <Image 
                    source={{ uri: profileData.profilePhoto }} 
                    style={styles.profileImage}
                  />
                ) : (
                  <View style={styles.photoPlaceholder}>
                    <Ionicons name="camera-outline" size={32} color={colors.text.secondary} />
                    <Text style={styles.photoPlaceholderText}>Add Photo</Text>
                  </View>
                )}
                
                <View style={styles.photoEditIcon}>
                  <Ionicons name="pencil" size={16} color={colors.text.inverse} />
                </View>
              </TouchableOpacity>
            </View>

            {/* Form Fields */}
            <View style={styles.formFields}>
              <Input
                label="Display Name"
                value={profileData.displayName}
                onChangeText={(value) => updateProfileData('displayName', value)}
                placeholder="How should others address you?"
                leftIcon={
                  <Ionicons name="person-outline" size={20} color={colors.text.secondary} />
                }
              />

              <Input
                label="Bio (Optional)"
                value={profileData.bio}
                onChangeText={(value) => updateProfileData('bio', value)}
                placeholder="Tell others about yourself..."
                multiline
                numberOfLines={4}
                inputStyle={styles.bioInput}
                leftIcon={
                  <Ionicons name="document-text-outline" size={20} color={colors.text.secondary} />
                }
              />
            </View>

            {/* Privacy Note */}
            <View style={styles.privacyNote}>
              <Ionicons name="shield-checkmark-outline" size={20} color={colors.primary[500]} />
              <Text style={styles.privacyText}>
                Your profile information is secure and you can control who sees what in your privacy settings.
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Actions */}
        <View style={styles.bottomContainer}>
          <Button
            title="Complete Setup"
            onPress={handleComplete}
            loading={isLoading}
            style={styles.completeButton}
            rightIcon={
              <Ionicons name="checkmark" size={20} color={colors.text.inverse} />
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
            <View style={styles.indicator} />
            <View style={styles.indicator} />
            <View style={styles.indicator} />
            <View style={[styles.indicator, styles.indicatorActive]} />
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
  header: {
    paddingHorizontal: semanticSpacing.lg,
    paddingTop: semanticSpacing.md,
    paddingBottom: semanticSpacing.lg,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  backButton: {
    padding: semanticSpacing.sm,
    marginRight: semanticSpacing.md,
    marginTop: semanticSpacing.xs,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text.inverse,
    marginBottom: semanticSpacing.sm,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.inverse,
    opacity: 0.9,
    lineHeight: 22,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: semanticSpacing.lg,
    paddingBottom: semanticSpacing.lg,
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
  photoSection: {
    alignItems: 'center',
    marginBottom: semanticSpacing.xl,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: semanticSpacing.xs,
  },
  sectionDescription: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: semanticSpacing.lg,
  },
  photoContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: colors.primary[500],
  },
  photoPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.background.secondary,
    borderWidth: 2,
    borderColor: colors.border.light,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoPlaceholderText: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: semanticSpacing.xs,
    fontWeight: '600',
  },
  photoEditIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary[500],
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.background.primary,
  },
  formFields: {
    gap: semanticSpacing.lg,
    marginBottom: semanticSpacing.xl,
  },
  bioInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  privacyNote: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.primary[50],
    borderRadius: 12,
    padding: semanticSpacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary[500],
  },
  privacyText: {
    fontSize: 14,
    color: colors.primary[700],
    marginLeft: semanticSpacing.sm,
    flex: 1,
    lineHeight: 20,
  },
  bottomContainer: {
    paddingHorizontal: semanticSpacing.lg,
    paddingBottom: semanticSpacing.xl,
    alignItems: 'center',
  },
  completeButton: {
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