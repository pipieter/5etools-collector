import { Entry, Prerequisite, ReprintedAs, Unit } from './common';

export interface Action {
  name: string;
  source: string;
  page: number;
  entries: Entry[];
  time?: Unit[];
  reprintedAs?: ReprintedAs[];
}

export interface Feat {
  name: string;
  source: string;
  page?: number;
  reprintedAs?: ReprintedAs[];
  category?: string;
  entries: Entry[];
  prerequisite?: Prerequisite[];
  hasFluffImages?: boolean;
}
