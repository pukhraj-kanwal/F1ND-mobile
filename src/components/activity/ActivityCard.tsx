import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Activity } from '../../types';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { semanticSpacing } from '../../theme/spacing';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - (semanticSpacing.lg * 2);

interface ActivityCardProps {
  activity: Activity;
  onPress: (activity: Activity) => void;
  variant?: 'default' | 'featured' | 'compact';
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ 
  activity, 
  onPress, 
  variant = 'default' 
}) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(date);
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

  const price = activity.pricing.pricePerPerson || activity.pricing.basePrice || 0;
  const budgetColor = getBudgetTierColor(price);
  const budgetSymbol = getBudgetTierSymbol(price);

  if (variant === 'compact') {
    return (
      <TouchableOpacity
        style={styles.compactCard}
        onPress={() => onPress(activity)}
        activeOpacity={0.8}
      >
        <Image source={{ uri: activity.media.coverImage }} style={styles.compactImage} />
        
        <View style={styles.compactContent}>
          <Text style={styles.compactTitle} numberOfLines={2}>
            {activity.title}
          </Text>
          
          <View style={styles.compactMeta}>
            <View style={styles.compactLocation}>
              <Ionicons name="location-outline" size={14} color={colors.text.secondary} />
              <Text style={styles.compactLocationText} numberOfLines={1}>
                {activity.location.venue?.address.split(',')[0]}
              </Text>
            </View>
            
            <Text style={[styles.compactPrice, { color: budgetColor }]}>
              {formatPrice(price, activity.pricing.currency)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[
        styles.card,
        variant === 'featured' && styles.featuredCard
      ]}
      onPress={() => onPress(activity)}
      activeOpacity={0.8}
    >
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: activity.media.coverImage }} style={styles.image} />
        
        {/* Gradient Overlay */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={styles.imageOverlay}
        />
        
        {/* Budget Tier Badge */}
        <View style={[styles.budgetBadge, { backgroundColor: budgetColor }]}>
          <Text style={styles.budgetText}>{budgetSymbol}</Text>
        </View>
        
        {/* Bookmark Button */}
        <TouchableOpacity style={styles.bookmarkButton}>
          <Ionicons name="bookmark-outline" size={20} color={colors.text.inverse} />
        </TouchableOpacity>
        
        {/* Image Info */}
        <View style={styles.imageInfo}>
          <View style={styles.participantsInfo}>
            <Ionicons name="people-outline" size={16} color={colors.text.inverse} />
            <Text style={styles.participantsText}>
              {activity.participants.currentParticipants}/{activity.participants.maxParticipants}
            </Text>
          </View>
          
          <View style={styles.dateInfo}>
            <Ionicons name="calendar-outline" size={16} color={colors.text.inverse} />
            <Text style={styles.dateText}>
              {formatDate(activity.schedule.startDate)}
            </Text>
          </View>
        </View>
      </View>
      
      {/* Content */}
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.categoryContainer}>
            <Text style={[
              styles.category,
              { color: colors.categories[activity.category as keyof typeof colors.categories] || colors.primary[500] }
            ]}>
              {activity.category.replace('_', ' ').toUpperCase()}
            </Text>
          </View>
          
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color={colors.warning[500]} />
            <Text style={styles.rating}>4.8</Text>
          </View>
        </View>
        
        <Text style={styles.title} numberOfLines={2}>
          {activity.title}
        </Text>
        
        <Text style={styles.description} numberOfLines={2}>
          {activity.shortDescription}
        </Text>
        
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={16} color={colors.text.secondary} />
          <Text style={styles.location} numberOfLines={1}>
            {activity.location.venue?.address}
          </Text>
        </View>
        
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>From</Text>
            <Text style={styles.price}>
              {formatPrice(price, activity.pricing.currency)}
            </Text>
            <Text style={styles.priceUnit}>per person</Text>
          </View>
          
          <View style={styles.hostInfo}>
            <View style={styles.hostAvatar}>
              <Ionicons name="person" size={16} color={colors.text.secondary} />
            </View>
            <Text style={styles.hostName}>Host</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    marginBottom: semanticSpacing.lg,
    shadowColor: colors.secondary[900],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  featuredCard: {
    borderWidth: 2,
    borderColor: colors.primary[500],
  },
  imageContainer: {
    position: 'relative',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
  },
  budgetBadge: {
    position: 'absolute',
    top: semanticSpacing.md,
    left: semanticSpacing.md,
    paddingHorizontal: semanticSpacing.sm,
    paddingVertical: semanticSpacing.xs,
    borderRadius: 12,
  },
  budgetText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text.inverse,
  },
  bookmarkButton: {
    position: 'absolute',
    top: semanticSpacing.md,
    right: semanticSpacing.md,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageInfo: {
    position: 'absolute',
    bottom: semanticSpacing.md,
    left: semanticSpacing.md,
    right: semanticSpacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  participantsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: semanticSpacing.sm,
    paddingVertical: semanticSpacing.xs,
    borderRadius: 12,
  },
  participantsText: {
    fontSize: 12,
    color: colors.text.inverse,
    marginLeft: semanticSpacing.xs,
    fontWeight: '600',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: semanticSpacing.sm,
    paddingVertical: semanticSpacing.xs,
    borderRadius: 12,
  },
  dateText: {
    fontSize: 12,
    color: colors.text.inverse,
    marginLeft: semanticSpacing.xs,
    fontWeight: '600',
  },
  content: {
    padding: semanticSpacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: semanticSpacing.sm,
  },
  categoryContainer: {
    flex: 1,
  },
  category: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
    marginLeft: semanticSpacing.xs,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: semanticSpacing.sm,
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 20,
    marginBottom: semanticSpacing.md,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: semanticSpacing.lg,
  },
  location: {
    fontSize: 14,
    color: colors.text.secondary,
    marginLeft: semanticSpacing.xs,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
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
  hostInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hostAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: semanticSpacing.xs,
  },
  hostName: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: '600',
  },
  // Compact variant styles
  compactCard: {
    flexDirection: 'row',
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    marginBottom: semanticSpacing.md,
    shadowColor: colors.secondary[900],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  compactImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  compactContent: {
    flex: 1,
    padding: semanticSpacing.md,
    justifyContent: 'space-between',
  },
  compactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: semanticSpacing.xs,
    lineHeight: 20,
  },
  compactMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  compactLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: semanticSpacing.sm,
  },
  compactLocationText: {
    fontSize: 12,
    color: colors.text.secondary,
    marginLeft: semanticSpacing.xs,
  },
  compactPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});