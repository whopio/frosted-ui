import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardFilled12"
      {...props}
    >
      <path
        d="M12 7.75c0 1.519-1.231 2.75-2.75 2.75h-6.5C1.231 10.5 0 9.269 0 7.75V5.5h12v2.25zM3.25 7c-.414 0-.75.336-.75.75s.336.75.75.75h1.5c.414 0 .75-.336.75-.75S5.164 7 4.75 7h-1.5zm6-5.5c1.434 0 2.61 1.098 2.737 2.5H.013C.139 2.598 1.316 1.5 2.75 1.5h6.5z"
        fill={color}
      />
    </svg>
  );
};

CreditCardFilled12.category = 'Money & Shopping';

export default CreditCardFilled12;
