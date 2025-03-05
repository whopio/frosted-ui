import * as React from 'react';
import { IconProps } from './types';

export const Heart24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 5.57193C18.3331 -0.86765 29.1898 11.0916 12 20.75C-5.18981 11.0916 5.66688 -0.867651 12 5.57193Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Heart24;
