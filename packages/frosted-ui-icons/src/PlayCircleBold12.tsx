import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayCircleBold12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2C3.79 2 2 3.79 2 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM4 4.467c0-.936.978-1.517 1.784-1.13l.16.09L8.241 4.96c.742.495.743 1.585.001 2.08l-2.3 1.533C5.113 9.127 4 8.531 4 7.533V4.467zM6 6.13L6.196 6 6 5.868v.263z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleBold12.category = 'Sound & Music';

export default PlayCircleBold12;
