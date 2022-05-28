/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ProductsScreen } from '../screens/ProductsScreen';
import { NewsScreen } from '../screens/NewsScreen';
import { PersonScreen } from '../screens/PersonScreen';

export type RootStackParams = {
  PersonScreen: { id: string, name: string };
  MainScreen: undefined;
  HomeScreen: undefined;
  ProductsScreen: undefined;
  NewsScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'papayawhip',
        },
      }}
    >
      <Stack.Screen
        name="PersonScreen"
        options={{ title: 'Persona' }}
        component={PersonScreen}
      />
      <Stack.Screen
        name="MainScreen"
        options={{ title: 'Inicio' }}
        component={MainScreen}
      />
      <Stack.Screen
        name="HomeScreen"
        options={{ title: 'Home' }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="ProductsScreen"
        options={{ title: 'Productos' }}
        component={ProductsScreen}
      />
      <Stack.Screen
        name="NewsScreen"
        options={{ title: 'Noticias' }}
        component={NewsScreen}
      />
    </Stack.Navigator>
  );
};
