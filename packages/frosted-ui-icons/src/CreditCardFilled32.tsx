import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardFilled32"
      {...props}
    >
      <path
        d="M31.995 22.5c0 2.761-2.239 5-5 5H5c-2.761 0-5-2.239-5-5V13h31.995v9.5zM5.03 21c-.414 0-.75.336-.75.75s.336.75.75.75h8.026c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H5.029zM26.995 4.5c2.761 0 5 2.239 5 5v1H0v-1c0-2.761 2.239-5 5-5h21.995z"
        fill={color}
      />
    </svg>
  );
};

CreditCardFilled32.category = 'Money & Shopping';

export default CreditCardFilled32;
