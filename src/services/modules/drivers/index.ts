import {api} from '../../api.ts';
import {Driver} from '../../../types/Driver.ts';
import {Api, QueryParams} from '../../../types/Api.ts';
import * as stream from 'node:stream';
import {BaseQueryArg} from '@reduxjs/toolkit/query';

export const driverApi = api.injectEndpoints({
  endpoints: build => ({
    getDrivers: build.query<Api, Partial<QueryParams>>({
      query: ({limit, offset}) => ({
        url: 'drivers.json',
        method: 'GET',
        params: {
          limit,
          offset,
        },
      }),
      providesTags: () => ['Drivers'],
    }),
    getDriverById: build.query<Api, {id: string}>({
      query: ({id}) => ({
        url: `drivers/${id}.json`,
        method: 'GET',
      }),
    }),
    getDriverResults: build.query<any, {id: string}>({
      query:({id}) => ({
        url: `drivers/${id}/results.json`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});
export const { useGetDriversQuery, useGetDriverByIdQuery, useGetDriverResultsQuery } = driverApi;
