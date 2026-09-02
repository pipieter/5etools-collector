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
import { Entry } from './internal/entry';

export interface Background extends Base, SRD {
  entries?: Entry[];
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
