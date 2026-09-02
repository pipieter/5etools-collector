import { Base, SRD } from './internal/base';
import { Entry, SingleEntry } from './internal/entry';

export interface Boon extends Base, SRD {
  entries: Entry[];
  type: string;
  ability?: SingleEntry;
  signatureSpells?: SingleEntry;
}
