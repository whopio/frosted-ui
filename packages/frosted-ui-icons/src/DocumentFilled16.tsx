import * as React from 'react';
import { IconProps } from './types';

export const DocumentFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DocumentFilled16"
      {...props}
    >
      <path
        d="M4.75 0C6.547 0 8 1.455 8 3.25V4c.001 1.519 1.232 2.75 2.75 2.75h1c1.784 0 3.232 1.437 3.25 3.216v2.284c0 2.07-1.68 3.75-3.75 3.75h-6.5C2.68 16 1 14.32 1 12.25v-8.5C1 1.68 2.68 0 4.75 0zM8.224.01c.13.009.26.023.387.049 3.196.639 5.693 3.136 6.332 6.332.007.035.01.07.016.106-.845-.774-1.971-1.246-3.207-1.246h-1c-.69 0-1.25-.56-1.25-1.25v-.75C9.5 1.997 9.015.858 8.223.01z"
        fill={color}
      />
    </svg>
  );
};

DocumentFilled16.category = 'Interface General';

export default DocumentFilled16;
