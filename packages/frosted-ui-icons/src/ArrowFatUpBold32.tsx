import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpBold32"
      {...props}
    >
      <path
        d="M9 16.531v11.476c0 1.1.892 1.993 1.993 1.993h10.014c1.1 0 1.993-.892 1.993-1.993V16.531c0-.293.238-.531.531-.531h4.514c.7 0 1.06-.836.58-1.345L17.158 2.525c-.63-.665-1.689-.665-2.318 0L3.376 14.656c-.48.509-.12 1.345.579 1.345h4.514c.293 0 .531.238.531.531z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUpBold32.category = 'Arrows';

export default ArrowFatUpBold32;
