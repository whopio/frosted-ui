'use client';

import React, { FC, useEffect } from 'react';
import { useThemeContext } from './theme';
import { ThemeOptions, themePropDefs } from './theme-options';

function validateThemeColor<
  K extends Exclude<keyof typeof themePropDefs, 'hasBackground'>,
>(
  key: K,
  value: unknown,
): value is (typeof themePropDefs)[K]['values'][number] {
  const validValues = themePropDefs[key].values;
  return validValues.includes(value as never);
}

function validateThemeOptions(detail: unknown) {
  if (typeof detail !== 'object' || !detail) return {};

  const ret: Partial<ThemeOptions> = {};

  const keysToCheck: readonly (keyof ThemeOptions)[] = [
    'accentColor',
    'appearance',
    'dangerColor',
    'grayColor',
    'infoColor',
    'successColor',
    'warningColor',
  ];

  for (const key of keysToCheck) {
    if (!(key in detail)) continue;
    if (!validateThemeColor(key, detail[key])) {
      console.warn(`Invalid value for ${key}: ${detail[key]}`);
      continue;
    }
    ret[key] = detail[key];
  }

  return ret;
}

export function useThemeEvents() {
  const {
    accentColor,
    appearance,
    dangerColor,
    grayColor,
    infoColor,
    successColor,
    warningColor,
    onAccentColorChange,
    onAppearanceChange,
    onDangerColorChange,
    onGrayColorChange,
    onInfoColorChange,
    onSuccessColorChange,
    onWarningColorChange,
  } = useThemeContext();

  // Emit an event when the component is mounted.
  // Listen for theme changes from the outside.
  useEffect(() => {
    const listener = (e: Event) => {
      if (e instanceof CustomEvent) {
        const d = validateThemeOptions(e.detail);
        if (d.appearance) onAppearanceChange(d.appearance);
        if (d.accentColor) onAccentColorChange(d.accentColor);
        if (d.grayColor) onGrayColorChange(d.grayColor);
        if (d.infoColor) onInfoColorChange(d.infoColor);
        if (d.successColor) onSuccessColorChange(d.successColor);
        if (d.warningColor) onWarningColorChange(d.warningColor);
        if (d.dangerColor) onDangerColorChange(d.dangerColor);
      }
    };
    document.documentElement.addEventListener('frosted-ui:set-theme', listener);

    // Let external code that the component is mounted.
    const event = new CustomEvent('frosted-ui:mounted');
    document.documentElement.dispatchEvent(event);

    return () => {
      document.documentElement.removeEventListener(
        'frosted-ui:set-theme',
        listener,
      );
      const event = new CustomEvent('frosted-ui:unmounted');
      document.documentElement.dispatchEvent(event);
    };
  }, []);

  // Emit an event when the theme is changed.
  React.useEffect(() => {
    const event = new CustomEvent('frosted-ui:on-theme-change', {
      detail: {
        appearance,
        accentColor,
        grayColor,
        infoColor,
        successColor,
        warningColor,
        dangerColor,
      },
    });
    document.documentElement.dispatchEvent(event);
  }, [
    appearance,
    accentColor,
    grayColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
  ]);
}

export const WithThemeEvents: FC = () => {
  useThemeEvents();
  return null;
};
