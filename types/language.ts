import { Base, SRD } from './internal/base';
import { Entry } from './internal/entry';

export type LanguageType = 'standard' | 'exotic' | 'rare' | 'secret';

export interface Language extends Base, SRD {
  entries?: Entry[];
  type?: LanguageType;
  script?: string;
  origin?: string;
  typicalSpeakers?: string[];
  fonts?: string[];
  dialects?: string[];
}
