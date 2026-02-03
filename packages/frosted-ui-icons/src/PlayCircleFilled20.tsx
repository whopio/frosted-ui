import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 8.05322e-08 15.5228 0 10C0 4.47715 4.47715 6.44258e-08 10 0ZM9.58203 6.15332C8.58521 5.48878 7.25002 6.20334 7.25 7.40137V12.5986C7.25002 13.7967 8.58521 14.5112 9.58203 13.8467L13.4795 11.248C14.3701 10.6543 14.3701 9.34569 13.4795 8.75195L9.58203 6.15332Z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleFilled20.category = 'Sound & Music';

export default PlayCircleFilled20;
