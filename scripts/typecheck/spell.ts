import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import SpellTI from '../../types-check/spell-ti';

import official from '../../data/official/spells.json';
import officialSources from '../../data/official/spell-sources.json';

const { Spell, SpellSource } = createCheckers(BaseTI, EntryTI, SpellTI);

check('spell', Spell, official);
check('spell source', SpellSource, officialSources);
