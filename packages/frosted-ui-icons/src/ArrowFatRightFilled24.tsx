import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatRightFilled24"
      {...props}
    >
      <path
        d="M11 17.5v3.207c0 1.148 1.36 1.752 2.212.982l9.151-8.282c.833-.753.833-2.06 0-2.814l-9.151-8.281C12.36 1.542 11 2.145 11 3.293V6.5H3.185C1.978 6.5 1 7.478 1 8.685v6.63c0 1.207.978 2.185 2.185 2.185H11z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatRightFilled24.category = 'Arrows';

export default ArrowFatRightFilled24;
