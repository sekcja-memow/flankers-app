import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function StartPage({ navigation }: { navigation: any }) {
  const pressHandler = () => {
    navigation.push('ProfilePage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Flankers</Text>
      </View>
      <Button title="Profile" onPress={pressHandler} />
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
