import * as React from 'react';
import { IconProps } from './types';

export const Play20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.75 16.2322V3.82368C3.75 2.18773 5.57206 1.21085 6.93459 2.11628L16.3961 8.40361C17.6256 9.22067 17.6145 11.0303 16.375 11.8322L6.91354 17.9534C5.54954 18.8358 3.75 17.8568 3.75 16.2322Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Play20.category = 'Sound & Music';

export default Play20;
