import * as React from 'react';
import { IconProps } from './types';

export const BoltFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltFilled12"
      {...props}
    >
      <path
        d="M5.371.43c.575-.798 1.879-.405 1.879.617V4h2.21c.824 0 1.327.904.892 1.604l-3.66 5.898c-.557.897-1.941.502-1.942-.554V8.25H2.53c-.816 0-1.32-.89-.9-1.59L5.318.512 5.371.43z"
        fill={color}
      />
    </svg>
  );
};

BoltFilled12.category = 'Nature & Weather';

export default BoltFilled12;
