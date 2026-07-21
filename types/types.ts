import { Entry, Prerequisite, Rarity, ReprintedAs, SpellComponents, Unit } from './common';

export interface Action {
  name: string;
  source: string;
  reprintedAs?: ReprintedAs[];
  entries: Entry[];
  time?: Unit[];
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
