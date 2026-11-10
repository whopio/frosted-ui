import * as React from 'react';
import { IconProps } from './types';

export const Moon32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Moon32"
      {...props}
    >
      <path
        d="M16 1.25c.082 0 .164 0 .246.002.08.002.125.093.08.159-1.152 1.657-1.828 3.669-1.828 5.839 0 5.66 4.59 10.25 10.25 10.25 2.171 0 4.183-.677 5.84-1.83.066-.045.157 0 .16.08l.002.25c0 8.146-6.604 14.75-14.75 14.75S1.25 24.146 1.25 16 7.854 1.25 16 1.25z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Moon32.category = 'Nature & Weather';

export default Moon32;
