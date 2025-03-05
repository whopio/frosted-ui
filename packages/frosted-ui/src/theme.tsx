'use client';

import { DirectionProvider } from '@radix-ui/react-direction';
import { Slot } from '@radix-ui/react-slot';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import * as React from 'react';
import { getMatchingGrayColor, themePropDefs } from './theme-options';

import type { ThemeOptions } from './theme-options';
import { WithThemeEvents } from './use-theme-events';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

interface ThemeChangeHandlers {
  onAppearanceChange: (appearance: ThemeOptions['appearance']) => void;
  onAccentColorChange: (accentColor: ThemeOptions['accentColor']) => void;
  onGrayColorChange: (grayColor: ThemeOptions['grayColor']) => void;
  onInfoColorChange: (infoColor: ThemeOptions['infoColor']) => void;
  onWarningColorChange: (warningColor: ThemeOptions['warningColor']) => void;
  onSuccessColorChange: (successColor: ThemeOptions['successColor']) => void;
  onDangerColorChange: (dangerColor: ThemeOptions['dangerColor']) => void;
}

interface ThemeContextValue extends ThemeOptions, ThemeChangeHandlers {
  resolvedGrayColor: ThemeOptions['grayColor'];
}
const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined,
);

function useThemeContext() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('`useThemeContext` must be used within a `Theme`');
  }
  return context;
}

interface ThemeProps extends ThemeRootProps {}
const Theme = (props: ThemeProps) => {
  const context = React.useContext(ThemeContext);
  const isRoot = context === undefined;
  if (isRoot) {
    return (
      <TooltipPrimitive.Provider>
        <DirectionProvider dir="ltr">
          <ThemeRoot {...props} />
        </DirectionProvider>
      </TooltipPrimitive.Provider>
    );
  }
  return <ThemeImpl {...props} />;
};
Theme.displayName = 'Theme';

