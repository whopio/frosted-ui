import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24 16.5C24 18.9853 21.9853 21 19.5 21H4.5C2.01492 20.9998 0 18.9851 0 16.5V9.75H24V16.5ZM5.40039 14.5C4.84811 14.5 4.40039 14.9477 4.40039 15.5C4.40039 16.0523 4.84811 16.5 5.40039 16.5H11.4502C12.0023 16.4997 12.4502 16.0521 12.4502 15.5C12.4502 14.9479 12.0023 14.5003 11.4502 14.5H5.40039ZM19.5 3C21.9853 3 24 5.01472 24 7.5V7.75H0V7.5C0 5.01486 2.01492 3.00024 4.5 3H19.5Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBoldFilled24.category = 'Money & Shopping';

export default CreditCardBoldFilled24;
