import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any>{}


export const MainScreen = ( { navigation }: Props ) => {

    return (
        <View style={ styles.glogalMargin }>
            <Text>MainScreen</Text>
            <Button
                title="Go to SecondScreen"
                onPress={() => navigation.navigate('Second')}
            />
        </View>
    );
};
