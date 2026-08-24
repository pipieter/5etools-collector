import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import CultTI from '../../types-check/cult-ti';

import official from '../../data/official/cults.json';

const { Cult } = createCheckers(BaseTI, EntryTI, CultTI);

check('cult', Cult, official);
