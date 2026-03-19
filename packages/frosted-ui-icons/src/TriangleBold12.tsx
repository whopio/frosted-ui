import * as React from 'react';
import { IconProps } from './types';

export const TriangleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1.17837 9.24011L4.93858 2.11207C5.3888 1.25861 6.61108 1.25861 7.0613 2.11207L10.8215 9.2401C11.2431 10.0392 10.6636 11 9.76014 11H2.23974C1.33624 11 0.756816 10.0392 1.17837 9.24011Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleBold12.category = 'Product Icons';

export default TriangleBold12;
