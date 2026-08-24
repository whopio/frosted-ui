import * as React from 'react';
import { IconProps } from './types';

export const WhopLogo12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WhopLogo12"
      {...props}
    >
      <path
        d="M10.452 2.926c.604 0 1.22.45 1.548.9h-.005L7.27 8.55c-.7.7-1.846.7-2.545 0l-.453-.452 4.273-4.273.164-.162c.411-.39.955-.737 1.743-.737zm-4.277 0c.604 0 1.22.45 1.547.9l-3.86 3.86-1.725-1.725 2.135-2.136.159-.162c.411-.39.955-.737 1.744-.737zm-4.267 0c.604 0 1.22.45 1.547.9L1.728 5.553 0 3.825c-.002-.005.16-.158.164-.162.411-.39.956-.737 1.744-.737z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

WhopLogo12.category = 'Social & Brands';

export default WhopLogo12;
