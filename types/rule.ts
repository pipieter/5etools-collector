import { Base, SRD } from './internal/base';
import { Entry } from './internal/entry';

export interface Rule extends Base, SRD {
  entries: Entry[];
  ruleType?: string;
  type?: string;
}
