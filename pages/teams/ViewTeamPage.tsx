import React from 'react';
import { Button, Text, View } from 'react-native';

export default function ViewTeamPage({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>View Team</Text>
      <Button
        title="Utwórz zespół"
        onPress={() => navigation.push('CreateTeamPage')}
      />
    </View>
  );
}
