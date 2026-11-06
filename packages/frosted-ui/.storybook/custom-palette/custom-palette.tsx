import {
  Checkmark16,
  ChevronDown12,
  Expand16,
  InfoCircle16,
  Minimize16,
  Moon16,
  Plus16,
  Sun16,
} from '@frosted-ui/icons';
import * as React from 'react';
import {
  Avatar,
  Badge,
  Blockquote,
  Button,
  Callout,
  Card,
  Checkbox,
  CircularProgress,
  Code,
  DropdownMenu,
  FilterChip,
  Heading,
  IconButton,
  Link,
  Progress,
  Quote,
  RadioGroup,
  SegmentedControl,
  Slider,
  Spinner,
  Switch,
  Table,
  Text,
  TextField,
  Tooltip,
} from '../../src/components';
import { Theme } from '../../src/theme';
import './custom-palette.css';
import {
  defaultSeeds,
  isCssColor,
  paletteCopyCss,
  palettePreviewCss,
  semanticRoles,
  tryGeneratePalette,
  type Appearance,
  type CopyTarget,
  type GeneratedPalette,
  type PaletteSeeds,
  type SemanticRole,
} from './palette-css';

const STORAGE_KEY = 'frosted-ui/custom-palette/v2';
const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;

const fieldDefs: { key: SemanticRole; label: string }[] = [
  { key: 'accent', label: 'Accent' },
  { key: 'danger', label: 'Danger' },
  { key: 'success', label: 'Success' },
  { key: 'warning', label: 'Warning' },
  { key: 'info', label: 'Info' },
];

const copyTargets: { id: CopyTarget; label: string }[] = [
  { id: 'accent', label: 'Copy accent scale' },
  { id: 'danger', label: 'Copy danger scale' },
  { id: 'success', label: 'Copy success scale' },
  { id: 'warning', label: 'Copy warning scale' },
  { id: 'info', label: 'Copy info scale' },
  { id: 'gray', label: 'Copy gray scale' },
  { id: 'background', label: 'Copy background' },
  { id: 'all', label: 'Copy all scales' },
];

const usageRanges = [
  { label: 'Backgrounds', span: 2 },
  { label: 'Interactive components', span: 3 },
  { label: 'Borders and separators', span: 3 },
  { label: 'Solid colors', span: 2 },
  { label: 'Accessible text', span: 2 },
] as const;

const roleLabels: Record<SemanticRole, string> = {
  accent: 'Accent',
  danger: 'Danger',
  success: 'Success',
  warning: 'Warning',
  info: 'Info',
};

const customSemanticSeeds: Pick<PaletteSeeds, SemanticRole> = {
  accent: '#255FFF',
  danger: '#FF2438',
  success: '#1ABD04',
  warning: '#FFAA00',
  info: '#00C2FF',
};

type SemanticPreset = 'default' | 'custom';

function sameHex(a: string, b: string) {
  return a.trim().toLowerCase() === b.trim().toLowerCase();
}

function semanticPreset(seeds: PaletteSeeds): SemanticPreset | null {
  const matches = (source: Pick<PaletteSeeds, SemanticRole>) =>
    semanticRoles.every((role) => sameHex(seeds[role], source[role]));

  if (matches(customSemanticSeeds)) return 'custom';
  if (matches(defaultSeeds.light)) return 'default';
  return null;
}

type StoredPalette = {
  appearance: Appearance;
  preset: SemanticPreset;
  custom: Pick<PaletteSeeds, SemanticRole>;
};

function mergeSeeds(base: PaletteSeeds, stored: Partial<PaletteSeeds> | undefined): PaletteSeeds {
  const next = { ...base };
  if (!stored) return next;

  (Object.keys(base) as (keyof PaletteSeeds)[]).forEach((key) => {
    const value = stored[key];
    if (typeof value === 'string' && value) next[key] = value;
  });

  return next;
}

function withSharedSemantics(
  light: PaletteSeeds,
  dark: PaletteSeeds,
  source: Appearance,
): { light: PaletteSeeds; dark: PaletteSeeds } {
  const shared = source === 'dark' ? dark : light;
  const semantics = Object.fromEntries(semanticRoles.map((role) => [role, shared[role]])) as Pick<
    PaletteSeeds,
    SemanticRole
  >;

  return {
    light: { ...light, ...semantics },
    dark: { ...dark, ...semantics },
  };
}

function semanticsFrom(
  source: Partial<PaletteSeeds> | undefined,
  fallback: Pick<PaletteSeeds, SemanticRole>,
): Pick<PaletteSeeds, SemanticRole> {
  const next = { ...fallback };
  if (!source) return next;

  semanticRoles.forEach((role) => {
    const value = source[role];
    if (typeof value === 'string' && value) next[role] = value;
  });

  return next;
}

