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
        d="M19.749 3C22.0962 3 23.999 4.90279 23.999 7.25V16.75C23.999 19.0972 22.0962 21 19.749 21H4.25C1.90279 21 0 19.0972 0 16.75V7.25C0 4.90279 1.90279 3 4.25 3H19.749ZM1.5 9V16.75C1.5 18.2688 2.73122 19.5 4.25 19.5H19.749C21.2678 19.5 22.499 18.2688 22.499 16.75V9H1.5ZM4.25 4.5C2.73122 4.5 1.5 5.73122 1.5 7.25V7.5H22.499V7.25C22.499 5.73122 21.2678 4.5 19.749 4.5H4.25Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlank24.category = 'Money & Shopping';

export default CreditCardBlank24;
