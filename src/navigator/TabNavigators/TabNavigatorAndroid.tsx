/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TabOneScreen } from '../../screens/Tabs/TabOneScreen';
import { TabTwoScreen } from '../../screens/Tabs/TabTwoScreen';
import { Text } from 'react-native';
import { TopTabNavigator } from '../TopTabNavigator';

const Tab = createMaterialBottomTabNavigator();
import Icon from 'react-native-vector-icons/Ionicons';

export function TabNavigatorAndroid() {
  return (
    <Tab.Navigator
      sceneAnimationEnabled
      barStyle={{ backgroundColor: 'blueviolet' }}
      screenOptions={({ route }) => ({
        // actualizar iconos del tab.
        tabBarIcon: ({ color }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'TabOneScreen':
              iconName = 'flash';
              break;
            case 'TabTwoScreen':
              iconName = 'cloudy-night';
              break;
            default:
              iconName = 'git-branch';
              break;
          }

          return (
            <Text>
              <Icon
                name={iconName}
                size={25}
                color={color}
              />
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="TabOneScreen" options={{ title: 'Prefencias' }} component={TabOneScreen} />
      <Tab.Screen name="TabTwoScreen" options={{ title: 'Avanzado' }} component={TabTwoScreen} />
      <Tab.Screen name="TopTabNavigator" options={{ title: 'Otros' }} component={TopTabNavigator} />
    </Tab.Navigator>
  );
}
