import * as React from 'react';
import { IconProps } from './types';

export const RotateLeftBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateLeftBold12"
      {...props}
    >
      <path
        d="M6 0c2.462 0 4.575 1.483 5.5 3.6.322.736.5 1.549.5 2.4s-.178 1.664-.5 2.4C10.575 10.517 8.462 12 6 12S1.425 10.517.5 8.4c-.221-.506.01-1.095.516-1.316.506-.221 1.095.01 1.316.516C2.95 9.014 4.362 10 6 10c1.639 0 3.05-.986 3.668-2.4C9.881 7.11 10 6.57 10 6c0-.57-.119-1.111-.332-1.6C9.05 2.986 7.638 2 6 2c-1.013 0-1.939.378-2.645 1H3.5c.552 0 1 .448 1 1s-.448 1-1 1H1c-.552 0-1-.448-1-1V1.5c0-.552.448-1 1-1s1 .448 1 1v.028C3.061.578 4.462 0 6 0z"
        fill={color}
      />
    </svg>
  );
};

RotateLeftBold12.category = 'Arrows';

export default RotateLeftBold12;
