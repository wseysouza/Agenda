import React, { useEffect } from 'react'
import * as S from './styles'

import { StackHeaderProps } from '@react-navigation/stack';

export function Home({ navigation }: StackHeaderProps) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Scheduling")
        }, 1000)
    }, [navigation])
    return (
        <S.Container>
            <S.Title>Studio</S.Title>
            <S.Title>Luciana Formagini</S.Title>
        </S.Container>
    )
}