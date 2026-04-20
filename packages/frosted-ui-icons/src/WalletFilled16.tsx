import * as React from 'react';
import { IconProps } from './types';

export const WalletFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.75 1.5C10.5449 1.5 12 2.95507 12 4.75V5.00977C13.6782 5.13733 15 6.53913 15 8.25V11.25C15 13.0449 13.5449 14.5 11.75 14.5H4.25C2.45517 14.4999 1 13.0449 1 11.25V4C1 3.97399 1.00035 3.94818 1.00293 3.92285C1.04372 2.57792 2.14521 1.50011 3.5 1.5H8.75ZM11 8.75C10.4477 8.75 10 9.19772 10 9.75C10 10.3023 10.4477 10.75 11 10.75C11.5523 10.75 12 10.3023 12 9.75C12 9.19772 11.5523 8.75 11 8.75ZM3.5 3C2.94781 3.00011 2.5 3.44778 2.5 4C2.5 4.55222 2.94781 4.99989 3.5 5H10.5V4.75C10.5 3.7835 9.7165 3 8.75 3H3.5Z"
        fill={color}
      />
    </svg>
  );
};

WalletFilled16.category = 'Money & Shopping';

export default WalletFilled16;
