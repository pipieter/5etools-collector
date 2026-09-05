import typia from 'typia';

import { Action } from '../types/action';
import { Background } from '../types/background';
import { Boon } from '../types/boon';
import { Cult } from '../types/cult';
import { Deity } from '../types/deity';
import { Fluff } from '../types/fluff';
import {
  Item,
  ItemEntry,
  ItemGroup,
  ItemMastery,
  ItemProperty,
  ItemType,
  ItemTypeAdditionalEntries,
  MagicVariant,
} from '../types/item';
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
import { Status } from '../types/status';
import { Monster } from '../types/monster';
import { Species, SpeciesFluff } from '../types/species';
import { Vehicle } from '../types/vehicle';

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
  itemEntry: typia.createValidateEquals<ItemEntry>(),
  itemGroup: typia.createValidateEquals<ItemGroup>(),
  itemMastery: typia.createValidateEquals<ItemMastery>(),
  itemProperty: typia.createValidateEquals<ItemProperty>(),
  itemType: typia.createValidateEquals<ItemType>(),
  itemTypeAdditionalEntries: typia.createValidateEquals<ItemTypeAdditionalEntries>(),
  language: typia.createValidateEquals<Language>(),
  magicVariant: typia.createValidateEquals<MagicVariant>(),
  monster: typia.createValidateEquals<Monster>(),
  object: typia.createValidateEquals<DNDObject>(),
  sidekick: typia.createValidateEquals<Sidekick>(),
  skill: typia.createValidateEquals<Skill>(),
  species: typia.createValidateEquals<Species>(),
  speciesFluff: typia.createValidateEquals<SpeciesFluff>(),
  spell: typia.createValidateEquals<Spell>(),
  spellSource: typia.createValidateEquals<SpellSource>(),
  status: typia.createValidateEquals<Status>(),
  subclass: typia.createValidateEquals<Subclass>(),
  subclassFeature: typia.createValidateEquals<SubclassFeature>(),
  table: typia.createValidateEquals<Table>(),
  trap: typia.createValidateEquals<Trap>(),
  vehicle: typia.createValidateEquals<Vehicle>(),
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

check('action', asserts.action);
check('background', asserts.background);
check('backgroundFluff', asserts.fluff);
check('boon', asserts.boon);
check('class', asserts.class);
check('classFeature', asserts.classFeature);
check('classFluff', asserts.fluff);
check('condition', asserts.condition);
check('conditionFluff', asserts.fluff);
check('cult', asserts.cult);
check('deity', asserts.deity);
check('disease', asserts.disease);
check('diseaseFluff', asserts.fluff);
check('feat', asserts.feat);
check('hazard', asserts.hazard);
check('item', asserts.item);
check('itemEntry', asserts.itemEntry);
check('itemFluff', asserts.fluff);
check('itemGroup', asserts.itemGroup);
check('itemMastery', asserts.itemMastery);
check('itemProperty', asserts.itemProperty);
check('itemType', asserts.itemType);
check('itemTypeAdditionalEntries', asserts.itemTypeAdditionalEntries);
check('baseitem', asserts.item);
check('language', asserts.language);
check('magicvariant', asserts.magicVariant);
check('monster', asserts.monster);
check('monsterFluff', asserts.fluff);
check('object', asserts.object);
check('objectFluff', asserts.fluff);
check('sidekick', asserts.sidekick);
check('skill', asserts.skill);
check('race', asserts.species);
check('raceFluff', asserts.speciesFluff);
check('spell', asserts.spell);
check('spellFluff', asserts.fluff);
check('spellSource', asserts.spellSource);
check('status', asserts.status);
check('statusFluff', asserts.fluff);
check('subclass', asserts.subclass);
check('subclassFeature', asserts.subclassFeature);
check('table', asserts.table);
check('trap', asserts.trap);
check('vehicle', asserts.vehicle);
check('vehicleFluff', asserts.fluff);

console.log('All typechecks succeeded!');
