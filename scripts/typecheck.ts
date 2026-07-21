import TypesTI from '../types-check/types-ti';
import CommonTI from '../types-check/common-ti';
import { Checker, createCheckers } from 'ts-interface-checker';

import actions from '../data/official/actions.json';
import feats from '../data/official/feats.json';

const { Action, Feat } = createCheckers(TypesTI, CommonTI);

const entries: [string, any[], Checker][] = [
  ['Action', actions, Action],
  ['Feat', feats, Feat],
];

for (const [name, objects, checker] of entries) {
  for (const object of objects) {
    try {
      checker.check(object);
    } catch (e) {
      console.error(`Could not verify the following object for ${name} checker:`);
      console.error(JSON.stringify(object, null, 2));
      console.error();
      console.error(e);
      process.exit(1);
    }
  }
}
