import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardFilled24"
      {...props}
    >
      <path
        d="M23.999 16.75c0 2.347-1.903 4.25-4.25 4.25H4.25C1.903 21 0 19.097 0 16.75v-7.5h23.999v7.5zm-18.856-2c-.415 0-.75.336-.75.75s.335.75.75.75h6.036c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5.143zM19.749 3c2.347 0 4.25 1.903 4.25 4.25H0C0 4.903 1.903 3 4.25 3h15.499z"
        fill={color}
      />
    </svg>
  );
};

CreditCardFilled24.category = 'Money & Shopping';

export default CreditCardFilled24;
