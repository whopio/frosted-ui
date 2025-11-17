import * as React from 'react';
import { IconProps } from './types';

export const Moon32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M28.3308 15.7482C26.9185 16.7466 25.1944 17.3333 23.3333 17.3333C18.5468 17.3333 14.6666 13.4532 14.6666 8.66663C14.6666 6.80551 15.2533 5.0814 16.2517 3.66915C16.168 3.66747 16.0841 3.66663 16 3.66663C9.18845 3.66663 3.66663 9.18845 3.66663 16C3.66663 22.8114 9.18845 28.3333 16 28.3333C22.8114 28.3333 28.3333 22.8114 28.3333 16C28.3333 15.9158 28.3325 15.832 28.3308 15.7482Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Moon32;
