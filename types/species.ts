import { Fluff, FluffBase } from './fluff';
import {
  Ability,
  Age,
  AnyFeat,
  ArmorProficiency,
  Base,
  EquipmentEntry,
  HeightAndWeight,
  LanguageProficiency,
  Resist,
  SkillProficiency,
  Speed,
  SRD,
  ToolProficiency,
  WeaponProficiency,
} from './internal/base';
import { Copyable } from './internal/copy';
import { Entry, HRef } from './internal/entry';

export interface SpeciesTags {
  traitTags: string[];
  creatureTypeTags: string[];
}

export interface SpeciesBase extends Base, SRD, Partial<SpeciesTags> {
  entries: Entry[];
  size?: string[];
  sizeEntry?: Entry;
  speed?: Speed;
  ability?: Ability[];
  toolProficiencies?: ToolProficiency[];
  skillProficiencies?: SkillProficiency[];
  languageProficiencies?: LanguageProficiency[];
  weaponProficiencies?: WeaponProficiency[];
  armorProficiencies?: ArmorProficiency[];
  soundClip?: HRef;
  age?: Age;
  lineage?: string | boolean;
  additionalSpells?: any[]; // TODO
  darkvision?: number;
  blindsight?: number;
  resist?: Resist[];
  heightAndWeight?: HeightAndWeight;
  creatureTypes?: string[];
  immune?: string[];
  vulnerable?: string[];
  conditionImmune?: string[];
  feats?: AnyFeat[];
  speedEntry?: Entry;
  startingEquipment?: EquipmentEntry[];
}

export interface SpeciesFluffBase extends FluffBase {
  monstrous?: boolean;
  uncommon?: boolean;
}

export type Species = SpeciesBase | Copyable<SpeciesBase>;
export type SpeciesFluff = SpeciesFluffBase | Copyable<SpeciesFluffBase>;
