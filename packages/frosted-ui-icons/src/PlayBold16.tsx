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
        d="M3 3.664v8.672c0 1.263 1.393 2.028 2.459 1.35l6.818-4.336c.989-.629.989-2.071 0-2.7L5.46 2.314C4.393 1.636 3 2.4 3 3.664z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold16.category = 'Sound & Music';

export default PlayBold16;
