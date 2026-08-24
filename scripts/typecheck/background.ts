import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import BackgroundTI from '../../types-check/background-ti';

import official from '../../data/official/backgrounds.json';

const { Background } = createCheckers(BaseTI, EntryTI, BackgroundTI);

check('background', Background, official);
