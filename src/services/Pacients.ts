import axiosApiConfig from "../axiosApiConfig";
import IPacient from "../interfaces/IPacient";

const getPacients = async (params?: any): Promise<IPacient[]> => {
  const result = await axiosApiConfig.get<IPacient[]>('/pacients', { params: { ...params } });
  return result.data;
};

export async function createPacient(pacient: Omit<IPacient, 'id' | 'createdAt' | 'updatedAt'>): Promise<IPacient> {
  const result = await axiosApiConfig.post<IPacient>('/pacients', pacient);
  return result.data;
}

export async function editPacient(pacient: Partial<IPacient>): Promise<IPacient> {
  const result = await axiosApiConfig.patch<IPacient>(`/pacients/${pacient.id}`, pacient);
  return result.data;
}

export default getPacients;
