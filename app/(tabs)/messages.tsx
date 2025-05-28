import React from 'react';
import { View, Text } from 'react-native';
import { useCommonStyles } from '../../src/theme/ThemeProvider';

export default function MessagesScreen() {
  const commonStyles = useCommonStyles();

  return (
    <View style={[commonStyles.container, commonStyles.center]}>
      <Text style={commonStyles.heading}>Messages</Text>
      <Text style={commonStyles.body}>
        Chat and messaging functionality coming soon
      </Text>
    </View>
  );
}