import * as React from 'react';
import { IconProps } from './types';

export const BoltFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltFilled16"
      {...props}
    >
      <path
        d="M7.511.43c.586-.796 1.89-.395 1.89.63V5.5h3.2c.9 0 1.452.987.98 1.753l-5.069 8.238c-.555.9-1.944.508-1.944-.55V10.5H3.367c-.9 0-1.451-.987-.98-1.753L7.457.51 7.51.43z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoltFilled16.category = 'Nature & Weather';

export default BoltFilled16;
