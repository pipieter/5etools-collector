import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import DeityTI from '../../types-check/deity-ti';

import official from '../../data/official/deities.json';
import partnered from "../../data/partnered/deities.json"

const { Deity } = createCheckers(BaseTI, EntryTI, DeityTI);

check('official deity', Deity, official);
check('partnered deity', Deity, partnered);
