import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ActivityPricing } from '../../types';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { semanticSpacing } from '../../theme/spacing';

interface PricingDisplayProps {
  pricing: ActivityPricing;
  variant?: 'default' | 'detailed' | 'compact';
}

export const PricingDisplay: React.FC<PricingDisplayProps> = ({ 
  pricing, 
  variant = 'default' 
}) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getPricingIcon = (model: string) => {
    switch (model) {
      case 'free':
        return 'gift-outline';
      case 'fixed':
        return 'pricetag-outline';
      case 'pitch_in':
        return 'people-outline';
      case 'tiered':
        return 'layers-outline';
      case 'donation':
        return 'heart-outline';
      default:
        return 'pricetag-outline';
    }
  };

  const getPricingColor = (model: string) => {
    switch (model) {
      case 'free':
        return colors.success[500];
      case 'fixed':
        return colors.primary[500];
      case 'pitch_in':
        return colors.info[500];
      case 'tiered':
        return colors.warning[500];
      case 'donation':
        return colors.accent[500];
      default:
        return colors.primary[500];
    }
  };

  const getBudgetTierColor = (price: number) => {
    if (price < 200) return colors.budgetTiers['$'];
    if (price < 500) return colors.budgetTiers['$$'];
    if (price < 1500) return colors.budgetTiers['$$$'];
    if (price < 5000) return colors.budgetTiers['$$$$'];
    return colors.budgetTiers['$$$$$'];
  };

  const getBudgetTierSymbol = (price: number) => {
    if (price < 200) return '$';
    if (price < 500) return '$$';
    if (price < 1500) return '$$$';
    if (price < 5000) return '$$$$';
    return '$$$$$';
  };

  const mainPrice = pricing.pricePerPerson || pricing.basePrice || 0;
  const pricingColor = getPricingColor(pricing.model);
  const budgetColor = getBudgetTierColor(mainPrice);
  const budgetSymbol = getBudgetTierSymbol(mainPrice);

  if (variant === 'compact') {
    return (
      <View style={styles.compactContainer}>
        {pricing.model === 'free' ? (
          <Text style={[styles.compactPrice, { color: colors.success[500] }]}>
            FREE
          </Text>
        ) : (
          <Text style={[styles.compactPrice, { color: budgetColor }]}>
            {formatPrice(mainPrice, pricing.currency)}
          </Text>
        )}
      </View>
    );
  }

  if (variant === 'detailed') {
    return (
      <View style={styles.detailedContainer}>
        {/* Header */}
        <View style={styles.detailedHeader}>
          <View style={styles.pricingTypeContainer}>
            <Ionicons 
              name={getPricingIcon(pricing.model) as any} 
              size={20} 
              color={pricingColor} 
            />
            <Text style={[styles.pricingType, { color: pricingColor }]}>
              {pricing.model.replace('_', ' ').toUpperCase()}
            </Text>
          </View>
          
          <View style={[styles.budgetTierBadge, { backgroundColor: budgetColor }]}>
            <Text style={styles.budgetTierText}>{budgetSymbol}</Text>
          </View>
        </View>

        {/* Main Price */}
        <View style={styles.mainPriceContainer}>
          {pricing.model === 'free' ? (
            <Text style={[styles.mainPrice, { color: colors.success[500] }]}>
              FREE
            </Text>
          ) : (
            <>
              <Text style={styles.mainPrice}>
                {formatPrice(mainPrice, pricing.currency)}
              </Text>
              <Text style={styles.priceUnit}>per person</Text>
            </>
          )}
        </View>

        {/* Budget Breakdown */}
        {pricing.budgetBreakdown && pricing.budgetBreakdown.length > 0 && (
          <View style={styles.breakdownContainer}>
            <Text style={styles.breakdownTitle}>What's Included:</Text>
            {pricing.budgetBreakdown.map((item, index) => (
              <View key={index} style={styles.breakdownItem}>
                <Text style={styles.breakdownItemName}>{item.item}</Text>
                <Text style={styles.breakdownItemCost}>
                  {formatPrice(item.cost, pricing.currency)}
                </Text>
              </View>
            ))}
            
            {pricing.totalBudget && (
              <View style={[styles.breakdownItem, styles.breakdownTotal]}>
                <Text style={styles.breakdownTotalText}>Total Budget</Text>
                <Text style={styles.breakdownTotalCost}>
                  {formatPrice(pricing.totalBudget, pricing.currency)}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Discounts */}
        {(pricing.earlyBirdDiscount || pricing.groupDiscounts) && (
          <View style={styles.discountsContainer}>
            <Text style={styles.discountsTitle}>Available Discounts:</Text>
            
            {pricing.earlyBirdDiscount && (
              <View style={styles.discountItem}>
                <Ionicons name="time-outline" size={16} color={colors.warning[500]} />
                <Text style={styles.discountText}>
                  {pricing.earlyBirdDiscount.percentage}% off early bird
                </Text>
              </View>
            )}
            
            {pricing.groupDiscounts && pricing.groupDiscounts.map((discount, index) => (
              <View key={index} style={styles.discountItem}>
                <Ionicons name="people-outline" size={16} color={colors.info[500]} />
                <Text style={styles.discountText}>
                  {discount.discount}% off for {discount.minSize}+ people
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }

  // Default variant
  return (
    <View style={styles.defaultContainer}>
      <View style={styles.priceHeader}>
        <View style={styles.pricingInfo}>
          <Ionicons 
            name={getPricingIcon(pricing.model) as any} 
            size={16} 
            color={pricingColor} 
          />
          <Text style={[styles.pricingModel, { color: pricingColor }]}>
            {pricing.model.replace('_', ' ')}
          </Text>
        </View>
        
        <View style={[styles.budgetBadge, { backgroundColor: budgetColor }]}>
          <Text style={styles.budgetText}>{budgetSymbol}</Text>
        </View>
      </View>
      
      <View style={styles.priceDisplay}>
        {pricing.model === 'free' ? (
          <Text style={[styles.price, { color: colors.success[500] }]}>
            FREE
          </Text>
        ) : (
          <>
            <Text style={styles.priceLabel}>From</Text>
            <Text style={styles.price}>
              {formatPrice(mainPrice, pricing.currency)}
            </Text>
            <Text style={styles.priceUnit}>per person</Text>
          </>
        )}
      </View>
      
      {pricing.earlyBirdDiscount && (
        <View style={styles.discountBanner}>
          <Ionicons name="flash" size={14} color={colors.warning[600]} />
          <Text style={styles.discountBannerText}>
            Save {pricing.earlyBirdDiscount.percentage}% - Early Bird!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // Compact variant
  compactContainer: {
    alignItems: 'flex-end',
  },
  compactPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Default variant
  defaultContainer: {
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    padding: semanticSpacing.md,
  },
  priceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: semanticSpacing.sm,
  },
  pricingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pricingModel: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: semanticSpacing.xs,
    textTransform: 'capitalize',
  },
  budgetBadge: {
    paddingHorizontal: semanticSpacing.sm,
    paddingVertical: semanticSpacing.xs,
    borderRadius: 8,
  },
  budgetText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.inverse,
  },
  priceDisplay: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: semanticSpacing.xs,
  },
  priceLabel: {
    fontSize: 12,
    color: colors.text.secondary,
    marginRight: semanticSpacing.xs,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginRight: semanticSpacing.xs,
  },
  priceUnit: {
    fontSize: 12,
    color: colors.text.secondary,
  },
  discountBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.warning[50],
    paddingHorizontal: semanticSpacing.sm,
    paddingVertical: semanticSpacing.xs,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: colors.warning[500],
  },
  discountBannerText: {
    fontSize: 12,
    color: colors.warning[700],
    fontWeight: '600',
    marginLeft: semanticSpacing.xs,
  },

  // Detailed variant
  detailedContainer: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    padding: semanticSpacing.lg,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  detailedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: semanticSpacing.lg,
  },
  pricingTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pricingType: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: semanticSpacing.sm,
    letterSpacing: 0.5,
  },
  budgetTierBadge: {
    paddingHorizontal: semanticSpacing.md,
    paddingVertical: semanticSpacing.sm,
    borderRadius: 12,
  },
  budgetTierText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.inverse,
  },
  mainPriceContainer: {
    alignItems: 'center',
    marginBottom: semanticSpacing.xl,
  },
  mainPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  breakdownContainer: {
    marginBottom: semanticSpacing.lg,
  },
  breakdownTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: semanticSpacing.md,
  },
  breakdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: semanticSpacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  breakdownItemName: {
    fontSize: 14,
    color: colors.text.secondary,
    flex: 1,
  },
  breakdownItemCost: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
  },
  breakdownTotal: {
    borderBottomWidth: 0,
    borderTopWidth: 2,
    borderTopColor: colors.primary[500],
    marginTop: semanticSpacing.sm,
    paddingTop: semanticSpacing.md,
  },
  breakdownTotalText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
    flex: 1,
  },
  breakdownTotalCost: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary[500],
  },
  discountsContainer: {
    backgroundColor: colors.success[50],
    borderRadius: 12,
    padding: semanticSpacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.success[500],
  },
  discountsTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.success[700],
    marginBottom: semanticSpacing.sm,
  },
  discountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: semanticSpacing.xs,
  },
  discountText: {
    fontSize: 14,
    color: colors.success[700],
    marginLeft: semanticSpacing.sm,
    fontWeight: '500',
  },
});