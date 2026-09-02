import { Base, DangerRating, SRD } from './internal/base';
import { Entry } from './internal/entry';

export interface Hazard extends Base, SRD {
  entries: Entry[];
  rating?: DangerRating[];
  trapHazType?: string;
}
