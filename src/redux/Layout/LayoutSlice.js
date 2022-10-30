import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  actionCreate: '',
};

export const LayoutClientAreaSlice = createSlice({
  name: 'layoutSetup',
  initialState,
  reducers: {
    changeActionCreate: (state, action) => {
      state.actionCreate = action.payload;
    },
  },
});

/* export state */
export const layoutSetupSelector = (state) => state.layoutSetup;

/* export command function from reducer*/
export const { changeActionCreate } = LayoutClientAreaSlice.actions;

/* exporting all reduxer layout slice*/
export default LayoutClientAreaSlice.reducer;
