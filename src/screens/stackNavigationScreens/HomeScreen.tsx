/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions, ScrollView, View } from 'react-native';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { MovieCard } from '../../components/MovieCard';
import { useMovies } from '../../hooks/useMovies';
import { HorizontalSlider } from '../../components/HorizontalSlider';

const windowDidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { nowPlaying, topRated, upcoming, popular, isLoading } = useMovies();
  const marginTop = top + 20;

  if (isLoading) {
    return <LoadingSpinner/>;
  }

  return (
    <ScrollView>
      <View style={{ marginTop }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={ nowPlaying! }
            renderItem={ ({ item }: any) => <MovieCard movie={ item } /> }
            sliderWidth={ windowDidth }
            itemWidth={ 300 }
          />
        </View>

        <HorizontalSlider title="Mejor calificadas" movies={ topRated } />
        <HorizontalSlider title="Proximos estrenos" movies={ upcoming } />
        <HorizontalSlider title="Populares" movies={ popular } />
      </View>
    </ScrollView>
  );
};
