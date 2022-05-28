/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {Text, View, Button} from 'react-native';

interface Props extends NativeStackScreenProps<any, any>{}

export const HomeScreen = ({ navigation: { navigate } }: Props) => {

  const persons = ['DanielHC', 'MaríaCT', 'OscarH'];

  return (
    <View>
      <Text>Home Screen</Text>
      {persons.map(p => (
        <View style={{ margin: 20 }} key={p} >
          <Button
            title={`iniciar como ${p}`}
            onPress={() => navigate('PersonSreen', { name: p })}
          />
        </View>
      ))}
    </View>
  );
};
