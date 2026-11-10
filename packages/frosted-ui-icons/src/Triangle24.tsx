import * as React from 'react';
import { IconProps } from './types';

export const Triangle24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Triangle24"
      {...props}
    >
      <path
        d="M10.044 3.283L2.057 17.861c-.836 1.526.268 3.39 2.008 3.39h15.89c1.735 0 2.84-1.856 2.013-3.381L14.064 3.292c-.864-1.593-3.149-1.598-4.02-.009z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Triangle24.category = 'Interface General';

export default Triangle24;
