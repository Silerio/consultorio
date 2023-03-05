import { Button } from "antd";
import IPacient from "../interfaces/IPacient";

interface IGeneratePacientFormatProps{
  pacient?: IPacient
}

const GeneratePacientFormat = ({
  pacient
}: IGeneratePacientFormatProps) => {

  return (
    <>
      <Button block>
        Nota médica
      </Button>
      <Button block>
        Receta médica
      </Button>
      <Button block>
        Tarjeta de Identificación de paciente
      </Button>
      <Button block>
        Solicitudes de laboratorio
      </Button>
      <Button block>
        Solicitudes de estudios de gabinete
      </Button>
      <Button block>
        Consentimiento informado para procedimientos QX
      </Button>
    </>
  );
}

export default GeneratePacientFormat;
