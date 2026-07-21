import { Unit } from './common';

export interface Action {
  name: string;
  source: string;
  page: number;
  srd?: boolean;
  srd52?: boolean;
  basicRules?: boolean;
  time?: Unit[];
}
