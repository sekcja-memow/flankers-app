import React from 'react';
import { Text, View } from 'react-native';

interface Match {
  header: string;
  comment: string;
  date: Date;
}

interface ProfilePageProps {
  name: string;
  rankingPoints: number;
  matchHistory: Match[];
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  name,
  rankingPoints,
  matchHistory,
}) => {
  return (
    <View>
      <Text> Profile Page</Text>
    </View>
  );
};
