import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardBlankBoldFilled12"
      {...props}
    >
      <path
        d="M12 7.75c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V6h12v1.75zm-3-6.5c1.573 0 2.861 1.21 2.988 2.75H.012C.139 2.46 1.427 1.25 3 1.25h6z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBoldFilled12.category = 'Money & Shopping';

export default CreditCardBlankBoldFilled12;
