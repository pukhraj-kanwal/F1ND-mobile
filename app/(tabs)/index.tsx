import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';
import { useTheme, useCommonStyles } from '../../src/theme/ThemeProvider';
import { Card, Button } from '../../src/components/ui';
import { mockActivities, mockCategories, getFeaturedActivities } from '../../src/data/mock';
import { Ionicons } from '@expo/vector-icons';

export default function DiscoverScreen() {
  const { theme } = useTheme();
  const commonStyles = useCommonStyles();
  const featuredActivities = getFeaturedActivities();

  const renderCategoryItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[styles.categoryItem, { backgroundColor: item.color + '20' }]}
      onPress={() => {
        // Navigate to category filter
        router.push(`/search?category=${item.id}`);
      }}
    >
      <Text style={styles.categoryEmoji}>{item.icon}</Text>
      <Text style={[styles.categoryName, { color: theme.colors.text }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderActivityCard = ({ item }: { item: any }) => (
    <Card
      style={styles.activityCard}
      pressable
      onPress={() => router.push(`/activity/${item.id}`)}
    >
      <Image source={{ uri: item.media.coverImage }} style={styles.activityImage} />
      <View style={styles.activityContent}>
        <View style={commonStyles.row}>
          <View style={commonStyles.flex1}>
            <Text style={[commonStyles.subheading, styles.activityTitle]} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={[commonStyles.caption, styles.activityDescription]} numberOfLines={2}>
              {item.shortDescription}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={[styles.price, { color: theme.colors.primary }]}>
              ${item.pricing.pricePerPerson?.toLocaleString() || 'TBD'}
            </Text>
          </View>
        </View>
        
        <View style={[commonStyles.row, styles.activityMeta]}>
          <View style={commonStyles.row}>
            <Ionicons name="location-outline" size={16} color={theme.colors.textSecondary} />
            <Text style={[commonStyles.caption, { marginLeft: 4 }]}>
              {item.location.venue?.address.split(',')[0] || 'Location TBD'}
            </Text>
          </View>
          <View style={commonStyles.row}>
            <Ionicons name="people-outline" size={16} color={theme.colors.textSecondary} />
            <Text style={[commonStyles.caption, { marginLeft: 4 }]}>
              {item.participants.currentParticipants}/{item.participants.maxParticipants}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <ScrollView style={commonStyles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={[commonStyles.screenContainer, styles.header]}>
        <Text style={[commonStyles.heading, styles.welcomeText]}>
          Discover Luxury Experiences
        </Text>
        <Text style={[commonStyles.body, styles.subtitle]}>
          Find exclusive activities and connect with like-minded people
        </Text>
      </View>

      {/* Categories Section */}
      <View style={styles.section}>
        <View style={[commonStyles.row, commonStyles.spaceBetween, styles.sectionHeader]}>
          <Text style={[commonStyles.subheading, styles.sectionTitle]}>
            Categories
          </Text>
          <TouchableOpacity onPress={() => router.push('/search')}>
            <Text style={[styles.seeAll, { color: theme.colors.primary }]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={mockCategories.slice(0, 6)}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      {/* Featured Activities Section */}
      <View style={styles.section}>
        <View style={[commonStyles.row, commonStyles.spaceBetween, styles.sectionHeader]}>
          <Text style={[commonStyles.subheading, styles.sectionTitle]}>
            Featured Activities
          </Text>
          <TouchableOpacity onPress={() => router.push('/search?featured=true')}>
            <Text style={[styles.seeAll, { color: theme.colors.primary }]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={featuredActivities}
          renderItem={renderActivityCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.activitiesList}
        />
      </View>

      {/* Recent Activities Section */}
      <View style={styles.section}>
        <View style={[commonStyles.row, commonStyles.spaceBetween, styles.sectionHeader]}>
          <Text style={[commonStyles.subheading, styles.sectionTitle]}>
            Recently Added
          </Text>
          <TouchableOpacity onPress={() => router.push('/search?sort=newest')}>
            <Text style={[styles.seeAll, { color: theme.colors.primary }]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={mockActivities.slice(0, 3)}
          renderItem={renderActivityCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.activitiesList}
        />
      </View>

      {/* CTA Section */}
      <View style={[styles.section, styles.ctaSection]}>
        <Text style={[commonStyles.subheading, styles.ctaTitle]}>
          Ready to Host Your Own Experience?
        </Text>
        <Text style={[commonStyles.body, styles.ctaDescription]}>
          Share your passion and create unforgettable moments for others
        </Text>
        <Button
          title="Create Activity"
          onPress={() => router.push('/(tabs)/create')}
          style={styles.ctaButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  welcomeText: {
    marginBottom: 8,
  },
  subtitle: {
    opacity: 0.8,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: '600',
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '500',
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  categoryEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  activitiesList: {
    paddingHorizontal: 16,
  },
  activityCard: {
    width: 280,
    marginRight: 16,
    padding: 0,
    overflow: 'hidden',
  },
  activityImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  activityContent: {
    padding: 16,
  },
  activityTitle: {
    marginBottom: 4,
    lineHeight: 20,
  },
  activityDescription: {
    marginBottom: 12,
    lineHeight: 16,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
  },
  activityMeta: {
    justifyContent: 'space-between',
    marginTop: 8,
  },
  ctaSection: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
    marginBottom: 32,
  },
  ctaTitle: {
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaDescription: {
    textAlign: 'center',
    opacity: 0.8,
    marginBottom: 24,
  },
  ctaButton: {
    minWidth: 200,
  },
});