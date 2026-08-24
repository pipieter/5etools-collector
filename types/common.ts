export interface Base {
  name: string;
  source: string;
  page?: number;
  alias?: string[];
  reprintedAs?: ReprintedAs[];
  hasFluffImages?: boolean;
  hasFluff?: boolean;
  hasRefs?: boolean;
  referenceSources?: Source[];
  otherSources?: Source[];
  additionalSources?: Source[];
  _copy?: any; // TODO
}

export type Source =
  | string
  | {
      source: string;
      page?: number;
    };

export interface SRD {
  srd?: boolean | string;
  srd52?: boolean | string;
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
  page?: number;
  entries: Entry[];
}

export interface EntryItem {
  type: 'item';
  name?: string;
  entries?: Entry[];
  entry?: Entry;
}

export interface EntrySection {
  type: 'section';
  name?: string;
  entries: Entry[];
}

export interface EntryInset {
  type: 'inset';
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
  rows: (Entry | Cell)[][];
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

export interface SingleEntry {
  entry: string;
}

// util.json#/$defs/prerequisite
export interface Prerequisite {
  ability?: { str?: number; dex?: number; con?: number; int?: number; wis?: number; cha?: number }[];
  background?: { name: string; displayEntry?: string }[];
  campaign?: string[];
  exclusiveFeatCategory?: string[];
  feat?: string[];
  featCategory?: string[];
  feature?: string[];
  level?: number | { level: number; class: { name: string; visible?: boolean } };
  other?: string;
  otherSummary?: { entry: string; entrySummary: string };
  proficiency?: { weapon?: string; armor?: string; weaponGroup?: string }[];
  spellcasting?: boolean;
  spellcasting2020?: boolean;
  spellcastingFeature?: boolean;
  race?: { name: string; subrace?: string; displayEntry?: string }[];
}

export type Rarity = 'none' | 'unknown' | string;

export interface SpellComponents {
  v?: boolean;
  s?: boolean;
  m?: MaterialComponent;
  r?: boolean;
}

export type MaterialComponent =
  | string
  | {
      text: string;
      cost?: number;
      consume?: boolean | 'optional';
    };

export interface ImageRef {
  type: string;
  href: {
    type: string;
    path: string;
  };
  credit: string;
  width: number;
  height: number;
}

export interface SkillProficiency {
  acrobatics?: boolean;
  athletics?: boolean;
  arcana?: boolean;
  'animal handling'?: boolean;
  deception?: boolean;
  history?: boolean;
  insight?: boolean;
  intimidation?: boolean;
  investigation?: boolean;
  medicine?: boolean;
  nature?: boolean;
  perception?: boolean;
  performance?: boolean;
  persuasion?: boolean;
  religion?: boolean;
  'sleight of hand'?: boolean;
  stealth?: boolean;
  survival?: boolean;
  any?: number;
  anyProficientSkill?: number;
  choose?: Choose;
}

export interface SavingThrowProficiency {
  choose?: Choose;
}

export interface ToolProficiency {
  "cook's utensils"?: boolean;
  "poisoner's kit"?: boolean;
  any?: number;
  anyArtisansTool?: number;
  anyMusicalInstrument?: number;
  choose?: Choose;
}

export interface LanguageProficiency {
  draconic?: boolean;
  sylvan?: boolean;
  "thieves' cant"?: boolean;
  any?: number;
}

export interface SkillToolLanguageProficiency {
  choose?: Choose[];
}

export interface WeaponProficiency {
  firearms?: boolean;
  simple?: boolean;
  martial?: boolean;
  improvised?: boolean;
  choose?: Choose;
}

export interface ArmorProficiency {
  light?: boolean;
  medium?: boolean;
  heavy?: boolean;
  shield?: boolean;
}

export interface Ability {
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  choose?: Choose | Choose[];
  hidden?: boolean;
  max?: number;
}

export type Resist =
  | string
  | {
      choose?: Choose;
    };

export interface Choose {
  from?: string[];
  fromFilter?: string;
  count?: number;
  amount?: number;
  max?: number;
  entry?: string;
}

export interface Sense {
  blindsight?: number;
  truesight?: number;
  darkvision?: number;
}

export type AdditionalSpell = any; // TODO

export interface FeatureProgression {
  name: string;
  featureType: string[];
  progression: any; // TODO
}

export interface Light {
  bright?: number;
  dim?: number;
  shape?: string;
}

export interface SetAbility {
  static: {
    str?: number;
    dex?: number;
    con?: number;
    int?: number;
    wis?: number;
    cha?: number;
  };
}

export interface ReqAttuneTag {
  alignment?: string[];
  background?: string;
  class?: string;
  creatureType?: string;
  languageProficiency?: string;
  psionics?: boolean;
  race?: string;
  size?: string;
  skillProficiency?: string;
  spellcasting?: boolean;
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
}

export type Mastery =
  | string
  | {
      uid: string;
      note: string;
    };

export interface Duration {
  type: 'instant' | 'timed' | 'permanent' | 'special';
  duration?: {
    type: 'round' | 'hour' | 'minute' | 'day';
    amount: number;
    upTo?: boolean;
  };
  concentration?: boolean;
  ends?: string[];
}

export type RangeType =
  'special' | 'point' | 'emanation' | 'line' | 'cone' | 'radius' | 'sphere' | 'cylinder' | 'cube' | 'hemisphere';

export interface Range {
  type: RangeType;
  distance?: {
    type: 'feet' | 'self' | 'touch' | 'miles' | 'sight' | 'unlimited';
    amount?: number;
  };
}

export interface Scaling {
  '1'?: string;
  '2'?: string;
  '3'?: string;
  '4'?: string;
  '5'?: string;
  '6'?: string;
  '7'?: string;
  '8'?: string;
  '9'?: string;
  '10'?: string;
  '11'?: string;
  '12'?: string;
  '13'?: string;
  '14'?: string;
  '15'?: string;
  '16'?: string;
  '17'?: string;
  '18'?: string;
  '19'?: string;
  '20'?: string;
}

export interface ScalingLevelDice {
  label?: string;
  scaling: Scaling;
}
