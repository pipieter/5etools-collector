import { Cell, Entry, ImageRef, Prerequisite, Rarity, ReprintedAs, SingleEntry, SpellComponents, Unit } from './common';

export interface Action {
  name: string;
  source: string;
  reprintedAs?: ReprintedAs[];
  entries: Entry[];
  time?: Unit[];
}

export interface Boon {
  name: string;
  source: string;
  type: string;
  ability?: SingleEntry;
  signatureSpells?: SingleEntry;
  entries: Entry[];
}

export interface Deity {
  name: string;
  source: string;
  pantheon: string;
  alignment?: string[];
  category?: string;
  title?: string;
  worshipers?: string;
  plane?: string;
  domains?: string[];
  province?: string;
  symbol?: string;
  symbolImg?: ImageRef;
  entries?: string[];
}

export interface Feat {
  name: string;
  source: string;
  reprintedAs?: ReprintedAs[];
  category?: string;
  entries: Entry[];
  prerequisite?: Prerequisite[];
  hasFluffImages?: boolean;
}

export interface ItemMastery {
  name: string;
  source: string;
  entries: Entry[];
}

export interface ItemProperty {
  name?: string;
  source: string;
  abbreviation: string;
  template: string;
  reprintedAs?: ReprintedAs[];
  entries?: Entry[];
}

export interface ItemType {
  name: string;
  abbreviation: string;
  source: string;
  entries?: Entry[];
  reprintedAs?: ReprintedAs[];
}

export interface Item {
  name: string;
  source: string;
  reprintedAs?: ReprintedAs[];
  type?: string;
  rarity?: Rarity;
  wondrous?: boolean;
}

export interface Spell {
  name: string;
  source: string;
  reprintedAs?: ReprintedAs[];
  entries: Entry[];
  entriesHigherLevel?: Entry[];
  level: number;
  school: string;
  components: SpellComponents;
}

export interface Table {
  name: string;
  source: string;
  caption?: string;
  colLabels?: string[];
  colStyles: string[];
  rows: (Entry | Cell)[][];
}
