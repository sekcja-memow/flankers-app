import React from 'react';
import { Text } from 'react-native';

export default function MatchInProgressPage({
  navigation,
}: {
  navigation: any;
}) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Match In Progress Page</Text>
    </>
  );
}
