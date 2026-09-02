import { Base, SRD } from './internal/base';
import { Entry } from './internal/entry';

export interface Condition extends Base, SRD {
  entries: Entry[];
  color?: string;
}
