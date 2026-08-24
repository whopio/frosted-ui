import * as React from 'react';
import { IconProps } from './types';

export const MoonFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MoonFilled32"
      {...props}
    >
      <path
        d="M16 .5c.414 0 .625.49.385.826C15.197 3 14.498 5.042 14.498 7.25c0 5.66 4.59 10.25 10.25 10.25 2.207 0 4.249-.7 5.92-1.887.34-.24.832-.029.832.387 0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16 .5 7.44 7.44.5 16 .5z"
        fill={color}
      />
    </svg>
  );
};

MoonFilled32.category = 'Nature & Weather';

export default MoonFilled32;
