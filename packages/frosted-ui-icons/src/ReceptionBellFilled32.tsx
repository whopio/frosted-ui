import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.5662 1C20.9804 1 21.3162 1.33579 21.3162 1.75C21.316 2.16404 20.9803 2.5 20.5662 2.5H16.7459V6.01367C22.6099 6.21717 26.1559 8.8163 28.2273 12.3174C30.3468 15.9001 30.8801 20.3515 30.9763 23.8975C31.0078 25.0694 30.0541 26 28.9099 26H16.7459V29.5H28.2439C28.6579 29.5001 28.9937 29.836 28.9939 30.25C28.9937 30.664 28.6579 30.9999 28.2439 31H3.7488C3.33479 30.9999 2.999 30.664 2.9988 30.25C2.999 29.836 3.33479 29.5001 3.7488 29.5H15.2459V26H3.08181C1.9379 25.9997 0.984908 25.0692 1.01638 23.8975C1.11267 20.3516 1.64595 15.9001 3.76541 12.3174C5.83672 8.81654 9.38244 6.21741 15.2459 6.01367V2.5H11.4265C11.0125 2.49991 10.6767 2.16399 10.6765 1.75C10.6765 1.33584 11.0124 1.00009 11.4265 1H20.5662Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBellFilled32.category = 'Objects';

export default ReceptionBellFilled32;
