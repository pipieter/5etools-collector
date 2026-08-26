import typia from 'typia';

import actions from '../data/official/actions.json';
import backgroundFluffs from '../data/official/background-fluffs.json';
import backgrounds from '../data/official/backgrounds.json';
import baseItems from '../data/official/items-base.json';
import boons from '../data/official/boons.json';
import cults from '../data/official/cults.json';
import deities from '../data/official/deities.json';
import feats from '../data/official/feats.json';
import hazards from '../data/official/hazards.json';
import itemFluffs from '../data/official/item-fluffs.json';
import itemMasteries from '../data/official/item-masteries.json';
import itemProperties from '../data/official/item-properties.json';
import items from '../data/official/items.json';
import itemTypes from '../data/official/item-types.json';
import languages from '../data/official/languages.json';
import skills from '../data/official/skills.json';
import spells from '../data/official/spells.json';
import spellSources from '../data/official/spell-sources.json';
import tables from '../data/official/tables.json';
import traps from '../data/official/traps.json';

import { Action } from '../types/action';
import { Background } from '../types/background';
import { Boon } from '../types/boon';
import { Cult } from '../types/cult';
import { Deity } from '../types/deity';
import { Fluff } from '../types/fluff';
import { Item, ItemMastery, ItemProperty, ItemType } from '../types/item';
import { Feat } from '../types/feat';
import { Hazard } from '../types/hazard';
import { Language } from '../types/language';
import { Skill } from '../types/skill';
import { Spell, SpellSource } from '../types/spell';
import { Table } from '../types/table';
import { Trap } from '../types/trap';

// Typia is extremely strict and does not allow for generics. Because of this, we need
// to define all assert functions beforehand
const asserts = {
  action: typia.createValidateEquals<Action>(),
  background: typia.createValidateEquals<Background>(),
  boon: typia.createValidateEquals<Boon>(),
  cult: typia.createValidateEquals<Cult>(),
  deity: typia.createValidateEquals<Deity>(),
  feat: typia.createValidateEquals<Feat>(),
  fluff: typia.createValidateEquals<Fluff>(),
  hazard: typia.createValidateEquals<Hazard>(),
  item: typia.createValidateEquals<Item>(),
  itemMastery: typia.createValidateEquals<ItemMastery>(),
  itemProperty: typia.createValidateEquals<ItemProperty>(),
  itemType: typia.createValidateEquals<ItemType>(),
  language: typia.createValidateEquals<Language>(),
  skill: typia.createValidateEquals<Skill>(),
  spell: typia.createValidateEquals<Spell>(),
  spellSource: typia.createValidateEquals<SpellSource>(),
  table: typia.createValidateEquals<Table>(),
  trap: typia.createValidateEquals<Trap>(),
};

function assert<T>(name: string, objects: any[], fn: (input: unknown) => typia.IValidation<T>) {
  for (const object of objects) {
    const validation = fn(object);
    if (!validation.success) {
      console.error(`Could not verify the following object for ${name}:`);
      console.error(object);
      console.log();
      for (const err of validation.errors) {
        console.log(`Expected '${err.expected}', received '${err.value}' at ${err.path}`);
        console.log(err.description);
        console.log();
      }
      process.exit(1);
    }
  }
}

assert('actions', actions, asserts.action);
assert('backgrounds', backgrounds, asserts.background);
assert('background fluffs', backgroundFluffs, asserts.fluff);
assert('base items', baseItems, asserts.item);
assert('boons', boons, asserts.boon);
assert('cults', cults, asserts.cult);
assert('deities', deities, asserts.deity);
assert('feats', feats, asserts.feat);
assert('hazards', hazards, asserts.hazard);
assert('item fluffs', itemFluffs, asserts.fluff);
assert('item masteries', itemMasteries, asserts.itemMastery);
assert('item properties', itemProperties, asserts.itemProperty);
assert('item types', itemTypes, asserts.itemType);
assert('languages', languages, asserts.language);
assert('skills', skills, asserts.skill);
assert('spells', spells, asserts.spell);
assert('spell sources', spellSources, asserts.spellSource);
assert('tables', tables, asserts.table);
assert('traps', traps, asserts.trap);
