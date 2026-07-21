export type Unit =
  | {
      number: number;
      unit: string;
    }
  | 'Varies'
  | 'Free'

export type Entry = string | EntryEntries;

export interface EntryEntries {
  type: 'entries';
  name: string;
  entries: Entry[];
}
