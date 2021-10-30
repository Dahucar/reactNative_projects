/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieDBInterface';

interface Props {
  movie: Movie,
  height?: number,
  width?: number,
}

const baseUrlImage: string = 'https://image.tmdb.org/t/p/w500';
export const MovieCard = ({ movie, height = 420, width = 300 }: Props) => {
  const navigator = useNavigation();

  const { image, imageContainer } = styless;
  const marginHorizontal: number = 4;
  const uri = `${baseUrlImage}${movie.poster_path}`;
  const styles = { width, height, marginHorizontal };

  const handleNavigate = () => {
    navigator.navigate('DetailScreen' as never, movie as never);
  };

  return (
    <TouchableOpacity
      onPress={handleNavigate}
      style={styles}
    >
      <View style={imageContainer}>
        <Image
          source={{uri}}
          style={image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styless = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },

  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },

});

