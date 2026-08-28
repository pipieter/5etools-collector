import {
  AbilityBool,
  AbilityEnum,
  AbilityNumber,
  Base,
  ClassInternalFeature,
  ClassProficiencies,
  Die,
  FeatureProgression,
  LanguageProficiency,
  Prerequisite,
  SkillProficiency,
  SkillToolLanguageProficiency,
  SRD,
  StartingEquipment,
  ToolProficiency,
} from './base';
import { Entry } from './entry';

export type ClassTableCell =
  | string
  | number
  | { type: 'bonus'; value: number }
  | { type: 'bonusSpeed'; value: number }
  | { type: 'dice'; toRoll: Die[]; rollable: boolean };

export interface ClassTable {
  title?: string;
  colLabels: string[];
  rows?: ClassTableCell[][];
  rowsSpellProgression?: number[][];
}

export type MulticlassRequirement = AbilityNumber | AbilityNumber[] | (AbilityNumber & { or: MulticlassRequirement[] });

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
  startingEquipment: {
    additionalFromBackground: boolean;
    defaultData?: StartingEquipment[];
    default?: string[];
    entries?: Entry[];
    goldAlternative?: string;
  };
  multiclassing?: {
    proficienciesGained?: ClassProficiencies;
    requirements?: MulticlassRequirement;
  };
  classTableGroups?: ClassTable[];
  classFeatures: (string | ClassInternalFeature)[];
  subclassTitle: string;
}

export interface Sidekick extends Base, SRD {
  isSidekick: true;
  classFeatures: string[];
  casterProgression?: string;
  cantripProgression?: number[];
  spellsKnownProgression?: number[];
  classTableGroups?: ClassTable[];
}

export interface ClassFeature extends Base, SRD {
  className: string;
  classSource: string;
  level: number;
  entries: Entry[];
  consumes?: { name: string; amount?: number };
  isClassFeatureVariant?: boolean;
  header?: number;
  type?: string;
  expertise?: SkillToolLanguageProficiency[];
  languageProficiencies?: LanguageProficiency[];
  conditionImmune?: string[];
}
