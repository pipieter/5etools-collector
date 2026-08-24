import { Base, SRD } from './base';
import { Entry, SingleEntry } from './entry';

export interface Boon extends Base, SRD {
  entries: Entry[];
  type: string;
  ability?: SingleEntry;
  signatureSpells?: SingleEntry;
}
