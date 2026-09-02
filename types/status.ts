import { Base, SRD } from './internal/base';
import { Entry } from './internal/entry';

export interface Status extends Base, SRD {
  entries: Entry[];
}
