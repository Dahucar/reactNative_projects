/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export const TabOneScreen = () => {

  // PASO 6. consumir el context creado.
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    console.log('TabOneScreen -> useEffect');
  }, []);

  return (
    <View>
      <Text>TabOneScreen</Text>
      <Text>{ JSON.stringify(authState, null, 3) }</Text>
    </View>
  );
};
