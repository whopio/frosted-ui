import * as React from 'react';
import { IconProps } from './types';

export const CreditCard16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.75 1.5C14.5449 1.5 16 2.95507 16 4.75V11.25C16 13.0449 14.5449 14.5 12.75 14.5H3.25C1.45507 14.5 4.83192e-08 13.0449 0 11.25V4.75C4.832e-08 2.95507 1.45507 1.5 3.25 1.5H12.75ZM1.5 11.25C1.5 12.2165 2.2835 13 3.25 13H12.75C13.7165 13 14.5 12.2165 14.5 11.25V7H1.5V11.25ZM6.25 10C6.66421 10 7 10.3358 7 10.75C7 11.1642 6.66421 11.5 6.25 11.5H3.75C3.33579 11.5 3 11.1642 3 10.75C3 10.3358 3.33579 10 3.75 10H6.25ZM3.25 3C2.2835 3 1.5 3.7835 1.5 4.75V5.5H14.5V4.75C14.5 3.7835 13.7165 3 12.75 3H3.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCard16.category = 'Money & Shopping';

export default CreditCard16;
