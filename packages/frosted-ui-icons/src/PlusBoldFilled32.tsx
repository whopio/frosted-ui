import * as React from 'react';
import { IconProps } from './types';

export const PlusBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 2.25V16M16 29.75V16M16 16H2.25M16 16H29.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusBoldFilled32.category = 'Interface General';

export default PlusBoldFilled32;
