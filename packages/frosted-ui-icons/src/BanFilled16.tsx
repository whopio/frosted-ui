import * as React from 'react';
import { IconProps } from './types';

export const BanFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BanFilled16"
      {...props}
    >
      <path
        d="M13.806 3.254C14.864 4.547 15.5 6.199 15.5 8c0 4.142-3.358 7.5-7.5 7.5-1.801 0-3.453-.636-4.746-1.694L13.806 3.254zM8 .5c1.8 0 3.452.636 4.745 1.693L2.193 12.745C1.136 11.452.5 9.801.5 8 .5 3.858 3.858.5 8 .5z"
        fill={color}
      />
    </svg>
  );
};

BanFilled16.category = 'Interface General';

export default BanFilled16;
