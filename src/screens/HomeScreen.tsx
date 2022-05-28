/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styless } from '../theme/appTheme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

export const HomeScreen = ({ navigation }: Props) => {

  useEffect(() => {
    console.log('useEffect HomeScreen');
    navigation.setOptions({
      title: 'Home View',
      headerBackTitle: '',
    });
  }, [navigation]);

  return (
    <View style={styless.globalMargin}>
      <Text style={styless.title}>
        HomeScreen
      </Text>

      <Button
        title="Navegar a productos"
        onPress={() => navigation.navigate('ProductsScreen')}
      />

      <Button
        title="Navegar a personas"
        onPress={() => navigation.navigate('PersonScreen')}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('PersonScreen', { id: 'abc001', name: 'Daniel' })}
      >
        <Text>
          Navegar con argumentos.
        </Text>
      </TouchableOpacity>

    </View>
  );
};
