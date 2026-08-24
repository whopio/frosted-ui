import * as React from 'react';
import { IconProps } from './types';

export const PlayBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayBoldFilled32"
      {...props}
    >
      <path
        d="M5.75 5.063c0-3.236 3.643-5.133 6.294-3.277l15.62 10.938c2.274 1.592 2.274 4.96 0 6.553l-15.62 10.937c-2.651 1.856-6.294-.041-6.294-3.277V5.063z"
        fill={color}
      />
    </svg>
  );
};

PlayBoldFilled32.category = 'Sound & Music';

export default PlayBoldFilled32;
