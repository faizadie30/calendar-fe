import Service from '../../service';

export const getAllData = async () => {
  const response = await Service.getAllSchedules();
  return response;
};

export const processSaveData = async (data) => {
  const response = await Service.saveDataWithApi(data);
  return response;
};
