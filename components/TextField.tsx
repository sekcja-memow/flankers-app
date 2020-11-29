import React from 'react';
import { Text } from 'react-native';
import theme from '../theme';

interface TextFieldProps {
  text: string;
  color?: string;
  font?: number;
}

const TextField: React.FC<TextFieldProps> = ({
  text,
  font,
  color,
  ...restProps
}) => {
  return (
    <Text
      style={{
        color: color ? color : theme.colors.background.white,
        fontSize: font ? font : theme.font.regular,
      }}
      {...restProps}>
      {text}
    </Text>
  );
};

export default TextField;
