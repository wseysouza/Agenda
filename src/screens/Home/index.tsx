import React from 'react'
import * as S from './styles'

import { StackHeaderProps } from '@react-navigation/stack';

export function Home({ navigation }: StackHeaderProps) {
    setTimeout(() => {
        navigation.navigate("Scheduling")
    }, 1000)
    return (
        <S.Container>
            <S.Title>Luciana</S.Title>
        </S.Container>
    )
}