import React, { useRef, useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Modalize } from 'react-native-modalize';
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';

import { ButtonAbsolut } from '../../components/ButtonAbsolut'
import { Header } from '../../components/Header';
import { SchedulingDataBox } from '../../components/SchedulingDataBox';
import { Modal } from '../../components/Modal';
import { useStudio } from '../../hooks/studio'
import theme from '../../styles/theme';

export function SchedOfTheDay({ route }) {
  const modalRef = useRef<Modalize>(null)
  const [dataCard, setDataCard] = useState({})
  const [listScheduling, setListScheduling] = useState([])
  const { getListScheduling, listClients } = useStudio();
  const date = route.params.date;

  useEffect(() => {
    getListScheduling()
  }, [])

  useEffect(() => {
    if (listClients.length > 0) {
      const dateFormat = moment(date.dateString).format('DD-MM-YYYY')
      let arrListScheduling = [];

      listClients.forEach(item => {
        if (dateFormat === item.date) {
          console.log(dateFormat, item.date)
          arrListScheduling.push(item)
        }
      });

      arrListScheduling.sort((a, b) => {
        const horaA = a.hours.split(':');
        const horaB = b.hours.split(':');

        const horaAEmMinutos = parseInt(horaA[0]) * 60 + parseInt(horaA[1]);
        const horaBEmMinutos = parseInt(horaB[0]) * 60 + parseInt(horaB[1]);

        return horaAEmMinutos - horaBEmMinutos;
      });

      setListScheduling(arrListScheduling)
    }
  }, [listClients])



  const handleOpenModal = (item: {}) => {
    setDataCard(item)
    modalRef.current?.open();
  }

  const renderEmptyComponent = useCallback(() => (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: 650 }}>
      <Text style={
        {
          marginBottom: 10,
          fontWeight: '500',
          fontSize: 14,
          color: theme.colors.header_light,
          fontFamily: theme.fonts.secundary_500
        }
      }>
        Nenhum agendamento encontrado.
      </Text>
      <FontAwesome name="calendar-times-o" size={34} color={theme.colors.header_light} />
    </View>
  ), []);

  return (
    <>
      <Header text={date.dateString} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={listScheduling}
          renderItem={({ item }) => <SchedulingDataBox item={item} onPressCard={() => handleOpenModal(item)} />}
          ListEmptyComponent={renderEmptyComponent}
        />
        <ButtonAbsolut onPress={() => handleOpenModal({})} />
      </View>
      <Modal modalRef={modalRef} date={date.dateString} data={dataCard} />
    </>

  )
}