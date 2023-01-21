import React from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator } from './src/routes/appNavigation';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium
} from '@expo-google-fonts/poppins';

import {
  Cinzel_400Regular,
  Cinzel_500Medium,
  Cinzel_600SemiBold
} from '@expo-google-fonts/cinzel'

import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme'



export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Cinzel_400Regular,
    Cinzel_500Medium,
    Cinzel_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}