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
        d="M7.51.428C8.098-.367 9.4.034 9.4 1.06V5.5h3.202c.899.001 1.45.988.98 1.754l-5.07 8.237c-.555.902-1.944.509-1.945-.55V10.5h-3.2c-.9 0-1.452-.987-.98-1.753L7.457.51 7.51.428z"
        fill={color}
      />
    </svg>
  );
};

BoltFilled16.category = 'Nature & Weather';

export default BoltFilled16;
