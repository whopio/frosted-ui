import * as React from 'react';
import { IconProps } from './types';

export const SquareBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M31 22.5C31 27.1944 27.1944 31 22.5 31H9.5C4.80558 31 1 27.1944 1 22.5V9.5C1 4.80558 4.80558 1 9.5 1H22.5C27.1944 1 31 4.80558 31 9.5V22.5Z"
        fill={color}
      />
    </svg>
  );
};

SquareBoldFilled32.category = 'Interface General';

export default SquareBoldFilled32;
