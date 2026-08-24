import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatDownBold32"
      {...props}
    >
      <path
        d="M9 15.469V3.993C9 2.893 9.892 2 10.993 2h10.014C22.107 2 23 2.892 23 3.993v11.476c0 .293.238.531.531.531h4.514c.7 0 1.06.836.58 1.345l-11.466 12.13c-.63.665-1.689.665-2.318 0L3.376 17.344c-.48-.509-.12-1.345.579-1.345h4.514c.293 0 .531-.238.531-.531z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDownBold32.category = 'Arrows';

export default ArrowFatDownBold32;
