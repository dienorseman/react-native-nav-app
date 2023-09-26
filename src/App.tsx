
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LateralNavigator } from './navigator/LateralNavigator';


export const App = () => {

  return (
    <NavigationContainer>
      <LateralNavigator />
    </NavigationContainer>
  );
};

