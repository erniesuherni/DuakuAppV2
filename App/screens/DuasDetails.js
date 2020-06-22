import React from 'react';
import { Text } from 'react-native';

export default ({ route }) => {
  const duaDetails = route.params.dua;

  return <Text>{JSON.stringify(duaDetails, null, 2)}</Text>;
};