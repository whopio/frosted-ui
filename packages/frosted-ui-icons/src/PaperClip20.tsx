import * as React from 'react';
import { IconProps } from './types';

export const PaperClip20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperClip20"
      {...props}
    >
      <path
        d="M4.25 9.75v2.75c0 3.176 2.574 5.75 5.75 5.75s5.75-2.574 5.75-5.75V5.625c0-2.14-1.735-3.875-3.875-3.875C9.735 1.75 8 3.485 8 5.625v6.625c0 1.105.895 2 2 2s2-.895 2-2v-6.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

PaperClip20.category = 'Objects';

export default PaperClip20;