interface ThemeRootProps extends ThemeImplPublicProps {}
const ThemeRoot = (props: ThemeRootProps) => {
  const {
    appearance: appearanceProp = themePropDefs.appearance.default,
    accentColor: accentColorProp = themePropDefs.accentColor.default,
    grayColor: grayColorProp = themePropDefs.grayColor.default,
    infoColor: infoColorProp = themePropDefs.infoColor.default,
    successColor: successColorProp = themePropDefs.successColor.default,
    warningColor: warningColorProp = themePropDefs.warningColor.default,
    dangerColor: dangerColorProp = themePropDefs.dangerColor.default,
    hasBackground = themePropDefs.hasBackground.default,
    ...rootProps
  } = props;
  const [appearance, setAppearance] = React.useState(appearanceProp);
  React.useEffect(() => setAppearance(appearanceProp), [appearanceProp]);

  const [accentColor, setAccentColor] = React.useState(accentColorProp);
  React.useEffect(() => setAccentColor(accentColorProp), [accentColorProp]);

  const [grayColor, setGrayColor] = React.useState(grayColorProp);
  React.useEffect(() => setGrayColor(grayColorProp), [grayColorProp]);

  const [infoColor, setInfoColor] = React.useState(infoColorProp);
  React.useEffect(() => setInfoColor(infoColorProp), [infoColorProp]);

  const [successColor, setSuccessColor] = React.useState(successColorProp);
  React.useEffect(() => setSuccessColor(successColorProp), [successColorProp]);

  const [warningColor, setWarningColor] = React.useState(warningColorProp);
  React.useEffect(() => setWarningColor(warningColorProp), [warningColorProp]);

  const [dangerColor, setDangerColor] = React.useState(dangerColorProp);
  React.useEffect(() => setDangerColor(dangerColorProp), [dangerColorProp]);

  // Initial appearance on page load when `appearance` is explicitly set to `light` or `dark`
  const ExplicitRootAppearanceScript = React.memo(
    ({
      appearance,
    }: {
      appearance: Exclude<ThemeOptions['appearance'], 'inherit'>;
    }) => (
      <script
        dangerouslySetInnerHTML={{
          __html: `!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='${appearance}';c.add('${appearance}');}catch(e){}})();`,
        }}
      ></script>
    ),
    () => true, // Never re-render
  );
  ExplicitRootAppearanceScript.displayName = 'ExplicitRootAppearanceScript';

  // Client-side only changes when `appearance` prop is changed while developing
  React.useEffect(
    () => updateThemeAppearanceClass(appearanceProp),
    [appearanceProp],
  );

  const resolvedGrayColor =
    grayColor === 'auto' ? getMatchingGrayColor(accentColor) : grayColor;

  return (
    <>
      {appearance !== 'inherit' && (
        <>
          <ExplicitRootAppearanceScript appearance={appearance} />
          <SyncRootElementAppearance appearance={appearance} />
        </>
      )}

      {hasBackground && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
:root, .light, .light-theme { --color-page-background: white; }
.dark, .dark-theme { --color-page-background: var(--${resolvedGrayColor}-1); }
body { background-color: var(--color-page-background); }
`,
          }}
        />
      )}

      <ThemeImpl
        {...rootProps}
        isRoot
        hasBackground={hasBackground}
        //
        appearance={appearance}
        accentColor={accentColor}
        grayColor={grayColor}
        infoColor={infoColor}
        successColor={successColor}
        warningColor={warningColor}
        dangerColor={dangerColor}
        //
        onAppearanceChange={setAppearance}
        onAccentColorChange={setAccentColor}
        onGrayColorChange={setGrayColor}
        onInfoColorChange={setInfoColor}
        onSuccessColorChange={setSuccessColor}
        onWarningColorChange={setWarningColor}
        onDangerColorChange={setDangerColor}
      />
    </>
  );
};
ThemeRoot.displayName = 'ThemeRoot';

function SyncRootElementAppearance({
  appearance,
}: {
  appearance: Exclude<ThemeOptions['appearance'], 'inherit'>;
}) {
  React.useEffect(() => {
    try {
      document.documentElement.style.colorScheme = appearance;
      const cl = document.documentElement.classList;
      const opposite = appearance === 'light' ? 'dark' : 'light';
      if (cl.contains(opposite)) cl.remove(opposite);
      if (!cl.contains(appearance)) cl.add(appearance);
    } catch {
      /* ignore errors */
    }
  }, [appearance]);
  return null;
}

interface ThemeImplProps extends ThemeImplPublicProps, ThemeImplPrivateProps {}
interface ThemeImplPublicProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'dir'>,
    Partial<ThemeOptions> {
  asChild?: boolean;
  isRoot?: boolean;
  hasBackground?: boolean;
}
interface ThemeImplPrivateProps extends Partial<ThemeChangeHandlers> {}
const ThemeImpl = (props: ThemeImplProps) => {
  const context = React.useContext(ThemeContext);
  const {
    asChild,
    isRoot,
    hasBackground,
    //
    appearance = context?.appearance ?? themePropDefs.appearance.default,
    accentColor = context?.accentColor ?? themePropDefs.accentColor.default,
    grayColor = context?.resolvedGrayColor ?? themePropDefs.grayColor.default,
    dangerColor = context?.dangerColor ?? themePropDefs.dangerColor.default,
    warningColor = context?.warningColor ?? themePropDefs.warningColor.default,
    successColor = context?.successColor ?? themePropDefs.successColor.default,
    infoColor = context?.infoColor ?? themePropDefs.infoColor.default,
    //
    onAppearanceChange = noop,
    onAccentColorChange = noop,
    onGrayColorChange = noop,
    onInfoColorChange = noop,
    onSuccessColorChange = noop,
    onWarningColorChange = noop,
    onDangerColorChange = noop,
    //
    ...themeProps
  } = props;
  const Comp = asChild ? Slot : 'div';
  const resolvedGrayColor =
    grayColor === 'auto' ? getMatchingGrayColor(accentColor) : grayColor;
  const isExplicitAppearance =
    props.appearance !== undefined && props.appearance !== 'inherit';
  const isExplicitGrayColor = props.grayColor !== undefined;
  const shouldHaveBackground =
    !isRoot &&
    (hasBackground === true ||
      (hasBackground !== false &&
        (isExplicitAppearance || isExplicitGrayColor)));
  return (
    <ThemeContext.Provider
      value={React.useMemo(
        () => ({
          appearance,
          accentColor,
          dangerColor,
          warningColor,
          successColor,
          infoColor,
          grayColor,
          resolvedGrayColor,
          //
          onAppearanceChange,
          onAccentColorChange,
          onGrayColorChange,
          onInfoColorChange,
          onSuccessColorChange,
          onWarningColorChange,
          onDangerColorChange,
        }),
        [
          appearance,
          accentColor,
          dangerColor,
          warningColor,
          successColor,
          infoColor,
          grayColor,
          resolvedGrayColor,
          //
          onAppearanceChange,
          onAccentColorChange,
          onGrayColorChange,
          onInfoColorChange,
          onSuccessColorChange,
          onWarningColorChange,
          onDangerColorChange,
        ],
      )}
    >
      {isRoot && <WithThemeEvents />}
      <Comp
        data-is-root-theme={isRoot ? 'true' : 'false'}
        data-accent-color={accentColor}
        data-danger-color={dangerColor}
        data-warning-color={warningColor}
        data-success-color={successColor}
        data-info-color={infoColor}
        data-gray-color={resolvedGrayColor}
        // for nested `Theme` background
        data-has-background={shouldHaveBackground ? 'true' : 'false'}
        {...themeProps}
        className={classNames(
          'frosted-ui',
          {
            // Only apply theme class to nested `Theme` sections.
            //
            // If it's the root `Theme`, we either rely on
            // - something else setting the theme class when root `appearance` is `inherit`
            // - our script setting it when root `appearance` is explicit
            light: !isRoot && appearance === 'light',
            dark: !isRoot && appearance === 'dark',
          },
          themeProps.className,
        )}
      />
    </ThemeContext.Provider>
  );
};
ThemeImpl.displayName = 'ThemeImpl';

function updateThemeAppearanceClass(appearance: ThemeOptions['appearance']) {
  if (appearance === 'inherit') return;
  const root = document.documentElement;

  if (
    root.classList.contains('light-theme') ||
    root.classList.contains('dark-theme')
  ) {
    root.classList.remove('light-theme', 'dark-theme');
    root.style.colorScheme = appearance;
    root.classList.add(`${appearance}-theme`);
  }

  if (root.classList.contains('light') || root.classList.contains('dark')) {
    root.classList.remove('light', 'dark');
    root.style.colorScheme = appearance;
    root.classList.add(appearance);
  }
}

export { Theme, updateThemeAppearanceClass, useThemeContext };
export type { ThemeProps };
