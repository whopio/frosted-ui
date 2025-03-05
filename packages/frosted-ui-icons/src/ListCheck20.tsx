import * as React from 'react';
import { IconProps } from './types';

export const ListCheck20 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M6.28581 7.91479L7.22331 8.53983L8.783 6.4602M11.5067 7.5H13.59M11.4583 12.5H13.5417M6.28581 12.9158L7.22331 13.5407L8.783 11.4612M4.79167 16.875H15.2083C16.1288 16.875 16.875 16.1288 16.875 15.2083V4.79167C16.875 3.87119 16.1288 3.125 15.2083 3.125H4.79167C3.87119 3.125 3.125 3.87119 3.125 4.79167V15.2083C3.125 16.1288 3.87119 16.875 4.79167 16.875Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ListCheck20;
