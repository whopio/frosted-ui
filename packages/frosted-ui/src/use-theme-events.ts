'use client';

import React, { FC, useEffect } from 'react';
import { useThemeContext } from './theme';

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
      console.log('GOT SET THEME EVENT', e);
      if (e instanceof CustomEvent) {
        const {
          detail: {
            appearance,
            accentColor,
            grayColor,
            infoColor,
            successColor,
            warningColor,
            dangerColor,
          },
        } = e;
        if (appearance) {
          console.log('setting appearance to', appearance);
          onAppearanceChange(appearance);
        }
        if (accentColor) onAccentColorChange(accentColor);
        if (grayColor) onGrayColorChange(grayColor);
        if (infoColor) onInfoColorChange(infoColor);
        if (successColor) onSuccessColorChange(successColor);
        if (warningColor) onWarningColorChange(warningColor);
        if (dangerColor) onDangerColorChange(dangerColor);
      }
    };
    document.documentElement.addEventListener('frosted-ui:set-theme', listener);
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

  console.log({ appearance });

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

  useEffect(() => {
    onAppearanceChange('light');
  }, []);
}

export const WithThemeEvents: FC = ({}) => {
  useThemeEvents();
  return null;
};
