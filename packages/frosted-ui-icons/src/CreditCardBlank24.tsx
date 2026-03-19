import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlank24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M18.25 2C21.4256 2 24 4.57436 24 7.75V16.25C24 19.4256 21.4256 22 18.25 22H5.75C2.57436 22 0 19.4256 0 16.25V7.75C2.57711e-07 4.57436 2.57436 2 5.75 2H18.25ZM1.5 9.5V16.25C1.5 18.5972 3.40279 20.5 5.75 20.5H18.25C20.5972 20.5 22.5 18.5972 22.5 16.25V9.5H1.5ZM5.75 3.5C3.40279 3.5 1.5 5.40279 1.5 7.75V8H22.5V7.75C22.5 5.40279 20.5972 3.5 18.25 3.5H5.75Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlank24.category = 'Money & Shopping';

export default CreditCardBlank24;
