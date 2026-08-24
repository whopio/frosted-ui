import * as React from 'react';
import { IconProps } from './types';

export const BitcoinFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BitcoinFilled32"
      {...props}
    >
      <path
        d="M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm2.75 5.25c-.414 0-.75.336-.75.75v1.75h-4V7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v1.75H9.75c-.414 0-.75.336-.75.75s.336.75.75.75h1.252l.036 11.5H9.75c-.414 0-.75.336-.75.75s.336.75.75.75h2.75V25c0 .414.336.75.75.75s.75-.336.75-.75v-1.75h4V25c0 .414.336.75.75.75s.75-.336.75-.75v-1.782c1.973-.246 3.5-1.928 3.5-3.968 0-1.34-.66-2.524-1.67-3.25 1.01-.726 1.67-1.91 1.67-3.25 0-2.04-1.527-3.723-3.5-3.969V7c0-.414-.336-.75-.75-.75zm.25 10.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5h-6.463l-.016-5H19zm0-6.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5h-6.482l-.016-5H19z"
        fill={color}
      />
    </svg>
  );
};

BitcoinFilled32.category = 'Money & Shopping';

export default BitcoinFilled32;
