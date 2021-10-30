/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Movies } from '../interfaces/movieDBInterface';

interface Props {
  movie: Movies,
  height?: number,
  width?: number,
}

const baseUrlImage: string = 'https://image.tmdb.org/t/p/w500';
export const MovieCard = ({ movie, height = 420, width = 300 }: Props) => {
  const { image, imageContainer } = styless;
  const marginHorizontal: number = 4;
  const uri = `${baseUrlImage}${movie.poster_path}`;

  return (
    <View style={{ width, height, marginHorizontal }}>
      <View style={imageContainer}>
        <Image
          source={{uri}}
          style={image}
        />
      </View>
    </View>
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

