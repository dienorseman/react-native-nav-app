
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../../theme/appTheme';


export const ThirdScreen = () => {
  const navigator = useNavigation<any>();
  return (
    <View style={styles.globalMargin}>
      <Text>ThridScreen</Text>
      <Button
        title="Go back"
        onPress={() => navigator.pop() }
      />
      <Button
        title="Go to MainScreen"
        onPress={() => navigator.popToTop() }
      />
    </View>
  );
};
