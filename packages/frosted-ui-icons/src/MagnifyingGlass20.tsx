import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MagnifyingGlass20"
      {...props}
    >
      <path
        d="M8.5 1C12.642 1 16 4.358 16 8.5c0 1.8-.635 3.453-1.693 4.746l4.472 4.473c.293.293.293.767 0 1.06-.293.293-.767.293-1.06 0l-4.473-4.472C11.953 15.365 10.301 16 8.5 16 4.358 16 1 12.642 1 8.5 1 4.358 4.358 1 8.5 1zm0 1.5c-3.313 0-6 2.687-6 6 0 3.314 2.686 6 6 6s6-2.686 6-6-2.686-6-6-6z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlass20.category = 'Interface General';

export default MagnifyingGlass20;
