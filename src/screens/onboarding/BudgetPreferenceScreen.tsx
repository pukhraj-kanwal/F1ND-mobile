import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../components/ui';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { semanticSpacing } from '../../theme/spacing';

interface BudgetPreferenceScreenProps {
  navigation: any;
}

type BudgetTier = '$' | '$$' | '$$$' | '$$$$' | '$$$$$';

interface BudgetOption {
  tier: BudgetTier;
  title: string;
  description: string;
  priceRange: string;
  examples: string[];
  color: string;
  icon: string;
}

const budgetOptions: BudgetOption[] = [
  {
    tier: '$',
    title: 'Accessible',
    description: 'Quality experiences within reach',
    priceRange: '$50 - $200',
    examples: ['Wine tastings', 'Local tours', 'Cooking classes'],
    color: colors.budgetTiers['$'],
    icon: 'leaf-outline',
  },
  {
    tier: '$$',
    title: 'Moderate',
    description: 'Premium experiences with great value',
    priceRange: '$200 - $500',
    examples: ['Fine dining', 'Spa days', 'Concert tickets'],
    color: colors.budgetTiers['$$'],
    icon: 'star-outline',
  },
  {
    tier: '$$$',
    title: 'Premium',
    description: 'Elevated luxury experiences',
    priceRange: '$500 - $1,500',
    examples: ['Michelin dining', 'Private tours', 'Yacht parties'],
    color: colors.budgetTiers['$$$'],
    icon: 'diamond-outline',
  },
  {
    tier: '$$$$',
    title: 'Luxury',
    description: 'Exclusive high-end experiences',
    priceRange: '$1,500 - $5,000',
    examples: ['Private jets', 'VIP events', 'Luxury retreats'],
    color: colors.budgetTiers['$$$$'],
    icon: 'trophy-outline',
  },
  {
    tier: '$$$$$',
    title: 'Ultra-Luxury',
    description: 'The pinnacle of exclusive experiences',
    priceRange: '$5,000+',
    examples: ['Monaco GP', 'Private islands', 'Celebrity events'],
    color: colors.budgetTiers['$$$$$'],
    icon: 'crown-outline',
  },
];

export const BudgetPreferenceScreen: React.FC<BudgetPreferenceScreenProps> = ({ navigation }) => {
  const [selectedBudget, setSelectedBudget] = useState<BudgetTier | null>(null);

  const handleContinue = () => {
    if (!selectedBudget) {
      // Could show an alert or just continue with default
      navigation.navigate('ProfileSetup');
      return;
    }
    
    // Store selected budget preference
    console.log('Selected budget tier:', selectedBudget);
    navigation.navigate('ProfileSetup');
  };

  const handleSkip = () => {
    navigation.navigate('ProfileSetup');
  };

  const renderBudgetOption = (option: BudgetOption) => {
    const isSelected = selectedBudget === option.tier;
    
    return (
      <TouchableOpacity
        key={option.tier}
        style={[
          styles.budgetCard,
          isSelected && styles.budgetCardSelected,
          { borderLeftColor: option.color }
        ]}
        onPress={() => setSelectedBudget(option.tier)}
        activeOpacity={0.8}
      >
        <View style={styles.budgetHeader}>
          <View style={[styles.budgetIcon, { backgroundColor: option.color + '20' }]}>
            <Ionicons name={option.icon as any} size={24} color={option.color} />
          </View>
          
          <View style={styles.budgetInfo}>
            <View style={styles.budgetTitleRow}>
              <Text style={[styles.budgetTier, { color: option.color }]}>
                {option.tier}
              </Text>
              <Text style={[
                styles.budgetTitle,
                isSelected && styles.budgetTitleSelected
              ]}>
                {option.title}
              </Text>
            </View>
            
            <Text style={[
              styles.budgetDescription,
              isSelected && styles.budgetDescriptionSelected
            ]}>
              {option.description}
            </Text>
            
            <Text style={[
              styles.priceRange,
              isSelected && styles.priceRangeSelected
            ]}>
              {option.priceRange}
            </Text>
          </View>
          
          {isSelected && (
            <View style={styles.selectedIndicator}>
              <Ionicons name="checkmark-circle" size={24} color={colors.primary[500]} />
            </View>
          )}
        </View>
        
        <View style={styles.examplesContainer}>
          <Text style={[
            styles.examplesLabel,
            isSelected && styles.examplesLabelSelected
          ]}>
            Examples:
          </Text>
          <Text style={[
            styles.examples,
            isSelected && styles.examplesSelected
          ]}>
            {option.examples.join(' • ')}
          </Text>
        </View>
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
            <Text style={styles.title}>Budget Preference</Text>
            <Text style={styles.subtitle}>
              Choose your preferred spending range for experiences
            </Text>
          </View>
        </View>

        {/* Content */}
        <ScrollView 
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.budgetContainer}>
            {budgetOptions.map(renderBudgetOption)}
          </View>
          
          <View style={styles.noteContainer}>
            <Ionicons name="information-circle-outline" size={20} color={colors.text.inverse} />
            <Text style={styles.noteText}>
              You can always change this preference later in your profile settings.
            </Text>
          </View>
        </ScrollView>

        {/* Bottom Actions */}
        <View style={styles.bottomContainer}>
          <Button
            title="Continue"
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
  budgetContainer: {
    gap: semanticSpacing.md,
    marginBottom: semanticSpacing.xl,
  },
  budgetCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    padding: semanticSpacing.lg,
    borderLeftWidth: 4,
    shadowColor: colors.secondary[900],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  budgetCardSelected: {
    backgroundColor: colors.primary[50],
    borderColor: colors.primary[500],
    borderWidth: 2,
    borderLeftWidth: 4,
  },
  budgetHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: semanticSpacing.md,
  },
  budgetIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: semanticSpacing.md,
  },
  budgetInfo: {
    flex: 1,
  },
  budgetTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: semanticSpacing.xs,
  },
  budgetTier: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: semanticSpacing.sm,
  },
  budgetTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.primary,
  },
  budgetTitleSelected: {
    color: colors.primary[700],
  },
  budgetDescription: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: semanticSpacing.xs,
  },
  budgetDescriptionSelected: {
    color: colors.primary[600],
  },
  priceRange: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  priceRangeSelected: {
    color: colors.primary[700],
  },
  selectedIndicator: {
    marginLeft: semanticSpacing.sm,
  },
  examplesContainer: {
    paddingTop: semanticSpacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border.light,
  },
  examplesLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text.secondary,
    marginBottom: semanticSpacing.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  examplesLabelSelected: {
    color: colors.primary[600],
  },
  examples: {
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 20,
  },
  examplesSelected: {
    color: colors.primary[600],
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: semanticSpacing.md,
    marginBottom: semanticSpacing.lg,
  },
  noteText: {
    fontSize: 14,
    color: colors.text.inverse,
    opacity: 0.8,
    marginLeft: semanticSpacing.sm,
    flex: 1,
    lineHeight: 20,
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