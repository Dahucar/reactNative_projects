/* eslint-disable prettier/prettier */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/DrawerItems/ProfileScreen';
import { SettingsScreen } from '../screens/DrawerItems/SettingsScreen';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ProfileScreen"
        options={{ title: 'Perfil' }}
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{ title: 'Ajustes' }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}
