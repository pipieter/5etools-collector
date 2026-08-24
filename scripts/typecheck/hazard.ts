import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import HazardTI from '../../types-check/hazard-ti';

import official from '../../data/official/hazards.json';

const { Hazard } = createCheckers(BaseTI, EntryTI, HazardTI);

check('hazard', Hazard, official);
