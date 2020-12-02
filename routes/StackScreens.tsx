import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateMatchPage from '../pages/match/CreateMatchPage';
import MatchJoinFromMapPage from '../pages/match/MatchJoinFromMapPage';
import MatchInLobbyPage from '../pages/match/MatchInLobbyPage';
import MatchInProgressPage from '../pages/match/MatchInProgressPage';
import MatchLocationPage from '../pages/match/MatchLocationPage';
import ViewTeamPage from '../pages/teams/ViewTeamPage';
import CreateTeamPage from '../pages/teams/CreateTeamPage';
import ProfilePage from '../pages/profile/ProfilePage';
import EditProfilePage from '../pages/profile/EditProfilePage';
import theme from '../theme';

const MatchStack = createStackNavigator();
export const MatchStackScreen: React.FC = () => {
  return (
    <MatchStack.Navigator screenOptions={theme.headerOptions}>
      <MatchStack.Screen name="CreateMatchPage" component={CreateMatchPage} />
      <MatchStack.Screen
        name="MatchJoinFromMap"
        component={MatchJoinFromMapPage}
      />
      <MatchStack.Screen name="MatchInLobbyPage" component={MatchInLobbyPage} />
      <MatchStack.Screen
        name="MatchInProgressPage"
        component={MatchInProgressPage}
      />
      <MatchStack.Screen
        name="MatchLocationPage"
        component={MatchLocationPage}
      />
    </MatchStack.Navigator>
  );
};

const TeamsStack = createStackNavigator();
export const TeamsStackScreen: React.FC = () => {
  return (
    <TeamsStack.Navigator screenOptions={theme.headerOptions}>
      <TeamsStack.Screen name="ViewTeamPage" component={ViewTeamPage} />
      <TeamsStack.Screen name="CreateTeamPage" component={CreateTeamPage} />
    </TeamsStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();
export const ProfileStackScreen: React.FC = () => {
  return (
    <ProfileStack.Navigator screenOptions={theme.headerOptions}>
      <ProfileStack.Screen name="ProfilePage" component={ProfilePage} />
      <ProfileStack.Screen name="EditProfilePage" component={EditProfilePage} />
    </ProfileStack.Navigator>
  );
};
