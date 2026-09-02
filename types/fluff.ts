import { Base } from './internal/base';
import { Entry, EntryImage } from './internal/entry';

export interface Fluff extends Base {
  entries?: Entry[];
  images?: EntryImage[] | null; // TODO this comes from _copy, the null should be removed
}
