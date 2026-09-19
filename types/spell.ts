import {
  Base,
  SRD,
  SpellComponents,
  Unit,
  Duration,
  Range,
  Resist,
  ScalingLevelDice,
  ID,
  FeatureProgression,
} from './internal/base';
import { Copyable, Versioned } from './internal/copy';
import { Entry } from './internal/entry';
import { Variadic } from './internal/util';

interface FromSource {
  name: string;
  source: string;
  definedInSource?: string;
  baseName?: string;
  baseSource?: string;
  shortName?: string;
}

export interface SpellSource {
  spellName: string;
  spellSource: string;
  casterName: string;
  casterSource: string;
}

export interface SpellBase extends Base, SRD {
  entries?: Entry[];
  entriesHigherLevel?: Entry[];
  level: number;
  school: string;
  components: SpellComponents;
  time: Unit[];
  duration: Duration[];
  range: Range;
  damageInflict?: string[];
  damageImmune?: Resist[];
  damageResist?: Resist[];
  damageVulnerable?: Resist[];
  conditionInflict?: string[];
  conditionImmune?: string[];
  savingThrow?: string[];
  affectsCreatureType?: string[];
  areaTags?: string[];
  scalingLevelDice?: Variadic<ScalingLevelDice | ScalingLevelDice>;
  miscTags?: string[];
  meta?: { ritual: boolean };
  spellAttack?: string[];
  abilityCheck?: string[];
  classes?: {
    fromClassList?: FromSource[];
    fromClassListVariant?: FromSource[];
    fromSubclass?: { class: FromSource; subclass: FromSource }[];
  };
  feats?: FromSource[];
  subschools?: string[];
  races?: FromSource[];
  optionalfeatures?: FeatureProgression[];
}

export type Spell = SpellBase | Copyable<SpellBase>;
