import * as React from 'react';
import { IconProps } from './types';

export const JourneyFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="JourneyFilled20"
      {...props}
    >
      <path
        d="M16 1.001c1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.398 0-2.57-.957-2.902-2.251H4.75C3.507 4.75 2.5 5.757 2.5 7s1.007 2.25 2.25 2.251h10.501C17.321 9.251 19 10.93 19 13c0 2.07-1.679 3.75-3.749 3.75H6.902C6.57 18.044 5.398 19 4 19c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.398 0 2.569.957 2.902 2.25h8.349c1.242 0 2.249-1.008 2.249-2.25s-1.007-2.249-2.249-2.249H4.75C2.679 10.751 1 9.071 1 7c0-2.071 1.679-3.75 3.75-3.75h8.349c.333-1.293 1.504-2.249 2.901-2.249z"
        fill={color}
      />
    </svg>
  );
};

JourneyFilled20.category = 'Interface General';

export default JourneyFilled20;
