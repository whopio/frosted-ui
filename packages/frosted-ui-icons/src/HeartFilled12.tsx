import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HeartFilled12"
      {...props}
    >
      <path
        d="M8.625 1C10.464 1 12 2.438 12 4.45c0 2.132-1.21 3.752-2.438 4.85-1.232 1.102-2.577 1.764-3.07 1.988-.315.142-.669.142-.983 0-.494-.224-1.839-.886-3.072-1.988C1.21 8.202 0 6.582 0 4.45 0 2.438 1.536 1 3.375 1c1.197 0 2.036.566 2.556 1.104L6 2.181c.023-.025.045-.051.07-.077C6.588 1.566 7.427 1 8.624 1z"
        fill={color}
      />
    </svg>
  );
};

HeartFilled12.category = 'Interface General';

export default HeartFilled12;
