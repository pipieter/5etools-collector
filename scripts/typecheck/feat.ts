import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import FeatTI from '../../types-check/feat-ti';

import official from '../../data/official/feats.json';

const { Feat } = createCheckers(BaseTI, EntryTI, FeatTI);

check('feat', Feat, official);
