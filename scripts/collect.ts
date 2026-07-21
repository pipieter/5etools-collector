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

  public addFile(file: string): void {
    const contents = read(path.join(this.basePath, file));

    for (const [key, value] of Object.entries(contents)) {
      if (!this.data.has(key)) {
        this.data.set(key, []);
      }

      if (Array.isArray(value)) {
        this.data.get(key)!.push(...value);
      } else {
        this.data.get(key)!.push(value);
      }
    }
  }

  public addDirectory(path: string): void {}

  public get(key: string): any[] {
    return this.data.get(key) ?? [];
  }
}

function main() {
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

  // collector.addFile('class/index.json');
  // collector.addFile('bestiary/index.json');
  // collector.addFile('bestiary/fluff-index.json');
  // collector.addFile('spells/fluff-index.json');
  // collector.addFile('spells/index.json');
  //collector.addFileSpellSource('spells/sources.json');

  if (!existsSync('./data/official')) mkdirSync('./data/official', {recursive: true});

  write('./data/official', 'actions.json', collector.get('action'));
  write('./data/official', 'feats.json', collector.get('feat'));

  console.log(collector.get("_meta"))
}

main();
