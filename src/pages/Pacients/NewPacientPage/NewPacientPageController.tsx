import { Form, FormInstance, message } from 'antd';
import React, { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import IPacient from '../../../interfaces/IPacient';
import { createPacient } from '../../../services/Pacients';

export interface INewPacientForm extends Omit<IPacient, 'id' | 'createdAt' | 'updatedAt'>{}

interface INewPacientPageControllerResp{
  newPacientForm: FormInstance<INewPacientForm>,
  onFinish: (values: INewPacientForm) => void,
  navigate: NavigateFunction,
  messageHolder: React.ReactElement,
  formIsDisabled: boolean,
}

const NewPacientPageController = (): INewPacientPageControllerResp => {
  const [newPacientForm] = Form.useForm<INewPacientForm>();
  const [messageHook, messageHolder] = message.useMessage();
  const [formIsDisabled, setFormIsDisabled] = useState(false);
  const navigate = useNavigate();

  async function onFinish(newPacient: INewPacientForm){
    setFormIsDisabled(true);
    messageHook.loading(true);

    try {
      await createPacient(newPacient);
      await messageHook.success({ content: 'Paciente guardado exitosamente', duration: 2 });
      navigate('/pacientes');
    } catch (error) {
      console.error(error);
      messageHook.error('Error al guardar paciente');
    }
  }
  
  return {
    newPacientForm,
    onFinish,
    navigate,
    messageHolder,
    formIsDisabled,
  };
};

export default NewPacientPageController;
