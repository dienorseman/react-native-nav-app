import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';


import { styles } from '../../theme/appTheme';


interface Props extends DrawerScreenProps<any, any> {

}


export const MainScreen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            title: 'Hello World',
            headerLeft: () => <CustomButton navigation={navigation} />,
        });
    },);

    return (
        <View style={styles.globalMargin}>
            <Text>MainScreen</Text>
            <Button
                title="Go to SecondScreen"
                onPress={() => navigation.navigate('Second')}
            />

            <Text style={{ marginVertical: 20, fontSize: 20 }}>Navigation with params</Text>
            <View style={{ gap: 20, justifyContent: 'space-between' }}>
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

const CustomButton = ({ navigation }: Props) => {

    return (
        <Button
            title="Menu"
            onPress={() => navigation.toggleDrawer()}
        />
    );
};

