/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './stackNavigationScreens/HomeScreen';
import { DetailScreen } from './stackNavigationScreens/DetailScreen';
import { Movie } from '../interfaces/movieDBInterface';

// MAPEO DE RUTAS 1. definir las estructua de rutas que tiene la app.
export type RootStackParams = {
  HomeScreen: undefined, // para indicar que no recibe parametros
  DetailScreen: Movie, // recibe una movie como parametro
}

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};
