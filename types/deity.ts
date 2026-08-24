import { Base, SRD, ImageRef } from './base';
import { Entry } from './entry';

export interface Deity extends Base, SRD {
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
  symbolImg?: ImageRef;
  altNames?: string[];
  piety?: boolean;
  customExtensionOf?: string;
}
