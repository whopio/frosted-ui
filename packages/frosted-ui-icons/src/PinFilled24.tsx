import * as React from 'react';
import { IconProps } from './types';

export const PinFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PinFilled24"
      {...props}
    >
      <path
        d="M15.25 1C16.768 1 18 2.231 18 3.75v5.434c0 .256.059.509.174.738l2.05 4.098c.913 1.829-.416 3.98-2.46 3.98H12.75v4.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V18H6.236c-2.044 0-3.374-2.151-2.46-3.98l2.05-4.098C5.94 9.692 6 9.44 6 9.184V3.75C6 2.231 7.23 1 8.75 1h6.5z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PinFilled24.category = 'Interface General';

export default PinFilled24;
