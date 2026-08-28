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
  | EntryRefClassFeature
  | EntryRefSubclassFeature
  | EntryRefFeat
  | EntryRefOptionalFeature
  | EntryStatBlock
  | EntryAbilityGeneric
  | EntryActions
  | EntryAttack
  | EntryTableGroup
  | EntryAbilityDc
  | EntryAbilityAttackMod;

export interface EntryBase {
  id?: string;
  name?: string;
  page?: number;
  source?: string;
  data?: any;
  style?: string;
}

export interface EntryEntries extends EntryBase {
  type: 'entries';
  entries: Entry[];
}

export interface EntryItem extends EntryBase {
  type: 'item' | 'itemSub';
  entries?: Entry[];
  entry?: Entry;
  nameDot?: boolean;
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
  rows: ((Entry | Cell | number)[] | Row)[];
  footnote?: string;
  footnotes?: string[];
}

export type ColLabelRow = (string | { entry: string; width: number })[];

export interface Cell {
  type: 'cell';
  roll?: { exact: number } | { min: number; max: number; pad?: boolean };
  entry?: Entry;
  width?: number;
}

export interface CellHeader {
  type: 'cellHeader';
  width: number;
  entry: string;
  style: string;
}

export interface Row {
  type: 'row';
  style?: string;
  row?: Entry[];
}

export interface EntryList extends EntryBase {
  type: 'list';
  columns?: number;
  items: Entry[];
}

export interface EntryQuote extends EntryBase {
  type: 'quote';
  entries: Entry[];
  by?: string;
  from?: string;
  skipMarks?: boolean;
}

export interface EntryImage extends EntryBase {
  type: 'image';
  href: { type: 'internal'; path: string } | { type: 'external'; url: string };
  title?: string;
  credit?: string;
  width?: number;
  height?: number;
  altText?: string;
}

export interface EntryOptions extends EntryBase {
  type: 'options';
  count?: number;
  entries: Entry[];
}

export interface EntryRefOptionalFeature extends EntryBase {
  type: 'refOptionalfeature';
  name?: string;
  optionalfeature: string;
  preserve?: { prerequisite?: boolean; consumes?: boolean };
}

export interface EntryStatBlock extends EntryBase {
  type: 'statblock';
  tag: string;
  name: string;
  collapsed?: boolean;
}

export interface EntryAbilityGeneric extends EntryBase {
  type: 'abilityGeneric';
  text: string;
}

export interface EntryActions extends EntryBase {
  type: 'actions';
  entries: Entry[];
  attackEntries?: Entry[];
}

export interface EntryAttack extends EntryBase {
  type: 'attack';
  attackType: string;
  attackEntries: Entry[];
  hitEntries: Entry[];
}

export interface EntryRefClassFeature extends EntryBase {
  type: 'refClassFeature';
  classFeature: string;
}

export interface EntryRefSubclassFeature extends EntryBase {
  type: 'refSubclassFeature';
  subclassFeature: string;
}

export interface EntryRefFeat extends EntryBase {
  type: 'refFeat';
  feat: string;
}

export interface EntryAbilityDc extends EntryBase {
  type: 'abilityDc';
  name: string;
  attributes: string[];
}

export interface EntryAbilityAttackMod extends EntryBase {
  type: 'abilityAttackMod';
  name: string;
  attributes: string[];
}

export interface SingleEntry {
  entry: string;
}
