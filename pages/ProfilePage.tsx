import React from 'react';
import { Button, StyleSheet } from 'react-native';
import Bar from '../components/Bar';
import theme from '../theme';
import TextField from '../components/TextField';

export default function ProfilePage({ navigation }: { navigation: any }) {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  const onLogout = () => {
    console.log('logout');
  };

  return (
    <>
      <Bar color={theme.colors.primary}>
        <Button title="Edytuj" onPress={onEdit} />
        <TextField text="Profil" />
        <Button title="Wyloguj" onPress={onLogout} />
      </Bar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(199,253,255,0.98)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    top: 50,
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,

    fontWeight: 'bold',
  },
});
