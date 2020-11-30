import React from 'react';
import { Text } from 'react-native';

export default function CreateTeam({ navigation }: { navigation: any }) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Create team Page</Text>
    </>
  );
}
