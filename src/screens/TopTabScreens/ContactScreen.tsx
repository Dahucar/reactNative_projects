/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export const ContactScreen = () => {

  // PASO 15. hacer un llamado al reducer para modificar el estado.
  const { singIn, authState: { isLoggedIn, userName } } = useContext(AuthContext);

  useEffect(() => {
    console.log('ContactScreen -> useEffect');
  }, []);

  return (
    <View>
      <Text>ContactScreen</Text>
      {isLoggedIn && (
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }} >Bienvenido { userName }</Text>
      )}

      {!isLoggedIn && (
        <Button
          title="Ejecutar singin"
          onPress={ singIn }
        />
      )}

    </View>
  );
};
