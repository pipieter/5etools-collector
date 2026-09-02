import { Base, SRD } from './internal/base';
import { Entry, Cell, Row, CellHeader } from './internal/entry';

export interface Table extends Base, SRD {
  type?: 'table' | 'tableGroup';
  caption?: string;
  colLabels?: string[];
  colLabelRows?: (string | CellHeader)[][];
  colStyles?: string[];
  rows?: ((Entry | Cell | number)[] | Row)[];
  footnotes?: Entry[];
  intro?: Entry[];
  outro?: Entry[];
  tables?: Table[];
  isNameGenerator?: boolean;
}
