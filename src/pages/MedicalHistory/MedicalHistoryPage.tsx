import { Card, Col, Row, Select, Form } from 'antd';
import React from 'react';
import FormPacient from '../../components/FormPacient';
import IPacient from '../../interfaces/IPacient';
import MedicalHistoryPageController from './MedicalHistoryPageController';

const MedicalHistoryPage: React.FC = () => {
  const {
    pacients,
    selectedPacient,
    formInstance,
    onChangePacient,
  } = MedicalHistoryPageController();

  return (
    <Row gutter={[0, 16]}>
      <Col span={24}>
        <Card title="Antecedentes Clínicos" bordered={false}>
          <Row>
            <Col span={24}>
              <Select
                showSearch
                value={selectedPacient?.id}
                style={{ width: '100%' }}
                placeholder="Seleccione un paciente"
                onChange={onChangePacient}
                onSearch={(value) => {console.log(value)}}
                options={pacients.map(p => ({ value: p.id, label: p.name }))}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
              />
            </Col>
          </Row>
        </Card>
      </Col>
      {
        selectedPacient && (
          <>
            <Col span={24}>
              <Card title="Información General" bordered={false}>
                <Row>
                  <Col span={24}>
                    <FormPacient form={formInstance} onFinish={() => {}} isDisabled />
                  </Col>
                </Row>
              </Card>
            </Col>
            {
              pacients.map((p, i) => (
                <Col span={24}>
                  <Card title={`Expediente Médico ${i+1}`} bordered={false}>
                    <Row>
                      <Col span={24}>
                        Datos sobre el expediente médico. (Información llenada en la consulta)
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))
            }
          </>
        )
      }
    </Row>
  );
};

export default MedicalHistoryPage;
