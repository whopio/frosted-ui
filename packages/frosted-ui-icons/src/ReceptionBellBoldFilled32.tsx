import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.5007 1C21.0528 1.00016 21.5007 1.44781 21.5007 2C21.5007 2.55219 21.0528 2.99984 20.5007 3H16.9977V6.02344C22.7782 6.28077 26.2885 8.78052 28.3298 12.208C30.4308 15.736 30.9017 20.1232 30.985 23.6436C31.0161 24.9574 29.9485 25.9997 28.6677 26H16.9977V29H28.0007C28.5528 29.0002 29.0007 29.4478 29.0007 30C29.0007 30.5522 28.5528 30.9998 28.0007 31H4.00066C3.44837 31 3.00066 30.5523 3.00066 30C3.00066 29.4477 3.44837 29 4.00066 29H14.9977V26H3.33367C2.0526 25.9998 0.985318 24.9575 1.01628 23.6436C1.09937 20.1234 1.56879 15.736 3.66863 12.208C5.70875 8.78059 9.21781 6.28088 14.9977 6.02344V3H11.5007C10.9484 3 10.5007 2.55228 10.5007 2C10.5007 1.44772 10.9484 1 11.5007 1H20.5007Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBellBoldFilled32.category = 'Objects';

export default ReceptionBellBoldFilled32;
