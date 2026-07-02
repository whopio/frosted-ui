import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11 18V20.6611C11 22.0446 12.6573 22.7549 13.6592 21.8007L22.3174 13.5546C23.2057 12.7085 23.2057 11.2915 22.3174 10.4453L13.6592 2.19918C12.6573 1.24501 11 1.95528 11 3.33882V5.99996L3.43457 5.99996C2.09024 5.99996 1 7.0902 1 8.43453L1 15.5654C1 16.9097 2.09024 18 3.43457 18H11Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatRightBoldFilled24.category = 'Arrows';

export default ArrowFatRightBoldFilled24;
