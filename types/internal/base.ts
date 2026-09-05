import { Entry, EntryImage, HRef } from './entry';

export interface ID {
  name: string;
  source: string;
  page?: number;
}

export interface Foundry {
  foundryImg?: string;
  foundryActivities?: any[];
  foundrySystem?: any;
  foundryEffects?: any[];
  foundryType?: string;
  foundryFlags?: any;
  foundryAdvancement: any;
  foundryTokenScale?: number;
}

export interface TokenArt {
  hasToken?: boolean;
  tokenHref?: HRef;
  tokenCredit?: string;
  tokenCustom?: boolean;
  token?: ID;
  altArt?: any;
}

export interface HasFluff {
  hasFluffImages?: boolean;
  hasFluff?: boolean;
  fluff?: {
    entries?: Entry[];
    images?: EntryImage[];
    _subclassFluff?: any; // TODO
    _monsterFluff?: any; // TODO
    _appendMonsterFluff?: any; // TODO
    _raceFluff?: ID;
  };
}

export interface GenData {
  chapter: any;
  data: any;
  parentEntity: any;
}

export interface Base extends Foundry, TokenArt, HasFluff, Partial<GenData> {
  name: string;
  source: string;
  page?: number | string;
  alias?: string[];
  isReprinted?: boolean;
  reprintedAs?: ReprintedAs[];
  hasRefs?: boolean;
  referenceSources?: Source[];
  otherSources?: Source[];
  additionalSources?: Source[];
  edition?: string;
  _versions?: any[]; // TODO
}

export type Source =
  | string
  | {
      source: string;
      page?: number;
    };

export interface SRD {
  srd?: boolean | string;
  srd52?: boolean | string;
  basicRules?: boolean;
  basicRules2024?: boolean;
}

export type Unit =
  | {
      number: number;
      unit: string;
      note?: string;
      condition?: string;
    }
  | string;

export type ReprintedAs = string | { uid: string; tag?: string; edition?: string };

// util.json#/$defs/prerequisite
export interface Prerequisite {
  ability?: AbilityNumber[];
  background?: { name: string; displayEntry?: string }[];
  campaign?: string[];
  culture?: string[];
  exclusiveFeatCategory?: string[];
  feat?: string[];
  featCategory?: string[];
  feature?: string[];
  level?: number | { level: number; class: { name: string; visible?: boolean; source?: string } };
  other?: string;
  otherSummary?: { entry: string; entrySummary: string };
  proficiency?: { weapon?: string; armor?: string; weaponGroup?: string; skill?: string[] }[];
  spellcasting?: boolean;
  spellcasting2020?: boolean;
  spellcastingFeature?: boolean;
  spellcastingPrepared?: boolean;
  race?: { name: string; subrace?: string; displayEntry?: string }[];
}

export type Rarity = 'none' | 'unknown' | string;

export interface SpellComponents {
  v?: boolean;
  s?: boolean;
  m?: boolean | MaterialComponent;
  r?: boolean;
}

export type MaterialComponent =
  | string
  | {
      text: string;
      cost?: number;
      consume?: boolean | 'optional';
    };

export interface SavingThrowProficiency {
  choose?: Choose;
}

interface internalSkillProficiency {
  any?: number;
  anyProficientSkill?: number;
  choose?: Choose;
}

interface internalToolProficiency {
  any?: number;
  anyArtisansTool?: number;
  anyProficientTool?: number;
  anyGamingSet?: number;
  anyMusicalInstrument?: number;
  choose?: Choose;
}

interface internalLanguageProficiency {
  any?: number;
  anyStandard?: number;
  choose?: Choose;
}

export type SkillProficiency = internalSkillProficiency & Record<string, boolean>;
export type ToolProficiency = internalToolProficiency & Record<string, boolean>;
export type LanguageProficiency = internalLanguageProficiency & Record<string, boolean>;

export type SkillToolLanguageProficiency = {
  choose?: Choose[];
  anyLanguage?: number;
  anyTool?: number;
  anyProficientTool?: number;
  anyProficientSkill?: number;
} & Record<string, boolean>;

export type WeaponProficiency = {
  firearms?: boolean;
  simple?: boolean;
  martial?: boolean;
  improvised?: boolean;
  choose?: Choose;
  all?: { fromFilter: string };
} & Record<string, boolean>;

export interface ArmorProficiency {
  light?: boolean;
  medium?: boolean;
  heavy?: boolean;
  shield?: boolean;
}

export interface ClassProficiency {
  proficiency: string;
  full?: string;
  optional?: boolean;
}

export interface ClassProficiencies {
  skills?: SkillProficiency[];
  weapons?: (string | ClassProficiency)[];
  tools?: (string | ClassProficiency)[];
  armor?: (string | ClassProficiency)[];
  armorProficiencies?: ArmorProficiency[];
  toolProficiencies?: ToolProficiency[];
  weaponProficiencies?: (WeaponProficiency & Record<string, boolean>)[];
}

