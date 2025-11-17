import * as React from 'react';
import { IconProps } from './types';

export const PlayCircle12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 0.5625C9.00305 0.5625 11.4375 2.99695 11.4375 6C11.4375 9.00305 9.00305 11.4375 6 11.4375C2.99695 11.4375 0.5625 9.00305 0.5625 6C0.5625 2.99695 2.99695 0.5625 6 0.5625ZM6 2.0625C3.82538 2.0625 2.0625 3.82538 2.0625 6C2.0625 8.17462 3.82538 9.9375 6 9.9375C8.17462 9.9375 9.9375 8.17462 9.9375 6C9.9375 3.82538 8.17462 2.0625 6 2.0625Z"
        fill={color}
      />
      <path
        d="M4.99987 7.53288L4.99983 4.46713C4.99983 4.26746 5.22236 4.14836 5.3885 4.25912L7.68786 5.79199C7.83629 5.89094 7.83629 6.10906 7.68786 6.20802L5.38855 7.74089C5.22241 7.85165 4.99987 7.73255 4.99987 7.53288Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PlayCircle12;
