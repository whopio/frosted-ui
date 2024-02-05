import type { PropDef } from '../helpers';

const sizes = ['1', '2'] as const;
const variants = ['surface', 'ghost'] as const;

const dataTableRootPropDefs = {
  size: { type: 'enum', values: sizes, default: '2', responsive: true },
  variant: { type: 'enum', values: variants, default: 'surface' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

const rowAlign = ['start', 'center', 'end', 'baseline'] as const;

const dataTableRowPropDefs = {
  align: {
    type: 'enum',
    values: rowAlign,
    default: undefined,
    responsive: true,
  },
} satisfies {
  align: PropDef<(typeof rowAlign)[number]>;
};

const cellJustify = ['start', 'center', 'end'] as const;

const dataTableCellPropDefs = {
  justify: {
    type: 'enum',
    values: cellJustify,
    default: undefined,
    responsive: true,
  },
  width: { type: 'string | number', default: undefined },
} satisfies {
  justify: PropDef<(typeof cellJustify)[number]>;
  width: PropDef<string | number>;
};

export { dataTableCellPropDefs, dataTableRootPropDefs, dataTableRowPropDefs };
