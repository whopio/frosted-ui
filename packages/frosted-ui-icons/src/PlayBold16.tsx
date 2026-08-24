import * as React from 'react';
import { IconProps } from './types';

export const PlayBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayBold16"
      {...props}
    >
      <path
        d="M3 12.336V3.664C3 2.4 4.393 1.636 5.459 2.314l6.818 4.336c.989.629.989 2.071 0 2.7L5.46 13.686C4.393 14.364 3 13.6 3 12.336z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold16.category = 'Sound & Music';

export default PlayBold16;
