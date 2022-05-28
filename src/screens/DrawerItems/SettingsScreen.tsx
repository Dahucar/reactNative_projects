/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SettingsScreen = () => {

  // en vez de usar el saveAreaView para porteger las zonas criticas de las vistas
  // puedo usar el hook

  const insets = useSafeAreaInsets();

  return (
    <View style={{ marginTop: insets.top }} >
      <Text>Settings Screen</Text>
    </View>
  );
};
