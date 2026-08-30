import { Base, SRD } from "./base";
import { Entry } from "./entry";

export interface Status extends Base, SRD {
    entries: Entry[]
}