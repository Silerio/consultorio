import axiosApiConfig from "../axiosApiConfig";
import IConsultation from "../interfaces/IConsultation";

const getConsultations = async (params?: any): Promise<IConsultation[]> => {
  const result = await axiosApiConfig.get<IConsultation[]>('/consultations', { params: { ...params } });
  return result.data;
};

export async function createConsultation(consultation: Omit<IConsultation, 'id'>): Promise<IConsultation> {
  const result = await axiosApiConfig.post<IConsultation>('/consultations', consultation);
  return result.data;
}

export async function editConsultation(consultation: Partial<IConsultation>): Promise<IConsultation> {
  const result = await axiosApiConfig.patch<IConsultation>(`/consultations/${consultation.id}`, consultation);
  return result.data;
}

export default getConsultations;
