import * as React from 'react';
import { IconProps } from './types';

export const LockOpenBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C7.3381 0 8.52286 0.656962 9.24902 1.66602C9.68736 2.27513 9.143 2.99996 8.39258 3C7.98284 3 7.62033 2.76051 7.31152 2.49121C6.96073 2.18529 6.50218 2 6 2C4.89543 2 4 2.89543 4 4V4.75H8.75C10.2688 4.75 11.5 5.98122 11.5 7.5V9.25C11.5 10.7688 10.2688 12 8.75 12H3.25C1.73122 12 0.5 10.7688 0.5 9.25V7.5C0.5 6.4318 1.11022 5.50812 2 5.05273V4C2 1.79086 3.79086 0 6 0ZM3.25 6.75C2.83579 6.75 2.5 7.08579 2.5 7.5V9.25C2.5 9.66421 2.83579 10 3.25 10H8.75C9.16421 10 9.5 9.66421 9.5 9.25V7.5C9.5 7.08579 9.16421 6.75 8.75 6.75H3.25Z"
        fill={color}
      />
    </svg>
  );
};

LockOpenBold12.category = 'Security';

export default LockOpenBold12;
