import * as React from 'react';
import { IconProps } from './types';

export const RotateRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateRightFilled20"
      {...props}
    >
      <path
        d="M10 .5c2.772 0 5.264 1.188 7 3.08v-.33c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25S13.56 6 14.25 6h1.495C14.48 4.186 12.377 3 10 3 6.984 3 4.41 4.908 3.426 7.588 3.15 8.338 3 9.15 3 10c0 .85.15 1.662.426 2.412C4.409 15.092 6.984 17 10 17s5.59-1.908 6.574-4.588c.238-.648.956-.98 1.604-.743.648.238.98.955.743 1.604C17.588 16.905 14.099 19.5 10 19.5c-4.098 0-7.588-2.595-8.92-6.227C.703 12.25.5 11.148.5 10c0-1.148.204-2.25.58-3.272C2.411 3.095 5.901.5 10 .5z"
        fill={color}
      />
    </svg>
  );
};

RotateRightFilled20.category = 'Arrows';

export default RotateRightFilled20;