export interface AnyFeat {
  any?: number;
  anyFromCategory?: { category: string[]; count?: number };
}

export type AbilityEnum = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';

interface AbilityValue<T> {
  str?: T;
  dex?: T;
  con?: T;
  int?: T;
  wis?: T;
  cha?: T;
}

export type AbilityBool = AbilityValue<boolean>;
export type AbilityNumber = AbilityValue<number>;
export type AbilityString = AbilityValue<string>;

export type Ability = AbilityNumber & {
  choose?: Choose | Choose[];
  hidden?: boolean;
  max?: number;
};

export type Resist =
  | string
  | Special
  | { choose: Choose }
  | { resist: (string | Resist)[]; preNote?: string; note?: string; cond?: boolean }
  | { immune: (string | Resist)[]; preNote?: string; note?: string; cond?: boolean }
  | { vulnerable: (string | Resist)[]; preNote?: string; note?: string; cond?: boolean };

export interface Choose {
  from?: string[];
  fromFilter?: string;
  count?: number;
  amount?: number;
  max?: number;
  entry?: string;
  weighted?: {
    from: string[];
    weights: number[];
  };
  note?: string;
}

export interface Sense {
  blindsight?: number;
  truesight?: number;
  darkvision?: number;
}

export type AdditionalSpell = any; // TODO

export interface FeatureProgression {
  name: string;
  featureType?: string[];
  category?: string[];
  progression: any; // TODO
  required?: any; // TODO
}

export interface Light {
  bright?: number;
  dim?: number;
  shape?: string;
}

export interface SetAbility {
  static: AbilityNumber;
}

export type ReqAttuneTag = AbilityNumber & {
  alignment?: string[];
  background?: string;
  class?: string;
  creatureType?: string;
  languageProficiency?: string;
  psionics?: boolean;
  race?: string;
  size?: string;
  skillProficiency?: string;
  spellcasting?: boolean;
  feat?: string[] | string;
};

export type UIDString =
  | string
  | {
      uid: string;
      note: string;
    };

export interface Duration {
  type: 'instant' | 'timed' | 'permanent' | 'special';
  duration?: {
    type: string;
    amount: number;
    upTo?: boolean;
  };
  condition?: string;
  concentration?: boolean;
  ends?: string[];
}

export type RangeType =
  'special' | 'point' | 'emanation' | 'line' | 'cone' | 'radius' | 'sphere' | 'cylinder' | 'cube' | 'hemisphere';

export interface Range {
  type: RangeType;
  distance?: {
    type: 'feet' | 'self' | 'touch' | 'miles' | 'sight' | 'unlimited';
    amount?: number;
  };
}

export type Scaling = Record<string, string>;

export interface ScalingLevelDice {
  label?: string;
  scaling: Scaling;
}

export type EquipmentEntry =
  | string
  | { value: number }
  | { item: string; displayName?: string; containsValue?: number; quantity?: number }
  | { special: string; quantity?: number; worthValue?: number; containsValue?: number }
  | { equipmentType: string; displayName?: string; quantity?: number }
  | { equipmentTypes: string[] }
  | { _: EquipmentEntry[] };

export type StartingEquipment = Record<string, EquipmentEntry[]>;

export interface DangerRating {
  tier: number;
  threat: string;
}

export interface Special {
  special: string;
}

export interface ConditionalSpeed {
  number: number;
  condition: string;
}

export type Speed =
  | number
  | {
      walk?: number | ConditionalSpeed | string | boolean;
      burrow?: number | ConditionalSpeed | string | boolean;
      climb?: number | ConditionalSpeed | string | boolean;
      swim?: number | ConditionalSpeed | string | boolean;
      fly?: number | ConditionalSpeed | string | boolean;
      alternate?: Record<string, ConditionalSpeed[]>;
      choose?: Choose;
      canHover?: boolean;
    };

export interface Die {
  number: number;
  faces: number;
}

export interface ClassInternalFeature {
  classFeature: string;
  gainSubclassFeature?: boolean;
  tableDisplayName?: string;
  gainSubclassFeatureHasContent?: boolean;
}

export interface Consumes {
  name: string;
  amount?: number;
  amountMin?: number;
  amountMax?: number;
}

export type AC = number | { ac: number; from?: string[]; condition?: string; braces?: boolean } | { special: string };
export type HP =
  number | { average: number; formula: string } | { special: string } | { hp: number; dt?: number; mt?: number };

export interface CR {
  cr: string;
  xp?: number;
  xpLair?: number;
  lair?: string;
  coven?: string;
}

export type TaggedType =
  | string
  | {
      type: string;
      tags?: string[];
    }
  | {
      sidekickType: string;
      sidekickTags: string[];
    };

export interface Age {
  mature?: number;
  max: number;
}

export interface HeightAndWeight {
  baseHeight: number;
  baseWeight: number;
  heightMod?: string;
  weightMod?: string;
}

export interface Link {
  type: 'link';
  href: HRef;
  text: string;
}
