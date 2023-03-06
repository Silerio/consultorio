import { Moment } from "moment";

interface IConsultation {
  id: number,
  medicalNote: string,
  physicalExploration: string,
  diagnosis: string,
  treatment: string,
  consultationId: IConsultation['id'],
}

export default IConsultation;