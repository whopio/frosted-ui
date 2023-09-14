'use client';

import { useEffect, useState } from 'react';

export const setTheme = (theme: string): void => {
  resetTheme();
  document.documentElement.classList.add(theme);
};

export const getTheme = (): string => {
  return document?.documentElement?.classList[0]?.toString();
};

export const resetTheme = (): void => {
  document.documentElement.classList.forEach((token) => {
    document.documentElement.classList.remove(token);
  });
};

export const useTheme = () => {
  const [theme, _setTheme] = useState('default');

  const useThemeCallback: MutationCallback = (records) => {
    const themeRecords = records.filter((r) => r.attributeName === 'class');
    if (!themeRecords.length) return;

    _setTheme(getTheme());
  };

  useEffect(() => {
    // Create the observer
    const observer = new MutationObserver(useThemeCallback);

    // Observe the document element
    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return theme;
};
