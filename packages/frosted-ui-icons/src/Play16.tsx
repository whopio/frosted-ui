import * as React from 'react';
import { IconProps } from './types';

export const Play16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.75 12.6334V3.36652C2.75 2.10358 4.14462 1.33851 5.20974 2.01714L12.4821 6.65059C13.4691 7.27945 13.4691 8.72052 12.4821 9.34937L5.20973 13.9828C4.14461 14.6614 2.75 13.8963 2.75 12.6334Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Play16.category = 'Sound & Music';

export default Play16;
