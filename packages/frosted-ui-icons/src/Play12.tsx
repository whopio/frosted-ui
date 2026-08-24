import * as React from 'react';
import { IconProps } from './types';

export const Play12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Play12"
      {...props}
    >
      <path
        d="M2.25 10.07V1.93c0-.915 1.016-1.463 1.78-.962l6.204 4.07c.693.455.693 1.47 0 1.924l-6.203 4.07c-.765.501-1.781-.047-1.781-.962z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Play12.category = 'Sound & Music';

export default Play12;
