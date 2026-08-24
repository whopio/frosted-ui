import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUp32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUp32"
      {...props}
    >
      <path
        d="M9.75 16.781v11.476c0 1.1.892 1.993 1.993 1.993h8.514c1.1 0 1.993-.892 1.993-1.993V16.781c0-.293.238-.531.531-.531h5.31c.692 0 1.055-.822.589-1.334L17.178 2.293c-.632-.694-1.724-.694-2.356 0L3.32 14.916c-.466.512-.103 1.334.59 1.334h5.309c.293 0 .531.238.531.531z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUp32.category = 'Arrows';

export default ArrowFatUp32;
