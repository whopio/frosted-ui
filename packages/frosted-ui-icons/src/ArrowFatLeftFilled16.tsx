import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9 11.5V13.246C9 14.1844 7.89434 14.6856 7.18848 14.0673L1.49316 9.07808C0.841225 8.50693 0.841229 7.49297 1.49316 6.92183L7.18848 1.93257C7.89434 1.3143 9 1.81551 9 2.75386V4.49995H13.3955C14.2816 4.50004 14.9999 5.21835 15 6.10445V9.89546C14.9999 10.7816 14.2816 11.4999 13.3955 11.5H9Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatLeftFilled16.category = 'Arrows';

export default ArrowFatLeftFilled16;
