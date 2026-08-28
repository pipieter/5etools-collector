import typia from 'typia';

import { Action } from '../types/action';
import { Background } from '../types/background';
import { Boon } from '../types/boon';
import { Cult } from '../types/cult';
import { Deity } from '../types/deity';
import { Fluff } from '../types/fluff';
import { Item, ItemGroup, ItemMastery, ItemProperty, ItemType } from '../types/item';
import { Feat } from '../types/feat';
import { Hazard } from '../types/hazard';
import { Language } from '../types/language';
import { Skill } from '../types/skill';
import { Spell, SpellSource } from '../types/spell';
import { Table } from '../types/table';
import { Trap } from '../types/trap';
import { readFileSync } from 'fs';
import { Condition } from '../types/condition';
import { DNDObject } from '../types/object';
import { Disease } from '../types/disease';
import { Class, ClassFeature, Sidekick, Subclass, SubclassFeature } from '../types/class';

// Typia is extremely strict and does not allow for generics. Because of this, we need
// to define all assert functions beforehand
const asserts = {
  action: typia.createValidateEquals<Action>(),
  background: typia.createValidateEquals<Background>(),
  boon: typia.createValidateEquals<Boon>(),
  class: typia.createValidateEquals<Class>(),
  classFeature: typia.createValidateEquals<ClassFeature>(),
  condition: typia.createValidateEquals<Condition>(),
  cult: typia.createValidateEquals<Cult>(),
  deity: typia.createValidateEquals<Deity>(),
  disease: typia.createValidateEquals<Disease>(),
  feat: typia.createValidateEquals<Feat>(),
  fluff: typia.createValidateEquals<Fluff>(),
  hazard: typia.createValidateEquals<Hazard>(),
  item: typia.createValidateEquals<Item>(),
  itemGroup: typia.createValidateEquals<ItemGroup>(),
  itemMastery: typia.createValidateEquals<ItemMastery>(),
  itemProperty: typia.createValidateEquals<ItemProperty>(),
  itemType: typia.createValidateEquals<ItemType>(),
  language: typia.createValidateEquals<Language>(),
  object: typia.createValidateEquals<DNDObject>(),
  sidekick: typia.createValidateEquals<Sidekick>(),
  skill: typia.createValidateEquals<Skill>(),
  spell: typia.createValidateEquals<Spell>(),
  spellSource: typia.createValidateEquals<SpellSource>(),
  subclass: typia.createValidateEquals<Subclass>(),
  subclassFeature: typia.createValidateEquals<SubclassFeature>(),
  table: typia.createValidateEquals<Table>(),
  trap: typia.createValidateEquals<Trap>(),
};

type validateFn<T> = (input: unknown) => typia.IValidation<T>;

function getType(obj: unknown): string {
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return 'unknown[]';
    }
    return `${getType(obj[0])}[]`;
  }
  return typeof obj;
}

function assert<T>(name: string, objects: any[], fn: validateFn<T>) {
  for (const object of objects) {
    const validation = fn(object);
    if (!validation.success) {
      console.error(`Could not verify the following object for ${name}:`);
      console.error(JSON.stringify(object, null, 2));
      console.log();
      for (const err of validation.errors) {
        const fields = err.path.split('.');
        const field = fields[fields.length - 1];
        // Specific case
        if (err.expected === 'undefined') {
          console.log(`${err.path}: field '${field}' not expected, received ${getType(err.value)}`);
        } else if (err.value === undefined) {
          console.log(`${err.path}: field '${field}' is required, but no value was passed`);
        } else {
          console.log(`${err.path}: expected '${err.expected}', received '${JSON.stringify(err.value)}'`);
        }

        if (err.description) {
          // console.log(err.description);
          // console.log();
        }
      }
      process.exit(1);
    }
  }
}

function check<T>(name: string, fn: validateFn<T>) {
  console.log(`Checking ${name}`);

  for (const directory of ['official', 'partnered']) {
    const path = `./data/${directory}/${name}.json`;
    const data = JSON.parse(readFileSync(path).toString());

    assert(`${directory} ${name}`, data, fn);
  }
}

check('actions', asserts.action);
check('backgrounds', asserts.background);
check('background-fluffs', asserts.fluff);
check('boons', asserts.boon);
check('classes', asserts.class);
check('class-features', asserts.classFeature);
check('class-fluffs', asserts.fluff);
check('conditions', asserts.condition);
check('condition-fluffs', asserts.fluff);
check('cults', asserts.cult);
check('deities', asserts.deity);
check('diseases', asserts.disease);
check('disease-fluffs', asserts.fluff);
check('feats', asserts.feat);
check('hazards', asserts.hazard);
check('items', asserts.item);
check('item-fluffs', asserts.fluff);
check('item-groups', asserts.itemGroup);
check('item-masteries', asserts.itemMastery);
check('item-properties', asserts.itemProperty);
check('item-types', asserts.itemType);
check('items-base', asserts.item);
check('languages', asserts.language);
check('objects', asserts.object);
check('object-fluffs', asserts.fluff);
check('sidekicks', asserts.sidekick);
check('skills', asserts.skill);
check('spells', asserts.spell);
check('spell-fluffs', asserts.fluff);
check('spell-sources', asserts.spellSource);
check('subclasses', asserts.subclass);
check('subclass-features', asserts.subclassFeature);
check('tables', asserts.table);
check('traps', asserts.trap);

console.log('All typechecks succeeded!');
