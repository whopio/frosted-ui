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
        d="M20.499 1C21.0512 1.00016 21.499 1.44781 21.499 2C21.499 2.55219 21.0512 2.99984 20.499 3H16.9961V6.02344C22.7765 6.28077 26.2868 8.78052 28.3281 12.208C30.4291 15.736 30.9 20.1232 30.9834 23.6436C31.0144 24.9574 29.9469 25.9997 28.666 26H16.9961V29H27.999C28.5512 29.0002 28.999 29.4478 28.999 30C28.999 30.5522 28.5512 30.9998 27.999 31H3.99902C3.44674 31 2.99902 30.5523 2.99902 30C2.99902 29.4477 3.44674 29 3.99902 29H14.9961V26H3.33203C2.05097 25.9998 0.983684 24.9575 1.01465 23.6436C1.09773 20.1234 1.56716 15.736 3.66699 12.208C5.70712 8.78059 9.21618 6.28088 14.9961 6.02344V3H11.499C10.9467 3 10.499 2.55228 10.499 2C10.499 1.44772 10.9467 1 11.499 1H20.499Z"
        fill={color}
      />
    </svg>
  );
};

ReceptionBellBoldFilled32.category = 'Objects';

export default ReceptionBellBoldFilled32;
