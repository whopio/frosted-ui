import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M23.999 16.4993C23.999 18.9845 21.9844 20.9991 19.4992 20.9991H4.49982C2.01484 20.9989 0 18.9844 0 16.4993V9.7496H23.999V16.4993ZM5.40017 14.4994C4.84791 14.4994 4.40021 14.9471 4.40021 15.4994C4.40021 16.0516 4.84791 16.4993 5.40017 16.4993H11.4497C12.0018 16.4991 12.4497 16.0515 12.4497 15.4994C12.4497 14.9473 12.0018 14.4997 11.4497 14.4994H5.40017ZM19.4992 2.99988C21.9844 2.99988 23.999 5.01451 23.999 7.49969V7.74968H0V7.49969C0 5.01466 2.01484 3.00011 4.49982 2.99988H19.4992Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CreditCardBoldFilled24.category = 'Money & Shopping';

export default CreditCardBoldFilled24;
