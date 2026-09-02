import { Base, SRD } from './internal/base';
import { Copyable } from './internal/copy';
import { Entry, EntryImage } from './internal/entry';

export interface DeityBase extends Base, SRD {
  entries?: Entry[];
  pantheon: string;
  reprintAlias?: string;
  alignment?: string[];
  category?: string;
  title?: string;
  worshipers?: string;
  plane?: string;
  domains?: string[];
  province?: string;
  symbol?: string;
  symbolImg?: EntryImage;
  altNames?: string[];
  piety?: boolean;
  customExtensionOf?: string;
  favoredWeapons?: string;
  dogma?: string;
}

export type Deity = DeityBase | Copyable<DeityBase>;
