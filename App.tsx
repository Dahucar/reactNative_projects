/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { MenuLateral } from './src/navigator/ManuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppStateMaker>
        <MenuLateral/>
      </AppStateMaker>
    </NavigationContainer>
  );
};

const AppStateMaker = ({ children }: any) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  );
};

export default App;
