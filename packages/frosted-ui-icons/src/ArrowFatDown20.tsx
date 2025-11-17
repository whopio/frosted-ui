import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.875 2.29166H8.12499C7.66475 2.29166 7.29166 2.66475 7.29166 3.12499V11.4583H4.45031C4.09388 11.4583 3.902 11.8768 4.13457 12.1469L9.36854 18.225C9.70096 18.6111 10.299 18.6111 10.6315 18.225L15.8654 12.1469C16.098 11.8768 15.9061 11.4583 15.5496 11.4583H12.7083V3.12499C12.7083 2.66476 12.3352 2.29166 11.875 2.29166Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowFatDown20;
