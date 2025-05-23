import * as React from 'react';
import { IconProps } from './types';

export const Monitor32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.95829 18.7917H28.0416M9.74996 28.4167L22.25 28.4167M12.2708 23V28.4167M19.7291 23V28.4167M6.33329 23H25.6666C27.1394 23 28.3333 21.8061 28.3333 20.3333V7.66667C28.3333 6.19391 27.1394 5 25.6666 5H6.33329C4.86053 5 3.66663 6.19391 3.66663 7.66667V20.3333C3.66663 21.8061 4.86053 23 6.33329 23Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Monitor32;
