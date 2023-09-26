import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Tab1Screen, Tab2Screen, Tab3Screen} from '../ui/components/Screens';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
      <Tab.Screen name="Tab3Screen" component={Tab3Screen} />
    </Tab.Navigator>
  );
};
