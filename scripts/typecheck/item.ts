import { createCheckers } from 'ts-interface-checker';
import { check } from '../check';

import BaseTI from '../../types-check/base-ti';
import EntryTI from '../../types-check/entry-ti';
import FluffTI from '../../types-check/fluff-ti';
import ItemTI from '../../types-check/item-ti';

import official from '../../data/official/items.json';
import officialBase from '../../data/official/items-base.json';
import officialMasteries from '../../data/official/item-masteries.json';
import officialProperties from '../../data/official/item-properties.json';
import officialTypes from '../../data/official/item-types.json';
import officialFluff from '../../data/official/item-fluffs.json';

const { Item, ItemMastery, ItemProperty, ItemType } = createCheckers(BaseTI, EntryTI, ItemTI);
const { Fluff } = createCheckers(BaseTI, EntryTI, FluffTI);

check('item', Item, official);
check('item base', Item, officialBase);
check('item mastery', ItemMastery, officialMasteries);
check('item property', ItemProperty, officialProperties);
check('item type', ItemType, officialTypes);
check('item fluff', Fluff, officialFluff);
