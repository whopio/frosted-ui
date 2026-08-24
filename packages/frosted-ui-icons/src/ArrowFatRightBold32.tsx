import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatRightBold32"
      {...props}
    >
      <path
        d="M15.469 9H3.993C2.893 9 2 9.892 2 10.993v10.014C2 22.107 2.892 23 3.993 23h11.476c.293 0 .531.238.531.531v4.514c0 .7.836 1.06 1.345.58l12.13-11.466c.665-.63.665-1.689 0-2.318L17.344 3.376c-.509-.48-1.345-.12-1.345.579v4.514c0 .293-.238.531-.531.531z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRightBold32.category = 'Arrows';

export default ArrowFatRightBold32;
