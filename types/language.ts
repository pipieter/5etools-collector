import { Base, SRD } from './base';
import { Entry } from './entry';

export interface Language extends Base, SRD {
  entries?: Entry[];
  type?: string;
  script?: string;
  origin?: string;
  typicalSpeakers?: string[];
  fonts?: string[];
  dialects?: string[];
}
