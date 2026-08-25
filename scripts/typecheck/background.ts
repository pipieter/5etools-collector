import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import FluffTI from '../../types-check/fluff-ti';
import BackgroundTI from '../../types-check/background-ti';

import official from '../../data/official/backgrounds.json';
import officialFluff from '../../data/official/background-fluffs.json';

const { Background } = createCheckers(BaseTI, EntryTI, BackgroundTI);
const { Fluff } = createCheckers(BaseTI, EntryTI, FluffTI);

check('background', Background, official);
check('background fluff', Fluff, officialFluff);
