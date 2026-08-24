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
} from './base';
import { Entry } from './entry';

export interface Background extends Base, SRD {
  entries?: Entry[];
  ability?: Ability[];
  feats?: any[]; // TODO
  skillProficiencies?: SkillProficiency[];
  toolProficiencies?: ToolProficiency[];
  languageProficiencies?: LanguageProficiency[];
  skillToolLanguageProficiencies?: SkillToolLanguageProficiency[];
  startingEquipment?: StartingEquipment[];
  fromFeature?: any; // TODO
  additionalSpells?: any[]; // TODO
  prerequisite?: Prerequisite[];
}
