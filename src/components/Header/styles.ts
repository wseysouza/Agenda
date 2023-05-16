import styled from 'styled-components/native';

interface StatusBarProps {
  heightStatusBar: number
}

export const Container = styled.View<StatusBarProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  padding-top: ${props => props.heightStatusBar + 20}px;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secundary_600};
  color: ${({ theme }) => theme.colors.background_secundary_white};
`;
