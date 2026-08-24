import { Base, SRD } from './base';
import { Entry, SingleEntry } from './entry';

export interface HazardRating {
  tier: number;
  threat: string;
}

export interface Hazard extends Base, SRD {
  entries: Entry[];
  rating?: HazardRating[];
  trapHazType?: string;
}
