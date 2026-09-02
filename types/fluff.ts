import { Base } from './internal/base';
import { Copyable } from './internal/copy';
import { Entry, EntryImage } from './internal/entry';

export interface FluffBase extends Base {
  entries?: Entry[];
  images?: EntryImage[] | null; // TODO this comes from _copy, the null should be removed
}

export type Fluff = FluffBase | Copyable<FluffBase>;
