import * as React from 'react';
import { IconProps } from './types';

export const CopyFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M26.6064 9C29.0327 9 31 10.9673 31 13.3936V26.6064C31 29.0327 29.0327 31 26.6064 31H13.3936C10.9673 31 9 29.0327 9 26.6064V13.3936C9 10.9673 10.9673 9 13.3936 9H26.6064ZM18.6064 1C21.0327 1 23 2.96731 23 5.39355V7.15039C22.9998 7.34338 22.8434 7.49979 22.6504 7.5H13.3936C10.1389 7.5 7.5 10.1389 7.5 13.3936V22.6504C7.49979 22.8434 7.34338 22.9998 7.15039 23H5.39355C2.96731 23 1 21.0327 1 18.6064V5.39355C1 2.96731 2.96731 1 5.39355 1H18.6064Z"
        fill={color}
      />
    </svg>
  );
};

CopyFilled32.category = 'Interface General';

export default CopyFilled32;
