import type { GetPropDefTypes, PropDef } from './helpers';
import {
  //
  bnwScales,
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

export const semanticColors = ['danger', 'warning', 'success', 'info'] as const;
const appearances = ['inherit', 'light', 'dark'] as const;
const accentColors = [...radixColorScales, 'gray'] as const;
const grayColors = [...radixGrayScales, 'auto'] as const;
const dangerColors = ['tomato', 'red', 'ruby'] as const;
const warningColors = ['yellow', 'amber'] as const;
const successColors = ['teal', 'jade', 'green', 'grass'] as const;
const infoColors = ['blue', 'sky'] as const;
const panelBackgrounds = ['solid', 'translucent'] as const;
const radii = ['none', 'small', 'medium', 'large', 'full'] as const;

const themePropDefs = {
  hasBackground: { type: 'boolean', default: true },
  appearance: { type: 'enum', values: appearances, default: 'inherit' },
  accentColor: { type: 'enum', values: accentColors, default: 'indigo' },
  grayColor: { type: 'enum', values: grayColors, default: 'auto' },
  dangerColor: { type: 'enum', values: dangerColors, default: 'red' },
  warningColor: { type: 'enum', values: warningColors, default: 'amber' },
  successColor: { type: 'enum', values: successColors, default: 'green' },
  infoColor: { type: 'enum', values: infoColors, default: 'sky' },

  panelBackground: {
    type: 'enum',
    values: panelBackgrounds,
    default: 'translucent',
  },
  radius: { type: 'enum', values: radii, default: 'medium' },
} satisfies {
  hasBackground: PropDef<boolean>;
  appearance: PropDef<(typeof appearances)[number]>;
  accentColor: PropDef<(typeof accentColors)[number]>;
  grayColor: PropDef<(typeof grayColors)[number]>;
  dangerColor: PropDef<(typeof dangerColors)[number]>;
  warningColor: PropDef<(typeof warningColors)[number]>;
  successColor: PropDef<(typeof successColors)[number]>;
  infoColor: PropDef<(typeof infoColors)[number]>;

  panelBackground: PropDef<(typeof panelBackgrounds)[number]>;
  radius: PropDef<(typeof radii)[number]>;
};

type ThemeProps = GetPropDefTypes<typeof themePropDefs>;

type ThemeAppearance = NonNullable<ThemeProps['appearance']>;
type ThemeAccentColor = NonNullable<ThemeProps['accentColor']>;
type ThemeGrayColor = NonNullable<ThemeProps['grayColor']>;
type ThemePanelBackground = NonNullable<ThemeProps['panelBackground']>;
type ThemeRadius = NonNullable<ThemeProps['radius']>;
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
  panelBackground: ThemePanelBackground;
  radius: ThemeRadius;
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

const themeBNWColorsGrouped = [{ label: 'B&W', values: bnwScales }];

function getMatchingGrayColor(
  accentColor: ThemeAccentColor,
): (typeof radixGrayScales)[number] {
  if (accentColor === 'gray') return 'gray';
  return radixGetMatchingGrayScale(accentColor);
}

export {
  getMatchingGrayColor,
  //
  themeAccentColorsGrouped,
  themeAccentColorsOrdered,
  themeBNWColorsGrouped,
  themeGrayColorsGrouped,
  themePropDefs,
};
export type { ThemeOptions };
