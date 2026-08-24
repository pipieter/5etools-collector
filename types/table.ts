import { Base, SRD } from "./base";
import { Entry, Cell } from "./entry";

export interface Table extends Base, SRD {
  caption?: string;
  colLabels?: string[];
  colStyles: string[];
  rows: (Entry | Cell)[][];
}