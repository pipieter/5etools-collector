import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import TableTI from '../../types-check/table-ti';

import official from '../../data/official/tables.json';

const { Table } = createCheckers(BaseTI, EntryTI, TableTI);

check('table', Table, official);
