import React from 'react';
import { View, Text } from 'react-native';
import { useCommonStyles } from '../../src/theme/ThemeProvider';

export default function ProfileScreen() {
  const commonStyles = useCommonStyles();

  return (
    <View style={[commonStyles.container, commonStyles.center]}>
      <Text style={commonStyles.heading}>My Profile</Text>
      <Text style={commonStyles.body}>
        User profile and settings coming soon
      </Text>
    </View>
  );
}