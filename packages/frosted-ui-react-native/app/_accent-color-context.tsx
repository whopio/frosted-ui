import type { AccentColor } from '@frosted-ui/react-native';
import * as React from 'react';

type AccentColorContextValue = {
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
};

export const AccentColorContext = React.createContext<AccentColorContextValue>({
  accentColor: 'blue',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAccentColor: () => {},
});

export function useAccentColorConfig() {
  return React.useContext(AccentColorContext);
}
