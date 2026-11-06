import { gray, grayA, grayDark, grayDarkA, grayDarkP3, grayDarkP3A, grayP3, grayP3A } from '@frosted-ui/colors';
import Color from 'colorjs.io';
import { generateRadixColors } from './generate-radix-colors';

const semanticRoles = ['accent', 'danger', 'success', 'warning', 'info'] as const;

type SemanticRole = (typeof semanticRoles)[number];
type Appearance = 'light' | 'dark';
type PaletteSeeds = Record<SemanticRole | 'gray' | 'background', string>;
type GeneratedScale = ReturnType<typeof generateRadixColors>;
type CopyTarget = SemanticRole | 'gray' | 'background' | 'all';

type GeneratedPalette = {
  appearance: Appearance;
  roles: Record<SemanticRole, GeneratedScale>;
};

function colorSteps(colors: object, prefix: string): string[] {
  const record = colors as Record<string, string>;
  return Array.from({ length: 12 }, (_, index) => record[`${prefix}${index + 1}`]);
}

// The gray palette named "gray" is the default neutral scale. Light
// `--color-background` is white; dark `--color-background` is `--gray-1`.
const systemFoundation = {
  light: {
    gray: gray.gray9,
    background: '#ffffff',
    solid: colorSteps(gray, 'gray'),
    alpha: colorSteps(grayA, 'grayA'),
    solidP3: colorSteps(grayP3, 'gray'),
    alphaP3: colorSteps(grayP3A, 'grayA'),
  },
  dark: {
    gray: grayDark.gray9,
    background: grayDark.gray1,
    solid: colorSteps(grayDark, 'gray'),
    alpha: colorSteps(grayDarkA, 'grayA'),
    solidP3: colorSteps(grayDarkP3, 'gray'),
    alphaP3: colorSteps(grayDarkP3A, 'grayA'),
  },
} as const;

const defaultSeeds: Record<Appearance, PaletteSeeds> = {
  light: {
    accent: '#1754d8',
    danger: '#fd1d1d',
    success: '#06d718',
    warning: '#ffc53d',
    info: '#7ce2fe',
    gray: systemFoundation.light.gray,
    background: systemFoundation.light.background,
  },
  dark: {
    accent: '#1754d8',
    danger: '#fd1d1d',
    success: '#06d718',
    warning: '#ffc53d',
    info: '#7ce2fe',
    gray: systemFoundation.dark.gray,
    background: systemFoundation.dark.background,
  },
};

const previewSelector = `.frosted-ui.custom-palette,
.frosted-ui.custom-palette .frosted-ui`;

const lightScope = `:root .frosted-ui,
.light .frosted-ui,
.light-theme .frosted-ui,
.frosted-ui.light,
.frosted-ui.light-theme`;

const darkScope = `.dark .frosted-ui,
.dark-theme .frosted-ui,
.frosted-ui.dark,
.frosted-ui.dark-theme`;

function indent(css: string, spaces: number): string {
  const pad = ' '.repeat(spaces);
  return css
    .split('\n')
    .map((line) => (line ? pad + line : line))
    .join('\n');
}

function block(selector: string, body: string): string {
  return `${selector} {\n${indent(body, 2)}\n}`;
}

function roleDeclarations(name: string, scale: GeneratedScale, wideGamut: boolean): string {
  const solid = wideGamut ? scale.accentScaleWideGamut : scale.accentScale;
  const alpha = wideGamut ? scale.accentScaleAlphaWideGamut : scale.accentScaleAlpha;
  const surface = wideGamut ? scale.accentSurfaceWideGamut : scale.accentSurface;

  return [
    ...solid.map((value, index) => `--${name}-${index + 1}: ${value};`),
    ...alpha.map((value, index) => `--${name}-a${index + 1}: ${value};`),
    `--${name}-9-contrast: ${scale.accentContrast};`,
    `--color-surface-${name}: ${surface};`,
  ].join('\n');
}

function grayDeclarations(scale: GeneratedScale, wideGamut: boolean): string {
  const solid = wideGamut ? scale.grayScaleWideGamut : scale.grayScale;
  const alpha = wideGamut ? scale.grayScaleAlphaWideGamut : scale.grayScaleAlpha;
  const surface = wideGamut ? scale.graySurfaceWideGamut : scale.graySurface;

  return [
    ...solid.map((value, index) => `--gray-${index + 1}: ${value};`),
    ...alpha.map((value, index) => `--gray-a${index + 1}: ${value};`),
    `--gray-surface: ${surface};`,
    // Step 2's alpha twin matches solid step 2 on the chosen background, which is what translucent panels use.
    `--gray-2-translucent: ${alpha[1]};`,
  ].join('\n');
}

function backgroundDeclaration(background: string): string {
  return `--color-background: ${background};`;
}

function usesSystemFoundation(): boolean {
  return true;
}

