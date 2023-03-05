import { Moment } from "moment";

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
  createdAt: Moment,
  updatedAt: Moment,
}

export default IPacient;