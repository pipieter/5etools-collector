import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import ItemTI from '../../types-check/item-ti';

import official from '../../data/official/items.json';

const { Item } = createCheckers(BaseTI, EntryTI, ItemTI);

check('item', Item, official);
