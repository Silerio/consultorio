import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import IPacient from '../interfaces/IPacient';
import { MailOutlined, PhoneFilled } from '@ant-design/icons';
import moment from 'moment';
import ButtonClipboard from './ButtonClipboard';
import { IUseService } from '../hooks/useService';

interface ITablePacientsProps {
  dataState: IUseService<IPacient[]>,
  getActions?: (pacient: IPacient) => React.ReactNode,
}

const TablePacients = ({
  dataState,
  getActions,
}: ITablePacientsProps) => {
  const columns: ColumnsType<IPacient> = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      render: (name) => <a>{name}</a>,
    },
    {
      title: 'Teléfono',
      dataIndex: 'phone',
      render: (phone) => (
        <ButtonClipboard icon={<PhoneFilled />}>
          {phone}
        </ButtonClipboard>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: (email) => (
        <ButtonClipboard icon={<MailOutlined />}>
          {email}
        </ButtonClipboard>
      ),
    },
    {
      title: 'Última consulta',
      dataIndex: 'createdAt',
      render: (date) => (
        moment(date).format('LLL')
      )
    },
    {
      title: 'Próxima consulta',
      dataIndex: 'updatedAt',
      render: (date) => (
        moment(date).format('LLL')
      )
    },
    getActions ? ({
      title: 'Acciones',
      width: '18%',
      render: (_, pacient) => getActions(pacient),
    }) : {},
  ];

  return (
    <Table 
      loading={dataState.loading}
      columns={columns} 
      dataSource={dataState.data || []}
      onChange={dataState.onChangePage}
      rowKey="id"
    />
  );
};

export default TablePacients;