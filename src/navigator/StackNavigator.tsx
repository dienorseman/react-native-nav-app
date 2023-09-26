import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainScreen, PersonScreen, SecondScreen, ThirdScreen } from '../ui/components/Screens';

export type RootStackParams = {
    Main: undefined;
    Second: undefined;
    Third: undefined;
    PersonScreen: { id: number; name: string };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{ title: 'Welcome to my world xd' }}
            />
            <Stack.Screen name="Second" component={SecondScreen} />
            <Stack.Screen name="Third" component={ThirdScreen} />
            <Stack.Screen name="PersonScreen" component={PersonScreen} />
        </Stack.Navigator>
    );
};
