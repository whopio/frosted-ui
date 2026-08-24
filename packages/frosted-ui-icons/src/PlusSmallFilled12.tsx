import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusSmallFilled12"
      {...props}
    >
      <path
        d="M6 2c.69 0 1.25.56 1.25 1.25v1.5h1.5C9.44 4.75 10 5.31 10 6s-.56 1.25-1.25 1.25h-1.5v1.5C7.25 9.44 6.69 10 6 10s-1.25-.56-1.25-1.25v-1.5h-1.5C2.56 7.25 2 6.69 2 6s.56-1.25 1.25-1.25h1.5v-1.5C4.75 2.56 5.31 2 6 2z"
        fill={color}
      />
    </svg>
  );
};

PlusSmallFilled12.category = 'Interface General';

export default PlusSmallFilled12;
