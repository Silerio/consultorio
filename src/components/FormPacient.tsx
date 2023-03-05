import { Form, Row, Col, Input, FormInstance } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Moment } from "moment";
import IPacient from "../interfaces/IPacient";

interface IFormPacient extends Omit<IPacient, 'id' | 'createdAt' | 'updatedAt'>{
  id?: number,
  createdAt?: Moment,
  updatedAt?: Moment,
}

interface FormPacientProps{
  form: FormInstance<IFormPacient>,
  onFinish: (values: IFormPacient) => void,
  isDisabled?: boolean,
}

const FormPacient = ({
  form,
  onFinish,
  isDisabled = false,
}: FormPacientProps) => {

  const requiredRule = { required: true };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  }

  function onPressEnterHandler(){
    form.submit();
  }

  return (
    <Form 
      labelWrap
      labelAlign="left"
      name="newPacient" 
      autoComplete="off" 
      size="large"
      {...formItemLayout}
      form={form} 
      disabled={isDisabled}
      onFinish={onFinish}
    >
      <Row gutter={[24, 0]}>
        <Col span={24}>
          <Form.Item
            label="Nombre completo"
            name="name"
            rules={[{...requiredRule, message: "Nombre del paciente es requerido"}]}
          >
            <Input autoFocus onPressEnter={onPressEnterHandler} />
          </Form.Item>
          <Form.Item
            label="Dirección"
            name="address"
            rules={[{...requiredRule, message: "Es necesario agregar una dirección"}]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Teléfono"
            name="phone"
            rules={[{...requiredRule, message: "Teléfono de contacto requerido"}]}
          >
            <Input onPressEnter={onPressEnterHandler} />
          </Form.Item>
          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[{...requiredRule, message: "Correo electrónico requerido"}]}
          >
            <Input onPressEnter={onPressEnterHandler} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            label="Antecedentes Heredofamiliares"
            name="ahf"
          >
            <TextArea rows={4} onPressEnter={onPressEnterHandler} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            label="Antecedentes Personales Patólogicos"
            name="app"
          >
            <TextArea rows={4} onPressEnter={onPressEnterHandler} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            label="Antecedentes Personales NO Patólogicos"
            name="apnp"
          >
            <TextArea rows={4} onPressEnter={onPressEnterHandler} />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            label="Antecedentes Ginecoobstetra"
            name="ago"
          >
            <TextArea rows={4} onPressEnter={onPressEnterHandler} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default FormPacient;
