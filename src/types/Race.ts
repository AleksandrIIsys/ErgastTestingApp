import {Circuit} from './Circuit.ts';
import {Result} from './Result.ts';


export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results: Result[];
}
