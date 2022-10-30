import { configureStore } from '@reduxjs/toolkit';
const { VITE_APP_DEV } = import.meta.env;
import LayoutReducer from './Layout/LayoutSlice';
import ScheduleReducer from './Schedules/ScheduleSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'scheduleSetup/getAllData/fulfilled',
          'scheduleSetup/saveData/fulfilled',
        ],
      },
    }),
  reducer: {
    layoutSetup: LayoutReducer,
    scheduleSetup: ScheduleReducer,
  },
  devTools: VITE_APP_DEV === 'false' ? false : true,
});
