import Service from '../../service';

export const getAllData = async () => {
  const response = await Service.getAllSchedules();
  return response;
};
