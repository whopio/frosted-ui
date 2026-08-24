import * as React from 'react';
import { IconProps } from './types';

export const CreditCardBlank20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardBlank20"
      {...props}
    >
      <path
        d="M16.249 2.5c2.071 0 3.75 1.679 3.75 3.75v7.5c0 2.071-1.679 3.75-3.75 3.75H3.75C1.679 17.5 0 15.821 0 13.75v-7.5C0 4.179 1.679 2.5 3.75 2.5h12.499zM1.5 8.5v5.25C1.5 14.993 2.507 16 3.75 16h12.499c1.243 0 2.25-1.007 2.25-2.25V8.5H1.5zM3.75 4C2.507 4 1.5 5.007 1.5 6.25V7h16.999v-.75c0-1.243-1.007-2.25-2.25-2.25H3.75z"
        fill={color}
      />
    </svg>
  );
};

CreditCardBlank20.category = 'Money & Shopping';

export default CreditCardBlank20;
