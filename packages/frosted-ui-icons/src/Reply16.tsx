import * as React from 'react';
import { IconProps } from './types';

export const Reply16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Reply16"
      {...props}
    >
      <path
        d="M14.25 12.762c0-3.572-.548-7.012-6.5-7.012V3.164c0-.259-.304-.396-.498-.226L1.927 7.625c-.227.199-.227.551 0 .75l5.325 4.687c.194.17.498.033.498-.226V10.25c2.38 0 4.417.13 6.5 2.512z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Reply16.category = 'Arrows';

export default Reply16;
