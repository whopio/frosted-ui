import type { PropDef } from '../helpers';

const sizes = ['1', '2'] as const;
const variants = ['surface', 'ghost'] as const;

const tableRootPropDefs = {
  size: { type: 'enum', values: sizes, default: '2' },
  variant: { type: 'enum', values: variants, default: 'surface' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
};

const rowAlign = ['start', 'center', 'end', 'baseline'] as const;

const tableRowPropDefs = {
  align: {
    type: 'enum',
    values: rowAlign,
    default: undefined,
  },
} satisfies {
  align: PropDef<(typeof rowAlign)[number]>;
};

const cellJustify = ['start', 'center', 'end'] as const;

const tableCellPropDefs = {
  justify: {
    type: 'enum',
    values: cellJustify,
    default: undefined,
  },
  width: { type: 'string | number', default: undefined },
} satisfies {
  justify: PropDef<(typeof cellJustify)[number]>;
  width: PropDef<string | number>;
};

export { tableCellPropDefs, tableRootPropDefs, tableRowPropDefs };
