import { createStackNavigator } from 'react-navigation-stack';

import ProfilePage from '../pages/profile/ProfilePage';
import StartPage from '../pages/StartPage';
import EditProfilePage from '../pages/profile/EditProfilePage';
import PasswordResetNewPasswordPage from '../pages/auth/PasswordResetNewPasswordPage';
import LoginPage from '../pages/auth/LoginPage';
import CreateMatchPage from '../pages/match/CreateMatchPage';
import RegistrationPage from '../pages/auth/RegistrationPage';
import RankingPage from '../pages/ranking/RankingPage';
import MatchJoinFromMapPage from '../pages/match/MatchJoinFromMapPage';
import ViewTeamPage from '../pages/teams/ViewTeamPage';
import WalletPage from '../pages/wallet/WalletPage';
import PasswordResetTakeEmailPage from '../pages/auth/PasswordResetTakeEmailPage';
import MatchInLobbyPage from '../pages/match/MatchInLobbyPage';
import MatchInProgressPage from '../pages/match/MatchInProgressPage';
import MatchLocationPage from '../pages/match/MatchLocationPage';
import CreateTeamPage from '../pages/teams/CreateTeamPage';

const screens = {
  StartPage: {
    screen: StartPage,
    navigationOptions: {
      title: 'Start Page',
    },
  },
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: {
      title: 'Profile Page',
    },
  },
  EditProfilePage: {
    screen: EditProfilePage,
    navigationOptions: {
      title: 'Edit Profile Page',
    },
  },
  PasswordResetNewPasswordPage: {
    screen: PasswordResetNewPasswordPage,
    navigationOptions: {
      title: 'Password Reset New Password Page',
    },
  },
  PasswordResetTakeEmailPage: {
    screen: PasswordResetTakeEmailPage,
    navigationOptions: {
      title: 'PasswordResetTakeEmailPage',
    },
  },
  RegistrationPage: {
    screen: RegistrationPage,
    navigationOptions: {
      title: 'Registration Page',
    },
  },
  LoginPage: {
    screen: LoginPage,
    navigationOptions: {
      title: 'Login Page',
    },
  },
  CreateMatchPage: {
    screen: CreateMatchPage,
    navigationOptions: {
      title: 'Create Match Page',
    },
  },
  MatchInLobbyPage: {
    screen: MatchInLobbyPage,
    navigationOptions: {
      title: 'MatchInLobby Page',
    },
  },
  MatchInProgressPage: {
    screen: MatchInProgressPage,
    navigationOptions: {
      title: 'MatchInProgress Page',
    },
  },
  MatchLocationPage: {
    screen: MatchLocationPage,
    navigationOptions: {
      title: 'Match Location Page',
    },
  },
  MatchJoinFromMapPage: {
    screen: MatchJoinFromMapPage,
    navigationOptions: {
      title: 'MatchJoinFromMap Page',
    },
  },
  RankingPage: {
    screen: RankingPage,
    navigationOptions: {
      title: 'Ranking Page',
    },
  },
  CreateTeamPage: {
    screen: CreateTeamPage,
    navigationOptions: {
      title: 'CreateTeam Page',
    },
  },
  ViewTeamPage: {
    screen: ViewTeamPage,
    navigationOptions: {
      title: 'View Team Page',
    },
  },
  WalletPage: {
    screen: WalletPage,
    navigationOptions: {
      title: 'Wallet Page',
    },
  },
};

const StartPageStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#e0d5d5',
      height: 70,
    },
    headerTitleAlign: 'center',
  },
});

export default StartPageStack;
