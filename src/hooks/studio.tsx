import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react';
import { toast } from '../components/Toast';

import { api } from '../services/api';

export interface ClientProps {
  objectId: string,
  name: string,
  phone?: string | null,
  professional: string,
  date: string,
  hours: string,
  service: string,
}

export interface PutPostClientProps {
  name: string,
  phone?: string | null,
  professional: string,
  date: string,
  hours: string,
  service: string,
}

export interface DataClientProps {
  data?: {}
  name: string,
}

type StudioProps = {
  children: ReactNode
}

export interface StudioContextData {
  listClients: ClientProps[];
  //studentFilter: ClientProps[];
  getListScheduling(): Promise<void>;
  postScheduling: (client: PutPostClientProps) => void;
  putScheduling: (id: string, client: PutPostClientProps) => void;
  deleteScheduling: (id: string) => void;
}

const StudioContext = createContext<StudioContextData>({} as StudioContextData)

export const StudioProvider = ({ children }: StudioProps) => {
  const [clientFilter, setClientFilter] = useState<ClientProps[]>([]);
  const [listClients, setListClients] = useState<ClientProps[]>([])

  /*useEffect(() => {
    if (nameStudent !== "" && nameStudent !== undefined) {
      const filterList = listStudents.filter((student) => {
        if (student.name.toLowerCase().trim().match(nameStudent.toLowerCase().trim())) {
          setStudentNotFound(false)
          return student
        }
      })
      setStudentFilter(filterList)
    }
  }, [listStudents])*/

  const getListScheduling = async () => {
    try {
      const { data } = await api.get('cliente');
      setListClients(data.results);
    } catch (error) {
      console.warn("error >> ", error)
      //toast.warn({ menssage: "Lista de alunos não encontrada" });
    }
  }

  const postScheduling = async (client: PutPostClientProps) => {
    try {
      const { status } = await api.post("/cliente", client);
      toast.success({ menssage: 'Agendado com Sucesso!' })
      getListScheduling()
      return status;
    } catch (error) {
      console.warn("typeError >> ", error)
      toast.warn({ menssage: "Erro ao agendar" });
    }
  }

  const putScheduling = async (id: string, client: PutPostClientProps) => {
    try {
      const { status } = await api.put(`/cliente/${id}`, client);
      toast.success({ menssage: "Agendamento alterado com sucesso!!!" });
      getListScheduling()
      return status;
    } catch (error) {
      console.warn("typeError >> ", error)
      toast.warn({ menssage: "Erro ao editar" });
    }
  }

  const deleteScheduling = async (id: string) => {
    try {
      const { status } = await api.delete(`/cliente/${id}`);
      toast.success({ menssage: "Agendamento deletado com sucesso" })
      getListScheduling()
      return status;
    } catch (error) {
      console.warn("typeError >> ", error)
      toast.warn({ menssage: "Erro ao deletar" });
    }
  }

  return (
    <StudioContext.Provider value={{
      listClients,
      //clientFilter,
      //searchStudent,
      getListScheduling,
      postScheduling,
      putScheduling,
      deleteScheduling
    }}>
      {children}
    </StudioContext.Provider>
  )
}


export const useStudio = () => {
  const context = useContext(StudioContext);

  if (!context) {
    throw new Error('useStudio must be used within an homeProps')
  }

  return context;
}
