import { Base, SRD, Unit } from './internal/base';
import { Entry } from './internal/entry';

export interface Action extends Base, SRD {
  entries: Entry[];
  time?: Unit[];
  seeAlsoAction?: string[];
  fromVariant?: string;
}
