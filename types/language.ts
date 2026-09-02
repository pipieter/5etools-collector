import { Base, SRD } from './internal/base';
import { Entry } from './internal/entry';

export interface Language extends Base, SRD {
  entries?: Entry[];
  type?: string;
  script?: string;
  origin?: string;
  typicalSpeakers?: string[];
  fonts?: string[];
  dialects?: string[];
}
