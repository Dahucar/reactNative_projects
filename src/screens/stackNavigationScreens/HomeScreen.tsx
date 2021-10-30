/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions, FlatList, ScrollView, View } from 'react-native';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { MovieCard } from '../../components/MovieCard';
import { useMovies } from '../../hooks/useMovies';

const windowDidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { moviesList, isLoading } = useMovies();
  const marginTop = top + 20;

  if (isLoading) {
    return <LoadingSpinner/>;
  }

  return (
    <ScrollView>
      <View style={{ marginTop }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={ moviesList }
            renderItem={ ({ item }: any) => <MovieCard movie={item} /> }
            sliderWidth={ windowDidth }
            itemWidth={ 300 }
          />
        </View>

        <View style={{ backgroundColor: 'red', height: 230 }}>
          <FlatList
            horizontal
            data={ moviesList }
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

        <View style={{ backgroundColor: 'red', height: 230 }}>
          <FlatList
            horizontal
            data={ moviesList }
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
      </View>
    </ScrollView>
  );
};
