import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const SecondScreen = ({ navigation }: Props ) => {
  return (
    <View style={ styles.glogalMargin }>
      <Text>SecondScreen</Text>
      <Button title="Go to ThirdScreen" onPress={() => navigation.navigate('Third') } />
    </View>
  );
};
