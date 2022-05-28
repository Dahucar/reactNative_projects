/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/DrawerItems/ProfileScreen';
// import { SettingsScreen } from '../screens/DrawerItems/SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { appStyless } from '../themes/appStyless';
import { TabNavigator } from './TabNavigator';
import { AuthContext } from '../context/AuthContext';

const Drawer = createDrawerNavigator();

export function MenuLateral() {
  return (
    <Drawer.Navigator
      drawerContent={
        (props) => <MenuInterno { ...props } />
      }
    >
      <Drawer.Screen
        name="ProfileScreen"
        options={{ title: 'Perfil' }}
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{ title: 'Ajustes' }}
        component={TabNavigator}
      />
    </Drawer.Navigator>
  );
}

// menu para customizar opciones del menú lateral.
const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

  const { authState: { userName, isLoggedIn } } = useContext(AuthContext);

  return (
    <DrawerContentScrollView>
      {/* contanedor del avatar */}
      <View style={appStyless.avatarContainer}>
        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_1280.png' }}
          style={appStyless.avatar}
        />
      </View>

      {isLoggedIn && (
        <View style={appStyless.manuContainer}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            { userName }
          </Text>
        </View>
      )}


      {/* opciones del menú */}
      <View style={appStyless.manuContainer}>
        <TouchableOpacity
          style={appStyless.menuBtn}
          onPress={() => navigation.navigate('ProfileScreen')}
        >
          <Text style={appStyless.menuText}>Pefil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={appStyless.menuBtn}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={appStyless.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
};
