import React from 'react';
import { Text } from 'react-native';

export default function EditProfilePage({ navigation }: { navigation: any }) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Create Team Page</Text>
    </>
  );
}
