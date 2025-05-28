import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useTheme, useCommonStyles } from '../../src/theme/ThemeProvider';
import { Card, Button } from '../../src/components/ui';
import { mockActivities } from '../../src/data/mock/activities';
import { getUserById } from '../../src/data/mock/users';
import { Ionicons } from '@expo/vector-icons';

export default function ActivityDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  const commonStyles = useCommonStyles();

  // Find the activity by ID
  const activity = mockActivities.find(item => item.id === id);
  
  // Get host information
  const host = activity ? getUserById(activity.hostId) : null;

  if (!activity) {
    return (
      <View style={[commonStyles.container, commonStyles.center]}>
        <Text style={[commonStyles.heading, { color: theme.colors.text }]}>
          Activity Not Found
        </Text>
        <Button
          title="Go Back"
          onPress={() => router.back()}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }

  return (
    <ScrollView style={commonStyles.container} showsVerticalScrollIndicator={false}>
      {/* Cover Image */}
      <Image source={{ uri: activity.media.coverImage }} style={styles.coverImage} />
      
      {/* Content */}
      <View style={[commonStyles.screenContainer, styles.content]}>
        {/* Title and Price */}
        <View style={[commonStyles.row, commonStyles.spaceBetween, styles.header]}>
          <View style={commonStyles.flex1}>
            <Text style={[commonStyles.heading, styles.title]}>
              {activity.title}
            </Text>
            <Text style={[commonStyles.body, styles.shortDescription]}>
              {activity.shortDescription}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={[styles.price, { color: theme.colors.primary }]}>
              ${activity.pricing.pricePerPerson?.toLocaleString() || 'TBD'}
            </Text>
            <Text style={[commonStyles.caption, { color: theme.colors.textSecondary }]}>
              per person
            </Text>
          </View>
        </View>

        {/* Meta Information */}
        <View style={styles.metaContainer}>
          <View style={[commonStyles.row, styles.metaItem]}>
            <Ionicons name="location-outline" size={20} color={theme.colors.primary} />
            <Text style={[commonStyles.body, { marginLeft: 8 }]}>
              {activity.location.venue?.address || 'Location TBD'}
            </Text>
          </View>
          
          <View style={[commonStyles.row, styles.metaItem]}>
            <Ionicons name="people-outline" size={20} color={theme.colors.primary} />
            <Text style={[commonStyles.body, { marginLeft: 8 }]}>
              {activity.participants.currentParticipants}/{activity.participants.maxParticipants} participants
            </Text>
          </View>
          
          <View style={[commonStyles.row, styles.metaItem]}>
            <Ionicons name="time-outline" size={20} color={theme.colors.primary} />
            <Text style={[commonStyles.body, { marginLeft: 8 }]}>
              {new Date(activity.schedule.startDate).toLocaleDateString()} at{' '}
              {new Date(activity.schedule.startDate).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </Text>
          </View>
        </View>

        {/* Description */}
        <Card style={styles.descriptionCard}>
          <Text style={[commonStyles.subheading, styles.sectionTitle]}>
            About This Experience
          </Text>
          <Text style={[commonStyles.body, styles.description]}>
            {activity.description}
          </Text>
        </Card>

        {/* Host Information */}
        {host && (
          <Card style={styles.hostCard}>
            <Text style={[commonStyles.subheading, styles.sectionTitle]}>
              Your Host
            </Text>
            <View style={[commonStyles.row, styles.hostInfo]}>
              <Image
                source={{ uri: host.profilePhoto || 'https://via.placeholder.com/50' }}
                style={styles.hostAvatar}
              />
              <View style={commonStyles.flex1}>
                <Text style={[commonStyles.body, styles.hostName]}>
                  {host.firstName} {host.lastName}
                </Text>
                <Text style={[commonStyles.caption, { color: theme.colors.textSecondary }]}>
                  Host since {new Date(host.createdAt).getFullYear()}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.messageButton}
                onPress={() => router.push(`/chat/${host.id}` as any)}
              >
                <Ionicons name="chatbubble-outline" size={20} color={theme.colors.primary} />
              </TouchableOpacity>
            </View>
          </Card>
        )}

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <Button
            title="Join Activity"
            onPress={() => {
              // Handle join activity logic
              console.log('Joining activity:', activity.id);
            }}
            style={styles.joinButton}
          />
          <TouchableOpacity
            style={[styles.favoriteButton, { borderColor: theme.colors.border }]}
            onPress={() => {
              // Handle favorite logic
              console.log('Adding to favorites:', activity.id);
            }}
          >
            <Ionicons name="heart-outline" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    paddingTop: 20,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    marginBottom: 8,
  },
  shortDescription: {
    opacity: 0.8,
  },
  priceContainer: {
    alignItems: 'flex-end',
    marginLeft: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
  },
  metaContainer: {
    marginBottom: 24,
  },
  metaItem: {
    marginBottom: 12,
    alignItems: 'center',
  },
  descriptionCard: {
    marginBottom: 20,
  },
  sectionTitle: {
    marginBottom: 12,
    fontWeight: '600',
  },
  description: {
    lineHeight: 22,
  },
  hostCard: {
    marginBottom: 24,
  },
  hostInfo: {
    alignItems: 'center',
  },
  hostAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  hostName: {
    fontWeight: '600',
    marginBottom: 2,
  },
  messageButton: {
    padding: 8,
  },
  actionContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  joinButton: {
    flex: 1,
    marginRight: 12,
  },
  favoriteButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});