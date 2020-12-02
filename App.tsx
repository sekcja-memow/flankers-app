import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './routes/Tabs';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d241f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
