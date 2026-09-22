import * as React from 'react';
import { IconProps } from './types';

export const PaperClip24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperClip24"
      {...props}
    >
      <path
        d="M4.75 11.75V15c0 4.004 3.246 7.25 7.25 7.25s7.25-3.246 7.25-7.25V6.625c0-2.692-2.183-4.875-4.875-4.875S9.5 3.933 9.5 6.625v8.125c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5v-8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

PaperClip24.category = 'Objects';

export default PaperClip24;
