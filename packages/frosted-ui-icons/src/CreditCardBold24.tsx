import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardBold24"
      {...props}
    >
      <path
        d="M19.5 3C21.985 3 24 5.015 24 7.5v9c0 2.485-2.015 4.5-4.5 4.5h-15C2.015 21 0 18.985 0 16.5v-9C0 5.015 2.015 3 4.5 3h15zM2 16.5C2 17.88 3.12 19 4.5 19h15c1.38 0 2.5-1.12 2.5-2.5V9.75H2.003L2 9.749V16.5zm9.727-2c.553 0 1 .448 1 1s-.447 1-1 1h-6.05c-.552 0-1-.448-1-1s.448-1 1-1h6.05zM4.5 5C3.12 5 2 6.12 2 7.5v.25h20V7.5C22 6.12 20.88 5 19.5 5h-15z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBold24.category = 'Money & Shopping';

export default CreditCardBold24;
