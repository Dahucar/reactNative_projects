/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export const IconButton = () => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 100,
        zIndex: 1,
        padding: 4,
        right: 20,
        top: 20,
      }}>
      <Icon
        name="heart"
        size={30}
        style={{
          color: 'red',
          flex: 1,
          alignContent: 'center',
          textAlign: 'center',
        }}
      />
    </TouchableOpacity>
  );
};
