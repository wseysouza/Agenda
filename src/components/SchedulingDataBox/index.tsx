import React from 'react';

import * as S from './styles';

export const SchedulingDataBox = ({ item, onPressCard }) => {

  return (
    <S.Container onPress={onPressCard}>
      <S.WrapperHours>
        <S.Hours>{item.hours}</S.Hours>
      </S.WrapperHours>
      <S.Wrapper>
        <S.NameClient>Cliente: {item.name}</S.NameClient>
        <S.NameProfessional>Prestadora: {item.professional}</S.NameProfessional>
        <S.Service>Serviço: {item.service}</S.Service>
      </S.Wrapper>
    </S.Container>
  );
}
