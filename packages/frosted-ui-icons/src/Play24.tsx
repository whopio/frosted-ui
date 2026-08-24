import * as React from 'react';
import { IconProps } from './types';

export const Play24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Play24"
      {...props}
    >
      <path
        d="M4.75 19.926V4.054c0-1.838 2.05-2.934 3.578-1.912l11.823 7.904c1.36.908 1.363 2.905.008 3.819L8.335 21.834c-1.527 1.03-3.585-.065-3.585-1.908z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Play24.category = 'Sound & Music';

export default Play24;
