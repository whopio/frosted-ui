import * as React from 'react';
import { IconProps } from './types';

export const CoinFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinFilled32"
      {...props}
    >
      <path
        d="M11.5 1C17.299 1 22 7.716 22 16c0 8.284-4.701 15-10.5 15S1 24.284 1 16C1 7.716 5.701 1 11.5 1zm18.6 21.5c-.436 1.47-1.021 2.81-1.743 3.972C26.664 29.198 24.18 31 21.153 31h-4.561v-.035c1.368-.875 2.574-2.08 3.567-3.498 1.006-1.437 1.814-3.12 2.386-4.967H30.1zm.383-11.5c.339 1.57.518 3.253.518 5 0 1.747-.18 3.43-.518 5h-7.536c.363-1.583.559-3.264.559-5 0-1.736-.196-3.417-.559-5h7.536zm-9.33-10c3.027 0 5.511 1.802 7.204 4.528C29.08 6.69 29.664 8.031 30.1 9.5h-7.555c-.572-1.848-1.38-3.53-2.386-4.967-.993-1.419-2.198-2.624-3.567-3.499V1h4.561z"
        fill={color}
      />
    </svg>
  );
};

CoinFilled32.category = 'Money & Shopping';

export default CoinFilled32;
