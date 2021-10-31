/* eslint-disable prettier/prettier */
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import {RootStackParams} from '../MainStackNavigator';
import {BASE_URL_IMAGE} from '../../configurations';

import { IconButton } from '../../components/IconButton';
import { useMovieDetail } from '../../hooks/useMovieDetail';
import { MovieDetail } from '../../components/MovieDetail';
interface Props
  extends NativeStackScreenProps<RootStackParams, 'DetailScreen'> {}

const screenHeigth = Dimensions.get('screen').height;
export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const { isLoading, cast, fullMovie } = useMovieDetail(movie.id);

  const {
    image,
    imageContainer,
    titleCard,
    descriptionContainer,
    origianltitleCard,
  } = styless;
  const uri: string = `${BASE_URL_IMAGE}${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={imageContainer}>
        <IconButton/>
        <Image source={{uri}} style={image} />
      </View>

      <View style={descriptionContainer}>
        <Text style={origianltitleCard}>{movie.original_title}</Text>
        <Text style={titleCard}>{movie.title}</Text>
        { isLoading
          ? (<ActivityIndicator size={30} color="blue"/>)
          : (<MovieDetail movie={fullMovie!} cast={cast} />)}
      </View>
    </ScrollView>
  );
};

const styless = StyleSheet.create({
  imageContainer: {},
  image: {
    width: '100%',
    height: screenHeigth * 0.7,
  },
  descriptionContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  origianltitleCard: {
    opacity: 0.5,
    fontStyle: 'italic',
  },
  titleCard: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 23,
  },
});
