import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import FluffTI from '../../types-check/fluff-ti';
import ItemTI from '../../types-check/item-ti';

import official from '../../data/official/items.json';
import officialFluff from '../../data/official/item-fluffs.json';

const { Item } = createCheckers(BaseTI, EntryTI, ItemTI);
const { Fluff } = createCheckers(BaseTI, EntryTI, FluffTI);

check('item', Item, official);
check('item fluff', Fluff, officialFluff);
