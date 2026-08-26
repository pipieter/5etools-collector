import {
  Base,
  SRD,
  Prerequisite,
  SkillProficiency,
  ToolProficiency,
  LanguageProficiency,
  WeaponProficiency,
  ArmorProficiency,
  SavingThrowProficiency,
  SkillToolLanguageProficiency,
  Sense,
  AdditionalSpell,
  Ability,
  Resist,
  FeatureProgression,
} from './base';
import { Entry } from './entry';

export interface Feat extends Base, SRD {
  entries: Entry[];
  category?: string;
  prerequisite?: Prerequisite[];
  skillProficiencies?: SkillProficiency[];
  toolProficiencies?: ToolProficiency[];
  languageProficiencies?: LanguageProficiency[];
  weaponProficiencies?: WeaponProficiency[];
  armorProficiencies?: ArmorProficiency[];
  savingThrowProficiencies?: SavingThrowProficiency[];
  skillToolLanguageProficiencies?: SkillToolLanguageProficiency[];
  expertise?: (SkillProficiency | ToolProficiency)[];
  senses?: Sense[];
  bonusSenses?: Sense[];
  additionalSpells?: AdditionalSpell[];
  ability?: Ability[];
  repeatable?: boolean;
  repeatableHidden?: boolean;
  traitTags?: string[];
  immune?: Resist[];
  resist?: Resist[];
  conditionImmune?: string[];
  featProgression?: FeatureProgression[];
  optionalfeatureProgression?: FeatureProgression[];
  _versions?: any[];
}
