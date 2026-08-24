export type Entry =
  string | EntryEntries | EntryItem | EntrySection | EntryInset | EntryTable | EntryList | EntryQuote | EntryImage;

export interface EntryEntries {
  type: 'entries';
  name?: string;
  page?: number;
  entries: Entry[];
  data?: any;
}

export interface EntryItem {
  type: 'item';
  name?: string;
  entries?: Entry[];
  entry?: Entry;
}

export interface EntrySection {
  type: 'section';
  id?: string;
  name?: string;
  entries: Entry[];
}

export interface EntryInset {
  type: 'inset' | 'insetReadaloud';
  source?: string;
  page?: number;
  name: string;
  entries: Entry[];
}

export interface EntryTableGroup {
  type: 'tableGroup';
  name: string;
  caption?: string;
  tables: EntryTable[];
}

export interface EntryTable {
  type: 'table';
  caption?: string;
  colLabels?: string[];
  colLabelRows?: ColLabelRow[];
  colStyles: string[];
  rows: (Entry | Cell | number)[][];
  footnote?: string;
  footnotes?: string[];
  data?: any; // TODO
}

export type ColLabelRow = (string | { entry: string; width: number })[];

export interface Cell {
  type: 'cell';
  roll: { exact: number } | { min: number; max: number; pad?: boolean };
  entry?: Entry;
}

export interface EntryList {
  type: 'list';
  style?: string;
  columns?: number;
  items: Entry[];
}

export interface EntryQuote {
  type: 'quote';
  entries: Entry[];
  by?: string;
}

export interface EntryImage {
  type: 'image';
  href: {
    type: 'internal';
    path: string;
  };
  credit: string;
}

export interface SingleEntry {
  entry: string;
}
