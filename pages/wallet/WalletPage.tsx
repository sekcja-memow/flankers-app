import React from 'react';
import { Text } from 'react-native';

export default function WalletPage({ navigation }: { navigation: any }) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Wallet Page</Text>
    </>
  );
}
