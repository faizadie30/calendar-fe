import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllData, processSaveData } from './SchedulesApi';

const initialState = {
  startDate: '',
  endDate: '',
  isModalForm: false,
  eventDates: [],
};

export const saveData = createAsyncThunk(
  'scheduleSetup/saveData',
  async (data) => {
    const response = await processSaveData(data);
    return response;
  }
);

export const getDataAll = createAsyncThunk(
  'scheduleSetup/getAllData',
  async () => {
    const response = await getAllData();
    return response;
  }
);

export const ScheduleSlice = createSlice({
  name: 'scheduleSetup',
  initialState,
  reducers: {
    chooseDate: (state, action) => {
      state.endDate = action.payload.endDate;
      state.startDate = action.payload.startDate;
      state.isModalForm = true;
    },
    resetChooseDate: (state) => {
      state.endDate = '';
      state.startDate = '';
      state.isModalForm = false;
    },
    updateEventDate: (state, action) => {
      state.eventDates.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAll.pending, (state) => {
        state.eventDates = [];
        return state;
      })
      .addCase(getDataAll.fulfilled, (state, action) => {
        const resData = action.payload.data;
        state.eventDates = resData.data;

        return state;
      })
      .addCase(getDataAll.rejected, (state) => {
        state.eventDates = [];

        return state;
      })
      .addCase(saveData.pending, (state) => {
        state.eventDates = [];
        return state;
      })
      .addCase(saveData.fulfilled, (state, action) => {
        const resData = action.payload.data;
        state.eventDates = resData.data;

        return state;
      })
      .addCase(saveData.rejected, (state) => {
        state.eventDates = [];
        return state;
      });
  },
});

/* export state */
export const scheduleSelector = (state) => state.scheduleSetup;

/* export command function from reducer*/
export const { chooseDate, resetChooseDate, updateEventDate } =
  ScheduleSlice.actions;

/* exporting all reduxer layout slice*/
export default ScheduleSlice.reducer;
