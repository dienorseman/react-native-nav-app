import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Tab1Screen, Tab2Screen } from '../ui/components/Screens';
import { StackNavigator } from './StackNavigator';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarLabelStyle: {
          fontSize: 16,
          marginBottom: 12,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 64,
        },
      }}
    >
      <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{ title: 'Tabr2' }} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </Tab.Navigator >
  );
};
