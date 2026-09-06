import { Base, SRD } from './internal/base';

export interface LifeClass extends Base, SRD {
  reasons: string[];
  other: Record<string, string[]>;
}

export interface LifeBackground extends Base, SRD {
  reasons: string[];
}

export type LifeTrinket = string;
