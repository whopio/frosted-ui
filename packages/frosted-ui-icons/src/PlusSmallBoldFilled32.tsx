import * as React from 'react';
import { IconProps } from './types';

export const PlusSmallBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 8.25V16M16 23.75V16M16 16H8.25M16 16H23.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusSmallBoldFilled32.category = 'Product Icons';

export default PlusSmallBoldFilled32;
