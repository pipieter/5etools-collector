import { Base, SRD } from './internal/base';
import { Entry, Row, CellHeader } from './internal/entry';

export interface TableData {
  caption?: string;
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
