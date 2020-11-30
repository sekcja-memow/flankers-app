import React from 'react';
import { Text } from 'react-native';

export default function RankingPage({ navigation }: { navigation: any }) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Ranking Page</Text>
    </>
  );
}