function visibleSeeds(
  appearance: Appearance,
  preset: SemanticPreset,
  custom: Pick<PaletteSeeds, SemanticRole>,
): PaletteSeeds {
  const semantics = preset === 'default' ? semanticsFrom(defaultSeeds.light, customSemanticSeeds) : custom;
  return { ...defaultSeeds[appearance], ...semantics };
}

function readStored(initialAppearance: Appearance): StoredPalette {
  const fallback: StoredPalette = {
    appearance: initialAppearance,
    preset: 'custom',
    custom: { ...customSemanticSeeds },
  };

  if (typeof window === 'undefined') return fallback;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<StoredPalette> & {
      light?: Partial<PaletteSeeds>;
      dark?: Partial<PaletteSeeds>;
    };
    const appearance =
      parsed.appearance === 'dark' || parsed.appearance === 'light' ? parsed.appearance : initialAppearance;

    if (parsed.custom && (parsed.preset === 'default' || parsed.preset === 'custom')) {
      return { appearance, preset: parsed.preset, custom: semanticsFrom(parsed.custom, customSemanticSeeds) };
    }

    const legacy = withSharedSemantics(
      mergeSeeds(defaultSeeds.light, parsed.light),
      mergeSeeds(defaultSeeds.dark, parsed.dark),
      appearance,
    ).light;

    if (semanticPreset(legacy) === 'default') {
      return { appearance, preset: 'default', custom: { ...customSemanticSeeds } };
    }

    return { appearance, preset: 'custom', custom: semanticsFrom(legacy, customSemanticSeeds) };
  } catch {
    return fallback;
  }
}

function resolvePalette(
  appearance: Appearance,
  seeds: PaletteSeeds,
  lastGood: GeneratedPalette | null,
): GeneratedPalette {
  return (
    tryGeneratePalette(appearance, seeds) ??
    lastGood ??
    tryGeneratePalette(appearance, defaultSeeds[appearance]) ??
    (() => {
      throw new Error('Default Frosted palette seeds failed to generate.');
    })()
  );
}

function useResolvedPalette(appearance: Appearance, seeds: PaletteSeeds): GeneratedPalette {
  const lastGood = React.useRef<GeneratedPalette | null>(null);
  const palette = React.useMemo(() => resolvePalette(appearance, seeds, lastGood.current), [appearance, seeds]);
  lastGood.current = palette;
  return palette;
}

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
}

function pickerValue(value: string, fallback: string): string {
  return HEX_COLOR.test(value) ? value : HEX_COLOR.test(fallback) ? fallback : '#000000';
}

