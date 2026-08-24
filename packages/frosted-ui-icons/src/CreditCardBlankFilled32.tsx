import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardBlankFilled32"
      {...props}
    >
      <path
        d="M31.995 22.5c0 2.761-2.239 5-5 5H5c-2.761 0-5-2.239-5-5v-10h31.995v10zm-5-18c2.761 0 5 2.239 5 5V11H0V9.5c0-2.761 2.239-5 5-5h21.995z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankFilled32.category = 'Money & Shopping';

export default CreditCardBlankFilled32;
