import React from 'react';
import { View, Text } from 'react-native';
import { useCommonStyles } from '../../src/theme/ThemeProvider';

export default function CreateScreen() {
  const commonStyles = useCommonStyles();

  return (
    <View style={[commonStyles.container, commonStyles.center]}>
      <Text style={commonStyles.heading}>Create Activity</Text>
      <Text style={commonStyles.body}>
        Activity creation form coming soon
      </Text>
    </View>
  );
}