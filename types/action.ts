import { Entry, ReprintedAs, Unit } from './common';

export interface Action {
  name: string;
  source: string;
  page: number;
  entries: Entry[];
  time?: Unit[];
  srd?: boolean;
  srd52?: boolean;
  basicRules?: boolean;
  basicRules2024?: boolean;
  reprintedAs?: ReprintedAs[];
  seeAlsoAction?: string[];
  fromVariant?: string
}
