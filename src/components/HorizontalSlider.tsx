/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieDBInterface';
import { MovieCard } from './MovieCard';

interface Props {
  movies: Movie[],
  title?: string,
}

interface PropsTitle {
  label: string,
}

const Title = ({label}: PropsTitle) => {
  return <Text style={{ fontSize: 30, fontWeight: 'bold' }} >{ label }</Text>;
};

export const HorizontalSlider = ({ movies, title }: Props) => {
  const marginTop = title ? 0 : 10;
  const height = title ? 250 : 230;

  return (
    <View style={{ height }}>
      { title && <Title label={title} />}

      <FlatList
        style={{ marginTop }}
        horizontal
        data={ movies }
        renderItem={({ item }: any) => (
          <MovieCard
            movie={item}
            width={140}
            height={200}
          />
        )}
        showsHorizontalScrollIndicator={ false }
      />
    </View>
  );
};

