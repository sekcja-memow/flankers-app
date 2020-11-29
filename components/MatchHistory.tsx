import React from 'react';
import { View } from 'react-native';

interface Match {
  header: string;
  comment: string;
  date: Date;
}

interface MatchHistoryProps {
  name: string;
  matchHistory: Match[];
}

const MatchHistory: React.FC<MatchHistoryProps> = ({ name, matchHistory }) => {
  return <View>match history</View>;
};
