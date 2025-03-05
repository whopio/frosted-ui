import * as React from 'react';
import { IconProps } from './types';

export const Subtract20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19 10C19 10.4142 18.6642 10.75 18.25 10.75L1.75 10.75C1.33579 10.75 1 10.4142 1 10C1 9.58579 1.33579 9.25 1.75 9.25L18.25 9.25C18.6642 9.25 19 9.58579 19 10Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Subtract20;
