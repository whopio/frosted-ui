import * as React from 'react';
import { IconProps } from './types';

export const TrashFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TrashFilled12"
      {...props}
    >
      <path
        d="M9.908 10.03C9.768 11.154 8.81 12 7.676 12H4.324c-1.134 0-2.091-.845-2.232-1.97L1.525 5.5h8.95l-.567 4.53zM6 0c1.364 0 2.59.83 3.097 2.097l.16.403h1.993c.414 0 .75.336.75.75s-.336.75-.75.75H.75C.336 4 0 3.664 0 3.25s.336-.75.75-.75h1.992l.161-.403C3.41.83 4.636 0 6 0zm0 1.5c-.694 0-1.322.39-1.633 1h3.266c-.311-.61-.94-1-1.633-1z"
        fill={color}
      />
    </svg>
  );
};

TrashFilled12.category = 'Interface General';

export default TrashFilled12;
