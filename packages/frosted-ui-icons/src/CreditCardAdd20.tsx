import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAdd20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardAdd20"
      {...props}
    >
      <path
        d="M15.75 12c.414 0 .75.336.75.75v1.75h1.75c.414 0 .75.336.75.75s-.336.75-.75.75H16.5v1.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V16h-1.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H15v-1.75c0-.414.336-.75.75-.75zm-.5-9C17.321 3 19 4.679 19 6.75v4c0 .414-.336.75-.75.75s-.75-.336-.75-.75V8.5h-15v4.75c0 1.243 1.007 2.25 2.25 2.25H10c.414 0 .75.336.75.75s-.336.75-.75.75H4.75C2.679 17 1 15.321 1 13.25v-6.5C1 4.679 2.679 3 4.75 3h10.5zM4.75 4.5C3.507 4.5 2.5 5.507 2.5 6.75V7h15v-.25c0-1.243-1.007-2.25-2.25-2.25H4.75z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAdd20.category = 'Money & Shopping';

export default CreditCardAdd20;
