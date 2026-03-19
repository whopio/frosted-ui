import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlankFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M24 16.25C24 19.4256 21.4256 22 18.25 22H5.75C2.57436 22 0 19.4256 0 16.25V9.5H24V16.25ZM18.25 2C21.4256 2 24 4.57436 24 7.75V8H0V7.75C2.57711e-07 4.57436 2.57436 2 5.75 2H18.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlankFilled24.category = 'Money & Shopping';

export default CreditCardBlankFilled24;
