import * as React from 'react';
import { IconProps } from './types';

export const TriangleBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleBold32"
      {...props}
    >
      <path
        d="M2.43 25.304L13.243 4.837c1.204-2.28 4.473-2.273 5.667.013l10.694 20.467c1.114 2.13-.432 4.683-2.837 4.683H5.261c-2.41 0-3.956-2.564-2.83-4.696z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleBold32.category = 'Interface General';

export default TriangleBold32;
