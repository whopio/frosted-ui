import * as React from 'react';
import { IconProps } from './types';

export const StarFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.5354 1.49767C11.1255 0.270308 12.8768 0.270307 13.467 1.49767L16.2004 7.18615L16.217 7.21154C16.2367 7.23503 16.2654 7.2512 16.2981 7.25548L22.5861 8.07873C23.9389 8.25612 24.4897 9.92386 23.4914 10.8658L18.8938 15.2008C18.8634 15.2297 18.8504 15.2712 18.8576 15.3102L20.0119 21.5026C20.2629 22.8506 18.8362 23.8704 17.6408 23.2262L12.0627 20.2184C12.0246 20.1979 11.9777 20.1979 11.9397 20.2184L6.36153 23.2262C5.16615 23.8704 3.7394 22.8507 3.99043 21.5026L5.14473 15.3102C5.15192 15.2712 5.13898 15.2297 5.1086 15.2008L0.510943 10.8658C-0.4873 9.92385 0.0634546 8.2561 1.41622 8.07873L7.7043 7.25548C7.74789 7.24976 7.7843 7.22291 7.80196 7.18615L10.5354 1.49767Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StarFilled24.category = 'Interface General';

export default StarFilled24;
