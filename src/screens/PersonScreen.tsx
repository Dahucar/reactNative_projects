/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends NativeStackScreenProps<RootStackParams, 'PersonScreen'> {}
export const PersonScreen = (props: Props) => {
  const params = props.route.params;

  return (
    <View>
      <Text>
        PersonScreen
      </Text>
      <Text>
        {JSON.stringify(params, null, 3)}
      </Text>

      <Button
        title="Navegar a Home"
        onPress={() => props.navigation.navigate('HomeScreen')}
      />
    </View>
  );
};
