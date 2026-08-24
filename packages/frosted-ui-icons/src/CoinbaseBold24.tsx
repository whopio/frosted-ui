import * as React from 'react';
import { IconProps } from './types';

export const CoinbaseBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CoinbaseBold24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm0 2c-5.247 0-9.5 4.253-9.5 9.5s4.253 9.5 9.5 9.5 9.5-4.253 9.5-9.5-4.253-9.5-9.5-9.5zm.065 2c3.222 0 5.978 1.998 7.068 4.818.199.515-.057 1.094-.572 1.293-.516.2-1.094-.057-1.293-.572-.799-2.066-2.825-3.539-5.203-3.539C8.982 6.5 6.5 8.972 6.5 12s2.482 5.5 5.565 5.5c2.378 0 4.404-1.473 5.203-3.54.199-.514.777-.77 1.293-.571.515.199.77.778.572 1.293-1.09 2.82-3.846 4.818-7.068 4.818C7.897 19.5 4.5 16.151 4.5 12c0-4.152 3.397-7.5 7.565-7.5z"
        fill={color}
      />
    </svg>
  );
};

CoinbaseBold24.category = 'Interface General';

export default CoinbaseBold24;
