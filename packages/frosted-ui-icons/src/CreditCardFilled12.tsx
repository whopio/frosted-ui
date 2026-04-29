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
        d="M12 7.75C12 9.26878 10.7688 10.5 9.25 10.5H2.75C1.23122 10.5 0 9.26878 0 7.75V5.5H12V7.75ZM3.25 7C2.83579 7 2.5 7.33579 2.5 7.75C2.5 8.16421 2.83579 8.5 3.25 8.5H4.75C5.16421 8.5 5.5 8.16421 5.5 7.75C5.5 7.33579 5.16421 7 4.75 7H3.25ZM9.25 1.5C10.6845 1.5 11.8609 2.59844 11.9873 4H0.0126953C0.139065 2.59844 1.31553 1.5 2.75 1.5H9.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardFilled12.category = 'Money & Shopping';

export default CreditCardFilled12;
