import { Moment } from "moment";
import { CONSULTATIONS_STATUS } from "../enums/CONSULTATIONS_STATUS";
import IPacient from "./IPacient";

interface IConsultation {
  id: number,
  reason: string,
  scheduledDate: Moment,
  status: CONSULTATIONS_STATUS,
  pacientId: IPacient['id'],
}

export default IConsultation;