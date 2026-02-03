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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M15.2969 1.53687C15.9553 0.584377 17.4996 1.03296 17.5 2.23608V11.9998H24.6465C25.8243 12 26.5428 13.2958 25.9189 14.2947L15.8564 30.3953C15.1775 31.4813 13.5003 31.0002 13.5 29.7195V19.9998H7.29492C6.14224 19.9998 5.41985 18.7537 5.99316 17.7537L15.2354 1.63354L15.2969 1.53687Z"
        fill={color}
      />
    </svg>
  );
};

BoltFilled32.category = 'Nature & Weather';

export default BoltFilled32;
