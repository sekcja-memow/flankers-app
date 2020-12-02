import React from 'react';
import { Button, Text, View } from 'react-native';

export default function CreateMatchPage({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>Create Match Page</Text>
      <Button
        title="Wybierz miejsce na mapie"
        onPress={() => navigation.push('MatchLocationPage')}
      />
    </View>
  );
}
