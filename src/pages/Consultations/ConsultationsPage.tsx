import { Card } from 'antd';
import React from 'react';
import ConsultationsPageController from './ConsultationsPageController';

const ConsultationsPage: React.FC = () => {
  const {} = ConsultationsPageController();

  return (
    <Card title="Consultas" bordered={false}>
      Listado de consultas
    </Card>
  );
};

export default ConsultationsPage;
