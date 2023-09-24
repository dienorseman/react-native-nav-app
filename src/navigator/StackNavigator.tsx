import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { MainScreen, SecondScreen, ThirdScreen } from '../Screens';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{ title: 'Welcome' }}
            />
            <Stack.Screen name="Second" component={SecondScreen} />
            <Stack.Screen name="Third" component={ThirdScreen} />
        </Stack.Navigator>
    );
};
