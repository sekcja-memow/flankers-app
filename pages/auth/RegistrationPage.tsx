import React from 'react';
import { Text } from 'react-native';

export default function RegistrationPage({ navigation }: { navigation: any }) {
  const onEdit = () => {
    navigation.push('StartPage');
  };
  return (
    <>
      <Text>Registration Page</Text>
    </>
  );
}
