import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SchedOfTheDay } from '../screens/SchedOfTheDay';
import { Scheduling } from '../screens/Scheduling';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function MainStackNavigator() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedOfTheDay" component={SchedOfTheDay} />
    </Navigator>
  )
}