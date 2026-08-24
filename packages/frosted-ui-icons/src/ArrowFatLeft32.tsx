import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatLeft32"
      {...props}
    >
      <path
        d="M16.781 9.75h11.476c1.1 0 1.993.892 1.993 1.993v8.514c0 1.1-.892 1.993-1.993 1.993H16.781c-.293 0-.531.238-.531.531v5.31c0 .692-.822 1.055-1.334.589L2.293 17.178c-.694-.632-.694-1.724 0-2.356L14.916 3.32c.512-.466 1.334-.103 1.334.59v5.309c0 .293.238.531.531.531z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeft32.category = 'Arrows';

export default ArrowFatLeft32;
