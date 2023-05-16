import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
  padding: 30px;
`;

export const Title = styled.Text`
  font-Size: 19px;
  font-family: ${({ theme }) => theme.fonts.secundary_600};
  margin-Bottom: 25px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  margin-Bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.secundary_400};
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const BtnButton = styled.Pressable`
  width: 100%;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.header};
  align-items: center;
  border-radius: 5px;
  padding: 10px;
`;

export const TxtButton = styled.Text`
  color: ${({ theme }) => theme.colors.background_primary};
  font-family: ${({ theme }) => theme.fonts.secundary_500};
  font-size: 18px;
`;

export const TxtAlert = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.atention};
  font-family: ${({ theme }) => theme.fonts.secundary_400};
  font-size: 10px;
`;

