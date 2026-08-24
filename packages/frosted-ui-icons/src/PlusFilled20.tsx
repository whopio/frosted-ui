import * as React from 'react';
import { IconProps } from './types';

export const PlusFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusFilled20"
      {...props}
    >
      <path
        d="M10 1c.69 0 1.25.56 1.25 1.25v6.5h6.5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-6.5v6.5c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-6.5h-6.5C1.56 11.25 1 10.69 1 10s.56-1.25 1.25-1.25h6.5v-6.5C8.75 1.56 9.31 1 10 1z"
        fill={color}
      />
    </svg>
  );
};

PlusFilled20.category = 'Interface General';

export default PlusFilled20;
