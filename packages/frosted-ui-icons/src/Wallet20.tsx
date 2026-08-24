import * as React from 'react';
import { IconProps } from './types';

export const Wallet20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Wallet20"
      {...props}
    >
      <path
        d="M11.25 2c1.987 0 3.613 1.546 3.741 3.5h.259C17.321 5.5 19 7.179 19 9.25v5c0 2.071-1.679 3.75-3.75 3.75H4.75C2.679 18 1 16.321 1 14.25v-10c0-.105.022-.205.06-.296C1.31 2.836 2.308 2 3.5 2h7.75zM2.5 14.25c0 1.243 1.007 2.25 2.25 2.25h10.5c1.243 0 2.25-1.007 2.25-2.25v-5C17.5 8.007 16.493 7 15.25 7H3.5c-.356 0-.694-.076-1-.21v7.46zM14 10.5c.69 0 1.25.56 1.25 1.25S14.69 13 14 13s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm-10.5-7c-.552 0-1 .448-1 1s.448 1 1 1h9.985c-.124-1.125-1.077-2-2.235-2H3.5z"
        fill={color}
      />
    </svg>
  );
};

Wallet20.category = 'Money & Shopping';

export default Wallet20;
