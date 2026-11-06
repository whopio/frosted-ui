import {
  Checkmark16,
  ChevronDown12,
  Code16,
  Copy16,
  Grid16,
  Heart16,
  InfoCircle16,
  MagnifyingGlass16,
  Moon16,
  Plus16,
  Square16,
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
  DropdownMenu,
  Heading,
  HoverCard,
  IconButton,
  Link,
  Progress,
  SegmentedControl,
  Separator,
  Slider,
  Switch,
  Tabs,
  Text,
  TextField,
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

const STORAGE_KEY = 'frosted-ui/custom-palette/v1';
const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;

const fieldDefs: { key: keyof PaletteSeeds; label: string }[] = [
  { key: 'accent', label: 'Accent' },
  { key: 'danger', label: 'Danger' },
  { key: 'success', label: 'Success' },
  { key: 'warning', label: 'Warning' },
  { key: 'info', label: 'Info' },
  { key: 'gray', label: 'Gray' },
  { key: 'background', label: 'Background' },
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

const roleLabels: Record<SemanticRole | 'gray', string> = {
  accent: 'Accent',
  danger: 'Danger',
  success: 'Success',
  warning: 'Warning',
  info: 'Info',
  gray: 'Gray',
};

type StoredPalette = {
  appearance: Appearance;
  light: PaletteSeeds;
  dark: PaletteSeeds;
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

function readStored(initialAppearance: Appearance): StoredPalette {
  const fallback: StoredPalette = {
    appearance: initialAppearance,
    light: defaultSeeds.light,
    dark: defaultSeeds.dark,
  };

  if (typeof window === 'undefined') return fallback;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<StoredPalette>;
    return {
      appearance: parsed.appearance === 'dark' || parsed.appearance === 'light' ? parsed.appearance : initialAppearance,
      light: mergeSeeds(defaultSeeds.light, parsed.light),
      dark: mergeSeeds(defaultSeeds.dark, parsed.dark),
    };
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
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
  const [copied, setCopied] = React.useState<CopyTarget | null>(null);
  const copiedTimeout = React.useRef<number | null>(null);

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
  const seeds = stored[appearance];
  const lightPalette = useResolvedPalette('light', stored.light);
  const darkPalette = useResolvedPalette('dark', stored.dark);
  const palette = appearance === 'dark' ? darkPalette : lightPalette;

  function setAppearance(next: string | null) {
    if (next !== 'light' && next !== 'dark') return;
    setStored((current) => ({ ...current, appearance: next }));
  }

  function setSeed(key: keyof PaletteSeeds, value: string) {
    setStored((current) => ({
      ...current,
      [current.appearance]: {
        ...current[current.appearance],
        [key]: value,
      },
    }));
  }

  function resetSeeds() {
    setStored((current) => ({
      ...current,
      [current.appearance]: defaultSeeds[current.appearance],
    }));
  }

  function copyScale(target: CopyTarget) {
    void copyText(paletteCopyCss(palette, target)).then(() => {
      setCopied(target);
      if (copiedTimeout.current) window.clearTimeout(copiedTimeout.current);
      copiedTimeout.current = window.setTimeout(() => setCopied(null), 1500);
    });
  }

  const copiedLabel = copied === 'all' ? 'all scales' : copied;

  return (
    <Theme
      appearance={appearance}
      hasBackground
      accentColor="blue"
      grayColor="gray"
      className="custom-palette"
      style={{ minHeight: '100vh' }}
    >
      <style>{palettePreviewCss(palette)}</style>
      <div className="custom-palette-page" ref={setContainer}>
        <div className="custom-palette-frame">
          <header className="custom-palette-stack">
            <div className="custom-palette-toolbar">
              <div className="custom-palette-stack" style={{ gap: 'var(--space-2)' }}>
                <Heading size="6">Create a custom palette</Heading>
                <Text color="gray" size="2">
                  Generate accent, danger, success, warning, and info scales, then preview them on Frosted UI.
                </Text>
              </div>
              <div className="custom-palette-toolbar-actions">
                <SegmentedControl.Root value={appearance} onValueChange={setAppearance}>
                  <SegmentedControl.List>
                    <SegmentedControl.Trigger value="light">
                      <span className="custom-palette-row">
                        <Sun16 />
                        Light
                      </span>
                    </SegmentedControl.Trigger>
                    <SegmentedControl.Trigger value="dark">
                      <span className="custom-palette-row">
                        <Moon16 />
                        Dark
                      </span>
                    </SegmentedControl.Trigger>
                  </SegmentedControl.List>
                </SegmentedControl.Root>
                <Button variant="ghost" onClick={resetSeeds}>
                  Reset
                </Button>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="surface" style={{ gap: 6 }}>
                      {copied ? `Copied ${copiedLabel}` : 'Copy CSS'}
                      <ChevronDown12 />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="end" container={container ?? undefined}>
                    {copyTargets.map((target) => (
                      <DropdownMenu.Item key={target.id} onClick={() => copyScale(target.id)}>
                        {target.label}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </div>
            </div>

            <div className="custom-palette-fields">
              {fieldDefs.map((field) => {
                const value = seeds[field.key];
                const fallback = defaultSeeds[appearance][field.key];
                return (
                  <label
                    className="custom-palette-field"
                    data-invalid={isCssColor(value) ? undefined : 'true'}
                    key={field.key}
                  >
                    <Text size="1" weight="medium" color="gray">
                      {field.label}
                    </Text>
                    <div className="custom-palette-field-control">
                      <input
                        aria-label={`${field.label} color`}
                        className="custom-palette-color-input"
                        type="color"
                        value={pickerValue(value, fallback)}
                        onChange={(event) => setSeed(field.key, event.target.value)}
                      />
                      <TextField.Root size="1" variant="surface" color="gray">
                        <TextField.Input
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
          </header>

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
            <ScaleRow label={roleLabels.gray} scale={palette.roles.accent.grayScale} />
          </section>

          <PalettePreview container={container} />
        </div>
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

const todoItems = [
  { id: 'comment', label: 'Respond to comment #384 from Travis', done: false },
  { id: 'invite', label: 'Invite Acme Co. team to Slack', done: false },
  { id: 'report', label: 'Create a report requested by Danilo', done: false },
  { id: 'finances', label: 'Close Q2 finances', done: true },
  { id: 'invoice', label: 'Review invoice #3456', done: true },
];

function PalettePreview({ container }: { container: HTMLElement | null }) {
  const [todos, setTodos] = React.useState(todoItems);

  return (
    <div className="custom-palette-preview">
      <div className="custom-palette-stack">
        <div className="custom-palette-search">
          <TextField.Root size="2" variant="surface" color="gray">
            <TextField.Slot>
              <MagnifyingGlass16 />
            </TextField.Slot>
            <TextField.Input placeholder="Search" />
          </TextField.Root>
          <Button variant="classic">Submit</Button>
        </div>

        <div className="custom-palette-row">
          <IconButton variant="soft" aria-label="Box">
            <Square16 />
          </IconButton>
          <IconButton variant="soft" aria-label="Grid">
            <Grid16 />
          </IconButton>
          <IconButton variant="soft" aria-label="Code">
            <Code16 />
          </IconButton>
          <IconButton variant="soft" aria-label="Add">
            <Plus16 />
          </IconButton>
        </div>

        <div className="custom-palette-row">
          <Badge variant="solid">Fully featured</Badge>
          <Badge variant="soft">Built with Frosted</Badge>
          <Badge variant="surface" color="success">
            Open source
          </Badge>
          <Badge variant="outline" color="info">
            Info
          </Badge>
          <Badge variant="solid" color="warning">
            Warning
          </Badge>
          <Badge variant="solid" color="danger">
            Danger
          </Badge>
        </div>

        <Callout.Root>
          <Callout.Icon>
            <InfoCircle16 />
          </Callout.Icon>
          <Callout.Title>Please upgrade to the new version.</Callout.Title>
          <Callout.Description>Your workspace will be upgraded tonight.</Callout.Description>
          <Callout.Actions>
            <Callout.Action>Upgrade</Callout.Action>
            <Callout.Action variant="secondary">Later</Callout.Action>
          </Callout.Actions>
        </Callout.Root>

        <Callout.Root color="success">
          <Callout.Icon>
            <Checkmark16 />
          </Callout.Icon>
          <Callout.Title>Payment received</Callout.Title>
          <Callout.Description>The payout was deposited this morning.</Callout.Description>
        </Callout.Root>

        <Callout.Root color="warning">
          <Callout.Icon>
            <InfoCircle16 />
          </Callout.Icon>
          <Callout.Title>Trial ends in 3 days</Callout.Title>
          <Callout.Description>Upgrade to keep analytics and webhooks.</Callout.Description>
        </Callout.Root>

        <Callout.Root color="danger">
          <Callout.Icon>
            <InfoCircle16 />
          </Callout.Icon>
          <Callout.Title>Card was declined</Callout.Title>
          <Callout.Description>Update the card to retry the charge.</Callout.Description>
        </Callout.Root>

        <Callout.Root color="info">
          <Callout.Icon>
            <InfoCircle16 />
          </Callout.Icon>
          <Callout.Title>A new version is available</Callout.Title>
          <Callout.Description>Review the changelog before you update.</Callout.Description>
        </Callout.Root>

        <Tabs.Root defaultValue="colors">
          <Tabs.List>
            <Tabs.Trigger value="themes">Themes</Tabs.Trigger>
            <Tabs.Trigger value="primitives">Primitives</Tabs.Trigger>
            <Tabs.Trigger value="icons">Icons</Tabs.Trigger>
            <Tabs.Trigger value="colors">Colors</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>

        <div className="custom-palette-row">
          <Text render={<label />} size="2">
            <span className="custom-palette-row">
              <Switch defaultChecked />
              Alerts
            </span>
          </Text>
          <Text render={<label />} size="2">
            <span className="custom-palette-row">
              <Switch defaultChecked highContrast />
              High contrast
            </span>
          </Text>
        </div>

        <div className="custom-palette-stack" style={{ gap: 'var(--space-2)' }}>
          <Text size="1" color="gray" weight="medium">
            Accent
          </Text>
          <Slider className="custom-palette-slider" defaultValue={64} />
          <Progress value={72} />
          <Text size="1" color="gray" weight="medium">
            Success
          </Text>
          <Slider className="custom-palette-slider" color="success" defaultValue={40} />
          <Progress color="success" value={40} />
        </div>

        <div className="custom-palette-stack" style={{ gap: 'var(--space-2)' }}>
          {todos.map((item) => (
            <Checkbox
              key={item.id}
              checked={item.done}
              onCheckedChange={(checked) => {
                setTodos((current) =>
                  current.map((candidate) =>
                    candidate.id === item.id ? { ...candidate, done: checked === true } : candidate,
                  ),
                );
              }}
            >
              <Text
                size="2"
                color={item.done ? 'gray' : undefined}
                style={{ textDecoration: item.done ? 'line-through' : undefined }}
              >
                {item.label}
              </Text>
            </Checkbox>
          ))}
        </div>
      </div>

      <div className="custom-palette-stack">
        <Blockquote>
          Susan Kare is an American{' '}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link href="#graphic-designer" underline="always" onClick={(event) => event.preventDefault()}>
                graphic designer
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content container={container ?? undefined} style={{ maxWidth: 280 }}>
              <Text size="2">
                Graphic design projects visual communication, from icons and type to the layout of a product.
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>{' '}
          and artist, who contributed interface elements and typefaces for the first Apple Macintosh.
        </Blockquote>

        <Card size="2">
          <div className="custom-palette-person">
            <div className="custom-palette-person-id">
              <Avatar fallback="Emily Adams" size="3" />
              <div>
                <Text size="2" weight="medium">
                  Emily Adams
                </Text>
                <Text size="1" color="gray">
                  emily.adams@example.com
                </Text>
              </div>
            </div>
            <div className="custom-palette-row">
              <IconButton variant="ghost" color="danger" aria-label="Favorite Emily Adams">
                <Heart16 />
              </IconButton>
              <IconButton variant="soft" aria-label="Copy Emily Adams email">
                <Copy16 />
              </IconButton>
            </div>
          </div>
        </Card>

        <Card size="2">
          <div className="custom-palette-person">
            <div className="custom-palette-person-id">
              <Avatar fallback="Danilo Sousa" size="3" color="info" />
              <div>
                <Text size="2" weight="medium">
                  Danilo Sousa
                </Text>
                <Text size="1" color="gray">
                  danilo@example.com
                </Text>
              </div>
            </div>
            <div className="custom-palette-row">
              <IconButton variant="ghost" color="danger" aria-label="Favorite Danilo Sousa">
                <Heart16 />
              </IconButton>
              <IconButton variant="soft" color="success" aria-label="Copy Danilo Sousa email">
                <Copy16 />
              </IconButton>
            </div>
          </div>
        </Card>

        <div className="custom-palette-row">
          <Button variant="classic">Classic</Button>
          <Button variant="solid">Solid</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="surface">Surface</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="classic" highContrast>
            High contrast
          </Button>
        </div>

        <div className="custom-palette-row">
          <Button variant="classic" color="danger">
            Danger
          </Button>
          <Button variant="classic" color="warning">
            Warning
          </Button>
          <Button variant="classic" color="success">
            Success
          </Button>
          <Button variant="classic" color="info">
            Info
          </Button>
        </div>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="surface" style={{ gap: 6 }}>
              Actions
              <ChevronDown12 />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content container={container ?? undefined}>
            <DropdownMenu.Item shortcut="⌘ C">Copy</DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘ V">Paste</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>Layers</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Move up</DropdownMenu.Item>
                <DropdownMenu.Item>Move down</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
            <DropdownMenu.Separator />
            <DropdownMenu.Item color="danger">Delete</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <Card size="3">
          <div className="custom-palette-stack">
            <Heading size="4">Sign up</Heading>
            <Text render={<label htmlFor="palette-name" />} size="2" weight="medium">
              Full name
            </Text>
            <TextField.Root>
              <TextField.Input id="palette-name" placeholder="Emily Adams" autoComplete="name" />
            </TextField.Root>
            <Text render={<label htmlFor="palette-email" />} size="2" weight="medium">
              Email
            </Text>
            <TextField.Root>
              <TextField.Input id="palette-email" placeholder="emily@example.com" type="email" autoComplete="email" />
            </TextField.Root>
            <Text render={<label htmlFor="palette-password" />} size="2" weight="medium">
              Password
            </Text>
            <TextField.Root>
              <TextField.Input id="palette-password" placeholder="Enter your password" type="password" />
            </TextField.Root>
            <Button variant="classic">Create account</Button>
            <div className="custom-palette-row">
              <Separator size="4" style={{ flex: 1 }} />
              <Text size="1" color="gray">
                OR
              </Text>
              <Separator size="4" style={{ flex: 1 }} />
            </div>
            <Button variant="surface">Continue with GitHub</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export { CustomPalettePage };
