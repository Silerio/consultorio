import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, Modal, Row } from 'antd';
import React from 'react';
import TablePacients from '../../components/TablePacients';
import PacientsPageController from './PacientsPageController';
import GeneratePacientFormat from '../../components/GeneratePacientFormat';
import PrimaryButton from '../../components/PrimaryButton';

const PacientsPage: React.FC = () => {  
  const {
    pacients,
    getPacientActions,
    FormatsModalHook,
    selectedPacient,
    navigate,
  } = PacientsPageController();

  return (
    <>
      <Modal 
        title={`Generar Formato para: ${selectedPacient?.name}`} 
        open={FormatsModalHook.isVisible} 
        onOk={() => FormatsModalHook.hide()} 
        onCancel={() => FormatsModalHook.hide()} 
      >
        <GeneratePacientFormat pacient={selectedPacient} />
      </Modal>
      <Card title="Pacientes" bordered={false}>
        <Row justify="end" className="mb-4">
          <Col span="auto">
            <PrimaryButton 
              type="primary" 
              icon={<PlusOutlined />} 
              size="large"
              onClick={() => navigate('/pacientes/nuevo')}
            >
              Agregar paciente
            </PrimaryButton>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <TablePacients data={pacients} loading={false} getActions={getPacientActions} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default PacientsPage;
