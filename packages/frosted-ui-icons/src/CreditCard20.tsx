import * as React from 'react';
import { IconProps } from './types';

export const CreditCard20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16.25 2.5C18.3211 2.5 20 4.17893 20 6.25V13.75C20 15.8211 18.3211 17.5 16.25 17.5H3.75C1.67893 17.5 1.20798e-08 15.8211 0 13.75V6.25C0 4.17893 1.67893 2.5 3.75 2.5H16.25ZM1.5 13.75C1.5 14.9926 2.50736 16 3.75 16H16.25C17.4926 16 18.5 14.9926 18.5 13.75V8.5H1.5V13.75ZM7.25 12.5C7.66421 12.5 8 12.8358 8 13.25C8 13.6642 7.66421 14 7.25 14H3.75C3.33579 14 3 13.6642 3 13.25C3 12.8358 3.33579 12.5 3.75 12.5H7.25ZM3.75 4C2.50736 4 1.5 5.00736 1.5 6.25V7H18.5V6.25C18.5 5.00736 17.4926 4 16.25 4H3.75Z"
        fill={color}
      />
    </svg>
  );
};

CreditCard20.category = 'Money & Shopping';

export default CreditCard20;