function systemGrayDeclarations(appearance: Appearance, wideGamut: boolean): string {
  const foundation = systemFoundation[appearance];
  const solid = wideGamut ? foundation.solidP3 : foundation.solid;
  const alpha = wideGamut ? foundation.alphaP3 : foundation.alpha;

  return [
    ...solid.map((value, index) => `--gray-${index + 1}: ${value};`),
    ...alpha.map((value, index) => `--gray-a${index + 1}: ${value};`),
  ].join('\n');
}

function grayAndBackgroundDeclarations(
  palette: GeneratedPalette,
  seeds: PaletteSeeds,
  wideGamut: boolean,
  includeSystem: boolean,
): string {
  if (usesSystemFoundation()) {
    if (!includeSystem) return '';
    return [
      systemGrayDeclarations(palette.appearance, wideGamut),
      backgroundDeclaration(systemFoundation[palette.appearance].background),
    ].join('\n');
  }

  return [
    grayDeclarations(palette.roles.accent, wideGamut),
    backgroundDeclaration(palette.roles.accent.background),
  ].join('\n');
}

function declarationsFor(
  palette: GeneratedPalette,
  seeds: PaletteSeeds,
  target: CopyTarget,
  wideGamut: boolean,
  includeSystemFoundation: boolean,
): string {
  if (target === 'background') {
    return backgroundDeclaration(
      usesSystemFoundation() ? systemFoundation[palette.appearance].background : palette.roles.accent.background,
    );
  }
  if (target === 'gray') {
    return usesSystemFoundation()
      ? systemGrayDeclarations(palette.appearance, wideGamut)
      : grayDeclarations(palette.roles.accent, wideGamut);
  }
  if (target === 'all') {
    return [
      ...semanticRoles.map((role) => roleDeclarations(role, palette.roles[role], wideGamut)),
      grayAndBackgroundDeclarations(palette, seeds, wideGamut, includeSystemFoundation),
    ]
      .filter(Boolean)
      .join('\n');
  }
  return roleDeclarations(target, palette.roles[target], wideGamut);
}

function withWideGamut(selector: string, srgb: string, p3: string): string {
  const base = block(selector, srgb);
  if (srgb === p3) return base;

  return `${base}

@supports (color: color(display-p3 1 1 1)) {
  @media (color-gamut: p3) {
${indent(block(selector, p3), 4)}
  }
}`;
}

function isCssColor(value: string): boolean {
  try {
    const color = new Color(value);
    return color.coords.every((channel) => typeof channel === 'number' && Number.isFinite(channel));
  } catch {
    return false;
  }
}

function isUsable(palette: GeneratedPalette): boolean {
  return semanticRoles.every((role) =>
    palette.roles[role].accentScale.every((color) => !color.toLowerCase().includes('nan')),
  );
}

function generatePalette(appearance: Appearance, seeds: PaletteSeeds): GeneratedPalette {
  const roles = {} as Record<SemanticRole, GeneratedScale>;

  for (const role of semanticRoles) {
    const foundation = systemFoundation[appearance];
    roles[role] = generateRadixColors({
      appearance,
      accent: seeds[role],
      // Semantic scales are anchored to the gray palette's step 9 and `--color-background`.
      gray: foundation.gray,
      background: foundation.background,
    });
  }

  return { appearance, roles };
}

function tryGeneratePalette(appearance: Appearance, seeds: PaletteSeeds): GeneratedPalette | null {
  try {
    const palette = generatePalette(appearance, seeds);
    return isUsable(palette) ? palette : null;
  } catch {
    return null;
  }
}

function palettePreviewCss(palette: GeneratedPalette, seeds: PaletteSeeds): string {
  return withWideGamut(
    previewSelector,
    declarationsFor(palette, seeds, 'all', false, false),
    declarationsFor(palette, seeds, 'all', true, false),
  );
}

function appearanceCopyCss(palette: GeneratedPalette, seeds: PaletteSeeds, target: CopyTarget): string {
  const selector = palette.appearance === 'dark' ? darkScope : lightScope;

  return withWideGamut(
    selector,
    declarationsFor(palette, seeds, target, false, true),
    declarationsFor(palette, seeds, target, true, true),
  );
}

function paletteCopyCss(
  light: GeneratedPalette,
  dark: GeneratedPalette,
  lightSeeds: PaletteSeeds,
  darkSeeds: PaletteSeeds,
  target: CopyTarget,
): string {
  const label = target === 'all' ? 'all scales' : target === 'background' ? 'background' : `${target} scale`;

  return `/* Frosted UI custom palette — ${label} */\n${appearanceCopyCss(light, lightSeeds, target)}\n\n${appearanceCopyCss(dark, darkSeeds, target)}\n`;
}

export { defaultSeeds, isCssColor, paletteCopyCss, palettePreviewCss, semanticRoles, tryGeneratePalette };
export type { Appearance, CopyTarget, GeneratedPalette, PaletteSeeds, SemanticRole };
