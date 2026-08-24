import * as React from 'react';
import { IconProps } from './types';

export const RotateLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateLeftBold16"
      {...props}
    >
      <path
        d="M8 .5c3.338 0 6.165 2.18 7.138 5.192.235.729.362 1.505.362 2.308 0 .803-.127 1.58-.362 2.308-.973 3.011-3.8 5.192-7.138 5.192S1.835 13.32.862 10.308c-.17-.526.119-1.09.644-1.26.525-.169 1.089.119 1.259.644C3.479 11.902 5.555 13.5 8 13.5c2.446 0 4.521-1.597 5.235-3.808.172-.531.265-1.1.265-1.692 0-.592-.093-1.16-.265-1.692C12.521 4.098 10.445 2.5 8 2.5c-1.93 0-3.628.995-4.61 2.5H4.5c.552 0 1 .448 1 1s-.448 1-1 1h-3c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1 .521 0 .948.398.995.907C3.865 1.427 5.823.5 8 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateLeftBold16.category = 'Arrows';

export default RotateLeftBold16;
