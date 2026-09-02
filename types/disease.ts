import { Base, SRD } from './internal/base';
import { Entry } from './internal/entry';

export interface Disease extends Base, SRD {
  entries: Entry[];
  type?: string;
}
