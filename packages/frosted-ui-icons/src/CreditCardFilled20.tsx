import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20 13.75C20 15.8211 18.3211 17.5 16.25 17.5H3.75C1.67893 17.5 1.20798e-08 15.8211 0 13.75V8.5H20V13.75ZM3.75 12.5C3.33579 12.5 3 12.8358 3 13.25C3 13.6642 3.33579 14 3.75 14H7.25C7.66421 14 8 13.6642 8 13.25C8 12.8358 7.66421 12.5 7.25 12.5H3.75ZM16.25 2.5C18.3211 2.5 20 4.17893 20 6.25V7H0V6.25C0 4.17893 1.67893 2.5 3.75 2.5H16.25Z"
        fill={color}
      />
    </svg>
  );
};

export default CreditCardFilled20;
