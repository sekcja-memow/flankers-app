import React from 'react';
import { Text } from 'react-native';

interface LoginPageProps {
  navigation: any;
}

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  const onEdit = () => {
    navigation.push('StartPage');
  };

  return (
    <>
      <Text>Login Page</Text>
    </>
  );
};

export default LoginPage;
