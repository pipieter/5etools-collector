import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import BoonTI from '../../types-check/boon-ti';

import official from '../../data/official/boons.json';
import partnered from "../../data/partnered/boons.json"

const { Boon } = createCheckers(BaseTI, EntryTI, BoonTI);

check('official boon', Boon, official);
check('partnered boon', Boon, partnered);
