import { Base, ImageRef } from "./base"
import { Entry } from "./entry"

export interface Fluff extends Base {
    entries?: Entry[]
    images?: ImageRef[]
}