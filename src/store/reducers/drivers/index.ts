import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialState} from './initial-state.ts';
import {Driver} from '../../../types/Driver.ts';

const driverSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    setDrivers(state, action: PayloadAction<Driver[]> ) {
      state.drivers = action.payload;
    },
  },
});

export const { setDrivers } = driverSlice.actions;
export const driverReducer = driverSlice.reducer;
