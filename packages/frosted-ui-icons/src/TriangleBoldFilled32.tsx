import * as React from 'react';
import { IconProps } from './types';

export const TriangleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.43069 25.304L13.2416 4.8373C14.4461 2.55704 17.7147 2.56435 18.9089 4.84997L29.6031 25.3167C30.7167 27.4478 29.1707 30 26.7661 30H5.26101C2.8502 30 1.30469 27.4357 2.43069 25.304Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleBoldFilled32.category = 'Interface General';

export default TriangleBoldFilled32;
