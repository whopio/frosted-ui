import * as React from 'react';
import { IconProps } from './types';

export const Wallet32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Wallet32"
      {...props}
    >
      <path
        d="M18.75 3.5c2.9 0 5.25 2.35 5.25 5.25V9h1.75c2.9 0 5.25 2.35 5.25 5.25v9c0 2.9-2.35 5.25-5.25 5.25H6.25C3.35 28.5 1 26.15 1 23.25V7c0-1.933 1.567-3.5 3.5-3.5h14.25zM2.5 23.25C2.5 25.321 4.179 27 6.25 27h19.5c2.071 0 3.75-1.679 3.75-3.75v-9c0-2.071-1.679-3.75-3.75-3.75H4.5c-.744 0-1.433-.233-2-.629V23.25zm21-6c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zM4.5 5c-1.105 0-2 .895-2 2s.895 2 2 2h18v-.25C22.5 6.679 20.821 5 18.75 5H4.5z"
        fill={color}
      />
    </svg>
  );
};

Wallet32.category = 'Money & Shopping';

export default Wallet32;
