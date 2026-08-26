import { Entry, EntryImage } from './entry';

export interface Foundry {
  foundryImg?: string;
  foundryActivities?: any[];
  foundrySystem?: any;
  foundryEffects?: any[];
  foundryType?: string;
}

export interface Base extends Foundry {
  name: string;
  source: string;
  page?: number | string;
  alias?: string[];
  reprintedAs?: ReprintedAs[];
  hasFluffImages?: boolean;
  hasFluff?: boolean;
  hasRefs?: boolean;
  hasToken?: boolean;
  referenceSources?: Source[];
  otherSources?: Source[];
  additionalSources?: Source[];
  edition?: string;
  fluff?: { entries?: Entry[]; images?: EntryImage[] };
  _copy?: any; // TODO
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
  ability?: { str?: number; dex?: number; con?: number; int?: number; wis?: number; cha?: number }[];
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
  m?: MaterialComponent;
  r?: boolean;
}

export type MaterialComponent =
  | string
  | {
      text: string;
      cost?: number;
      consume?: boolean | 'optional';
    };

export type SkillProficiency = {
  any?: number;
  anyProficientSkill?: number;
  choose?: Choose;
} & Record<string, boolean>;

export interface SavingThrowProficiency {
  choose?: Choose;
}

export type ToolProficiency = {
  any?: number;
  anyArtisansTool?: number;
  anyProficientTool?: number;
  anyGamingSet?: number;
  anyMusicalInstrument?: number;
  choose?: Choose;
} & Record<string, boolean>;

export type LanguageProficiency = {
  any?: number;
  anyStandard?: number;
  choose?: Choose;
} & Record<string, boolean>;

export interface SkillToolLanguageProficiency {
  choose?: Choose[];
  anyLanguage?: number;
  anyTool?: number;
}

export interface WeaponProficiency {
  firearms?: boolean;
  simple?: boolean;
  martial?: boolean;
  improvised?: boolean;
  choose?: Choose;
  all?: { fromFilter: string };
}

export interface ArmorProficiency {
  light?: boolean;
  medium?: boolean;
  heavy?: boolean;
  shield?: boolean;
}

export interface Ability {
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  choose?: Choose | Choose[];
  hidden?: boolean;
  max?: number;
}

export type Resist =
  | string
  | {
      choose?: Choose;
    };

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
}

export interface Light {
  bright?: number;
  dim?: number;
  shape?: string;
}

export interface SetAbility {
  static: {
    str?: number;
    dex?: number;
    con?: number;
    int?: number;
    wis?: number;
    cha?: number;
  };
}

export interface ReqAttuneTag {
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
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
}

export type UIDString =
  | string
  | {
      uid: string;
      note: string;
    };

export interface Duration {
  type: 'instant' | 'timed' | 'permanent' | 'special';
  duration?: {
    type: 'round' | 'hour' | 'minute' | 'day';
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

export type StartingEquipmentEntry =
  | string
  | { value: number }
  | { item: string; displayName?: string; containsValue?: number; quantity?: number }
  | { special: string; quantity?: number; worthValue?: number; containsValue?: number }
  | { equipmentType: string; displayName?: string };

export type StartingEquipment = Record<string, StartingEquipmentEntry[]>;

export interface DangerRating {
  tier: number;
  threat: string;
}
