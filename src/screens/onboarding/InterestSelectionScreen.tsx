import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../components/ui';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { semanticSpacing } from '../../theme/spacing';
import { mockCategories, Category } from '../../data/mock/categories';

interface InterestSelectionScreenProps {
  navigation: any;
}

export const InterestSelectionScreen: React.FC<InterestSelectionScreenProps> = ({ navigation }) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (categoryId: string) => {
    setSelectedInterests(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handleContinue = () => {
    if (selectedInterests.length === 0) {
      // Could show an alert or just continue
      navigation.navigate('BudgetPreference');
      return;
    }
    
    // Store selected interests (in real app, would save to user profile)
    console.log('Selected interests:', selectedInterests);
    navigation.navigate('BudgetPreference');
  };

  const handleSkip = () => {
    navigation.navigate('BudgetPreference');
  };

  const renderInterestCard = ({ item }: { item: Category }) => {
    const isSelected = selectedInterests.includes(item.id);
    
    return (
      <TouchableOpacity
        style={[
          styles.interestCard,
          isSelected && styles.interestCardSelected,
          { borderColor: item.color }
        ]}
        onPress={() => toggleInterest(item.id)}
        activeOpacity={0.8}
      >
        <View style={[styles.iconContainer, { backgroundColor: item.color + '20' }]}>
          <Text style={[styles.categoryIcon, { color: item.color }]}>
            {item.icon}
          </Text>
        </View>
        
        <Text style={[
          styles.interestTitle,
          isSelected && styles.interestTitleSelected
        ]}>
          {item.name}
        </Text>
        
        <Text style={[
          styles.interestDescription,
          isSelected && styles.interestDescriptionSelected
        ]}>
          {item.description}
        </Text>
        
        {isSelected && (
          <View style={styles.selectedIndicator}>
            <Ionicons name="checkmark-circle" size={24} color={colors.primary[500]} />
          </View>
        )}
      </TouchableOpacity>
    );
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
            <Text style={styles.title}>What interests you?</Text>
            <Text style={styles.subtitle}>
              Select categories that match your lifestyle and preferences
            </Text>
          </View>
        </View>

        {/* Selected Count */}
        <View style={styles.selectedCountContainer}>
          <Text style={styles.selectedCountText}>
            {selectedInterests.length} selected
          </Text>
        </View>

        {/* Interests Grid */}
        <View style={styles.contentContainer}>
          <FlatList
            data={mockCategories}
            renderItem={renderInterestCard}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.gridContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {/* Bottom Actions */}
        <View style={styles.bottomContainer}>
          <Button
            title={`Continue${selectedInterests.length > 0 ? ` (${selectedInterests.length})` : ''}`}
            onPress={handleContinue}
            style={styles.continueButton}
            rightIcon={
              <Ionicons name="arrow-forward" size={20} color={colors.text.inverse} />
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
            <View style={[styles.indicator, styles.indicatorActive]} />
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
  selectedCountContainer: {
    paddingHorizontal: semanticSpacing.lg,
    marginBottom: semanticSpacing.md,
  },
  selectedCountText: {
    fontSize: 14,
    color: colors.text.inverse,
    fontWeight: '600',
    opacity: 0.8,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: semanticSpacing.lg,
  },
  gridContainer: {
    paddingBottom: semanticSpacing.lg,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: semanticSpacing.md,
  },
  interestCard: {
    width: '48%',
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    padding: semanticSpacing.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: colors.secondary[900],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    position: 'relative',
  },
  interestCardSelected: {
    backgroundColor: colors.primary[50],
    borderColor: colors.primary[500],
    transform: [{ scale: 0.98 }],
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: semanticSpacing.md,
  },
  categoryIcon: {
    fontSize: 28,
  },
  interestTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: semanticSpacing.xs,
  },
  interestTitleSelected: {
    color: colors.primary[700],
  },
  interestDescription: {
    fontSize: 12,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 16,
  },
  interestDescriptionSelected: {
    color: colors.primary[600],
  },
  selectedIndicator: {
    position: 'absolute',
    top: semanticSpacing.sm,
    right: semanticSpacing.sm,
  },
  bottomContainer: {
    paddingHorizontal: semanticSpacing.lg,
    paddingBottom: semanticSpacing.xl,
    alignItems: 'center',
  },
  continueButton: {
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