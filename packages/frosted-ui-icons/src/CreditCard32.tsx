import * as React from 'react';
import { IconProps } from './types';

export const CreditCard32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M25.25 4.5C28.4256 4.5 31 7.07436 31 10.25V21.75C31 24.9256 28.4256 27.5 25.25 27.5H6.75C3.67361 27.5 1.16183 25.084 1.00781 22.0459L1 21.75V10.25C1 7.07436 3.57436 4.5 6.75 4.5H25.25ZM2.5 21.75L2.50586 21.9688C2.61972 24.2143 4.47616 26 6.75 26H25.25C27.5972 26 29.5 24.0972 29.5 21.75V12.5H2.5V21.75ZM14.25 20.5C14.6642 20.5 15 20.8358 15 21.25C15 21.6642 14.6642 22 14.25 22H6.75C6.33579 22 6 21.6642 6 21.25C6 20.8358 6.33579 20.5 6.75 20.5H14.25ZM6.75 6C4.40279 6 2.5 7.90279 2.5 10.25V11H29.5V10.25C29.5 7.90279 27.5972 6 25.25 6H6.75Z"
        fill={color}
      />
    </svg>
  );
};

CreditCard32.category = 'Money & Shopping';

export default CreditCard32;
