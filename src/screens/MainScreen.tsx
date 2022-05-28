/* eslint-disable prettier/prettier */

import React from 'react';
import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styless } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}

export const MainScreen = ({ navigation }: Props) => {

  console.log(navigation);

  return (
    <View style={styless.globalMargin}>
      <Text>
        HomeScreen
      </Text>

      <Button
        title="Ir a HomeScreen"
        onPress={() => navigation.navigate('HomeScreen')}
      />

    </View>
  );
};
