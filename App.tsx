import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './routes/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Notifications } from 'expo/build/deprecated.web';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './routes/Tabs';

const Tab = createMaterialBottomTabNavigator();

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
