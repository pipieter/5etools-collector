import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import LanguageTI from '../../types-check/language-ti';

import official from '../../data/official/languages.json';

const { Language } = createCheckers(BaseTI, EntryTI, LanguageTI);

check('language', Language, official);
