import { Base, SRD } from './base';
import { Entry } from './entry';

export interface Condition extends Base, SRD {
  entries: Entry[];
  color?: string;
}
