import { Base, SRD, SpellComponents, Unit, Duration, Range, Resist, ScalingLevelDice } from './base';
import { Entry } from './entry';

export interface Spell extends Base, SRD {
  entries: Entry[];
  entriesHigherLevel?: Entry[];
  level: number;
  school: string;
  components: SpellComponents;
  time?: Unit[];
  duration?: Duration[];
  range?: Range;
  damageInflict?: string[];
  damageImmune?: Resist[];
  damageResist?: Resist[];
  damageVulnerable?: Resist[];
  conditionInflict?: string[];
  conditionImmune?: string[];
  savingThrow?: string[];
  affectsCreatureType?: string[];
  areaTags?: string[];
  scalingLevelDice?: ScalingLevelDice | ScalingLevelDice[];
  miscTags?: string[];
  meta?: { ritual: boolean };
  spellAttack?: string[];
  abilityCheck?: string[];
}
