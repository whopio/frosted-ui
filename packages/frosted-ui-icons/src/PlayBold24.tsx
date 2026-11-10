import * as React from 'react';
import { IconProps } from './types';

export const PlayBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayBold24"
      {...props}
    >
      <path
        d="M5 4.361V19.62c0 1.843 2.06 2.938 3.588 1.905l11.332-7.66c1.352-.915 1.348-2.908-.008-3.816L8.581 2.45C7.053 1.426 5 2.52 5 4.36z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold24.category = 'Sound & Music';

export default PlayBold24;
