/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, FlatList } from 'react-native';
import currencyFormatter from 'currency-formatter';
import { MovieFull } from '../interfaces/movieDBInterface';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';

interface Props {
  movie: MovieFull,
  cast: Cast[]
}

export const MovieDetail = ({ movie, cast }: Props) => {
  return (
    <>
      <View style={{ flexDirection: 'row'}} >
        <Text style={{ fontWeight: 'bold' }}>{movie.vote_average}</Text>
        <Text style={{ fontWeight: 'bold' }}>- {movie.genres.map(g => g.name).join(', ')}</Text>
      </View>
      <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 10 }}>Presupuesto.</Text>
      <Text style={{ fontStyle: 'italic' }}>{ currencyFormatter.format(movie.budget, { code: 'USD' })}</Text>
      <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 10 }}>Sinopsis.</Text>
      <Text style={{ fontStyle: 'italic' }}>{movie.overview}</Text>

      <View style={{ marginTop: 10 }}>
        <FlatList
          horizontal
          data={ cast }
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CastItem actor={item} />}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10, height: 50 }}
        />
      </View>
    </>
  );
};
