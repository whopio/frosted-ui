import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.5 2.5C14.433 2.5 16 4.067 16 6V6.03516C17.6962 6.27775 19 7.73675 19 9.5V14C19 15.933 17.433 17.5 15.5 17.5H7.5C5.567 17.5 4 15.933 4 14V13.9639C2.3039 13.7212 1 12.2632 1 10.5V6C1 4.067 2.567 2.5 4.5 2.5H12.5ZM6 14C6 14.8284 6.67157 15.5 7.5 15.5H15.5C16.3284 15.5 17 14.8284 17 14V11H6V14ZM11 12.5C11.5523 12.5 12 12.9477 12 13.5C12 14.0523 11.5523 14.5 11 14.5H8C7.44772 14.5 7 14.0523 7 13.5C7 12.9477 7.44772 12.5 8 12.5H11ZM4.5 4.5C3.67157 4.5 3 5.17157 3 6V10.5C3 11.1528 3.41782 11.706 4 11.9121V9.5C4 7.567 5.567 6 7.5 6H14C14 5.17157 13.3284 4.5 12.5 4.5H4.5ZM7.5 8C6.84707 8 6.29297 8.41766 6.08691 9H16.9131C16.707 8.41766 16.1529 8 15.5 8H7.5Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardStackBold20.category = 'Money & Shopping';

export default CreditCardStackBold20;
