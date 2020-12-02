import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CreateMatchPage from '../pages/match/CreateMatchPage';
import ProfilePage from '../pages/profile/ProfilePage';
import WalletPage from '../pages/wallet/WalletPage';
import theme from '../theme';
import ViewTeamPage from '../pages/teams/ViewTeamPage';
import MatchJoinFromMapPage from '../pages/match/MatchJoinFromMapPage';
import RankingPage from '../pages/ranking/RankingPage';
import {
  MatchStackScreen,
  ProfileStackScreen,
  TeamsStackScreen,
} from './StackScreens';

const Tab = createMaterialBottomTabNavigator();

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={'CreateMatchPage'}
      activeColor="#FFFF"
      inactiveColor={theme.colors.secondary}
      labeled={true}
      barStyle={{ backgroundColor: theme.colors.primary }}>
      <Tab.Screen
        name="CreateMatchPage"
        component={MatchStackScreen}
        options={{
          tabBarLabel: 'Match',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bottle-wine"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ViewTeamsPage"
        component={TeamsStackScreen}
        options={{
          tabBarLabel: 'Teams',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfilePage"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="WalletPage"
        component={WalletPage}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="RankingPage"
        component={RankingPage}
        options={{
          tabBarLabel: 'ranking',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-numbered"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
