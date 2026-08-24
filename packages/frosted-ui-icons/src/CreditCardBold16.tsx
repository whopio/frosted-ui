import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardBold16"
      {...props}
    >
      <path
        d="M12.6 2C14.477 2 16 3.523 16 5.4v5.2c0 1.877-1.523 3.4-3.4 3.4H3.4C1.523 14 0 12.477 0 10.6V5.4C0 3.523 1.523 2 3.4 2h9.2zM2 10.6c0 .773.627 1.4 1.4 1.4h9.2c.773 0 1.4-.627 1.4-1.4V7.75H2v2.85zm5.418-1.85c.552 0 1 .448 1 1s-.448 1-1 1H4.502c-.552 0-1-.448-1-1s.448-1 1-1h2.916zM3.4 4C2.627 4 2 4.627 2 5.4v.35h12V5.4c0-.773-.627-1.4-1.4-1.4H3.4z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBold16.category = 'Money & Shopping';

export default CreditCardBold16;
