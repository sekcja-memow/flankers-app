import React from 'react';
import { Button, Text } from 'react-native';

export default function ViewTeamPage({ navigation }: { navigation: any }) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>View Team</Text>
      <Button
        title="Utwórz zespół"
        onPress={() => navigation.push('CreateTeamPage')}
      />
    </>
  );
}
