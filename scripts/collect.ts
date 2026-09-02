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
  writeFileSync(fullPath, JSON.stringify(contents, null, 1));
}

class Collector {
  public readonly basePath: string;
  public readonly outPath: string;
  public readonly data = new Map<string, any[]>();

  public constructor(basePath: string, outPath: string) {
    this.basePath = basePath;
    this.outPath = outPath;
  }

  public add(key: string, value: any | any[]): void {
    if (!this.data.has(key)) {
      this.data.set(key, []);
    }

    if (Array.isArray(value)) {
      this.data.get(key)!.push(...value);
    } else {
      this.data.get(key)!.push(value);
    }
  }

  public get(key: string): any[] {
    return this.data.get(key) ?? [];
  }

  public write(filename: string, key: string) {
    if (!existsSync(this.outPath)) mkdirSync(this.outPath, { recursive: true });
    writeJson(this.outPath, `${filename}.json`, this.get(key));
  }

  public writeObjects(filename: string, objects: any[]) {
    if (!existsSync(this.outPath)) mkdirSync(this.outPath, { recursive: true });
    writeJson(this.outPath, `${filename}.json`, objects);
  }
}

class OfficialCollector extends Collector {
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
}

class PartneredCollector extends Collector {
  public readonly partneredOnly: boolean;

  public constructor(basePath: string, outPath: string, partneredOnly: boolean) {
    super(basePath, outPath);
    this.partneredOnly = partneredOnly;
  }

  public addFile(file: string): void {
    const contents = read(file);

    const sources: any[] = contents._meta?.sources ?? [];
    const partnered = sources.some((source) => source.partnered ?? false);
    if (this.partneredOnly && !partnered) return;

    for (const [key, value] of Object.entries(contents)) {
      this.add(key, value);
    }
  }
}

function officialCollector(): Collector {
  const collector = new OfficialCollector('./5etools-src/data', './data/official');

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
  collector.addIndex('class', 'fluff-index.json');
  collector.addIndex('bestiary', 'index.json');
  collector.addIndex('bestiary', 'fluff-index.json');
  collector.addIndex('spells', 'index.json');
  collector.addIndex('spells', 'fluff-index.json');
  collector.addSpellSources('spells/sources.json');

  return collector;
}

function recursiveGetAllFilesInDirectory(directory: string): string[] {
  const entries = readdirSync(directory, { withFileTypes: true }).flatMap((file) => {
    const fullPath = path.join(directory, file.name);
    if (file.isFile()) {
      return fullPath;
    }
    if (file.isDirectory()) {
      return recursiveGetAllFilesInDirectory(fullPath);
    }

    return [];
  });
  return entries;
}

function partneredCollector(partneredOnly: boolean): Collector {
  const source = path.join(process.cwd(), '5etools-homebrew/data');
  const collector = new PartneredCollector(source, './data/partnered', partneredOnly);

  for (const file of recursiveGetAllFilesInDirectory(source)) {
    collector.addFile(file);
  }

  return collector;
}

function main() {
  const official = officialCollector();
  const partnered = partneredCollector(true);

  for (const collector of [official, partnered]) {
    collector.write('actions', 'action');
    collector.write('backgrounds', 'background');
    collector.write('background-fluffs', 'backgroundFluff');
    collector.write('boons', 'boon');
    collector.write('class-features', 'classFeature');
    collector.write('class-fluffs', 'classFluff');
    collector.write('conditions', 'condition');
    collector.write('condition-fluffs', 'conditionFluff');
    collector.write('cults', 'cult');
    collector.write('diseases', 'disease');
    collector.write('disease-fluffs', 'diseaseFluff');
    collector.write('deities', 'deity');
    collector.write('feats', 'feat');
    collector.write('hazards', 'hazard');
    collector.write('items', 'item');
    collector.write('items-base', 'baseitem');
    collector.write('item-entries', 'itemEntry');
    collector.write('item-groups', 'itemGroup');
    collector.write('item-masteries', 'itemMastery');
    collector.write('item-properties', 'itemProperty');
    collector.write('item-types', 'itemType');
    collector.write('item-type-additional-entries', 'itemTypeAdditionalEntries');
    collector.write('item-fluffs', 'itemFluff');
    collector.write('languages', 'language');
    collector.write('magic-variants', 'magicvariant');
    collector.write('monsters', 'monster');
    collector.write('monster-fluffs', 'monsterFluff');
    collector.write('objects', 'object');
    collector.write('object-fluffs', 'objectFluff');
    collector.write('spells', 'spell');
    collector.write('spell-fluffs', 'spellFluff');
    collector.write('spell-sources', 'spellSource');
    collector.write('subclasses', 'subclass');
    collector.write('subclass-features', 'subclassFeature');
    collector.write('skills', 'skill');
    collector.write('statuses', 'status');
    collector.write('status-fluffs', 'statusFluff');
    collector.write('tables', 'table');
    collector.write('traps', 'trap');

    // Split classes and sidekicks
    const classes = collector.get('class').filter((e) => !e.isSidekick);
    const sidekicks = collector.get('class').filter((e) => e.isSidekick);
    collector.writeObjects('classes', classes);
    collector.writeObjects('sidekicks', sidekicks);
  }
}

main();
