import {
  AbilityBool,
  AbilityEnum,
  AbilityNumber,
  ArmorProficiency,
  Base,
  ClassInternalFeature,
  ClassProficiencies,
  Consumes,
  Die,
  FeatureProgression,
  ID,
  LanguageProficiency,
  SavingThrowProficiency,
  SkillProficiency,
  SkillToolLanguageProficiency,
  SRD,
  StartingEquipment,
  ToolProficiency,
  WeaponProficiency,
} from './base';
import { Entry } from './entry';

export type ClassResourceValue =
  | string
  | number
  | { type: 'bonus'; value: number }
  | { type: 'bonusSpeed'; value: number }
  | { type: 'dice'; toRoll: Die[]; rollable: boolean };

export interface ClassTable {
  title?: string;
  colLabels: string[];
  rows?: ClassResourceValue[][];
  rowsSpellProgression?: number[][];
}

export interface SubclassTable extends ClassTable {
  subclasses?: ID[];
}

export type MulticlassRequirement = AbilityNumber | AbilityNumber[] | (AbilityNumber & { or: [AbilityNumber] });

export interface ClassStartingEquipment {
  additionalFromBackground: boolean;
  defaultData?: StartingEquipment[];
  default?: string[];
  entries?: Entry[];
  goldAlternative?: string;
}

export interface Multiclassing {
  proficienciesGained?: ClassProficiencies;
  requirements?: MulticlassRequirement;
}

export interface Sidekick extends Base, SRD {
  isSidekick: true;
  classFeatures: string[];
  casterProgression?: string;
  cantripProgression?: number[];
  spellsKnownProgression?: number[];
  classTableGroups?: ClassTable[];
}

export interface Class extends Base, SRD {
  primaryAbility?: AbilityBool[];
  hd: Die;
  proficiency: AbilityEnum[];
  spellcastingAbility?: AbilityEnum;
  casterProgression?: string;
  preparedSpellsProgression?: number[];
  preparedSpellsChange?: string;
  preparedSpells?: string;
  classSpells?: string[];
  cantripProgression?: number[];
  additionalSpells?: any[]; // TODO
  spellsKnownProgression?: number[];
  spellsKnownProgressionFixed?: number[];
  spellsKnownProgressionFixedByLevel?: any; // TODO
  spellsKnownProgressionFixedAllowLowerLevel?: boolean;
  featProgression?: FeatureProgression[];
  optionalfeatureProgression?: FeatureProgression[];
  startingProficiencies: ClassProficiencies;
  startingEquipment: ClassStartingEquipment;
  multiclassing?: Multiclassing;
  classTableGroups?: ClassTable[];
  classFeatures: (string | ClassInternalFeature)[];
  subclassTitle: string;
}

export interface ClassFeature extends Base, SRD {
  className: string;
  classSource: string;
  level: number;
  entries?: Entry[];
  consumes?: Consumes;
  isClassFeatureVariant?: boolean;
  header?: number;
  type?: string;
  expertise?: SkillToolLanguageProficiency[];
  languageProficiencies?: LanguageProficiency[];
  skillProficiencies?: SkillProficiency[];
  toolProficiencies?: ToolProficiency[];
  weaponProficiencies?: WeaponProficiency[];
  savingThrowProficiencies?: SavingThrowProficiency[];
  armorProficiencies?: ArmorProficiency[];
  immune?: string[];
  resist?: string[];
  vulnerable?: string[];
  conditionImmune?: string[];
}

export interface Subclass extends Base, SRD {
  className: string;
  shortName: string;
  classSource: string;
  additionalSpells?: any[]; // TODO
  subclassFeatures?: string[];
  featProgression?: FeatureProgression[];
  optionalfeatureProgression?: FeatureProgression[];
  spellcastingAbility?: string;
  casterProgression?: string;
  cantripProgression?: number[];
  spellsKnownProgression?: number[];
  preparedSpellsProgression?: number[];
  preparedSpellsChange?: string;
  subclassSpells?: (string | { className: string; classSource: string })[];
  subSubclassSpells?: Record<string, string[]>;
  subclassTableGroups?: SubclassTable[];
}

export interface SubclassFeature extends ClassFeature {
  subclassShortName: string;
  subclassName?: string;
  subclassSource: string;
}
