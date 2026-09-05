import { Base, SRD } from './internal/base';
import { Entry } from './internal/entry';

export interface Sense extends Base, SRD {
  entries: Entry[];
}
