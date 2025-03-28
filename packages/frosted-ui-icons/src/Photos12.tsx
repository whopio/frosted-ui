import * as React from 'react';
import { IconProps } from './types';

export const Photos12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9 4C9.55228 4 10 3.55228 10 3C10 2.44772 9.55228 2 9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4Z"
        fill={color}
      />
      <path
        d="M5 0C3.89543 0 3 0.895431 3 2V7C3 8.10457 3.89543 9 5 9H10C11.1046 9 12 8.10457 12 7V2C12 0.895431 11.1046 0 10 0H5ZM4.5 2C4.5 1.72386 4.72386 1.5 5 1.5H10C10.2761 1.5 10.5 1.72386 10.5 2V7C10.5 7.05335 10.4916 7.10475 10.4762 7.15296L7.63599 4.5964C7.38825 4.37339 7.06673 4.25 6.7334 4.25C6.34024 4.25 5.96665 4.4215 5.71035 4.71964L4.5 6.12757V2Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M1.5 3.75C1.5 3.33579 1.16421 3 0.75 3C0.335786 3 0 3.33579 0 3.75V10C0 11.1046 0.89543 12 2 12H8.25C8.66421 12 9 11.6642 9 11.25C9 10.8358 8.66421 10.5 8.25 10.5H2C1.72386 10.5 1.5 10.2761 1.5 10V3.75Z"
        fill={color}
      />
    </svg>
  );
};

export default Photos12;
