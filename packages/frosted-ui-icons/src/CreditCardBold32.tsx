import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardBold32"
      {...props}
    >
      <path
        d="M26.75 4.5c2.9 0 5.25 2.35 5.25 5.25v12.5c0 2.9-2.35 5.25-5.25 5.25H5.25C2.35 27.5 0 25.15 0 22.25V9.75C0 6.85 2.35 4.5 5.25 4.5h21.5zm3.178 8.5H2.07c-.024 0-.047-.003-.071-.004v9.254c0 1.795 1.455 3.25 3.25 3.25h21.5c1.795 0 3.25-1.455 3.25-3.25v-9.254c-.024.001-.048.004-.072.004zm-15.535 7.5c.552 0 1 .448 1 1s-.448 1-1 1H6.357c-.552 0-1-.448-1-1s.448-1 1-1h8.036zM5.25 6.5C3.455 6.5 2 7.955 2 9.75v.253L2.071 10h27.857l.072.003V9.75c0-1.795-1.455-3.25-3.25-3.25H5.25z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBold32.category = 'Money & Shopping';

export default CreditCardBold32;
