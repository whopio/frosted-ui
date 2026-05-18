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
        d="M19.499 3C21.9843 3.00006 23.999 5.01475 23.999 7.5V16.5C23.999 18.9852 21.9843 20.9999 19.499 21H4.5C2.01472 21 0 18.9853 0 16.5V7.5C0 5.01472 2.01472 3 4.5 3H19.499ZM2 10V16.5C2 17.8807 3.11929 19 4.5 19H19.499C20.8797 18.9999 21.999 17.8807 21.999 16.5V10H2ZM4.5 5C3.11929 5 2 6.11929 2 7.5V8H21.999V7.5C21.999 6.11933 20.8797 5.00006 19.499 5H4.5Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankBold24.category = 'Money & Shopping';

export default CreditCardBlankBold24;
