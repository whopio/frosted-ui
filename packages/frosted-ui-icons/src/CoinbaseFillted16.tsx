import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseFillted16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinbaseFillted16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm.086 3C5.569 3.5 3.5 5.499 3.5 8s2.07 4.5 4.586 4.5c1.872 0 3.49-1.103 4.202-2.694.169-.378 0-.822-.379-.99-.378-.17-.821 0-.99.378C10.446 10.252 9.359 11 8.086 11 6.366 11 5 9.64 5 8s1.365-3 3.086-3c1.274 0 2.36.748 2.833 1.806.169.378.612.548.99.379.378-.17.548-.613.38-.99C11.576 4.602 9.957 3.5 8.085 3.5z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseFillted16.category = 'Interface General';

export default CoinbaseFillted16;
