import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 10.25C16 12.3211 14.3211 14 12.25 14H3.75C1.67893 14 0 12.3211 0 10.25V8H16V10.25ZM12.25 2C14.0642 2 15.5773 3.28834 15.9248 5H0.0751953C0.422662 3.28834 1.93579 2 3.75 2H12.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBoldFilled16.category = 'Money & Shopping';

export default CreditCardBlankBoldFilled16;
