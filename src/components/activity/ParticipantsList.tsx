import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ActivityParticipants } from '../../types';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { semanticSpacing } from '../../theme/spacing';

interface Participant {
  id: string;
  name: string;
  avatar?: string;
  isHost?: boolean;
  isVerified?: boolean;
  joinedAt: Date;
}

interface ParticipantsListProps {
  participants: ActivityParticipants;
  participantsList?: Participant[];
  variant?: 'default' | 'compact' | 'detailed';
  onParticipantPress?: (participant: Participant) => void;
  showJoinButton?: boolean;
  onJoinPress?: () => void;
}

// Mock participants data for demonstration
const mockParticipants: Participant[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150',
    isHost: true,
    isVerified: true,
    joinedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    isVerified: true,
    joinedAt: new Date('2024-01-16'),
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    isVerified: false,
    joinedAt: new Date('2024-01-17'),
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    isVerified: true,
    joinedAt: new Date('2024-01-18'),
  },
];

export const ParticipantsList: React.FC<ParticipantsListProps> = ({
  participants,
  participantsList = mockParticipants.slice(0, participants.currentParticipants),
  variant = 'default',
  onParticipantPress,
  showJoinButton = false,
  onJoinPress,
}) => {
  const formatJoinDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const getAvailableSpots = () => {
    return participants.maxParticipants - participants.currentParticipants;
  };

  const renderParticipantAvatar = (participant: Participant, size: number = 40) => (
    <View style={[styles.avatarContainer, { width: size, height: size, borderRadius: size / 2 }]}>
      {participant.avatar ? (
        <Image 
          source={{ uri: participant.avatar }} 
          style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
        />
      ) : (
        <View style={[styles.avatarPlaceholder, { width: size, height: size, borderRadius: size / 2 }]}>
          <Ionicons name="person" size={size * 0.5} color={colors.text.secondary} />
        </View>
      )}
      
      {participant.isHost && (
        <View style={[styles.hostBadge, { width: size * 0.4, height: size * 0.4 }]}>
          <Ionicons name="star" size={size * 0.2} color={colors.text.inverse} />
        </View>
      )}
      
      {participant.isVerified && !participant.isHost && (
        <View style={[styles.verifiedBadge, { width: size * 0.4, height: size * 0.4 }]}>
          <Ionicons name="checkmark" size={size * 0.2} color={colors.text.inverse} />
        </View>
      )}
    </View>
  );

  if (variant === 'compact') {
    const displayParticipants = participantsList.slice(0, 4);
    const remainingCount = participants.currentParticipants - displayParticipants.length;

    return (
      <View style={styles.compactContainer}>
        <View style={styles.compactAvatars}>
          {displayParticipants.map((participant, index) => (
            <View 
              key={participant.id} 
              style={[styles.compactAvatarWrapper, { marginLeft: index > 0 ? -8 : 0 }]}
            >
              {renderParticipantAvatar(participant, 32)}
            </View>
          ))}
          
          {remainingCount > 0 && (
            <View style={[styles.remainingCount, { marginLeft: -8 }]}>
              <Text style={styles.remainingCountText}>+{remainingCount}</Text>
            </View>
          )}
        </View>
        
        <Text style={styles.compactText}>
          {participants.currentParticipants}/{participants.maxParticipants} joined
        </Text>
      </View>
    );
  }

  if (variant === 'detailed') {
    return (
      <View style={styles.detailedContainer}>
        <View style={styles.detailedHeader}>
          <Text style={styles.detailedTitle}>
            Participants ({participants.currentParticipants}/{participants.maxParticipants})
          </Text>
          
          <View style={styles.spotsInfo}>
            <Ionicons 
              name="people-outline" 
              size={16} 
              color={getAvailableSpots() > 0 ? colors.success[500] : colors.warning[500]} 
            />
            <Text style={[
              styles.spotsText,
              { color: getAvailableSpots() > 0 ? colors.success[500] : colors.warning[500] }
            ]}>
              {getAvailableSpots()} spots left
            </Text>
          </View>
        </View>

        <FlatList
          data={participantsList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.participantItem}
              onPress={() => onParticipantPress?.(item)}
              disabled={!onParticipantPress}
            >
              {renderParticipantAvatar(item, 48)}
              
              <View style={styles.participantInfo}>
                <View style={styles.participantNameRow}>
                  <Text style={styles.participantName}>{item.name}</Text>
                  {item.isHost && (
                    <View style={styles.hostLabel}>
                      <Text style={styles.hostLabelText}>HOST</Text>
                    </View>
                  )}
                </View>
                
                <Text style={styles.joinedDate}>
                  Joined {formatJoinDate(item.joinedAt)}
                </Text>
              </View>
              
              <View style={styles.participantActions}>
                {item.isVerified && (
                  <Ionicons name="shield-checkmark" size={16} color={colors.success[500]} />
                )}
                <Ionicons name="chevron-forward" size={16} color={colors.text.secondary} />
              </View>
            </TouchableOpacity>
          )}
          scrollEnabled={false}
        />

        {participants.waitlistCount > 0 && (
          <View style={styles.waitlistInfo}>
            <Ionicons name="time-outline" size={16} color={colors.warning[500]} />
            <Text style={styles.waitlistText}>
              {participants.waitlistCount} people on waitlist
            </Text>
          </View>
        )}

        {showJoinButton && getAvailableSpots() > 0 && (
          <TouchableOpacity style={styles.joinButton} onPress={onJoinPress}>
            <Ionicons name="add" size={20} color={colors.text.inverse} />
            <Text style={styles.joinButtonText}>Join Activity</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  // Default variant
  return (
    <View style={styles.defaultContainer}>
      <View style={styles.defaultHeader}>
        <Text style={styles.defaultTitle}>Participants</Text>
        <Text style={styles.participantCount}>
          {participants.currentParticipants}/{participants.maxParticipants}
        </Text>
      </View>

      <View style={styles.participantsGrid}>
        {participantsList.slice(0, 6).map((participant) => (
          <TouchableOpacity
            key={participant.id}
            style={styles.participantCard}
            onPress={() => onParticipantPress?.(participant)}
            disabled={!onParticipantPress}
          >
            {renderParticipantAvatar(participant)}
            <Text style={styles.participantCardName} numberOfLines={1}>
              {participant.name.split(' ')[0]}
            </Text>
          </TouchableOpacity>
        ))}
        
        {getAvailableSpots() > 0 && (
          <TouchableOpacity style={styles.emptySlot} onPress={onJoinPress}>
            <View style={styles.emptySlotIcon}>
              <Ionicons name="add" size={20} color={colors.text.secondary} />
            </View>
            <Text style={styles.emptySlotText}>Join</Text>
          </TouchableOpacity>
        )}
      </View>

      {participants.waitlistCount > 0 && (
        <Text style={styles.waitlistNote}>
          +{participants.waitlistCount} on waitlist
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // Compact variant
  compactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  compactAvatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  compactAvatarWrapper: {
    borderWidth: 2,
    borderColor: colors.background.primary,
    borderRadius: 16,
  },
  remainingCount: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.text.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.background.primary,
  },
  remainingCountText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.inverse,
  },
  compactText: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: '600',
  },

  // Default variant
  defaultContainer: {
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    padding: semanticSpacing.md,
  },
  defaultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: semanticSpacing.md,
  },
  defaultTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.primary,
  },
  participantCount: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.secondary,
  },
  participantsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: semanticSpacing.sm,
  },
  participantCard: {
    alignItems: 'center',
    width: 60,
  },
  participantCardName: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: semanticSpacing.xs,
    textAlign: 'center',
  },
  emptySlot: {
    alignItems: 'center',
    width: 60,
  },
  emptySlotIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background.primary,
    borderWidth: 2,
    borderColor: colors.border.light,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptySlotText: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: semanticSpacing.xs,
    fontWeight: '600',
  },
  waitlistNote: {
    fontSize: 12,
    color: colors.warning[600],
    marginTop: semanticSpacing.sm,
    textAlign: 'center',
    fontWeight: '500',
  },

  // Detailed variant
  detailedContainer: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    padding: semanticSpacing.lg,
  },
  detailedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: semanticSpacing.lg,
  },
  detailedTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.primary,
  },
  spotsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spotsText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: semanticSpacing.xs,
  },
  participantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: semanticSpacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  participantInfo: {
    flex: 1,
    marginLeft: semanticSpacing.md,
  },
  participantNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: semanticSpacing.xs,
  },
  participantName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginRight: semanticSpacing.sm,
  },
  hostLabel: {
    backgroundColor: colors.primary[500],
    paddingHorizontal: semanticSpacing.sm,
    paddingVertical: 2,
    borderRadius: 8,
  },
  hostLabelText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.inverse,
    letterSpacing: 0.5,
  },
  joinedDate: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  participantActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: semanticSpacing.sm,
  },
  waitlistInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.warning[50],
    paddingVertical: semanticSpacing.sm,
    paddingHorizontal: semanticSpacing.md,
    borderRadius: 8,
    marginTop: semanticSpacing.md,
  },
  waitlistText: {
    fontSize: 14,
    color: colors.warning[700],
    marginLeft: semanticSpacing.xs,
    fontWeight: '500',
  },
  joinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary[500],
    paddingVertical: semanticSpacing.md,
    borderRadius: 12,
    marginTop: semanticSpacing.lg,
  },
  joinButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.inverse,
    marginLeft: semanticSpacing.sm,
  },

  // Common styles
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    resizeMode: 'cover',
  },
  avatarPlaceholder: {
    backgroundColor: colors.background.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hostBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: colors.primary[500],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.background.primary,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: colors.success[500],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.background.primary,
  },
});