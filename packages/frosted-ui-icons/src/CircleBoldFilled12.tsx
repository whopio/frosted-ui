import * as React from 'react';
import { IconProps } from './types';

export const CircleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.75 6C11.75 9.17564 9.17564 11.75 6 11.75C2.82436 11.75 0.25 9.17564 0.25 6C0.25 2.82436 2.82436 0.25 6 0.25C9.17564 0.25 11.75 2.82436 11.75 6Z"
        fill={color}
      />
    </svg>
  );
};

CircleBoldFilled12.category = 'Interface General';

export default CircleBoldFilled12;
