import React from 'react';
import { Button, Text } from 'react-native';

export default function CreateMatchPage({ navigation }: { navigation: any }) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Create Match Page</Text>
      <Button
        title="Wybierz miejsce na mapie"
        onPress={() => navigation.push('MatchLocationPage')}
      />
    </>
  );
}