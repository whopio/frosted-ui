import * as React from 'react';
import { IconProps } from './types';

export const AppleWalletBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M9.5 1.25C11.1569 1.25 12.5 2.59315 12.5 4.25V7.75C12.5 9.40685 11.1569 10.75 9.5 10.75H3C1.34315 10.75 0 9.40685 0 7.75V4.25C0 2.59315 1.34315 1.25 3 1.25H9.5ZM3 3.25C2.44772 3.25 2 3.69772 2 4.25V5H3.48047C3.78577 5.00001 4.08861 5.05849 4.37207 5.17188L6.10156 5.86328C6.19692 5.90142 6.30308 5.90142 6.39844 5.86328L8.12793 5.17188C8.41139 5.05849 8.71424 5.00001 9.01953 5H10.5V4.25C10.5 3.69772 10.0523 3.25 9.5 3.25H3Z"
        fill={color}
      />
    </svg>
  );
};

AppleWalletBoldFilled12.category = 'Money & Shopping';

export default AppleWalletBoldFilled12;
