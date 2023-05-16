import styled from 'styled-components/native';

export const Container = styled.Pressable`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const WrapperHours = styled.View`
  width: 80px;
  height: 90px;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  border-right-color: ${({ theme }) => theme.colors.header};
  border-right-width: 2px;
`;

export const Hours = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.secundary_600};
`;

export const Wrapper = styled.View`
  padding-left: 20px;
`;

export const NameClient = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.secundary_500};
`;

export const NameProfessional = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.secundary_400};
`;

export const Service = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.secundary_400};
`;