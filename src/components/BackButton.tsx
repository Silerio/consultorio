import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";

interface IBackButtonProps{
  icon?: React.ReactNode,
  children: React.ReactNode,
  onClick?: () => void,
}

const BackButton = ({
  icon = <ArrowLeftOutlined />,
  children,
  onClick = () => {},
}: IBackButtonProps) => {

  return (
    <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
    }}>
      <div style={{ cursor: 'pointer', display: 'inherit' }} onClick={onClick}>
        {icon}
      </div>
      {children}
    </span>
  );
}

export default BackButton;
