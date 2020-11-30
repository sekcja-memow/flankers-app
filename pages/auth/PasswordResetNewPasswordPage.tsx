import React from 'react';
import { Text } from 'react-native';

export default function PasswordResetNewPasswordPage({
  navigation,
}: {
  navigation: any;
}) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Password Reset New Password Page</Text>
    </>
  );
}
