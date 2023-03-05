import { Button, ButtonProps } from "antd";

interface IPrimaryButtonProps extends ButtonProps{}

const PrimaryButton = (props: IPrimaryButtonProps) => {
  const {
    children,
    shape
  } = props;

  const borderRadius = shape === undefined ? { borderRadius: 0 } : {}; 

  return (
    <Button 
      {...props}
      style={{
        display: 'flex',
        alignItems: 'center',
        ...borderRadius,
      }}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
