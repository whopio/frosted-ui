import * as React from 'react';
import { IconProps } from './types';

export const Subtract24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22.25 11.25C22.6641 11.2502 23 11.5859 23 12C23 12.4141 22.6641 12.7498 22.25 12.75H1.75C1.33593 12.7498 1 12.4141 1 12C1 11.5859 1.33593 11.2502 1.75 11.25H22.25Z"
        fill={color}
      />
    </svg>
  );
};

Subtract24.category = 'Product Icons';

export default Subtract24;
