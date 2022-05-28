/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/TopTabScreens/ChatScreen';
import { ContactScreen } from '../screens/TopTabScreens/ContactScreen';
import { AlbunsScreen } from '../screens/TopTabScreens/AlbunsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();

export function TopTabNavigator() {

  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 12 },
        tabBarPressColor: 'blueviolet',
        tabBarIndicatorStyle: {
          backgroundColor: 'blueviolet',
        },
        tabBarShowIcon: true,
        tabBarIcon: () => {
          let iconName: string = '';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbubble';
              break;
            case 'ContactScreen':
              iconName = 'call';
              break;
            case 'AlbunsScreen':
              iconName = 'images';
              break;
            default:
              iconName = 'add';
              break;
          }

          return (
            <Text>
              <Icon
                name={ iconName }
                size={25}
                color="blueviolet"
              />
            </Text>
          );
        },
        tabBarStyle: {
          elevation: 0,
        },
      })}
    >
      <Tab.Screen name="ChatScreen" options={{ title: 'Chat' }} component={ChatScreen} />
      <Tab.Screen name="ContactScreen" options={{ title: 'Contactos' }} component={ContactScreen} />
      <Tab.Screen name="AlbunsScreen" options={{ title: 'Albun' }} component={AlbunsScreen} />
    </Tab.Navigator>
  );
}
