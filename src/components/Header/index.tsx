import React from 'react';
import { StatusBar, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';


import { Container, Title } from './styles';

export const Header = ({ text }) => {
  const navigate = useNavigation()
  const heightStatusBar = StatusBar.currentHeight;
  const date = moment(text).format('DD/MM/YYYY')
  return (
    <Container heightStatusBar={heightStatusBar}>
      <MaterialIcons name="arrow-back-ios" size={34} color="#fff" onPress={navigate.goBack} />
      <Title>
        {date}
      </Title>
      <View style={{ width: 34 }} />
    </Container>
  );
}