import * as React from 'react';
import { IconProps } from './types';

export const BountiesBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BountiesBold32"
      {...props}
    >
      <path
        d="M16 .5C24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5zm0 3C9.096 3.5 3.5 9.096 3.5 16S9.096 28.5 16 28.5 28.5 22.904 28.5 16 22.904 3.5 16 3.5zm0 3.4c5.025 0 9.1 4.075 9.1 9.1 0 5.025-4.075 9.1-9.1 9.1-5.025 0-9.1-4.075-9.1-9.1 0-5.025 4.075-9.1 9.1-9.1zm0 3c-3.369 0-6.1 2.731-6.1 6.1 0 3.369 2.731 6.1 6.1 6.1 3.369 0 6.1-2.731 6.1-6.1 0-3.369-2.731-6.1-6.1-6.1zm.275 3.413c1.362.138 2.425 1.289 2.425 2.687 0 1.491-1.209 2.7-2.7 2.7-1.398 0-2.549-1.063-2.687-2.425L13.3 16l.013-.276c.139-1.362 1.29-2.424 2.687-2.424l.275.013z"
        fill={color}
      />
    </svg>
  );
};

BountiesBold32.category = 'Interface General';

export default BountiesBold32;
