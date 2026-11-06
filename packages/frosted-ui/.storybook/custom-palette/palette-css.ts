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

const defaultSeeds: Record<Appearance, PaletteSeeds> = {
  light: {
    accent: '#1754d8',
    danger: '#fd1d1d',
    success: '#06d718',
    warning: '#ffc53d',
    info: '#7ce2fe',
    gray: '#8d8d8d',
    background: '#ffffff',
  },
  dark: {
    accent: '#1754d8',
    danger: '#fd1d1d',
    success: '#06d718',
    warning: '#ffc53d',
    info: '#7ce2fe',
    gray: '#6e6e6e',
    background: '#111111',
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

function backgroundDeclaration(scale: GeneratedScale): string {
  return `--color-background: ${scale.background};`;
}

function declarationsFor(palette: GeneratedPalette, target: CopyTarget, wideGamut: boolean): string {
  if (target === 'background') return backgroundDeclaration(palette.roles.accent);
  if (target === 'gray') return grayDeclarations(palette.roles.accent, wideGamut);
  if (target === 'all') {
    return [
      ...semanticRoles.map((role) => roleDeclarations(role, palette.roles[role], wideGamut)),
      grayDeclarations(palette.roles.accent, wideGamut),
      backgroundDeclaration(palette.roles.accent),
    ].join('\n');
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
    roles[role] = generateRadixColors({
      appearance,
      accent: seeds[role],
      gray: seeds.gray,
      background: seeds.background,
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

function palettePreviewCss(palette: GeneratedPalette): string {
  return withWideGamut(previewSelector, declarationsFor(palette, 'all', false), declarationsFor(palette, 'all', true));
}

function paletteCopyCss(palette: GeneratedPalette, target: CopyTarget): string {
  const selector = palette.appearance === 'dark' ? darkScope : lightScope;
  const label = target === 'all' ? 'all scales' : target === 'background' ? 'background' : `${target} scale`;

  return `/* Frosted UI custom palette — ${label} (${palette.appearance}) */\n${withWideGamut(
    selector,
    declarationsFor(palette, target, false),
    declarationsFor(palette, target, true),
  )}\n`;
}

export { defaultSeeds, isCssColor, paletteCopyCss, palettePreviewCss, semanticRoles, tryGeneratePalette };
export type { Appearance, CopyTarget, GeneratedPalette, PaletteSeeds, SemanticRole };
