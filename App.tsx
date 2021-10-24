/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/screens/MainStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
};

export default App;
