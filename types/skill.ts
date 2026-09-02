import { Base, SRD } from './internal/base';
import { Entry } from './internal/entry';

export interface Skill extends Base, SRD {
  entries: Entry[];
  ability: 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';
}
