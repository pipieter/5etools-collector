import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import ActionTI from '../../types-check/action-ti';

import official from '../../data/official/actions.json';

const { Action } = createCheckers(BaseTI, EntryTI, ActionTI);

check('action', Action, official);
