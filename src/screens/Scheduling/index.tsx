import React from 'react';
import { StatusBar } from 'react-native';
import * as S from './styles';
import { Calendar } from '../../components/Calendar';
import { StackHeaderProps } from '@react-navigation/stack';

export function Scheduling({ navigation }: StackHeaderProps) {
    return (
        <S.Container>
            <StatusBar
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
            />
            <S.Header>
                <S.Title>
                    Escolha uma {'\n'}
                    data para {'\n'}
                    abrir a agenda
                </S.Title>
            </S.Header>
            <S.Content>
                <Calendar navigation={navigation} />
            </S.Content>

        </S.Container>
    )
} 