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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2 9.832V2.16797C2 1.26619 2.99065 0.715278 3.75672 1.19104L9.92696 5.02305C10.6513 5.47292 10.6513 6.52703 9.92697 6.97691L3.75672 10.8089C2.99065 11.2847 2 10.7338 2 9.832Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold12.category = 'Sound & Music';

export default PlayBold12;
