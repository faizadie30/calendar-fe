/* import service api for thunk method */
import GetThunk from './GetThunks';
import PostThunk from './PostThunks';

/* service get */
const getAllSchedules = () => GetThunk('/api/schedules', {});

/* service post */
const saveDataWithApi = (data) => PostThunk('/api/schedules', data);

/* declare routing */
const Service = {
  getAllSchedules,
  saveDataWithApi,
};

export default Service;
