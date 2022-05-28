/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useRef } from 'react';
import {Text, View} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends NativeStackScreenProps<RootStackParams, 'PersonSreen'> {}

export const PersonSreen = ({ navigation, route: { params } }: Props) => {
  const { singInWithUser } = useContext(AuthContext);
  const userNameRef = useRef<string>();

  useEffect(() => {
    navigation.setOptions({ title: 'Listado Personas.' });
  }, [navigation]);

  useEffect(() => {
    if (params.name !== userNameRef.current){
      userNameRef.current = params.name;
      singInWithUser(userNameRef.current);
    }
  });

  return (
    <View>
      <Text>Person Screen</Text>
      <Text>{ JSON.stringify(params, null, 2) }</Text>
    </View>
  );
};
