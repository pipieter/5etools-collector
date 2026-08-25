import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import ActionTI from '../../types-check/action-ti';

import official from '../../data/official/actions.json';
import partnered from '../../data/partnered/actions.json';

const { Action } = createCheckers(BaseTI, EntryTI, ActionTI);

check('official action', Action, official);
check('partnered action', Action, partnered);
