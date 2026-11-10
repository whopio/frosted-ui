import * as React from 'react';
import { IconProps } from './types';

export const BoltFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BoltFilled20"
      {...props}
    >
      <path
        d="M8.902.606C9.48-.387 11 .022 11 1.17v5.83h4.443c.976 0 1.575 1.067 1.068 1.9l-6.425 10.548C9.494 20.42 8 20 8 18.863V13H3.87c-.964 0-1.566-1.045-1.082-1.878L8.902.606z"
        fill={color}
      />
    </svg>
  );
};

BoltFilled20.category = 'Nature & Weather';

export default BoltFilled20;
