export type Entry =
  | string
  | EntryEntries
  | EntryItem
  | EntrySection
  | EntryInset
  | EntryTable
  | EntryList
  | EntryQuote
  | EntryImage
  | EntryOptions
  | EntryRefOptionalFeature;

export interface EntryBase {
  id?: string;
  name?: string;
  page?: number;
  source?: string;
}

export interface EntryEntries extends EntryBase {
  type: 'entries';
  entries: Entry[];
  data?: any;
}

export interface EntryItem extends EntryBase {
  type: 'item' | 'itemSub';
  entries?: Entry[];
  entry?: Entry;
}

export interface EntrySection extends EntryBase {
  type: 'section';
  entries: Entry[];
}

export interface EntryInset extends EntryBase {
  type: 'inset' | 'insetReadaloud';
  entries: Entry[];
}

export interface EntryTableGroup extends EntryBase {
  type: 'tableGroup';
  caption?: string;
  tables: EntryTable[];
}

export interface EntryTable extends EntryBase {
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

export interface EntryList extends EntryBase {
  type: 'list';
  style?: string;
  columns?: number;
  items: Entry[];
}

export interface EntryQuote extends EntryBase {
  type: 'quote';
  entries: Entry[];
  by?: string;
  skipMarks?: boolean;
}

export interface EntryImage {
  type: 'image';
  href: { type: 'internal'; path: string } | { type: 'external'; url: string };
  title?: string;
  credit?: string;
  width?: number;
  height?: number;
  altText?: string;
  style?: string;
}

export interface EntryOptions {
  type: 'options';
  entries: Entry[];
}

export interface EntryRefOptionalFeature {
  type: 'refOptionalfeature';
  optionalfeature: string;
}

export interface SingleEntry {
  entry: string;
}
