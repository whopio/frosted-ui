import * as React from 'react';
import { IconProps } from './types';

export const Checkmark12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.73145 3.20801C10.0308 2.92176 10.5057 2.9322 10.792 3.23145C11.0783 3.53073 11.0678 4.00567 10.7686 4.29199L5.01855 9.79199C4.76064 10.0387 4.37132 10.0656 4.08496 9.875L3.96973 9.78027L1.46973 7.28027C1.17683 6.98738 1.17683 6.51262 1.46973 6.21973C1.76262 5.92688 2.2374 5.92685 2.53027 6.21973L4.51074 8.20117L9.73145 3.20801Z"
        fill={color}
      />
    </svg>
  );
};

export default Checkmark12;
