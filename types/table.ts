import { Base, SRD } from './internal/base';
import { Entry, Row, CellHeader } from './internal/entry';

export interface TableData {
  caption?: string;
  /**
   * Generally unused in pure table data, likely a copy-paste error by 5e.tools.
   *
   * Appears only in Mutalos Habitats (EGW), but is not visible on the page.
   * https://5e.tools/tables.html#mutalos%20habitats_egw
   */
  id?: string;
  colLabels?: string[];
  colLabelRows?: (string | CellHeader)[][];
  colStyles?: string[];
  rows?: ((Entry | number)[] | Row)[];
  footnotes?: Entry[];
  intro?: Entry[];
  outro?: Entry[];
  isNameGenerator?: boolean;
  isStriped?: boolean;
}

export interface TableTable extends Base, SRD, TableData {
  type?: 'table';
}

export interface TableGroupTableData {
  name: string;
  source: string;
  page: number;
  type: string;
  path: any[]; // TODO
  section: string;
  sectionIndex: number;
}

export interface TableGroup extends Base, SRD {
  type: 'tableGroup';
  tables?: (TableData & Partial<TableGroupTableData>)[];
}

export type Table = TableTable | TableGroup;
