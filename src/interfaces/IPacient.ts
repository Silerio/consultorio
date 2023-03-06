import { Moment } from "moment";
import IConsultation from "./IConsultation";

interface IPacient {
  id: number,
  name: string,
  address: string,
  phone: string,
  email: string,
  ahf?: string,
  app?: string,
  apnp?: string,
  ago?: string,
  consultations?: IConsultation[], 

  createdAt: Moment,
  updatedAt: Moment,
}

export default IPacient;