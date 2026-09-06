import {
  ArmorProficiency,
  Base,
  Consumes,
  FeatureProgression,
  LanguageProficiency,
  Prerequisite,
  Sense,
  SkillProficiency,
  SRD,
  WeaponProficiency,
} from './internal/base';
import { Entry } from './internal/entry';

export interface OptionalFeatures extends Base, SRD {
  entries: Entry[];
  featureType: string[];
  prerequisite?: Prerequisite[];
  isClassFeatureVariant?: boolean;
  consumes?: Consumes;
  additionalSpells?: any[]; // TODO
  expertise?: SkillProficiency[];
  skillProficiencies?: SkillProficiency[];
  languageProficiencies?: LanguageProficiency[];
  weaponProficiencies?: WeaponProficiency[];
  armorProficiencies?: ArmorProficiency[];
  senses?: Sense[];
  featProgression?: FeatureProgression[];
  optionalfeatureProgression?: FeatureProgression[];
}
