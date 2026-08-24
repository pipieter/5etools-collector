import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import TrapTI from '../../types-check/trap-ti';

import official from '../../data/official/traps.json';

const { Trap } = createCheckers(BaseTI, EntryTI, TrapTI);

check('trap', Trap, official);
