import * as React from 'react';
import { IconProps } from './types';

export const BoltFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltFilled32"
      {...props}
    >
      <path
        d="M15.297 1.537c.659-.953 2.203-.504 2.204.7V12h7.146c1.178 0 1.897 1.296 1.273 2.295l-10.063 16.1c-.679 1.086-2.356.605-2.356-.675V20H7.296c-1.153 0-1.875-1.246-1.302-2.246l9.242-16.12.061-.097z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoltFilled32.category = 'Nature & Weather';

export default BoltFilled32;
