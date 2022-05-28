/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PersonSreen } from '../screens/PersonSreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PersonSreen: { name: string };
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PersonSreen" component={PersonSreen} />
    </Stack.Navigator>
  );
};
