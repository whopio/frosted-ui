import * as React from 'react';
import { IconProps } from './types';

export const Facebook12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Facebook12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 1.5C3.515 1.5 1.5 3.515 1.5 6c0 2.106 1.447 3.873 3.4 4.363V7.5H3.5V6h1.4v-.5c0-1.519 1.232-2.75 2.75-2.75h1.1v1.5h-1.1c-.69 0-1.25.56-1.25 1.25V6h1.85v1.5H6.4v2.98c2.298-.202 4.1-2.13 4.1-4.48 0-2.485-2.015-4.5-4.5-4.5z"
        fill={color}
      />
    </svg>
  );
};

Facebook12.category = 'Social & Brands';

export default Facebook12;
