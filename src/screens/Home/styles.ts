import styled from 'styled-components/native'

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.header};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secundary_500};
  font-size: 30px;
  color: ${({ theme }) => theme.colors.background_secundary_white};
`
