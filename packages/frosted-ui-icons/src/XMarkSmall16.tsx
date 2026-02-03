import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmall16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.7207 3.21973C12.0136 2.92688 12.4893 2.92685 12.7822 3.21973C13.0747 3.51254 13.0747 3.98746 12.7822 4.28027L9.06152 8L12.7822 11.7207C13.075 12.0136 13.075 12.4894 12.7822 12.7822C12.4894 13.0751 12.0136 13.075 11.7207 12.7822L8 9.06152L4.28027 12.7822C3.98746 13.0748 3.51256 13.0747 3.21973 12.7822C2.92683 12.4893 2.92683 12.0136 3.21973 11.7207L6.93945 8L3.21973 4.28027C2.92683 3.98738 2.92683 3.51262 3.21973 3.21973C3.51262 2.92688 3.9874 2.92685 4.28027 3.21973L8 6.93945L11.7207 3.21973Z"
        fill={color}
      />
    </svg>
  );
};

XMarkSmall16.category = 'Interface General';

export default XMarkSmall16;
