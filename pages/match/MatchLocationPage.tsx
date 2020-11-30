import React from 'react';
import { Button, Text } from 'react-native';

export default function MatchLocationPage({ navigation }: { navigation: any }) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Create Team Page</Text>
      <Button
        title="Poczekalnia"
        onPress={() => navigation.push('MatchInLobbyPage')}
      />
    </>
  );
}
