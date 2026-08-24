import * as React from 'react';
import { IconProps } from './types';

export const Journey24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Journey24"
      {...props}
    >
      <path
        d="M19.5 1C21.433 1 23 2.567 23 4.5S21.433 8 19.5 8c-1.675 0-3.075-1.178-3.418-2.75H5.5c-1.657 0-3 1.343-3 3s1.343 3 3 3h13.001c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5H7.918C7.575 21.822 6.175 23 4.5 23 2.567 23 1 21.433 1 19.5S2.567 16 4.5 16c1.675 0 3.075 1.178 3.418 2.75h10.583c1.657 0 3-1.343 3-3s-1.343-3-3-3H5.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5h10.582C16.425 2.178 17.825 1 19.5 1zm-15 16.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm15-15c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"
        fill={color}
      />
    </svg>
  );
};

Journey24.category = 'Interface General';

export default Journey24;
