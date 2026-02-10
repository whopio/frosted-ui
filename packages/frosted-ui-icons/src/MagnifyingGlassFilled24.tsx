import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M22 22L16.3094 16.3094M18.625 10.3125C18.625 14.9034 14.9034 18.625 10.3125 18.625C5.72164 18.625 2 14.9034 2 10.3125C2 5.72164 5.72164 2 10.3125 2C14.9034 2 18.625 5.72164 18.625 10.3125Z"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
};

MagnifyingGlassFilled24.category = 'Interface General';

export default MagnifyingGlassFilled24;
