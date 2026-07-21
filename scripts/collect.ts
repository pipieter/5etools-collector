import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

function read(path: string): any {
  return JSON.parse(readFileSync(path).toString());
}

function write(dir: string, file: string, contents: any[]): any {
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
  public readonly data = new Map<string, any[]>();

  constructor(path: string) {
    this.basePath = path;
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
}

function official() {
  const collector = new Collector('./5etools-src/data');

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

  if (!existsSync('./data/official')) mkdirSync('./data/official', { recursive: true });

  write('./data/official', 'actions.json', collector.get('action'));
  write('./data/official', 'boons.json', collector.get('boon'));
  write('./data/official', 'feats.json', collector.get('feat'));
  write('./data/official', 'items.json', collector.get('item'));
  write('./data/official', 'items-base.json', collector.get('baseitem'));
  write('./data/official', 'item-masteries.json', collector.get('itemMastery'));
  write('./data/official', 'item-properties.json', collector.get('itemProperty'));
  write('./data/official', 'item-types.json', collector.get('itemType'));
  write('./data/official', 'item-fluffs.json', collector.get('itemFluff'));
  write('./data/official', 'spells.json', collector.get('spell'));
  write('./data/official', 'classes.json', collector.get('class'));
  write('./data/official', 'spellSources.json', collector.get('spellSource'));
}

function main() {
  official();
}

main();
