import axiosApiConfig from "../axiosApiConfig";
import IRecord from "../interfaces/IRecord";

const getRecords = async (params?: any): Promise<IRecord[]> => {
  const result = await axiosApiConfig.get<IRecord[]>('/records', { params: { ...params } });
  return result.data;
};

export async function createRecord(record: Omit<IRecord, 'id'>): Promise<IRecord> {
  const result = await axiosApiConfig.post<IRecord>('/consultations', record);
  return result.data;
}

export async function editRecord(record: Partial<IRecord>): Promise<IRecord> {
  const result = await axiosApiConfig.patch<IRecord>(`/consultations/${record.id}`, record);
  return result.data;
}

export default getRecords;
