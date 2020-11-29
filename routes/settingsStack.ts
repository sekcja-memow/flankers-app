import { createStackNavigator } from 'react-navigation-stack';

import Settings from '../pages/SettingsPage';

const screens = {
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
};

const SettingsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#e0d5d5',
      height: 90,
    },
    headerTitleAlign: 'center',
  },
});
export default SettingsStack;
