/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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

import {IconButton} from '../../components/IconButton';
import {useMovieDetail} from '../../hooks/useMovieDetail';
import {MovieDetail} from '../../components/MovieDetail';

import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

interface Props
  extends NativeStackScreenProps<RootStackParams, 'DetailScreen'> {}

const screenHeigth = Dimensions.get('screen').height;
export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const {isLoading, cast, fullMovie} = useMovieDetail(movie.id);

  const {
    image,
    imageContainer,
    titleCard,
    descriptionContainer,
    origianltitleCard,
    btnBack,
  } = styless;
  const uri: string = `${BASE_URL_IMAGE}${movie.poster_path}`;

  const handleGoBack = () => {
    return navigation.goBack();
  };

  return (
    <ScrollView>
      {/* arrow-back-circle */}
      <View style={btnBack}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon size={40} style={{color: 'white'}} name="arrow-back-circle" />
        </TouchableOpacity>
      </View>

      <View style={imageContainer}>
        <IconButton />
        <Image source={{uri}} style={image} />
      </View>

      <View style={descriptionContainer}>
        <Text style={origianltitleCard}>{movie.original_title}</Text>
        <Text style={titleCard}>{movie.title}</Text>
        {isLoading ? (
          <ActivityIndicator size={30} color="blue" />
        ) : (
          <MovieDetail movie={fullMovie!} cast={cast} />
        )}
      </View>
    </ScrollView>
  );
};

const styless = StyleSheet.create({
  imageContainer: {},
  btnBack: {
    position: 'absolute',
    zIndex: 999,
    elevation: 8,
    left: 20,
    top: 20,
  },
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
