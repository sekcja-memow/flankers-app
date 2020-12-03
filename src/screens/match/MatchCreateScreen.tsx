import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';

import { MatchScreenStackParamList } from './MatchScreenStack';

type MatchCreateScreenProps = object &
  StackScreenProps<MatchScreenStackParamList, 'MatchCreate'>;

export const MatchCreateScreen: React.FC<MatchCreateScreenProps> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>Create Match Screen</Text>
      <Button
        title="Wybierz miejsce na mapie"
        onPress={() => navigation.push('MatchLocation')}
      />
    </View>
  );
};
