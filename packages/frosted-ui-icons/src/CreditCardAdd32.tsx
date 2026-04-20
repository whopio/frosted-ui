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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M25.75 19.5C26.1642 19.5 26.5 19.8358 26.5 20.25V24H30.25C30.6642 24 31 24.3358 31 24.75C31 25.1642 30.6642 25.5 30.25 25.5H26.5V29.25C26.5 29.6642 26.1642 30 25.75 30C25.3358 30 25 29.6642 25 29.25V25.5H21.25C20.8358 25.5 20.5 25.1642 20.5 24.75C20.5 24.3358 20.8358 24 21.25 24H25V20.25C25 19.8358 25.3358 19.5 25.75 19.5ZM26 4C28.7614 4 31 6.23858 31 9V19.75C31 20.1642 30.6642 20.5 30.25 20.5C29.8358 20.5 29.5 20.1642 29.5 19.75V12H2.5V22C2.5 23.933 4.067 25.5 6 25.5H17C17.4142 25.5 17.75 25.8358 17.75 26.25C17.75 26.6642 17.4142 27 17 27H6C3.23858 27 1 24.7614 1 22V9C1 6.23858 3.23858 4 6 4H26ZM6 5.5C4.067 5.5 2.5 7.067 2.5 9V10.5H29.5V9C29.5 7.067 27.933 5.5 26 5.5H6Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAdd32.category = 'Money & Shopping';

export default CreditCardAdd32;
