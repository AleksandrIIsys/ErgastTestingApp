import {Driver} from '../../../types/Driver.ts';

type InitialStateType = {
  drivers: Driver[];
};

export const initialState: InitialStateType = {
  drivers: [],
};
export type { InitialStateType };
