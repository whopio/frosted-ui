import * as React from 'react';
import { IconProps } from './types';

export const PaperClip16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperClip16"
      {...props}
    >
      <path
        d="M3.75 7.75V10c0 2.347 1.903 4.25 4.25 4.25s4.25-1.903 4.25-4.25V4.625c0-1.588-1.287-2.875-2.875-2.875S6.5 3.037 6.5 4.625V9.75c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5v-5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

PaperClip16.category = 'Objects';

export default PaperClip16;
