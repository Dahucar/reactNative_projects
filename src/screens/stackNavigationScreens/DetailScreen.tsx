/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { Movie } from '../../interfaces/movieDBInterface';

interface Props extends NativeStackScreenProps<any, any> {}

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params as Movie;

  return (
    <View>
      <Text>
        { movie.title }
      </Text>
    </View>
  );
};
