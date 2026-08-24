import { Base, DangerRating, SRD } from './base';
import { Entry } from './entry';

export interface Hazard extends Base, SRD {
  entries: Entry[];
  rating?: DangerRating[];
  trapHazType?: string;
}
