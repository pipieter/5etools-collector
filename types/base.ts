export interface Base {
  name: string;
  source: string;
  page?: number;
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
  | 'Varies'
  | 'Free';

export type ReprintedAs = string | { uid: string; tag: string };

// util.json#/$defs/prerequisite
export interface Prerequisite {
  ability?: { str?: number; dex?: number; con?: number; int?: number; wis?: number; cha?: number }[];
  background?: { name: string; displayEntry?: string }[];
  campaign?: string[];
  exclusiveFeatCategory?: string[];
  feat?: string[];
  featCategory?: string[];
  feature?: string[];
  level?: number | { level: number; class: { name: string; visible?: boolean } };
  other?: string;
  otherSummary?: { entry: string; entrySummary: string };
  proficiency?: { weapon?: string; armor?: string; weaponGroup?: string }[];
  spellcasting?: boolean;
  spellcasting2020?: boolean;
  spellcastingFeature?: boolean;
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

export interface ImageRef {
  type: 'image';
  href: {
    type: 'internal' | 'external';
    path: string;
  };
  title?: string;
  credit?: string;
  width?: number;
  height?: number;
}

export interface SkillProficiency {
  acrobatics?: boolean;
  athletics?: boolean;
  arcana?: boolean;
  'animal handling'?: boolean;
  deception?: boolean;
  history?: boolean;
  insight?: boolean;
  intimidation?: boolean;
  investigation?: boolean;
  medicine?: boolean;
  nature?: boolean;
  perception?: boolean;
  performance?: boolean;
  persuasion?: boolean;
  religion?: boolean;
  'sleight of hand'?: boolean;
  stealth?: boolean;
  survival?: boolean;
  any?: number;
  anyProficientSkill?: number;
  choose?: Choose;
}

export interface SavingThrowProficiency {
  choose?: Choose;
}

export interface ToolProficiency {
  "artisan's tools"?: boolean;
  "alchemist's supplies"?: boolean;
  "brewer's supplies"?: boolean;
  "calligrapher's supplies"?: boolean;
  "carpenter's tools"?: boolean;
  "cartographer's tools"?: boolean;
  "cobbler's tools"?: boolean;
  "cook's utensils"?: boolean;
  "glassblower's tools"?: boolean;
  "jeweler's tools"?: boolean;
  "leatherworker's tools"?: boolean;
  "mason's tools"?: boolean;
  "painter's supplies"?: boolean;
  "potter's tools"?: boolean;
  "smith's tools"?: boolean;
  "tinker's tools"?: boolean;
  "weaver's tools"?: boolean;
  "woodcarver's tools"?: boolean;
  'disguise kit'?: boolean;
  'forgery kit'?: boolean;
  'gaming set'?: boolean;
  'dragonchess set'?: boolean;
  'dice set'?: boolean;
  'three-dragon ante set'?: boolean;
  'playing card set'?: boolean;
  'herbalism kit'?: boolean;
  'musical instrument'?: boolean;
  bagpipes?: boolean;
  drum?: boolean;
  dulcimer?: boolean;
  flute?: boolean;
  horn?: boolean;
  lute?: boolean;
  lyre?: boolean;
  'pan flute'?: boolean;
  shawm?: boolean;
  viol?: boolean;
  "navigator's tools"?: boolean;
  "thieves' tools"?: boolean;
  "poisoner's kit"?: boolean;
  vehicles?: boolean;
  'vehicles (air)'?: boolean;
  'vehicles (land)'?: boolean;
  'vehicles (water)'?: boolean;
  'vehicles (space)'?: boolean;
  any?: number;
  anyArtisansTool?: number;
  anyGamingSet?: number;
  anyMusicalInstrument?: number;
  choose?: Choose;
}

export interface LanguageProficiency {
  abyssal?: boolean;
  aquan?: boolean;
  auran?: boolean;
  celestial?: boolean;
  common?: boolean;
  'common sign language'?: boolean;
  'deep speech'?: boolean;
  draconic?: boolean;
  druidic?: boolean;
  dwarvish?: boolean;
  elvish?: boolean;
  giant?: boolean;
  gith?: boolean;
  gnomish?: boolean;
  goblin?: boolean;
  halfling?: boolean;
  ignan?: boolean;
  infernal?: boolean;
  orc?: boolean;
  other?: boolean;
  primordial?: boolean;
  sylvan?: boolean;
  terran?: boolean;
  "thieves' cant"?: boolean;
  undercommon?: boolean;
  any?: number;
  anyStandard?: number;
  choose?: Choose;
}

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
  featureType: string[];
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
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
}

export type Mastery =
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

export interface Scaling {
  '1'?: string;
  '2'?: string;
  '3'?: string;
  '4'?: string;
  '5'?: string;
  '6'?: string;
  '7'?: string;
  '8'?: string;
  '9'?: string;
  '10'?: string;
  '11'?: string;
  '12'?: string;
  '13'?: string;
  '14'?: string;
  '15'?: string;
  '16'?: string;
  '17'?: string;
  '18'?: string;
  '19'?: string;
  '20'?: string;
}

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

export interface StartingEquipment {
  _?: StartingEquipmentEntry[];
  a?: StartingEquipmentEntry[];
  b?: StartingEquipmentEntry[];
  c?: StartingEquipmentEntry[];
  d?: StartingEquipmentEntry[];
  A?: StartingEquipmentEntry[];
  B?: StartingEquipmentEntry[];
  C?: StartingEquipmentEntry[];
  D?: StartingEquipmentEntry[];
}

export interface DangerRating {
  tier: number;
  threat: string;
}
