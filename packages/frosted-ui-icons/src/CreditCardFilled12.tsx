import * as React from 'react';
import { IconProps } from './types';

export const CreditCardFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12 8.25C12 9.76878 10.7688 11 9.25 11H2.75C1.23122 11 4.0266e-09 9.76878 0 8.25V5.5H12V8.25ZM2.75 7.5C2.33579 7.5 2 7.83579 2 8.25C2 8.66421 2.33579 9 2.75 9H4.25C4.66421 9 5 8.66421 5 8.25C5 7.83579 4.66421 7.5 4.25 7.5H2.75ZM9.25 1C10.7688 1 12 2.23122 12 3.75V4H0V3.75C0 2.23122 1.23122 1 2.75 1H9.25Z"
        fill={color}
      />
    </svg>
  );
};

export default CreditCardFilled12;
