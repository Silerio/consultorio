import { Form, FormInstance, message } from 'antd';
import React, { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';
import IPacient from '../../../interfaces/IPacient';

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

  async function onFinish(){
    setFormIsDisabled(true);
    await messageHook.loading(true);
    await messageHook.success({ content: 'Paciente guardado exitosamente', duration: 2 });
    navigate('/pacientes');
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
