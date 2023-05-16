import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled.View`
    width: 100%;
    height: 325px;

    background-color:${({ theme }) => theme.colors.header} ;

    justify-content: center;

    padding: 30px;
`

export const Footer = styled.View`
    width: 100%;

    background-color:${({ theme }) => theme.colors.header} ;

    justify-content: center;

    padding: 30px;
`

export const Title = styled.Text`
    font-size:30px;    
    font-family: ${({ theme }) => theme.fonts.secundary_400};
    color: ${({ theme }) => theme.colors.shape};
`


export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 2,
        paddingTop: 50,
    },
    showsVerticalScrollIndicator: false
})`
    background-color:${({ theme }) => theme.colors.background_secundary_white};
`
