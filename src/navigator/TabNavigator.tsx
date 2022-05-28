/* eslint-disable prettier/prettier */
import React from 'react';
import { Platform } from 'react-native';
import { TabNavigatorIOS } from './TabNavigators/TabNavigatorIOS';
import { TabNavigatorAndroid } from './TabNavigators/TabNavigatorAndroid';

export function TabNavigator() {
  return Platform.OS === 'ios'
    ? <TabNavigatorIOS/>
    : <TabNavigatorAndroid/>;
}

