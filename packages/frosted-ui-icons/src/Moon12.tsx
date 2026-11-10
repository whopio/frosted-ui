import * as React from 'react';
import { IconProps } from './types';

export const Moon12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Moon12"
      {...props}
    >
      <path
        d="M6 .75l.112.001c.082.002.125.099.076.165C5.756 1.498 5.5 2.219 5.5 3c0 1.933 1.567 3.5 3.5 3.5.78 0 1.501-.256 2.084-.689.065-.049.162-.007.164.076L11.25 6c0 2.9-2.35 5.25-5.25 5.25S.75 8.9.75 6 3.1.75 6 .75z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

Moon12.category = 'Nature & Weather';

export default Moon12;
