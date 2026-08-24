import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAdd32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardAdd32"
      {...props}
    >
      <path
        d="M25.75 19.5c.414 0 .75.336.75.75V24h3.75c.414 0 .75.336.75.75s-.336.75-.75.75H26.5v3.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V25.5h-3.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75H25v-3.75c0-.414.336-.75.75-.75zM26 4c2.761 0 5 2.239 5 5v10.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75V12h-27v10c0 1.933 1.567 3.5 3.5 3.5h11c.414 0 .75.336.75.75s-.336.75-.75.75H6c-2.761 0-5-2.239-5-5V9c0-2.761 2.239-5 5-5h20zM6 5.5C4.067 5.5 2.5 7.067 2.5 9v1.5h27V9c0-1.933-1.567-3.5-3.5-3.5H6z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAdd32.category = 'Money & Shopping';

export default CreditCardAdd32;
