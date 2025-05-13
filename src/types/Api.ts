import {Driver} from './Driver.ts';
import {Race} from './Race.ts';


export interface Api {
  MRData: {
    DriverTable: {
      Drivers: Driver[],
    },
    RaceTable: {
      Races: Race[],
      driverId: string,
    }
    limit: string,
    offset: string,
    series: string,
    total: string,
    url: string,
    xmlns: string,
  }
}
export interface QueryParams {
  filter: string | string[];
  sort: string;
  limit: number;
  offset: number;
};
