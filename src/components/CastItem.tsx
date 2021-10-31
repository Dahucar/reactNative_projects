/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { BASE_URL_IMAGE } from '../configurations';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast,
}

export const CastItem = ({ actor }: Props) => {

  const uri: string = `${BASE_URL_IMAGE}${actor.profile_path}`;

  return (
    <View style={stls.container}>

      {actor.profile_path && (
        <Image
          source={{ uri }}
          style={{ width: 50, height: 50, borderRadius: 10, marginRight: 10 }}
        />
      )}

      <View>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          { actor.name }
        </Text>
        <Text
          style={{
            fontSize: 15,
            opacity: 0.8,
          }}
        >
          { actor.character }
        </Text>
      </View>
    </View>
  );
};

const stls = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
