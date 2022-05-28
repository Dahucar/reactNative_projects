/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styless } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any>{}

export const NewsScreen = ({ navigation }: Props) => {
  return (
    <View  style={styless.globalMargin}>
      <Text>
        NewsScreen
      </Text>

      <Button
        title="Volver"
        onPress={() => navigation.goBack()}
      />

      <Button
        title="Volver al inicio"
        onPress={() => navigation.popToTop()}
      />

    </View>
  );
};
