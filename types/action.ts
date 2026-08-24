import { Base, SRD, Unit } from "./base";
import { Entry } from "./entry";

export interface Action extends Base, SRD {
  entries: Entry[];
  time?: Unit[];
  seeAlsoAction?: string[];
  fromVariant?: string;
}
