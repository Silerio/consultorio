import { faker } from '@faker-js/faker';
import { Form, FormInstance } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../hooks/useService';
import IPacient from '../../interfaces/IPacient';
import getPacients from '../../services/Pacients';

interface IMedicalHistoryPageControllerResp{
  pacients: IPacient[],
  selectedPacient: IPacient | undefined,
  formInstance: FormInstance<IPacient>,
  onChangePacient: (pacientId: IPacient['id']) => void,
}

const MedicalHistoryPageController = (): IMedicalHistoryPageControllerResp => {
  const { pacientId } = useParams();

  const [formInstance] = Form.useForm<IPacient>();

  const [selectedPacient, setSelectedPacient] = useState<IPacient | undefined>();

  const pacientsState = useService<IPacient[]>({
    fetchData: getPacients,
  });

  function onChangePacient(pacientId: IPacient['id']){
    const pacient: IPacient | undefined  = pacientsState.data?.filter(p => p.id === pacientId)[0];

    setSelectedPacient(pacient);
  }

  useEffect(() => {
    if(pacientId !== undefined){
      onChangePacient(Number(pacientId));
    }
  }, [pacientsState.data])

  useEffect(() => {
    if(selectedPacient === undefined) return;

    formInstance.setFieldsValue(selectedPacient);
  }, [selectedPacient])
  
  
  return {
    pacients: pacientsState.data || [],
    selectedPacient,
    formInstance,
    onChangePacient,
  };
};

export default MedicalHistoryPageController;
