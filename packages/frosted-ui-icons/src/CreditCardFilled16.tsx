import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 11.25C16 13.0449 14.5449 14.5 12.75 14.5H3.25C1.45507 14.5 4.83192e-08 13.0449 0 11.25V7H16V11.25ZM3.75 10C3.33579 10 3 10.3358 3 10.75C3 11.1642 3.33579 11.5 3.75 11.5H6.25C6.66421 11.5 7 11.1642 7 10.75C7 10.3358 6.66421 10 6.25 10H3.75ZM12.75 1.5C14.5449 1.5 16 2.95507 16 4.75V5.5H0V4.75C4.832e-08 2.95507 1.45507 1.5 3.25 1.5H12.75Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardFilled16.category = 'Money & Shopping';

export default CreditCardFilled16;
