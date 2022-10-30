/* import service api for thunk method */
import GetThunk from './GetThunks';
// import PostThunk from './PostThunks';

/* service get */
const getAllSchedules = () => GetThunk('/api/schedules', false, {});

/* service post */

/* declare routing */
const Service = {
  getAllSchedules,
};

export default Service;
