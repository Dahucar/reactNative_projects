/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export const AlbunsScreen = () => {
  const { authState: { isLoggedIn }, singOut } = useContext(AuthContext);

  useEffect(() => {
    console.log('AlbunsScreen -> useEffect');
  }, []);

  return (
    <View>
      <Text>AlbunsScreen</Text>
      {isLoggedIn && (
        <Button
          title="Cerrar sesión"
          onPress={singOut}
        />
      )}
    </View>
  );
};
