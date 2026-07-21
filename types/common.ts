export type Unit =
  | {
      number: number;
      unit: string;
    }
  | 'Varies'
  | 'Free';

export type ReprintedAs = string | { uid: string; tag: string };

export type Entry = string | EntryEntries | EntryInset | EntryTable | EntryList;

export interface EntryEntries {
  type: 'entries';
  name?: string;
  entries: Entry[];
}

export interface EntryInset {
  type: 'inset';
  name: string;
  entries: Entry[];
}

export interface EntryTable {
  type: 'table';
  caption: string;
  colLabels: string[];
  colStyles: string[];
  rows: Entry[][];
}

export interface EntryList {
  type: 'list';
  items: Entry[];
}
