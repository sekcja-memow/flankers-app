import React from 'react';
import { Text } from 'react-native';

export default function MatchJoinFromMapPage({
  navigation,
}: {
  navigation: any;
}) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Match Join From MapPage</Text>
    </>
  );
}
