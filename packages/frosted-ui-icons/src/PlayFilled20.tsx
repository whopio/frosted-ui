import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayFilled20"
      {...props}
    >
      <path
        d="M3 3.823C3 1.59 5.489.255 7.35 1.491L16.81 7.78c1.68 1.116 1.664 3.588-.029 4.683l-9.46 6.121C5.457 19.788 3 18.451 3 16.233V3.823z"
        fill={color}
      />
    </svg>
  );
};

PlayFilled20.category = 'Sound & Music';

export default PlayFilled20;
