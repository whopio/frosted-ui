import * as React from 'react';
import { IconProps } from './types';

export const PlusFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusFilled16"
      {...props}
    >
      <path
        d="M8 1c.69 0 1.25.56 1.25 1.25v4.5h4.5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-4.5v4.5C9.25 14.44 8.69 15 8 15s-1.25-.56-1.25-1.25v-4.5h-4.5C1.56 9.25 1 8.69 1 8s.56-1.25 1.25-1.25h4.5v-4.5C6.75 1.56 7.31 1 8 1z"
        fill={color}
      />
    </svg>
  );
};

PlusFilled16.category = 'Interface General';

export default PlusFilled16;
