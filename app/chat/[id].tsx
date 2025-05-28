import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useTheme, useCommonStyles } from '../../src/theme/ThemeProvider';
import { getUserById } from '../../src/data/mock';
import { Ionicons } from '@expo/vector-icons';

interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isMe: boolean;
}

export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  const commonStyles = useCommonStyles();
  
  // Get user information
  const user = id ? getUserById(id) : null;
  
  // Mock messages for demonstration
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      senderId: id || '',
      content: 'Hi! Thanks for your interest in my activity. Do you have any questions?',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      isMe: false,
    },
    {
      id: '2',
      senderId: 'current_user',
      content: 'Yes, I was wondering about the dress code requirements.',
      timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
      isMe: true,
    },
    {
      id: '3',
      senderId: id || '',
      content: 'Great question! Smart casual to cocktail attire is perfect. I recommend comfortable shoes since we\'ll be walking around a bit.',
      timestamp: new Date(Date.now() - 900000), // 15 minutes ago
      isMe: false,
    },
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  if (!user) {
    return (
      <View style={[commonStyles.container, commonStyles.center]}>
        <Text style={[commonStyles.heading, { color: theme.colors.text }]}>
          User Not Found
        </Text>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: theme.colors.primary }]}
          onPress={() => router.back()}
        >
          <Text style={[commonStyles.body, { color: theme.colors.background }]}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        senderId: 'current_user',
        content: newMessage.trim(),
        timestamp: new Date(),
        isMe: true,
      };
      
      setMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

  const renderMessage = ({ item }: { item: ChatMessage }) => (
    <View style={[
      styles.messageContainer,
      item.isMe ? styles.myMessage : styles.theirMessage
    ]}>
      <View style={[
        styles.messageBubble,
        {
          backgroundColor: item.isMe ? theme.colors.primary : theme.colors.surface,
        }
      ]}>
        <Text style={[
          styles.messageText,
          {
            color: item.isMe ? theme.colors.background : theme.colors.text,
          }
        ]}>
          {item.content}
        </Text>
        <Text style={[
          styles.timestamp,
          {
            color: item.isMe 
              ? theme.colors.background + '80' 
              : theme.colors.textSecondary,
          }
        ]}>
          {item.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={[commonStyles.container, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={[commonStyles.subheading, { color: theme.colors.text }]}>
            {user.firstName} {user.lastName}
          </Text>
          <Text style={[commonStyles.caption, { color: theme.colors.textSecondary }]}>
            {user.isHost ? 'Host' : 'Member'}
          </Text>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.messagesList}
        contentContainerStyle={styles.messagesContent}
        showsVerticalScrollIndicator={false}
      />

      {/* Input */}
      <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
        <TextInput
          style={[
            styles.textInput,
            {
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              borderColor: theme.colors.border,
            }
          ]}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          placeholderTextColor={theme.colors.textSecondary}
          multiline
          maxLength={500}
        />
        <TouchableOpacity
          style={[
            styles.sendButton,
            {
              backgroundColor: newMessage.trim() ? theme.colors.primary : theme.colors.border,
            }
          ]}
          onPress={sendMessage}
          disabled={!newMessage.trim()}
        >
          <Ionicons 
            name="send" 
            size={20} 
            color={newMessage.trim() ? theme.colors.background : theme.colors.textSecondary} 
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  headerInfo: {
    marginLeft: 16,
  },
  messagesList: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
  },
  messageContainer: {
    marginBottom: 12,
  },
  myMessage: {
    alignItems: 'flex-end',
  },
  theirMessage: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    maxHeight: 100,
    fontSize: 16,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
});