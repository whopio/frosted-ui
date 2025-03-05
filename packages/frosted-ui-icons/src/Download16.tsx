import * as React from 'react';
import { IconProps } from './types';

export const Download16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.8333 8.83331L8.47136 11.1952C8.21103 11.4556 7.78889 11.4556 7.52856 11.1952L5.16663 8.83331M7.99996 1.83331V11.1666M12.8333 14.1666H3.16663"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Download16;
