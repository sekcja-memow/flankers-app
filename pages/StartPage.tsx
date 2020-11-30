import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function StartPage({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Flankers</Text>
      </View>
      <Button title="Profil" onPress={() => navigation.push('ProfilePage')} />
      <Button
        title="Zespół"
        onPress={() => navigation.navigate('ViewTeamPage')}
      />
      <Button title="Portfel" onPress={() => navigation.push('WalletPage')} />
      <Button
        title="Utwórz mecz"
        onPress={() => navigation.push('CreateMatchPage')}
      />
      <Button
        title="Dołącz do meczu"
        onPress={() => navigation.push('MatchJoinFromMapPage')}
      />
      <Button title="Ranking" onPress={() => navigation.push('RankingPage')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(199,253,255,0.98)',
  },
  header: {
    top: 0,
    flexDirection: 'column',
    height: 100,
    backgroundColor: 'rgb(221,84,181)',
  },
  title: {
    top: 50,
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,

    fontWeight: 'bold',
  },
});
