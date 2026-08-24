import * as React from 'react';
import { IconProps } from './types';

export const PlusBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusBoldFilled12"
      {...props}
    >
      <path
        d="M6 0c.69 0 1.25.56 1.25 1.25v3.5h3.5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-3.5v3.5C7.25 11.44 6.69 12 6 12s-1.25-.56-1.25-1.25v-3.5h-3.5C.56 7.25 0 6.69 0 6s.56-1.25 1.25-1.25h3.5v-3.5C4.75.56 5.31 0 6 0z"
        fill={color}
      />
    </svg>
  );
};

PlusBoldFilled12.category = 'Interface General';

export default PlusBoldFilled12;
