import * as React from 'react';
import { IconProps } from './types';

export const Ban24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C1.44962e-07 5.37258 5.37258 1.44958e-07 12 0ZM5.12598 19.9336C6.96812 21.5311 9.37024 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 9.37024 21.5311 6.96812 19.9336 5.12598L5.12598 19.9336ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 14.6293 2.46846 17.031 4.06543 18.873L18.873 4.06543C17.031 2.46846 14.6293 1.5 12 1.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Ban24;
