import * as React from 'react';
import { IconProps } from './types';

export const TriangleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleBoldFilled12"
      {...props}
    >
      <path
        d="M4.054 1.646C4.879.08 7.12.08 7.946 1.645l3.76 7.129C12.478 10.239 11.416 12 9.76 12H2.24C.584 12-.479 10.239.294 8.774l3.76-7.128z"
        fill={color}
      />
    </svg>
  );
};

TriangleBoldFilled12.category = 'Interface General';

export default TriangleBoldFilled12;
