import React, { useState } from 'react';
import NewPacientPageController from './NewPacientPageController';
import { Card, Col, Form, Input, Row } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import PrimaryButton from '../../../components/PrimaryButton';
import BackButton from '../../../components/BackButton';
import FormPacient from '../../../components/FormPacient';

const NewPacientPage: React.FC = () => {  
  const {
    newPacientForm,
    onFinish,
    navigate,
    messageHolder,
    formIsDisabled,
  } = NewPacientPageController();

  const SubmitButton = () => (
    <PrimaryButton 
      type="primary" 
      size="large"
      icon={<CheckCircleOutlined />}
      onClick={() => newPacientForm.submit()}
    >
      Guardar
    </PrimaryButton>
  );

  const CardTitle = () => (
    <BackButton onClick={() => navigate("/pacientes")}>
      Nuevo Paciente
    </BackButton>
  );
  
  return (
    <Card title={<CardTitle />} bordered={false} extra={<SubmitButton />}>
      {messageHolder}
      <Row justify="end" className="mb-4">
        <Col span={24}>
          <FormPacient 
            form={newPacientForm} 
            onFinish={onFinish} 
            isDisabled={formIsDisabled} 
          />
        </Col>
      </Row>
    </Card>
  );
};

export default NewPacientPage;
