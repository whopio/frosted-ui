import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkSmallBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.25 7L8.75 17.5L4.5 13.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CheckmarkSmallBold24.category = 'Checkmarks';

export default CheckmarkSmallBold24;
