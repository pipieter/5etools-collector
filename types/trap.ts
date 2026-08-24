import { Base, DangerRating, Duration, SRD } from './base';
import { Entry } from './entry';

export interface Trap extends Base, SRD {
  entries: Entry[];
  rating?: DangerRating[];
  trapHazType?: string;
  trigger?: string[];
  countermeasures?: Entry[];
  effect?: string[];
  duration?: Duration[];
  hauntBonus?: string;
  initiative?: number;
  initiativeNote?: string;
  eActive?: Entry[];
  eDynamic?: Entry[];
  eConstant?: Entry[];
}
