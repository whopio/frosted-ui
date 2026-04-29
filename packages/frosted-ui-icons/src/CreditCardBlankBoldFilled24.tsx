import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M23.999 15.5C23.999 17.9851 21.9841 19.9998 19.499 20H4.5C2.01472 20 0 17.9853 0 15.5V9.5H23.999V15.5ZM19.499 3C21.8151 3.00022 23.7219 4.75021 23.9707 7H0.0283203C0.277085 4.75007 2.18376 3 4.5 3H19.499Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBoldFilled24.category = 'Money & Shopping';

export default CreditCardBlankBoldFilled24;
