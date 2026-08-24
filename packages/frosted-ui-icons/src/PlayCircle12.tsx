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
      data-fui-icon="PlayCircle12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 1.5C3.515 1.5 1.5 3.515 1.5 6s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5S8.485 1.5 6 1.5zM4.25 4.467c0-.749.782-1.214 1.428-.904l.127.072 2.299 1.533c.593.396.594 1.268 0 1.664l-2.3 1.533c-.664.443-1.554-.033-1.554-.832V4.467zm1.5 2.132L6.647 6l-.897-.6V6.6z"
        fill={color}
      />
    </svg>
  );
};

PlayCircle12.category = 'Sound & Music';

export default PlayCircle12;
