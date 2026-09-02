import {
  AbilityString,
  AC,
  Base,
  CR,
  EquipmentEntry,
  HP,
  ID,
  Resist,
  Special,
  Speed,
  SRD,
  TaggedType,
} from './internal/base';
import { Copyable } from './internal/copy';
import { Entry, HRef, NamedEntries } from './internal/entry';

export interface MonsterTags {
  senseTags: string[];
  actionTags: string[];
  languageTags: string[];
  damageTags: string[];
  traitTags: string[];
  miscTags: string[];
  conditionInflict: string[];
  conditionInflictLegendary: string[];
  savingThrowForced: string[];
  savingThrowForcedLegendary: string[];
  damageTagsSpell: string[];
  spellcastingTags: string[];
  savingThrowForcedSpell: string[];
  damageTagsLegendary: string[];
  familiar: boolean;
}

export interface LegendaryMonster {
  mythic: NamedEntries[];
  mythicHeader: string[];
  legendary: NamedEntries[];
  legendaryHeader: string[];
  legendaryGroup: ID;
  legendaryActions: number;
  legendaryActionsLair: number;
  dragonAge: string;
  dragonCastingColor?: string;
}

export interface SummonedInfo {
  summonedBySpell: string;
  summonedBySpellLevel: number;
  summonedByClass: string;
  summonedScaleByPlayerLevel: boolean;
}

export interface MonsterBase extends Base, SRD, Partial<MonsterTags>, Partial<LegendaryMonster>, Partial<SummonedInfo> {
  str?: number | Special;
  dex?: number | Special;
  con?: number | Special;
  int?: number | Special;
  wis?: number | Special;
  cha?: number | Special;
  isNpc?: boolean;
  shortName?: boolean | string;
  isNamedCreature?: boolean;
  size?: string[];
  sizeNote?: string;
  type?: any; //TODO
  alignment?: any[];
  ac?: (AC | number)[];
  hp?: HP;
  speed?: Speed;
  save?: AbilityString;
  skill?: Record<string, string | any[]>; // TODO
  tool?: Record<string, string>;
  senses?: string[];
  passive?: number | string;
  languages?: string[];
  cr?: string | CR;
  trait?: (Entry | NamedEntries)[];
  action?: (Entry | NamedEntries)[];
  actionNote?: string;
  attachedItems?: string[];
  environment?: string[];
  soundClip?: HRef;
  spellcasting?: any; // TODO
  treasure?: string[];
  alignmentPrefix?: string;
  bonus?: NamedEntries[];
  bonusNote?: string;
  initiative?: any; //TODO
  resist?: Resist[];
  immune?: Resist[];
  vulnerable?: Resist[];
  conditionImmune?: (string | any)[]; // TODO
  pbNote?: string;
  conditionInflictSpell?: string[];
  reactionHeader?: string[];
  reaction?: NamedEntries[];
  reactionNote?: string;
  group?: string[];
  variant?: Entry[];
  level?: number;
  gear?: EquipmentEntry[];
  resource?: any[]; // TODO
}

export type Monster = MonsterBase | Copyable<MonsterBase>;
