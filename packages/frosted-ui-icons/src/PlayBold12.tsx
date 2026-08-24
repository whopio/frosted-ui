import * as React from 'react';
import { IconProps } from './types';

export const PlayBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayBold12"
      {...props}
    >
      <path
        d="M2 9.832V2.168c0-.902.99-1.453 1.757-.977l6.17 3.832c.724.45.724 1.504 0 1.954l-6.17 3.832C2.99 11.285 2 10.734 2 9.832z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold12.category = 'Sound & Music';

export default PlayBold12;
