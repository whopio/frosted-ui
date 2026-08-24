import * as React from 'react';
import { IconProps } from './types';

export const CursorBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CursorBoldFilled16"
      {...props}
    >
      <path
        d="M15 12.763C15 13.998 13.998 15 12.763 15c-.593 0-1.162-.236-1.582-.655l-2.35-2.349-.752 1.73c-.772 1.775-3.33 1.649-3.925-.194l-3.048-9.47C.519 2.24 2.24.52 4.063 1.105l9.47 3.05c1.842.593 1.968 3.152.193 3.924l-1.73.752 2.349 2.35c.42.42.655.988.655 1.582z"
        fill={color}
      />
    </svg>
  );
};

CursorBoldFilled16.category = 'Arrows';

export default CursorBoldFilled16;
