import { Base, SRD } from './base';
import { Entry } from './entry';

export interface Disease extends Base, SRD {
  entries: Entry[];
  type?: string;
}
