import React from 'react';
import {
    Calendar as CustomCalendar,
    LocaleConfig
} from 'react-native-calendars';

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import * as S from './styles';


LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['DO', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],

};
LocaleConfig.defaultLocale = 'pt-br';


export function Calendar({ navigation }) {
    const theme = useTheme();
    return (
        <CustomCalendar
            renderArrow={(direction) =>
                <Feather
                    size={24}
                    color={theme.colors.header}
                    name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                />
            }
            headerStyle={{
                backgroundColor: theme.colors.background_secundary_white,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.header,
                paddingBottom: 10,
                marginBottom: 10
            }}
            theme={{
                textMonthFontFamily: theme.fonts.secundary_600,
                textDayFontFamily: theme.fonts.secundary_400,
                textDayHeaderFontFamily: theme.fonts.secundary_500,
                textDayFontSize: 15,
                arrowStyle: {
                    marginHorizontal: -15
                }

            }}

            firstDay={1}
            //minDate={new Date()}
            onDayPress={(date) => navigation.navigate("SchedOfTheDay", { date: date })}

        />
    )
}