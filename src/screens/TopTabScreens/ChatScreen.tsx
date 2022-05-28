/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';

import { TouchableIcon } from '../../components/TouchableIcon';
import { AuthContext } from '../../context/AuthContext';

import Icon from 'react-native-vector-icons/Ionicons';

export const ChatScreen = () => {
  const { authState: { favoriteIcon } } = useContext(AuthContext);

  const icons = [
    'american-football', 'aperture', 'apps',
    'bar-chart', 'happy', 'cloud-offline',
    'desktop', 'flash', 'flask', 'hammer', 'hand-left',
  ];

  useEffect(() => {
    console.log('ChatScreen -> useEffect');
  }, []);

  return (
    <View>
      <Text>
        {icons.map(ico => (
          <TouchableIcon
            key={ico}
            iconName={ico}
          />
        ))}
      </Text>

      <Text>Tu icono favorito:</Text>

      {favoriteIcon && (
        <Text>
          <Icon
            name={favoriteIcon}
            size={90}
            color="blueviolet"
          />
        </Text>
      )}

    </View>
  );
};
