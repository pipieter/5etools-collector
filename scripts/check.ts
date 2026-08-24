import { Checker } from 'ts-interface-checker';

export function check(name: string, checker: Checker, objects: any[]) {
  for (const object of objects) {
    try {
      checker.strictCheck(object);
    } catch (e) {
      console.error(`Could not verify the following object for ${name} checker:`);
      console.error(JSON.stringify(object, null, 2));
      console.error();
      console.error(e);
      process.exit(1);
    }
  }
}