function CustomPalettePage({ initialAppearance = 'light' }: { initialAppearance?: Appearance }) {
  const [stored, setStored] = React.useState(() => readStored(initialAppearance));
  const [copied, setCopied] = React.useState<CopyTarget | null>(null);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const pageRef = React.useRef<HTMLDivElement | null>(null);
  const copiedTimeout = React.useRef<number | null>(null);

  React.useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === pageRef.current);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  }, [stored]);

  React.useEffect(
    () => () => {
      if (copiedTimeout.current) window.clearTimeout(copiedTimeout.current);
    },
    [],
  );

  const appearance = stored.appearance;
  const lightSeeds = React.useMemo(
    () => visibleSeeds('light', stored.preset, stored.custom),
    [stored.preset, stored.custom],
  );
  const darkSeeds = React.useMemo(
    () => visibleSeeds('dark', stored.preset, stored.custom),
    [stored.preset, stored.custom],
  );
  const seeds = appearance === 'dark' ? darkSeeds : lightSeeds;
  const inputsLocked = stored.preset === 'default';
  const lightPalette = useResolvedPalette('light', lightSeeds);
  const darkPalette = useResolvedPalette('dark', darkSeeds);
  const palette = appearance === 'dark' ? darkPalette : lightPalette;

  function setAppearance(next: string | null) {
    if (next !== 'light' && next !== 'dark') return;
    setStored((current) => ({ ...current, appearance: next }));
  }

  function applySemanticPreset(next: string | null) {
    if (next !== 'default' && next !== 'custom') return;
    setStored((current) => (current.preset === next ? current : { ...current, preset: next }));
  }

  function setSeed(key: SemanticRole, value: string) {
    setStored((current) => {
      if (current.preset === 'default' || current.custom[key] === value) return current;
      return { ...current, custom: { ...current.custom, [key]: value } };
    });
  }

  function resetSeeds() {
    setStored((current) => (current.preset === 'default' ? current : { ...current, preset: 'default' }));
  }

  function copyScale(target: CopyTarget) {
    void copyText(paletteCopyCss(lightPalette, darkPalette, lightSeeds, darkSeeds, target)).then(() => {
      setCopied(target);
      if (copiedTimeout.current) window.clearTimeout(copiedTimeout.current);
      copiedTimeout.current = window.setTimeout(() => setCopied(null), 1500);
    });
  }

  const copiedLabel = copied === 'all' ? 'all scales' : copied;

  function toggleFullscreen() {
    const page = pageRef.current;
    if (!page) return;
    if (document.fullscreenElement === page) {
      void document.exitFullscreen();
      return;
    }
    void page.requestFullscreen();
  }

  return (
    <Theme
      appearance={appearance}
      hasBackground
      accentColor="blue"
      grayColor="gray"
      className="custom-palette"
      style={{ minHeight: '100vh', isolation: 'isolate' }}
    >
      <style>{palettePreviewCss(palette, seeds)}</style>
      <div className="custom-palette-page" data-fullscreen={isFullscreen ? 'true' : undefined}>
        <header className="custom-palette-nav">
          <Heading size="5">Custom palette</Heading>
          <div className="custom-palette-toolbar-actions">
            <SegmentedControl.Root
              className="custom-palette-segment"
              value={stored.preset}
              onValueChange={applySemanticPreset}
            >
              <SegmentedControl.List>
                <SegmentedControl.Trigger value="default">Default</SegmentedControl.Trigger>
                <SegmentedControl.Trigger value="custom">Custom</SegmentedControl.Trigger>
              </SegmentedControl.List>
            </SegmentedControl.Root>
            <SegmentedControl.Root className="custom-palette-segment" value={appearance} onValueChange={setAppearance}>
              <SegmentedControl.List>
                <SegmentedControl.Trigger value="light">
                  <span className="custom-palette-segment-label">
                    <Sun16 />
                    Light
                  </span>
                </SegmentedControl.Trigger>
                <SegmentedControl.Trigger value="dark">
                  <span className="custom-palette-segment-label">
                    <Moon16 />
                    Dark
                  </span>
                </SegmentedControl.Trigger>
              </SegmentedControl.List>
            </SegmentedControl.Root>
            <Tooltip content={isFullscreen ? 'Exit full screen' : 'Full screen'}>
              <IconButton
                variant="surface"
                color="gray"
                aria-label={isFullscreen ? 'Exit full screen' : 'Full screen'}
                onClick={toggleFullscreen}
              >
                {isFullscreen ? <Minimize16 /> : <Expand16 />}
              </IconButton>
            </Tooltip>
            <Button variant="ghost" color="gray" onClick={resetSeeds}>
              Reset
            </Button>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="classic">
                  {copied ? `Copied ${copiedLabel}` : 'Copy CSS'}
                  <ChevronDown12 />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="end">
                {copyTargets.map((target) => (
                  <DropdownMenu.Item key={target.id} onClick={() => copyScale(target.id)}>
                    {target.label}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </header>

        <main className="custom-palette-main">
          <Card size="2">
            <div className="custom-palette-fields">
              {fieldDefs.map((field) => {
                const value = seeds[field.key];
                const fallback = defaultSeeds[appearance][field.key];
                return (
                  <label
                    className="custom-palette-field"
                    data-disabled={inputsLocked ? 'true' : undefined}
                    data-invalid={!inputsLocked && !isCssColor(value) ? 'true' : undefined}
                    key={field.key}
                  >
                    <Text size="1" weight="medium" color="gray">
                      {field.label}
                    </Text>
                    <div className="custom-palette-field-control">
                      <input
                        aria-label={`${field.label} color`}
                        className="custom-palette-color-input"
                        disabled={inputsLocked}
                        type="color"
                        value={pickerValue(value, fallback)}
                        onChange={(event) => setSeed(field.key, event.target.value)}
                      />
                      <TextField.Root size="1" variant="surface" color="gray">
                        <TextField.Input
                          disabled={inputsLocked}
                          value={value}
                          spellCheck={false}
                          onChange={(event) => setSeed(field.key, event.target.value)}
                        />
                      </TextField.Root>
                    </div>
                  </label>
                );
              })}
            </div>
          </Card>

          <Card size="2">
            <section className="custom-palette-scales" aria-label="Generated scales">
              <div className="custom-palette-scale-head">
                <span className="custom-palette-scale-gutter" />
                <div className="custom-palette-legend">
                  {usageRanges.map((range) => (
                    <span key={range.label} style={{ gridColumn: `span ${range.span}` }}>
                      {range.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="custom-palette-scale-head">
                <span className="custom-palette-scale-gutter" />
                <div className="custom-palette-steps" aria-hidden="true">
                  {Array.from({ length: 12 }, (_, index) => (
                    <span key={index}>{index + 1}</span>
                  ))}
                </div>
              </div>
              {semanticRoles.map((role) => (
                <ScaleRow key={role} label={roleLabels[role]} scale={palette.roles[role].accentScale} />
              ))}
            </section>
          </Card>

          <PaletteBento />
        </main>
      </div>
    </Theme>
  );
}

function ScaleRow({ label, scale }: { label: string; scale: readonly string[] }) {
  return (
    <div className="custom-palette-scale-row">
      <Text className="custom-palette-scale-label" size="1" weight="medium" color="gray">
        {label}
      </Text>
      <div className="custom-palette-swatches">
        {scale.map((color, index) => (
          <div
            className="custom-palette-swatch"
            key={`${label}-${index}`}
            style={{ backgroundColor: color }}
            title={`${label} ${index + 1}: ${color}`}
          />
        ))}
      </div>
    </div>
  );
}

const paletteColors = [
  { key: 'accent', label: 'Accent', color: undefined },
  { key: 'danger', label: 'Danger', color: 'danger' },
  { key: 'success', label: 'Success', color: 'success' },
  { key: 'warning', label: 'Warning', color: 'warning' },
  { key: 'info', label: 'Info', color: 'info' },
] as const;

const buttonVariants = ['classic', 'solid', 'soft', 'surface', 'ghost'] as const;
const badgeVariants = ['solid', 'soft', 'surface', 'outline'] as const;

function Cell({ title, area, children }: { title: string; area: string; children: React.ReactNode }) {
  return (
    <Card className={`custom-palette-cell custom-palette-area-${area}`} size="2">
      <div className="custom-palette-stack">
        <Text size="1" color="gray" weight="medium">
          {title}
        </Text>
        {children}
      </div>
    </Card>
  );
}

function PaletteBento() {
  const [highContrast, setHighContrast] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <div className="custom-palette-bento">
      <Cell title="Buttons" area="buttons">
        <div className="custom-palette-row">
          <Text render={<label />} size="2">
            <span className="custom-palette-row">
              <Switch checked={highContrast} size="1" onCheckedChange={(checked) => setHighContrast(checked)} />
              High contrast
            </span>
          </Text>
          <Text render={<label />} size="2">
            <span className="custom-palette-row">
              <Switch checked={disabled} size="1" onCheckedChange={(checked) => setDisabled(checked)} />
              Disabled
            </span>
          </Text>
        </div>
        {buttonVariants.map((variant) => (
          <div className="custom-palette-variant-row" key={variant}>
            {paletteColors.map((swatch) => (
              <Button
                key={swatch.key}
                variant={variant}
                color={swatch.color}
                highContrast={highContrast}
                disabled={disabled}
              >
                {swatch.label}
              </Button>
            ))}
            {paletteColors.map((swatch, index) => (
              <IconButton
                key={`icon-${swatch.key}`}
                className={index === 0 ? 'custom-palette-icon-group' : undefined}
                variant={variant}
                color={swatch.color}
                highContrast={highContrast}
                disabled={disabled}
                aria-label={`${variant} ${swatch.label}`}
              >
                <Plus16 />
              </IconButton>
            ))}
          </div>
        ))}
      </Cell>

      <Cell title="Badges" area="badges">
        {badgeVariants.map((variant) => (
          <div className="custom-palette-variant-row" key={variant}>
            {paletteColors.map((swatch) => (
              <Badge key={swatch.key} variant={variant} color={swatch.color}>
                {swatch.label}
              </Badge>
            ))}
          </div>
        ))}
      </Cell>

      <Cell title="Callouts" area="callouts">
        <Callout.Root>
          <Callout.Icon>
            <InfoCircle16 />
          </Callout.Icon>
          <Callout.Title>Accent</Callout.Title>
          <Callout.Description>Primary message on the accent scale.</Callout.Description>
        </Callout.Root>
        <Callout.Root color="success">
          <Callout.Icon>
            <Checkmark16 />
          </Callout.Icon>
          <Callout.Title>Success</Callout.Title>
          <Callout.Description>Confirmation on the success scale.</Callout.Description>
        </Callout.Root>
        <Callout.Root color="warning">
          <Callout.Icon>
            <InfoCircle16 />
          </Callout.Icon>
          <Callout.Title>Warning</Callout.Title>
          <Callout.Description>Caution on the warning scale.</Callout.Description>
        </Callout.Root>
        <Callout.Root color="danger">
          <Callout.Icon>
            <InfoCircle16 />
          </Callout.Icon>
          <Callout.Title>Danger</Callout.Title>
          <Callout.Description>A blocking problem on the danger scale.</Callout.Description>
        </Callout.Root>
        <Callout.Root color="info">
          <Callout.Icon>
            <InfoCircle16 />
          </Callout.Icon>
          <Callout.Title>Info</Callout.Title>
          <Callout.Description>Extra context on the info scale.</Callout.Description>
        </Callout.Root>
      </Cell>

      <Cell title="Selection" area="selection">
        <div className="custom-palette-choices custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <Text key={swatch.key} render={<label />} size="2">
              <span className="custom-palette-row">
                <Switch defaultChecked color={swatch.color} size="1" />
                {swatch.label}
              </span>
            </Text>
          ))}
        </div>
        <div className="custom-palette-choices custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <RadioGroup.Root key={swatch.key} defaultValue="on" color={swatch.color} size="1">
              <RadioGroup.Item value="on">{swatch.label}</RadioGroup.Item>
            </RadioGroup.Root>
          ))}
        </div>
        <div className="custom-palette-choices custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <Checkbox key={swatch.key} defaultChecked color={swatch.color} size="1">
              <Text size="2">{swatch.label}</Text>
            </Checkbox>
          ))}
        </div>
        <div className="custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <FilterChip key={swatch.key} defaultChecked color={swatch.color}>
              {swatch.label}
            </FilterChip>
          ))}
        </div>
      </Cell>

      <Cell title="Progress" area="progress">
        <div className="custom-palette-stack" style={{ gap: 'var(--space-2)' }}>
          {paletteColors.map((swatch) => (
            <React.Fragment key={swatch.key}>
              <Slider color={swatch.color} defaultValue={swatch.key === 'accent' ? 64 : 40} />
              <Progress color={swatch.color} value={swatch.key === 'accent' ? 64 : 40} />
            </React.Fragment>
          ))}
        </div>
        <div className="custom-palette-row">
          {paletteColors.map((swatch) => (
            <CircularProgress key={swatch.key} value={72} color={swatch.color} />
          ))}
          <Spinner size="2" />
        </div>
      </Cell>

      <Cell title="Avatars" area="avatars">
        <div className="custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <Avatar key={swatch.key} fallback={swatch.label} color={swatch.color} size="4" />
          ))}
        </div>
      </Cell>

      <Cell title="Text" area="text">
        <div className="custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <Heading key={swatch.key} size="4" color={swatch.color}>
              {swatch.label}
            </Heading>
          ))}
        </div>
        <div className="custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <Text key={swatch.key} size="3" color={swatch.color}>
              {swatch.label}
            </Text>
          ))}
        </div>
        <div className="custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <Text key={swatch.key} size="3" weight="medium" highContrast color={swatch.color}>
              {swatch.label}
            </Text>
          ))}
        </div>
        <div className="custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <Link
              key={swatch.key}
              href={`#${swatch.key}`}
              color={swatch.color}
              underline="always"
              onClick={(event) => event.preventDefault()}
            >
              {swatch.label}
            </Link>
          ))}
        </div>
        <div className="custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <Code key={swatch.key} color={swatch.color}>
              {swatch.label}
            </Code>
          ))}
        </div>
        <div className="custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <Text key={swatch.key} size="2" color={swatch.color}>
              <Quote>{swatch.label}</Quote>
            </Text>
          ))}
        </div>
        <div className="custom-palette-variant-row">
          {paletteColors.map((swatch) => (
            <Blockquote key={swatch.key} color={swatch.color}>
              {swatch.label}
            </Blockquote>
          ))}
        </div>
      </Cell>

      <Cell title="Table" area="table">
        <Table.Root size="1" variant="ghost">
          <Table.Table>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>Developer</Table.Cell>
                <Table.Cell>
                  <Badge color="success" variant="soft" size="1">
                    Active
                  </Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                <Table.Cell>Admin</Table.Cell>
                <Table.Cell>
                  <Badge color="warning" variant="soft" size="1">
                    Review
                  </Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                <Table.Cell>Guest</Table.Cell>
                <Table.Cell>
                  <Badge color="info" variant="soft" size="1">
                    Invited
                  </Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Emily Adams</Table.RowHeaderCell>
                <Table.Cell>Owner</Table.Cell>
                <Table.Cell>
                  <Badge color="danger" variant="soft" size="1">
                    Blocked
                  </Badge>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Table>
        </Table.Root>
      </Cell>
    </div>
  );
}

export { CustomPalettePage };
