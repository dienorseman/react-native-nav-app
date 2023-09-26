import React from 'react';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';

import { TabNavigator } from './TabNavigator';
import { SettingsScreen } from '../ui/components/Screens';
import { styles } from '../ui/theme/appTheme';


const Drawer = createDrawerNavigator();

export const LateralNavigator = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: width >= 728 ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <InternalMenu {...props} />}
    >
      <Drawer.Screen name="Tabs" component={TabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};


const InternalMenu = (props: DrawerContentComponentProps) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView>
      <View style={styles.profilePhotoContaier}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' }} style={styles.profilePhoto} />
        </TouchableOpacity>
      </View>

      <View style={styles.globalMargin}>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.drawerItem}>Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.drawerItem}>Settings</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
};


