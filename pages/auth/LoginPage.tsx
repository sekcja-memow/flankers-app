import React from 'react';
import { Text } from 'react-native';

export default function LoginPage({ navigation }: { navigation: any }) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Login Page</Text>
    </>
  );
}
