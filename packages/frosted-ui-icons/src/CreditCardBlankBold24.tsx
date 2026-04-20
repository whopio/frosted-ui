import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M19.499 3.5C21.9841 3.50023 23.999 5.51486 23.999 8V16C23.999 18.4851 21.9841 20.4998 19.499 20.5H4.5C2.01472 20.5 0 18.4853 0 16V8C1.28862e-07 5.51472 2.01472 3.5 4.5 3.5H19.499ZM2 9.75V16C2 17.3807 3.11929 18.5 4.5 18.5H19.499C20.8795 18.4998 21.999 17.3806 21.999 16V9.75H2ZM4.5 5.5C3.20369 5.5 2.13816 6.4867 2.0127 7.75H21.9854C21.8599 6.48686 20.7951 5.50022 19.499 5.5H4.5Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBold24.category = 'Money & Shopping';

export default CreditCardBlankBold24;
