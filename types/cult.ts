import { Base, SRD } from './base';
import { Entry, SingleEntry } from './entry';

export interface Cult extends Base, SRD {
  entries: Entry[];
  type: string;
  ability?: SingleEntry;
  signatureSpells?: SingleEntry;
  goal?: SingleEntry;
  cultists?: SingleEntry;
}
