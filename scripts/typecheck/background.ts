import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import FluffTI from '../../types-check/fluff-ti';
import BackgroundTI from '../../types-check/background-ti';

import official from '../../data/official/backgrounds.json';
import officialFluff from '../../data/official/background-fluffs.json';

import partnered from '../../data/partnered/backgrounds.json';
import partneredFluff from '../../data/partnered/background-fluffs.json';

const { Background } = createCheckers(BaseTI, EntryTI, BackgroundTI);
const { Fluff } = createCheckers(BaseTI, EntryTI, FluffTI);

check('official background', Background, official);
check('official background fluff', Fluff, officialFluff);
check('partnered background', Background, partnered);
check('partnered background fluff', Fluff, partneredFluff);
