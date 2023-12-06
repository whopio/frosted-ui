import { withBreakpoints } from '../breakpoints';

import type { GetPropDefTypes, PropDef } from './prop-def';

const paddingValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
] as const;

const paddingPropDefs = {
  p: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
    responsive: true,
  },
  px: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
    responsive: true,
  },
  py: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
    responsive: true,
  },
  pt: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
    responsive: true,
  },
  pr: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
    responsive: true,
  },
  pb: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
    responsive: true,
  },
  pl: {
    type: 'enum',
    values: paddingValues,
    default: undefined,
    responsive: true,
  },
} satisfies {
  p: PropDef<(typeof paddingValues)[number]>;
  px: PropDef<(typeof paddingValues)[number]>;
  py: PropDef<(typeof paddingValues)[number]>;
  pt: PropDef<(typeof paddingValues)[number]>;
  pr: PropDef<(typeof paddingValues)[number]>;
  pb: PropDef<(typeof paddingValues)[number]>;
  pl: PropDef<(typeof paddingValues)[number]>;
};

type PaddingProps = GetPropDefTypes<typeof paddingPropDefs>;

function extractPaddingProps<T extends PaddingProps>(props: T) {
  const {
    p = layoutPropDefs.p.default,
    px = layoutPropDefs.px.default,
    py = layoutPropDefs.py.default,
    pt = layoutPropDefs.pt.default,
    pr = layoutPropDefs.pr.default,
    pb = layoutPropDefs.pb.default,
    pl = layoutPropDefs.pl.default,
    ...rest
  } = props;
  return { p, px, py, pt, pr, pb, pl, rest };
}

function withPaddingProps(props: PaddingProps) {
  return [
    withBreakpoints(props.p, 'fui-r-p'),
    withBreakpoints(props.px, 'fui-r-px'),
    withBreakpoints(props.py, 'fui-r-py'),
    withBreakpoints(props.pt, 'fui-r-pt'),
    withBreakpoints(props.pr, 'fui-r-pr'),
    withBreakpoints(props.pb, 'fui-r-pb'),
    withBreakpoints(props.pl, 'fui-r-pl'),
  ]
    .filter(Boolean)
    .join(' ');
}

const positionValues = [
  'static',
  'relative',
  'absolute',
  'fixed',
  'sticky',
] as const;
const positionEdgeValues = ['auto', '0', '50%', '100%'] as const;
// prettier-ignore
const widthHeightValues = ['auto', 'min-content', 'max-content', '100%', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const flexShrinkValues = ['0', '1'] as const;
const flexGrowValues = ['0', '1'] as const;

const layoutPropDefs = {
  ...paddingPropDefs,
  position: {
    type: 'enum',
    values: positionValues,
    default: undefined,
    responsive: true,
  },
  inset: {
    type: 'enum',
    values: positionEdgeValues,
    default: undefined,
    responsive: true,
  },
  top: {
    type: 'enum',
    values: positionEdgeValues,
    default: undefined,
    responsive: true,
  },
  right: {
    type: 'enum',
    values: positionEdgeValues,
    default: undefined,
    responsive: true,
  },
  bottom: {
    type: 'enum',
    values: positionEdgeValues,
    default: undefined,
    responsive: true,
  },
  left: {
    type: 'enum',
    values: positionEdgeValues,
    default: undefined,
    responsive: true,
  },
  width: {
    type: 'enum',
    values: widthHeightValues,
    default: undefined,
    responsive: true,
  },
  height: {
    type: 'enum',
    values: widthHeightValues,
    default: undefined,
    responsive: true,
  },
  shrink: {
    type: 'enum',
    values: flexShrinkValues,
    default: undefined,
    responsive: true,
  },
  grow: {
    type: 'enum',
    values: flexGrowValues,
    default: undefined,
    responsive: true,
  },
} satisfies {
  p: PropDef<(typeof paddingValues)[number]>;
  px: PropDef<(typeof paddingValues)[number]>;
  py: PropDef<(typeof paddingValues)[number]>;
  pt: PropDef<(typeof paddingValues)[number]>;
  pr: PropDef<(typeof paddingValues)[number]>;
  pb: PropDef<(typeof paddingValues)[number]>;
  pl: PropDef<(typeof paddingValues)[number]>;
  position: PropDef<(typeof positionValues)[number]>;
  inset: PropDef<(typeof positionEdgeValues)[number]>;
  top: PropDef<(typeof positionEdgeValues)[number]>;
  right: PropDef<(typeof positionEdgeValues)[number]>;
  bottom: PropDef<(typeof positionEdgeValues)[number]>;
  left: PropDef<(typeof positionEdgeValues)[number]>;
  width: PropDef<(typeof widthHeightValues)[number]>;
  height: PropDef<(typeof widthHeightValues)[number]>;
  shrink: PropDef<(typeof flexShrinkValues)[number]>;
  grow: PropDef<(typeof flexGrowValues)[number]>;
};

type LayoutProps = GetPropDefTypes<typeof layoutPropDefs>;

function extractLayoutProps<T extends LayoutProps>(props: T) {
  const { rest: paddingRest, ...paddingProps } = extractPaddingProps(props);
  const {
    position = layoutPropDefs.position.default,
    width = layoutPropDefs.width.default,
    height = layoutPropDefs.height.default,
    inset = layoutPropDefs.inset.default,
    top = layoutPropDefs.top.default,
    bottom = layoutPropDefs.bottom.default,
    left = layoutPropDefs.left.default,
    right = layoutPropDefs.right.default,
    shrink = layoutPropDefs.shrink.default,
    grow = layoutPropDefs.grow.default,
    ...rest
  } = paddingRest;
  return {
    ...paddingProps,
    position,
    width,
    height,
    inset,
    top,
    bottom,
    left,
    right,
    shrink,
    grow,
    rest,
  };
}

function withLayoutProps(props: LayoutProps) {
  return [
    withPaddingProps(props),
    withBreakpoints(props.position, 'fui-r-position'),
    withBreakpoints(props.shrink, 'fui-r-fs'),
    withBreakpoints(props.grow, 'fui-r-fg'),
    withBreakpoints(props.width, 'fui-r-w'),
    withBreakpoints(props.height, 'fui-r-h'),
    withBreakpoints(props.inset, 'fui-r-inset'),
    withBreakpoints(props.top, 'fui-r-top'),
    withBreakpoints(props.bottom, 'fui-r-bottom'),
    withBreakpoints(props.left, 'fui-r-left'),
    withBreakpoints(props.right, 'fui-r-right'),
  ]
    .filter(Boolean)
    .join(' ');
}

export {
  extractLayoutProps,
  extractPaddingProps,
  layoutPropDefs,
  paddingPropDefs,
  withLayoutProps,
  withPaddingProps,
};
export type { LayoutProps, PaddingProps };
