import type { GetPropDefTypes, PropDef } from './helpers';
import {
  radixColorScales,
  radixColorScalesBright,
  radixColorScalesMetal,
  radixColorScalesRegular,
  //
  radixGetMatchingGrayScale,
  //
  radixGrayScalePure,
  radixGrayScales,
  radixGrayScalesDesaturated,
} from './helpers/radix-colors';

const colorPanelElevationColors = ['color-panel-elevation'] as const;
const semanticColors = ['danger', 'warning', 'success', 'info'] as const;
const appearances = ['inherit', 'light', 'dark'] as const;
const accentColors = [...radixColorScales, 'gray'] as const;
const grayColors = [...radixGrayScales, 'auto'] as const;
const dangerColors = ['tomato', 'red', 'ruby'] as const;
const warningColors = ['yellow', 'amber'] as const;
const successColors = ['teal', 'jade', 'green', 'grass'] as const;
const infoColors = ['blue', 'sky'] as const;

const themePropDefs = {
  hasBackground: { type: 'boolean', default: true },
  appearance: { type: 'enum', values: appearances, default: 'inherit' },
  accentColor: { type: 'enum', values: accentColors, default: 'indigo' },
  grayColor: { type: 'enum', values: grayColors, default: 'auto' },
  dangerColor: { type: 'enum', values: dangerColors, default: 'red' },
  warningColor: { type: 'enum', values: warningColors, default: 'amber' },
  successColor: { type: 'enum', values: successColors, default: 'green' },
  infoColor: { type: 'enum', values: infoColors, default: 'sky' },
} satisfies {
  hasBackground: PropDef<boolean>;
  appearance: PropDef<(typeof appearances)[number]>;
  accentColor: PropDef<(typeof accentColors)[number]>;
  grayColor: PropDef<(typeof grayColors)[number]>;
  dangerColor: PropDef<(typeof dangerColors)[number]>;
  warningColor: PropDef<(typeof warningColors)[number]>;
  successColor: PropDef<(typeof successColors)[number]>;
  infoColor: PropDef<(typeof infoColors)[number]>;
};

type ThemeProps = GetPropDefTypes<typeof themePropDefs>;

type ThemeAppearance = NonNullable<ThemeProps['appearance']>;
type ThemeAccentColor = NonNullable<ThemeProps['accentColor']>;
type ThemeGrayColor = NonNullable<ThemeProps['grayColor']>;
type ThemeDangerColor = NonNullable<ThemeProps['dangerColor']>;
type ThemeWarningColor = NonNullable<ThemeProps['warningColor']>;
type ThemeSuccessColor = NonNullable<ThemeProps['successColor']>;
type ThemeInfoColor = NonNullable<ThemeProps['infoColor']>;

type ThemeOptions = {
  appearance: ThemeAppearance;
  accentColor: ThemeAccentColor;
  grayColor: ThemeGrayColor;
  dangerColor: ThemeDangerColor;
  warningColor: ThemeWarningColor;
  successColor: ThemeSuccessColor;
  infoColor: ThemeInfoColor;
};

const themeAccentColorsGrouped = [
  {
    label: 'Regulars',
    values: [...radixColorScalesRegular] as ThemeAccentColor[],
  },
  {
    label: 'Brights',
    values: [...radixColorScalesBright] as ThemeAccentColor[],
  },
  { label: 'Metals', values: [...radixColorScalesMetal] as ThemeAccentColor[] },
  { label: 'Gray', values: ['gray'] as ThemeAccentColor[] },
];

const themeAccentColorsOrdered = [
  'gray',
  'gold',
  'bronze',
  'brown',
  'yellow',
  'amber',
  'orange',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'lime',
  'mint',
  'sky',
] as ThemeAccentColor[];

const themeGrayColorsGrouped = [
  { label: 'Pure', values: [radixGrayScalePure] as ThemeGrayColor[] },
  {
    label: 'Desaturated',
    values: ['auto', ...radixGrayScalesDesaturated] as ThemeGrayColor[],
  },
];

function getMatchingGrayColor(
  accentColor: ThemeAccentColor,
): (typeof radixGrayScales)[number] {
  if (accentColor === 'gray') return 'gray';
  return radixGetMatchingGrayScale(accentColor);
}

export {
  colorPanelElevationColors,
  dangerColors,
  getMatchingGrayColor,
  infoColors,
  semanticColors,
  successColors,
  //
  themeAccentColorsGrouped,
  themeAccentColorsOrdered,
  themeGrayColorsGrouped,
  themePropDefs,
  warningColors,
};
export type { ThemeOptions };
