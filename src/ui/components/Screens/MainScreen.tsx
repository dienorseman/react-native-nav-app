import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


import { styles } from '../../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigator/StackNavigator';


interface Props extends StackScreenProps<RootStackParams, 'Main'> { }


export const MainScreen = ({ navigation }: Props) => {


    return (
        <View style={styles.globalMargin}>
            <Text>MainScreen</Text>
            <Button
                title="Go to SecondScreen"
                onPress={() => navigation.navigate('Second')}
            />

            <Text style={stylesLocal.title}>Navigation with params</Text>
            <View style={stylesLocal.buttonContainer}>
                <Button
                    title="Go to Pedro"
                    onPress={() =>
                        navigation.navigate('PersonScreen', {
                            id: 1,
                            name: 'Pedro',
                        })
                    }
                />
                <Button
                    title="Go to Maria"
                    onPress={() =>
                        navigation.navigate('PersonScreen', {
                            id: 2,
                            name: 'Maria',
                        })
                    }
                />
            </View>
        </View>
    );
};


const stylesLocal = StyleSheet.create({
    buttonContainer:
        { gap: 20, justifyContent: 'space-between' },
    title: { marginVertical: 20, fontSize: 20 },
});
