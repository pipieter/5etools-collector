import { Base } from "./base"
import { Entry, EntryImage } from "./entry"

export interface Fluff extends Base {
    entries?: Entry[]
    images?: EntryImage[]
}