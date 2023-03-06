import axiosApiConfig from "../axiosApiConfig";

const getUsers = async (params?: any): Promise<any[]> => {
  const result : any = await axiosApiConfig.get('/users', { params: { ...params } });
  return result.data;
};

export default getUsers;
