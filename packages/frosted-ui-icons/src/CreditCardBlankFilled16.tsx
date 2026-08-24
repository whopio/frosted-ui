import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardBlankFilled16"
      {...props}
    >
      <path
        d="M16 10.6c0 1.74-1.41 3.15-3.15 3.15h-9.7C1.41 13.75 0 12.34 0 10.6V7h16v3.6zm-3.15-8.35C14.59 2.25 16 3.66 16 5.4v.1H0v-.1c0-1.74 1.41-3.15 3.15-3.15h9.7z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankFilled16.category = 'Money & Shopping';

export default CreditCardBlankFilled16;
