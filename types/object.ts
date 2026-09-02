import { Base, Resist, Special, Speed, SRD } from './internal/base';
import { Entry } from './internal/entry';

export interface DNDObject extends Base, SRD {
  entries?: Entry[];
  actionEntries?: Entry[];
  isNpc?: boolean;
  size?: string[];
  objectType?: string;
  ac?: number | Special;
  hp?: number | Special;
  speed?: Speed;
  str?: number;
  dex?: number;
  con?: number;
  int?: number;
  wis?: number;
  cha?: number;
  senses?: string[];
  resist?: Resist[];
  immune?: Resist[];
  vulnerable?: Resist[];
  conditionImmune?: string[];
}
