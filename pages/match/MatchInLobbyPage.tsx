import React from 'react';
import { Button, Text } from 'react-native';

export default function MatchInLobbyPage({ navigation }: { navigation: any }) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Match In Lobby Page</Text>
      <Button
        title="Rozpoczęcie meczu"
        onPress={() => navigation.push('MatchInProgressPage')}
      />
    </>
  );
}
