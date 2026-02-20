import * as React from 'react';
import { IconProps } from './types';

export const XCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM8.03027 3.96973C7.73737 3.67701 7.26158 3.67689 6.96875 3.96973L6 4.93945L5.03027 3.96973C4.73747 3.67703 4.26261 3.67715 3.96973 3.96973C3.67703 4.2626 3.67699 4.73743 3.96973 5.03027L4.93945 6L3.96973 6.96973C3.67689 7.26256 3.67701 7.73737 3.96973 8.03027C4.26262 8.3231 4.7374 8.32315 5.03027 8.03027L6 7.06055L6.96875 8.03027C7.26159 8.32311 7.73737 8.32301 8.03027 8.03027C8.32281 7.73743 8.32285 7.26254 8.03027 6.96973L7.06055 6L8.03027 5.03027C8.32271 4.73737 8.32296 4.26248 8.03027 3.96973Z"
        fill={color}
      />
    </svg>
  );
};

XCircleFilled12.category = 'Interface General';

export default XCircleFilled12;
