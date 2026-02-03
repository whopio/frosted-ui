import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M4.75 20.9059V3.07524C4.75 1.22275 6.8281 0.13033 8.35405 1.18066L21.2578 10.0625C22.5829 10.9745 22.5864 12.9303 21.2645 13.847L8.36072 22.7959C6.83544 23.8537 4.75 22.7621 4.75 20.9059Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlayFilled24;
