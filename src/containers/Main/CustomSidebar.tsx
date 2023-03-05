import React from 'react';
import {
  UserOutlined,
  MedicineBoxOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

const CustomSidebar: React.FC = () => {
  const navigate = useNavigate();

  const menuItems: MenuItemType[] = [
    { 
      key:'1', 
      label: 'Pacientes',
      icon: <UserOutlined />, 
      onClick: () => navigate('/pacientes'),
    },
    { 
      key:'2', 
      label: 'Antecedentes Clínicos',
      icon: <MedicineBoxOutlined />, 
      onClick: () => navigate('/antecedentes'),
    },
    { 
      key:'3', 
      label: 'Consultas',
      icon: <CalendarOutlined />, 
      onClick: () => navigate('/consultas'),
    },
  ];

  const Logo = () => (
    <div 
      style={{
        height: 65,
        background: '#f8f8f8',
        textAlign: 'center',
        fontSize: 26,
        display: 'flex'
      }} 
    >
      <div style={{ alignSelf: 'center', width: '100%' }}>
        Logo
      </div>
    </div>
  );

  return (
    <>
      <Logo />
      <Menu 
        theme="light" 
        mode="inline" 
        items={menuItems} 
        defaultSelectedKeys={['1']} 
        onClick={(menuItem: MenuItemType) => menuItem.onClick}
      />
    </>
  );
};

export default CustomSidebar;
