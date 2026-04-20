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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5 19.6188V4.36106C5 2.52136 7.05269 1.42621 8.58076 2.45066L19.9124 10.0476C21.2682 10.9565 21.272 12.9492 19.9198 13.8634L8.58817 21.5242C7.06073 22.5568 5 21.4625 5 19.6188Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

PlayBold24.category = 'Sound & Music';

export default PlayBold24;
