import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container } from './styles';
import { ThemeType } from 'styled-components';

export const ButtonAbsolut = ({ onPress }) => {

  return (
    <Container onPress={onPress}>
      <Ionicons name="person-add-outline" size={30} color="#0A5045" />
    </Container>
  )
}
