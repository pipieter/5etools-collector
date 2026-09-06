import { Base, SRD } from './internal/base';

export interface SpeciesNameTableEntry {
  min: number;
  max: number;
  result: string;
}

export interface SpeciesNameTable {
  option: string;
  table: SpeciesNameTableEntry[];
  diceExpression: string;
}

export interface SpeciesName extends Base, SRD {
  tables: SpeciesNameTable[];
}
