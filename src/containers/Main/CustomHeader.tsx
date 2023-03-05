import { Col, Row } from 'antd';
import React from 'react';

const CustomHeader: React.FC = () => {
  return (
    <Row justify="center" align="middle">
      <Col className="text-xl">
        Consultorio Médico
      </Col>
    </Row>
  );
};

export default CustomHeader;
