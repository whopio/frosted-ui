import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAddBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardAddBold32"
      {...props}
    >
      <path
        d="M25.75 19.25c.552 0 1 .448 1 1v3.5h3.5c.552 0 1 .448 1 1s-.448 1-1 1h-3.5v3.5c0 .552-.448 1-1 1s-1-.448-1-1v-3.5h-3.5c-.552 0-1-.448-1-1s.448-1 1-1h3.5v-3.5c0-.552.448-1 1-1zm0-15.25C28.65 4 31 6.35 31 9.25V17c0 .552-.448 1-1 1s-1-.448-1-1v-5H3v9.75C3 23.545 4.455 25 6.25 25H17c.552 0 1 .448 1 1s-.448 1-1 1H6.25C3.35 27 1 24.65 1 21.75V9.25C1 6.35 3.35 4 6.25 4h19.5zM6.25 6C4.455 6 3 7.455 3 9.25V10h26v-.75C29 7.455 27.545 6 25.75 6H6.25z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAddBold32.category = 'Money & Shopping';

export default CreditCardAddBold32;
