import { faker } from '@faker-js/faker';
import { Form, FormInstance } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IPacient from '../../interfaces/IPacient';

interface IMedicalHistoryPageControllerResp{
  pacients: IPacient[],
  selectedPacient: IPacient | undefined,
  formInstance: FormInstance<IPacient>,
  onChangePacient: (pacientId: IPacient['id']) => void,
}

const MedicalHistoryPageController = (): IMedicalHistoryPageControllerResp => {
  const { pacientId } = useParams();

  const [formInstance] = Form.useForm<IPacient>();
  const [pacients, setPacients] = useState<IPacient[]>([...Array(10)].map((element, index) => (
    {
      id: index,
      name: faker.name.fullName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      createdAt: moment(),
      updatedAt: moment(),
    }
  )));

  const [selectedPacient, setSelectedPacient] = useState<IPacient | undefined>();

  function onChangePacient(pacientId: IPacient['id']){
    const pacient: IPacient = pacients.filter(p => p.id === pacientId)[0];

    setSelectedPacient(pacient);
  }

  useEffect(() => {
    if(Number.isInteger(Number(pacientId))){
      setSelectedPacient(pacients[0]);
    }
  }, [])

  useEffect(() => {
    if(selectedPacient === undefined) return;

    formInstance.setFieldsValue(selectedPacient);
  }, [selectedPacient])
  
  
  return {
    pacients,
    selectedPacient,
    formInstance,
    onChangePacient,
  };
};

export default MedicalHistoryPageController;
