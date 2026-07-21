import ActionTI from '../types-check/action-ti';
import CommonTI from "../types-check/common-ti"
import { createCheckers } from 'ts-interface-checker';

import actions from '../data/official/actions.json';

const { Action } = createCheckers(ActionTI, CommonTI);

for (const action of actions) {
    console.log(action)
  Action.check(action);
}
