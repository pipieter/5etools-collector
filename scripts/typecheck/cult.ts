import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import CultTI from '../../types-check/cult-ti';

import official from '../../data/official/cults.json';
import partnered from "../../data/partnered/cults.json"

const { Cult } = createCheckers(BaseTI, EntryTI, CultTI);

check('official cult', Cult, official);
check('partnered cult', Cult, partnered);
