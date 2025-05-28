import React from 'react';
import { View, Text } from 'react-native';
import { useCommonStyles } from '../../src/theme/ThemeProvider';

export default function SearchScreen() {
  const commonStyles = useCommonStyles();

  return (
    <View style={[commonStyles.container, commonStyles.center]}>
      <Text style={commonStyles.heading}>Search & Filter</Text>
      <Text style={commonStyles.body}>
        Advanced search and filtering functionality coming soon
      </Text>
    </View>
  );
}