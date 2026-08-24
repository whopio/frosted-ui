import * as React from 'react';
import { IconProps } from './types';

export const PlayCircleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlayCircleFilled12"
      {...props}
    >
      <path
        d="M6 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm-.536 3.418c-.549-.264-1.214.132-1.214.769v3.626c0 .68.757 1.084 1.321.708l2.72-1.814c.505-.336.505-1.078 0-1.414l-2.72-1.814-.107-.061z"
        fill={color}
      />
    </svg>
  );
};

PlayCircleFilled12.category = 'Sound & Music';

export default PlayCircleFilled12;
