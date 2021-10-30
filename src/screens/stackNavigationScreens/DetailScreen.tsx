/* eslint-disable prettier/prettier */
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { RootStackParams } from '../MainStackNavigator';

interface Props extends NativeStackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params;

  return (
    <View>
      <Text>
        { movie.title }
      </Text>
    </View>
  );
};
