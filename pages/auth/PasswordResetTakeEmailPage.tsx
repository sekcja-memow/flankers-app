import React from 'react';
import { Button, Text } from 'react-native';

export default function PasswordResetTakeEmailPage({
  navigation,
}: {
  navigation: any;
}) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Password Reset</Text>
    </>
  );
}
