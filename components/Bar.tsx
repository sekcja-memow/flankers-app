import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BarProps {
  color?: string;
  center?: boolean;
}

const Bar: React.FC<BarProps> = ({ children, color, center }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
          justifyContent: center ? 'center' : 'space-between',
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
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

export default Bar;
