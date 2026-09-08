import {
  Base,
  SRD,
  Ability,
  SkillProficiency,
  ToolProficiency,
  LanguageProficiency,
  SkillToolLanguageProficiency,
  StartingEquipment,
  Prerequisite,
  WeaponProficiency,
} from './internal/base';
import { Copyable } from './internal/copy';
import { Entry } from './internal/entry';

export interface BackgroundBase extends Base, SRD {
  entries: Entry[];
  ability?: Ability[];
  feats?: any[]; // TODO
  skillProficiencies?: SkillProficiency[];
  toolProficiencies?: ToolProficiency[];
  languageProficiencies?: LanguageProficiency[];
  skillToolLanguageProficiencies?: SkillToolLanguageProficiency[];
  weaponProficiencies?: WeaponProficiency[];
  startingEquipment?: StartingEquipment[];
  fromFeature?: any; // TODO
  additionalSpells?: any[]; // TODO
  prerequisite?: Prerequisite[];
}

export type Background = Copyable<BackgroundBase> | BackgroundBase;
