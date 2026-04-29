import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M19.998 13.5C19.998 15.7091 18.2072 17.5 15.998 17.5H4C1.79086 17.5 0 15.7091 0 13.5V8H19.998V13.5ZM4.9375 11.75C4.38522 11.75 3.9375 12.1977 3.9375 12.75C3.9375 13.3023 4.38522 13.75 4.9375 13.75H8.875C9.42695 13.7496 9.875 13.302 9.875 12.75C9.875 12.198 9.42695 11.7504 8.875 11.75H4.9375ZM15.998 2.5C18.0378 2.5 19.7197 4.02692 19.9658 6H0.0322266C0.278345 4.02692 1.96025 2.5 4 2.5H15.998Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBoldFilled20.category = 'Money & Shopping';

export default CreditCardBoldFilled20;
