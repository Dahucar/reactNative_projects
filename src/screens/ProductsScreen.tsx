/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styless } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any>{}

export const ProductsScreen = ({ navigation }: Props) => {
  return (
    <View style={styless.globalMargin}>
      <Text>
        ProductsScreen
      </Text>

      <Button
        title="Ir a NewsScreen"
        onPress={() => navigation.navigate('NewsScreen')}
      />
    </View>
  );
};
