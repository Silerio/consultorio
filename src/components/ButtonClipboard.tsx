import { Button, message } from "antd";
import { ButtonType } from "antd/es/button";
import { SizeType } from "antd/es/config-provider/SizeContext";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  padding: 10px !important;
  height: auto !important;
`;

interface IButtonClipboardProps{
  type?: ButtonType,
  size?: SizeType,
  icon?: React.ReactNode,
  children?: string,
}

const ButtonClipboard = ({
  type = 'dashed',
  size = 'small',
  children = '',
  icon,
}: IButtonClipboardProps) => {
  const [messageHook, messageHolder] = message.useMessage();

  function copyToClipboard(){
    navigator.clipboard.writeText(children);
    messageHook.info('Copiado al portapapeles');
  }

  return (
    <>
      {messageHolder}
      <ButtonStyled 
        icon={icon}
        type={type} 
        size={size} 
        onClick={copyToClipboard}
      >
        {children}
      </ButtonStyled>
    </>
  );
}

export default ButtonClipboard;