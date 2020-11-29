import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './routes/drawer';

const App: React.FC = () => {
  return <Navigator />;
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
