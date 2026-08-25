import { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync } from 'fs';
import path from 'path';

function read(path: string): any {
  return JSON.parse(readFileSync(path).toString());
}

function writeJson(dir: string, file: string, contents: any[]): any {
  function sort(a: any, b: any) {
    const keyA = `${a.name} (${a.source})`;
    const keyB = `${b.name} (${b.source})`;
    return keyA.localeCompare(keyB, 'en', {
      sensitivity: 'base',
      numeric: true,
    });
  }

  contents = [...contents].sort(sort);

  const fullPath = path.join(dir, file);
  writeFileSync(fullPath, JSON.stringify(contents, null, 2));
}

class Collector {
  public readonly basePath: string;
  public readonly outPath: string;
  public readonly data = new Map<string, any[]>();

  public constructor(basePath: string, outPath: string) {
    this.basePath = basePath;
    this.outPath = outPath;
  }

  private add(key: string, value: any | any[]): void {
    if (!this.data.has(key)) {
      this.data.set(key, []);
    }

    if (Array.isArray(value)) {
      this.data.get(key)!.push(...value);
    } else {
      this.data.get(key)!.push(value);
    }
  }

  public addFile(file: string): void {
    const contents = read(path.join(this.basePath, file));

    for (const [key, value] of Object.entries(contents)) {
      this.add(key, value);
    }
  }

  public addIndex(dir: string, indexFile: string): void {
    const fullIndexPath = path.join(this.basePath, dir, indexFile);
    const indices = Object.values(read(fullIndexPath));

    for (const index of indices) {
      const indexPath = path.join(dir, index as string);
      this.addFile(indexPath);
    }
  }

  public addSpellSources(file: string): void {
    const fullPath = path.join(this.basePath, file);
    const contents = read(fullPath);

    const sources = [];

    for (const [source, spells] of Object.entries(contents)) {
      for (const spell of Object.keys(spells as any)) {
        const classes = [...(contents[source][spell].class || []), ...(contents[source][spell].classVariant || [])];
        const parsed = classes.map((class$) => ({
          spellName: spell,
          spellSource: source,
          casterName: class$.name,
          casterSource: class$.source,
        }));
        sources.push(...parsed);
      }
    }

    this.add('spellSource', sources);
  }

  public get(key: string): any[] {
    return this.data.get(key) ?? [];
  }

  public write(filename: string, key: string) {
    if (!existsSync(this.outPath)) mkdirSync(this.outPath, { recursive: true });
    writeJson(this.outPath, `${filename}.json`, this.get(key));
  }
}

function officialCollector(): Collector {
  const collector = new Collector('./5etools-src/data', './data/official');

  collector.addFile('actions.json');
  collector.addFile('adventures.json');
  collector.addFile('backgrounds.json');
  collector.addFile('books.json');
  collector.addFile('conditionsdiseases.json');
  collector.addFile('cultsboons.json');
  collector.addFile('deities.json');
  collector.addFile('feats.json');
  collector.addFile('fluff-backgrounds.json');
  collector.addFile('fluff-conditionsdiseases.json');
  collector.addFile('fluff-items.json');
  collector.addFile('fluff-languages.json');
  collector.addFile('fluff-objects.json');
  collector.addFile('fluff-races.json');
  collector.addFile('fluff-trapshazards.json');
  collector.addFile('items-base.json');
  collector.addFile('items.json');
  collector.addFile('languages.json');
  collector.addFile('life.json');
  collector.addFile('magicvariants.json');
  collector.addFile('names.json');
  collector.addFile('objects.json');
  collector.addFile('races.json');
  collector.addFile('senses.json');
  collector.addFile('skills.json');
  collector.addFile('tables.json');
  collector.addFile('trapshazards.json');
  collector.addFile('variantrules.json');
  collector.addFile('vehicles.json');

  collector.addIndex('class', 'index.json');
  collector.addIndex('bestiary', 'index.json');
  collector.addIndex('bestiary', 'fluff-index.json');
  collector.addIndex('spells', 'index.json');
  collector.addIndex('spells', 'fluff-index.json');
  collector.addSpellSources('spells/sources.json');

  return collector;
}

function partneredCollector(): Collector {
  const source = './5etools-homebrew/data';
  const collector = new Collector(source, './data/partnered');

  for (const type of readdirSync(source, { withFileTypes: true })) {
    if (!type.isDirectory()) continue;

    for (const file of readdirSync(path.join(source, type.name), { withFileTypes: true })) {
      if (!file.isFile()) continue;

      const subpath = path.join(type.name, file.name);
      collector.addFile(subpath);
    }
  }

  return collector;
}

function main() {
  const official = officialCollector();
  const partnered = partneredCollector();

  for (const collector of [official, partnered]) {
    collector.write('actions', 'action');
    collector.write('backgrounds', 'background');
    collector.write('background-fluffs', 'backgroundFluff');
    collector.write('boons', 'boon');
    collector.write('cults', 'cult');
    collector.write('deities', 'deity');
    collector.write('feats', 'feat');
    collector.write('hazards', 'hazard');
    collector.write('items', 'item');
    collector.write('items-base', 'baseitem');
    collector.write('item-masteries', 'itemMastery');
    collector.write('item-properties', 'itemProperty');
    collector.write('item-types', 'itemType');
    collector.write('item-fluffs', 'itemFluff');
    collector.write('languages', 'language');
    collector.write('spells', 'spell');
    collector.write('classes', 'class');
    collector.write('spell-sources', 'spellSource');
    collector.write('skills', 'skill');
    collector.write('tables', 'table');
    collector.write('traps', 'trap');
  }
}

main();
