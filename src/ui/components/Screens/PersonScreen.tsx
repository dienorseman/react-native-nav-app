import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from '../../theme/appTheme';
import { RootStackParams } from '../../../navigator/StackNavigator';


interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({ navigation, route }: Props) => {
    const params = route.params;
    return (
        <View style={styles.globalMargin}>
            <Text>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
            <Button title="Go to ThirdScreen" onPress={() => navigation.navigate('Third') } />
        </View>
    );
};
