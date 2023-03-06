import React, { useState } from 'react';
import IPacient from '../../interfaces/IPacient';
import { faker } from '@faker-js/faker';
import moment from 'moment';
import { Button, Col, Row, Tooltip } from 'antd';
import { CalendarOutlined, FileSyncOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import useModal, { IUseModal } from '../../hooks/useModal';
import { NavigateFunction, useNavigate } from 'react-router';
import getPacients from '../../services/Pacients';
import useService, { IUseService } from '../../hooks/useService';

interface IPacientsPageControllerResp{
  pacientsState: IUseService<IPacient[]>,
  getPacientActions?: (pacient: IPacient) => React.ReactNode,
  FormatsModalHook: IUseModal,
  selectedPacient: IPacient | undefined,
  navigate: NavigateFunction,
}

const PacientsPageController = (): IPacientsPageControllerResp => {
  const FormatsModalHook = useModal();
  const navigate = useNavigate();

  const [selectedPacient, setSelectedPacient] = useState<IPacient>();
  
  const pacientsState = useService<IPacient[]>({
    fetchData: getPacients,
  });

  function onClickGenerateFormats(pacient: IPacient){
    setSelectedPacient(pacient);
    FormatsModalHook.show();
  }

  function getPacientActions(pacient: IPacient){
    return (
      <Row>
        <Col span={8}>
          <Tooltip title="Generar Formatos">
            <Button 
              type="primary" 
              shape="circle" 
              icon={<FileSyncOutlined />} 
              size="large"
              onClick={() => onClickGenerateFormats(pacient)}
            />
          </Tooltip>
        </Col>
        <Col span={8}>
          <Tooltip title="Antecedentes Clínicos">
            <Button 
              type="primary" 
              shape="circle" 
              icon={<MedicineBoxOutlined />} 
              style={{ backgroundColor: '#ffb200' }}
              size="large"
              onClick={() => navigate(`/antecedentes/${pacient.id}`)}
            />
          </Tooltip>
        </Col>
        <Col span={8}>
          <Tooltip title="Consultas">
            <Button 
              type="primary" 
              shape="circle" 
              icon={<CalendarOutlined />}
              style={{ backgroundColor: '#28e700' }}
              size="large"
            />
          </Tooltip>
        </Col>
      </Row>
    );
  }
  
  return {
    pacientsState,
    getPacientActions,
    FormatsModalHook,
    selectedPacient,
    navigate,
  };
};

export default PacientsPageController;
