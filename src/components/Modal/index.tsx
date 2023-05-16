import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';

import { Container, Input, Title, BtnButton, TxtButton, TxtAlert } from './styles';
import { useStudio } from '../../hooks/studio'

export const Modal = ({ modalRef, date, data }) => {
  const HEIGHT = Dimensions.get('window').height;
  const [name, setName] = useState('');
  const [hours, setHours] = useState('');
  const [professional, setProfessional] = useState('');
  const [service, setService] = useState('');
  const [alertInput, setAlertInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [buttonsEdit, setButtonsEdit] = useState(false);
  const { deleteScheduling, postScheduling, putScheduling } = useStudio();

  const formatDate = moment(date).format('DD-MM-YYYY')

  useEffect(() => {
    if (data.objectId) {
      setName(data.name)
      setHours(data.hours)
      setProfessional(data.professional)
      setService(data.service)
      setButtonsEdit(true)
    } else {
      setName('')
      setHours('')
      setProfessional('')
      setService('')
      setButtonsEdit(false)
    }
  }, [data])

  const handleSchedule = async () => {
    setLoading(true);
    if ((name !== '') && (hours !== '') && (professional !== '') && (service !== '')) {
      const objetoSalve = {
        name,
        date: formatDate,
        hours,
        professional,
        service
      }
      const res = await postScheduling(objetoSalve)
      console.log(">>>", res)
      modalRef.current?.close();
      setLoading(false);
    } else {
      setAlertInput(true)
      setLoading(false);
    }
  };

  const handleScheduleEdit = async () => {
    setLoading(true);
    if ((name !== '') && (hours !== '') && (professional !== '') && (service !== '')) {
      const objetoSalve = {
        name,
        date: formatDate,
        hours,
        professional,
        service
      }
      const res = await putScheduling(data.objectId, objetoSalve)
      console.log(">>>Edit", res)
      modalRef.current?.close();
      setLoading(false);
    } else {
      setAlertInput(true)
      setLoading(false);
    }
  };

  const handleScheduleDelete = async () => {
    setLoadingDelete(true);
    const res = await deleteScheduling(data.objectId)
    console.log(">>>Delete", res)
    modalRef.current?.close();
    setLoadingDelete(false);
  };

  return (
    <Modalize
      ref={modalRef}
      modalHeight={HEIGHT / 1.5}
    >
      <KeyboardAwareScrollView>
        <Container>
          <Title>Agendamento de Cliente</Title>

          {alertInput && name === '' ?
            <TxtAlert>
              *Preencha o nome do cliente
            </TxtAlert>
            : null
          }
          <Input
            placeholder="Nome do cliente"
            value={name}
            onChangeText={setName}
          />

          {alertInput && hours === '' ?
            <TxtAlert>
              *Preencha o horário do serviço
            </TxtAlert>
            : null
          }
          <Input
            placeholder="Horário do agendamento (hh:mm)"
            value={hours}
            onChangeText={setHours}
          />

          {alertInput && professional === '' ?
            <TxtAlert>
              *Preencha o prestador do serviço
            </TxtAlert>
            : null
          }
          <Input
            placeholder="Prestadora do serviço"
            value={professional}
            onChangeText={setProfessional}
          />

          {alertInput && service === '' ?
            <TxtAlert>
              *Preencha o tipo de serviço
            </TxtAlert>
            : null
          }
          <Input
            placeholder="Tipo do serviço"
            value={service}
            onChangeText={setService}
          />

          {buttonsEdit ? (
            <>
              <BtnButton onPress={handleScheduleEdit}>
                {!loading ?
                  <TxtButton>
                    Editar
                  </TxtButton>
                  : <ActivityIndicator size={28} />
                }
              </BtnButton>
              <BtnButton onPress={handleScheduleDelete}>
                {!loadingDelete ?
                  <TxtButton>
                    Deletar
                  </TxtButton>
                  : <ActivityIndicator size={28} />
                }
              </BtnButton>
            </>
          ) : (
            <BtnButton onPress={handleSchedule}>
              {!loading ?
                <TxtButton>
                  Agendar
                </TxtButton>
                : <ActivityIndicator size={28} />
              }
            </BtnButton>
          )}
        </Container>
      </KeyboardAwareScrollView>

    </Modalize >
  );
}
