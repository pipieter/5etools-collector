import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import SkillTI from '../../types-check/skill-ti';

import official from '../../data/official/skills.json';

const { Skill } = createCheckers(BaseTI, EntryTI, SkillTI);

check('skill', Skill, official);
