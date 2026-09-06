import { ID, Resist, Sense } from './base';
import { Entry } from './entry';
import { Nullable, Variadic } from './util';

// TODO this will most likely be reused elsewhere
export interface SpellcastingCopyEntry {
  name?: string;
  type?: string;
  entries?: Entry[];
  headerEntries: string[];
  footerEntries?: string[];
  will?: any; // TODO
  daily: any; // TODO
  spells?: any; // TODO
  hidden?: string[];
  ability?: string;
  displayAs?: string;
}

export interface InsertArrMod<T> {
  mode: 'insertArr';
  index: number;
  items: Variadic<T>;
}

export interface ReplaceArrMod<T> {
  mode: 'replaceArr';
  replace: string | { index: number };
  items: Variadic<T>;
}

export interface PrependArr<T> {
  mode: 'prependArr';
  items: Variadic<T>;
}

export interface AppendArr<T> {
  mode: 'appendArr';
  items: Variadic<T>;
}

export interface RenameArr {
  mode: 'renameArr';
  renames: {
    rename: string;
    with: string;
  };
}

export interface RemoveArr<T> {
  mode: 'removeArr';
  names?: Variadic<string>;
  items?: Variadic<T>;
  force?: boolean;
}

export interface ReplaceTxt {
  mode: 'replaceTxt';
  replace: string;
  with: string;
  flags?: string;
  props?: string[];
}

export type ReplaceSpellsEntry = Record<string, { replace: string; with: string }[]>;

export interface ReplaceSpells {
  mode: 'replaceSpells';
  daily?: ReplaceSpellsEntry;
  spells?: ReplaceSpellsEntry;
}

export interface AddSkills {
  mode: 'addSkills';
  skills: Record<string, number>;
}

export interface AddSenses {
  mode: 'addSenses';
  senses: { type: string; range: number }[];
}

export interface AppendIfNotExistsArr<T> {
  mode: 'appendIfNotExistsArr';
  items: Variadic<T>;
}

export interface SetProp {
  mode: 'setProp';
  prop?: string;
  value: string | number | null | Entry[];
}

export interface AddSpells {
  mode: 'addSpells';
  will?: string[];
  daily: any; // TODO
  spells: any; // TODO
}

export interface RemoveSpells {
  mode: 'removeSpells';
  daily: any; // TODO
}

export type Mod<T> =
  | 'remove'
  | InsertArrMod<T>
  | ReplaceArrMod<T>
  | PrependArr<T>
  | AppendArr<T>
  | RemoveArr<T>
  | RenameArr
  | AppendIfNotExistsArr<T>
  | ReplaceTxt
  | AddSenses
  | ReplaceSpells
  | RemoveSpells
  | AddSkills
  | AddSpells
  | SetProp;

export type EntryMod = Mod<Variadic<string | Entry>>;
export type SpellcastingEntryMod = Mod<SpellcastingCopyEntry>;

// Spellcasting is weird and should be handled separately
export type Mods = { spellcasting?: Variadic<SpellcastingEntryMod> } & {
  resist?: Variadic<Mod<Variadic<Resist>>> | Variadic<EntryMod>;
} & Record<string, Variadic<EntryMod>>;

// Internal fields for copy
export interface CopyInternals {
  pantheon: string;
}

export interface Copy {
  _copy: {
    name?: string;
    abbreviation?: string;
    shortName?: string;
    className?: string;
    classSource?: string;
    source: string;
    _mod?: Mods;
    _preserve?: Record<string, boolean>;
    _templates?: ID[];
  } & Partial<CopyInternals>;
}

export type Copyable<T> = Partial<Nullable<T>> & Copy;
