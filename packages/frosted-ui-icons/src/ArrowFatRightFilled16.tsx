import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7 11.5V13.246C7 14.1844 8.10566 14.6856 8.81152 14.0673L14.5068 9.07808C15.1588 8.50693 15.1588 7.49297 14.5068 6.92183L8.81152 1.93257C8.10566 1.3143 7 1.81551 7 2.75386V4.49995H2.60449C1.71839 4.50004 1.00009 5.21835 1 6.10445L1 9.89546C1.00009 10.7816 1.71839 11.4999 2.60449 11.5H7Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatRightFilled16.category = 'Arrows';

export default ArrowFatRightFilled16;
