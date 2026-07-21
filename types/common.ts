export interface SRD {
  srd?: boolean;
  srd52?: boolean;
  basicRules?: boolean;
  basicRules2024?: boolean;
}

export type Unit =
  | {
      number: number;
      unit: string;
      note?: string;
      condition?: string;
    }
  | 'Varies'
  | 'Free';

export type ReprintedAs = string | { uid: string; tag: string };

export type Entry = string | EntryEntries | EntryItem | EntrySection | EntryInset | EntryTable | EntryList | EntryQuote;

export interface EntryEntries {
  type: 'entries';
  name?: string;
  entries: Entry[];
}

export interface EntryItem {
  type: 'item';
  name?: string;
  entries: Entry[];
}

export interface EntrySection {
  type: 'section';
  name?: string;
  entries: Entry[];
}

export interface EntryInset {
  type: 'inset';
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
  rows: (Entry | Cell)[][];
}

export type ColLabelRow = string | { entry: string; width: number };

interface Cell {
  type: 'cell';
  roll: { exact: number } | { min: number; max: number };
}

export interface EntryList {
  type: 'list';
  style?: string;
  items: Entry[];
}

export interface EntryQuote {
  type: 'quote';
  entries: Entry[];
  by?: string;
}

export interface SingleEntry {
  entry: string;
}

// util.json#/$defs/prerequisite
export interface Prerequisite {
  ability?: [{ str?: number; dex?: number; con?: number; int?: number; wis?: number; cha?: number }];
  campaign?: string[];
  exclusiveFeatCategory?: string[];
  feat?: string[];
  feature?: string[];
  level?: number | { level: number; class: { name: string } };
  other?: string;
  otherSummary?: { entry: string; entrySummary: string };
  spellcasting2020?: boolean;
  spellcastingFeature?: boolean;
  race?: { name: string }[];
}

export type Rarity = 'none' | 'unknown' | string;

export interface SpellComponents {
  v?: boolean;
  s?: boolean;
  m?: MaterialComponent;
}

export type MaterialComponent =
  | string
  | {
      text: string;
      cost?: number;
      consume?: boolean | 'optional';
    };
