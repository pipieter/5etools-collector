import { Base, SRD } from './base';
import { Entry } from './entry';

export interface Skill extends Base, SRD {
  entries: Entry[];
  ability: 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha';
}
