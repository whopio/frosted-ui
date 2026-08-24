import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeft24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleLeft24"
      {...props}
    >
      <path
        d="M15.249 22.998c4.28 0 7.749-3.47 7.749-7.75 0-4.279-3.47-7.748-7.749-7.748H3.537l5.224-5.22c.292-.293.292-.768 0-1.06-.293-.293-.768-.293-1.06 0L1.22 7.694c-.14.14-.22.332-.22.53 0 .2.08.39.22.53l6.48 6.482c.293.293.768.293 1.06 0 .293-.293.293-.768 0-1.06L3.587 9h11.663c3.451 0 6.249 2.798 6.249 6.249 0 3.451-2.798 6.249-6.249 6.249h-2.083c-.414 0-.75.336-.75.75s.336.75.75.75h2.083z"
        fill={color}
      />
    </svg>
  );
};

RoundedArrowAngleLeft24.category = 'Arrows';

export default RoundedArrowAngleLeft24;
